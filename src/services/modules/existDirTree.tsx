// Importação de módulos externos
import * as SYS from 'fs'                                                       // Importação de módulo externo fs - File System
import * as URL from 'url'                                                      // Importação de módulo externo url
import * as RUN from 'path'                                                     // Importação de módulo externo path

export abstract class DirTree {                                                 // Criação de classe abstrata
  private readonly _SavePath: string                                            // Tipagem de variável; o método "readonly" indica somente leitura
  private readonly _HostName: string                                            // Tipagem de variável; o método "readonly" indica somente leitura
  private _SiteName: string
  private _PathName: string

  constructor(_SavePath: string, _HostName: string,
              _SiteName: string, _PathName: string){                            // Método construtor  

    this._HostName = _HostName                       
    this._SavePath = _SavePath                                                  // A variável declarada recebe o valor de _HostName
 
    this._SiteName = String(URL.parse(this._HostName, true).host);              // default name - Seleciona nome do Host por link fornecido
    this._PathName = '/'+RUN.basename(this._HostName,                           // default path
                         RUN.extname(this._HostName));
 
  }

  createDir = (_SavePath: string): void => {  

  if (!SYS.existsSync(this._SavePath)) {                                      // Verifica caminho de "imagem" de forma Síncrona                                       
    try {
      SYS.mkdirSync(this._SavePath)                                           // Caso o caminho não exista, este comando irá criar o diretório
      console.log(' Exito na criação de: '+this._SavePath)                    // Emissão de log para criação de diretório bem sucedida
    }
    catch(error: any) {                                                       // Em caso de falha na criação de diretório esa função irá capturar o erro
      console.log(' Falha na criação de: '+this._SavePath)                    // Emissão de log informando que a criação do diretório não foi bem sucedida
      throw error.message                                                     // Emissão de erro e encerramento da aplicação
    }
  }
  }

  existPath = (_SavePath: string, _HostName: string,                            // Verifica se o local onde os dados serão armazenados "existe" - não modifica.
               _SiteName: string, _PathName: string): boolean | undefined => {  

    if (!SYS.existsSync(this._SavePath + this._SiteName + this._PathName)) {
      console.log(' Criando arvore de diretórios...')

      this.createDir(this._SavePath)

      this.createDir(this._SavePath + this._SiteName)

      this.createDir(this._SavePath + this._SiteName + this._PathName)

      console.log(' Ainda não há arquivos no diretório.')
      return false;

    } 
    else {
      console.log(' Localizada arvore de diretórios: ' + this._SavePath + this._SiteName + this._PathName)

      try {
        var cont = SYS.readdirSync(this._SavePath + this._SiteName + this._PathName)
      }
      catch (error: any) {
        console.log(' Falha na leitura de: ' + this._SavePath + this._SiteName + this._PathName)
        throw error.message                                                           // Emissão de erro
      }

      if (cont.length === 0) {
        console.log(' Não foram encontrados arquivos no diretório.')
        return false;

      } else if (cont.length === 1) {
        console.log(' Encontrado somente um arquivo no diretório.')
        return true;

      } else if (cont.length > 1) {
        console.log(' Encontrados ' + cont.length + ' arquivos no diretório.')
        return true;
      }
    }
  }
}