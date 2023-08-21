//            Esse código será encarregado de conceber as estruturas básicas
//            para manipulação do fluxo de dados de cada alvo monitorado.

export abstract class NewTarget {
  private _Address: string  = `DefaultHost`                                     // Endereço do alvo
  private _TrgName: string  = `DefaultName`                                     // Nome do alvo - Se não fora nomeado será usado: "DefaultName YYYY-MM-DD hh:mm:ss"
  private _ScreenH: number  = 1920                                              // Largura da imagem em pixels 
  private _ScreenL: number  = 1080                                              // Altura da imagem em pixels
  private _Latency: number  = 5                                                 // Latência de verificação em minutos
  private _Logical: boolean = true                                              //

  constructor(_Address: string, _TrgName: string, _ScreenH: number,
              _ScreenL: number, _Latency: number, _Logical: boolean){           // Método que cria alvos para monitoramento

    this._Address = _Address
    this._TrgName = _TrgName
    this._ScreenH = _ScreenH
    this._ScreenH = _ScreenL
    this._Latency = _Latency
    this._Logical = _Logical
  }

  changeAddress = (_Address: string): void => {                                 // Método que altera o endereço do alvo
    this._Address = _Address
    console.log(`Endereço alterado para: ${this._Address}`)
  }

  changeTrgName = (_TrgName: string): void => {                                 // Método que altera o nome do alvo
    this._TrgName = _TrgName
    console.log(`Nome do alvo alterado para: ${this._TrgName}`)
  }

  changeScrDual = (_ScreenH: number, _ScreenL: number ): void => {              // Método que altera a resolução do PrScr
    this._ScreenH = _ScreenH
    this._ScreenL = _ScreenL
    console.log(`Dimensão alterada para: ${this._ScreenH}px
                 x ${this._ScreenL}px`)
  }

  changeLatency = (_Latency: number): void => {                                 // Método que altera a latência de verificação
    this._Latency = _Latency
    console.log(`A latência de verificação foi alterada para:
                 ${this._Latency} minutos`)
  }

  changeLogical = (): void => {                                                 // Método que altera...
    if( this._Logical == true ) {
      this._Logical = false
      console.log(`O alvo ${this._TrgName} não ...!`)
    }

    if( this._Logical == false ) {
      this._Logical = true
      console.log(`O alvo ${this._TrgName} sim ...!`) 
    }
  }
}