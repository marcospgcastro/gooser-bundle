// Importação de módulos externos
import * as SYS from 'fs'                                                       // Importação de módulo externo fs - File System
import * as URL from 'url'                                                      // Importação de módulo externo url
import * as RUN from 'path'                                                     // Importação de módulo externo path
import * as PRO from 'process'                                                  // Importação de módulo externo process

export abstract class DirTree {                                                 // Criação de classe abstrata
  private readonly _SavePath: string                                            // Tipagem de variável; o método "readonly" indica somente leitura
  private readonly _HostName: string                                            // Tipagem de variável; o método "readonly" indica somente leitura
  private _SiteName: string
  private _PathName: string

  constructor(_SavePath: string, _HostName: string, _TrgName: string,
              _SiteName: string, _PathName: string){                            // Método construtor  

    this._HostName = _HostName                       
    this._SavePath = _SavePath                                                  // A variável declarada recebe o valor de _HostName
 
    this._SiteName = String(URL.parse(_HostName, true).host);                            // default name - Seleciona nome do Host por link fornecido
    this._PathName = '/'+RUN.basename(_HostName,                                 // default path
                         RUN.extname(_HostName));
 
  }

  existPath = (_SavePath: string, _HostName: string, _TrgName: string,
               _SiteName: string, _PathName: string): void => {  

  if (!SYS.existsSync(_SavePath+_SiteName+_PathName)) { 
    console.log(' Criando arvore de diretórios...')

    if (!SYS.existsSync(_SavePath)) {                                         // Verifica caminho de "imagem" de forma Síncrona                                       
        console.log(' Não foi localizado o caminho: '+_SavePath,
        ' verifique seu diretório de imagens!')
        // console.error(' Erro: '+_SavePath+' não localizado | '+err)                                                     // Emissão de erro
        PRO.exit(1)
    }
    if (!SYS.existsSync(_SavePath+_SiteName)) {                                // Verifica caminho de "imagem" de forma Síncrona                                       
      SYS.mkdirSync(_SavePath+_SiteName, function(err){                        // Cria diretório em caso de ausência
          console.log(' Falha na criação de: '+_SavePath+_SiteName)
          console.error(' Erro: criação de /'+_SiteName+': '+err)                                                     // Emissão de erro
          PRO.exit(1)
       })
       console.log(' Criado: '+_SavePath+_SiteName)
    }
    if (!SYS.existsSync(_SavePath+_SiteName+_PathName)) {                       // Verifica caminho de "imagem" de forma Síncrona                                       
      SYS.mkdirSync(_SavePath+_SiteName+_PathName, function(err){               // Cria diretório em caso de ausência
          console.log(' Falha na criação de: '+_SavePath+_SiteName+_PathName)
          console.error(' Erro: criação de /'+_PathName+': '+err)                                                     // Emissão de erro
          PRO.exit(1)
      })
      console.log(' Criado: '+_SavePath+_SiteName+_PathName);
    }
    console.log(' Ainda não há arquivos no diretório.')
    return false;
  } else {
    console.log(' Localizada arvore de diretórios: '+_SavePath+_SiteName+_PathName)

    var cont = SYS.readdirSync(_SavePath+_SiteName+_PathName, function(err){
        console.log(' Falha na leitura de: '+_SavePath+_SiteName+_PathName)
        console.error(err)
        PRO.exit(1)                                                                 // Emissão de erro
    })

    if( cont.length == 0 ) {
      console.log(' Não foram encontrados arquivos no diretório.')
      return false;
    } else if(cont.length == 1){
      console.log(' Encontrado somente um arquivo no diretório.')
      return true;
    } else if(cont.length > 1){
      console.log(' Encontrados '+cont.length+' arquivos no diretório.')
      return true;
    }
  }
}
}