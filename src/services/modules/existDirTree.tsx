// Importação de módulos externos
import * as SYS from 'fs'                                                       // Importação de módulo externo fs - File System
import * as URL from 'url'                                                      // Importação de módulo externo url
import * as RUN from 'path'                                                     // Importação de módulo externo path

export abstract class DirTree {                                                 // Criação de classe abstrata
  private static readonly _SavePath: string                                            // Tipagem de variável; o método "readonly" indica somente leitura
  private static readonly _HostName: string                                            // Tipagem de variável; o método "readonly" indica somente leitura
  private static _SiteName: string
  private static _PathName: string

/*  
  constructor(_SavePath: string, _HostName: string,
              _SiteName: string, _PathName: string){                            // Método construtor  

    this._HostName = _HostName                       
    this._SavePath = _SavePath                                                  // A variável declarada recebe o valor de _HostName
    this._SiteName = String(URL.parse(this._HostName, true).host);              // default name - Seleciona nome do Host por link fornecido
    this._PathName = '/'+RUN.basename(this._HostName,                           // default path
                         RUN.extname(this._HostName));
  }
*/

  static createDir = (_SavePath: string): void => {  
    if (!SYS.existsSync(this._SavePath)) {                                      // Verifica caminho de "imagem" de forma Síncrona                                       
      try {
        SYS.mkdirSync(this._SavePath)                                           // Caso o caminho não exista, este comando irá criar o diretório
        console.log(' ↳ Exito na criação de: ~$ '+this._SavePath+'\n')          // Emissão de log para criação de diretório bem sucedida
      }
      catch (error: any) {                                                      // Em caso de falha na criação de diretório esa função irá capturar o erro
        console.log(' ↳ Falha na criação de: ~$ '+this._SavePath+'\n')          // Emissão de log informando que a criação do diretório não foi bem sucedida
        throw error.message                                                     // Emissão de erro e encerramento da aplicação
      }
    }
  }

  static existPath = (_SavePath: string, _HostName: string,                            // Verifica se o local onde os dados serão armazenados "existe" - não modifica.
               _SiteName: string, _PathName: string): boolean | undefined => {  

    this._SiteName = String(URL.parse(this._HostName, true).host);              // default name - Seleciona nome do Host por link fornecido
    this._PathName = '/'+RUN.basename(this._HostName,                           // default path
                         RUN.extname(this._HostName));

    if (!SYS.existsSync(this._SavePath+this._SiteName+this._PathName)) {        // Se não houver arvore de diretórios, então execute...
      console.log(' Criando arvore de diretórios...')
      this.createDir(this._SavePath)                                            // Cria diretório raiz do alvo, Host nomeado pelo usuário
      this.createDir(this._SavePath+this._SiteName)                             // Cria diretório de seleção, para multipolos alvos dentro do Host selecionado
      this.createDir(this._SavePath+this._SiteName+this._PathName)              // Cria diretório final, local de armazenamento dos arquivos PNG
      console.log(' ↳ Ainda não há arquivos no diretório!\n')                   // Emite aviso, como oas diretórios são recém criados não há arquivos disponíveis
      return false;
    }
    else {
      console.log(' Localizando arvore de diretórios: ~$ '                      // Na hipótese de ter localizado a arvore de diretórios, execute...
        +this._SavePath+this._SiteName+this._PathName+'\n')

      try {
        var cont = SYS.readdirSync(this._SavePath+this._SiteName+this._PathName)// Numeração de arquivos dentro do diretório
        if (cont.length === 0) {                                                // Caso o diretório esteja vazio
          console.log(' ↳ Não foram encontrados arquivos no diretório!\n')
          return false;
        }
        if (cont.length === 1) {                                                // Para arquivo unitário; alvo setado mas nenhuma modificação encontrada!
          console.log(' ↳ Encontrado somente um arquivo no diretório!\n')
          return true;
        }  
        if (cont.length > 1) {                                                  // Alvo setado e modificações diversas localizadas!
          console.log(' ↳ Encontrados '+cont.length+' arquivos no diretório!\n')
          return true;
        }
      }
      catch (error: any) {
        console.log(' ↳ Falha na leitura de: '                                  // Retorna "fala" para err ode leitura da arvore de diretórios ou arquivos que possam conter falas de leitura
          +this._SavePath+this._SiteName+this._PathName+'\n')
        throw error.message                                                     // Emissão de erro
      }
    }
  }
}