// Importação de módulos externos
import * as PUP from 'puppeteer'                                                // Evoca biblioteca Puppeteer
import * as DAT from 'node-datetime'                                            // Importação de módulo externo fs - File System
import * as URL from 'url'                                                      // Importação de módulo externo url
import * as RUN from 'path'                                                     // Importação de módulo externo path

  export abstract class PrintScFile {
    private _StrPath: string
    private _FrmData: string
    private _Logical: boolean = true
    private _ScrDual: [number, number] = [1920,1080]                            // Tupla de resolução: largura x altura - Pixels.
    private _SnapName: string
    private _SiteName: string
    private _HostName: string
  
    constructor( _StrPath: string, _FrmData: string, _Logical: boolean, 
                 _SiteName: string, _SnapName: string, _HostName: string,
                 _ScrDual: [number, number] ){                                  // Método que cria alvos para monitoramento

      this._StrPath = _StrPath 
      this._FrmData = _FrmData 
      this._Logical = _Logical
      this._ScrDual = [                                                         // Variável do tipo tupla, usada para definir resolução de imagem capturada
      this._ScrDual[0],                                                         // => Largura em pixels
      this._ScrDual[1]                                                          // => Altura em pixels
    ]
      this._SnapName = _SnapName
      this._SiteName = _SiteName
      this._HostName = _HostName                                        
    } 

    ChangeFormData = (): void => {
      this._FrmData = DAT.create().format(' Y-m-d H:M:S')                       // Formatação de data FUNCTION
    }  

    ShowFormData = (): string => {
      return this._FrmData
    }

    ChangeSiteName = (_HostName: string): void => {
      this._SiteName = String(URL.parse(this._HostName, true).host)             // Seleciona nome do Host por link fornecido FUNCTION
    }

    ShowScrWidth = (): number => {                                            // Método que exibe resolução: largura - Pixels.
      return this._ScrDual[0]                                                 // Retorna o valor individual
    }

    ShowScrHeight = (): number => {                                           // Método que exibe resolução: altura - Pixels.
      return this._ScrDual[1]                                                 // Retorna o valor individual
    }

    ShowScrDual = (): [number, number] => {                                     // Método que exibe resolução: largura x altura - Pixels.
      return [this._ScrDual[0],this._ScrDual[1]]                                // Retorna o valor da tupla
    }

    ChangeScrDual = (_ScrDual: [number, number] ): void => {                    // Método que altera a resolução: largura x altura - Pixels.
      this._ScrDual = [_ScrDual[0], _ScrDual[1]]                                // Redundância na atribuição de valores
    }

    ShowSiteName = (): string => {
      return this._SiteName
    }
 
    ChangeLogical = (_Logical: boolean ): void => {
      this._Logical = _Logical
    }

    ShowLogical = (): boolean => {
      return this._Logical
    }

    ChangeStrPath = (_StrPath: string): void => {
      this._StrPath = _StrPath
    }

    ShowStrPath = (): string => {
      return this._StrPath
    }

    ChangeSnapName = (_HostName: string, _StrPath: string): void => {
      this.ChangeStrPath(_StrPath)
      this.ChangeSiteName(_HostName)
      this._SnapName = this.ShowStrPath()+this.ShowSiteName()
        +'/'+RUN.basename(this._HostName, RUN.extname(this._HostName))
        +'uGetcha '+this.ShowSiteName()+this.ShowFormData()+'.png'              // Define nome do arquivo JPEG gerado FUNCTION
    }

    ShowSnapName = (): string => {
      return this._SnapName
    }

    SnapShot = async ( _StrPath: string,_ScrDual: [number, number],
       _HostName: string, _Logical: boolean ): Promise<string> => {             // PrintFile --> SnapShot | SnapFile
    
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))     // Condição para uso de Timer
    const browser = await PUP.launch({                                          // Função que simula abertura de navegador
      headless: 'new',
      args: [ "--no-sandbox",
              "--disabled-setupid-sandbox" ],
    });
    const webpage = await browser.newPage()                                     // Função que simula abertura de nova aba
    this.ChangeFormData()

    try {
      await webpage.setViewport({ width:  this.ShowScrWidth(),                  // Largura
                                  height: this.ShowScrHeight() })               // Altura
                                  
      await webpage.goto( this._HostName,{ waitUntil: 'load', 
                                           timeout: 0 });                       // Inserir escolha de link do alvo para print                                   
      await delay(5000)                                                         // Timer para carregamento do conteúdo - janelas de "popup"
      await webpage.screenshot({ path: this.ShowSnapName(),
                                 fullPage: this.ShowLogical() })                // Inserir escolha de local para salvar os arquivos   
      await browser.close()                                                     // Encerra puppeteer
    } 
    catch (error) {                                                             // Emissão de erro
      console.log(' Falha ao obter imagem de '+this.ShowSiteName()+
                  ' reportado em '+this.ShowFormData())  
      throw error                                                                   
    } 
    return this.ShowSnapName(); 
  }
}