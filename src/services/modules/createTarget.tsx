//            Esse código será encarregado de conceber as estruturas básicas
//            para manipulação do fluxo de dados de cada alvo monitorado.

export abstract class NewTarget {
  private _Address: string  = `DefaultHost`                                     // Endereço do alvo
  private _TrgName: string  = `DefaultName`                                     // Nome do alvo - Se não fora nomeado será usado: "DefaultName YYYY-MM-DD hh:mm:ss"
  private _ScrDual: [number, number] = [1920,1080]                              // Tupla de resolução: largura x altura - Pixels.
  private _Latency: number  = 5                                                 // Latência de verificação em minutos
  private _Logical: boolean = true                                              // Full Page

  constructor(_Address: string, _TrgName: string, _Latency: number,
              _Logical: boolean,_ScrDual: [number, number]){                    // Método que cria alvos para monitoramento

    this._Address = _Address
    this._TrgName = _TrgName
    this._ScrDual = _ScrDual
    this._Latency = _Latency
    this._Logical = _Logical
  }

  showLogical = (): boolean => {                                                // Método que exibe status de Full Page
    return this._Logical
  } 

  showLatency = (): number => {                                                 // Método que exibe latência de verificação
    return this._Latency
  }

  showScrDual = (): [number, number] => {                                       // Método que exibe resolução: largura x altura - Pixels.
    return [this._ScrDual[0],this._ScrDual[1]]
  }

  showTrgName = (): string => {                                                 // Método que exibe nome do alvo
    return this._TrgName
  }

  showAddress = (): string => {                                                 // Método que exibe endereço do alvo
    return this._Address
  }

  changeAddress = (_Address: string): void => {                                 // Método que altera o endereço do alvo
    this._Address = _Address
    console.log(`Endereço alterado para: ${this._Address}`)
  }

  changeTrgName = (_TrgName: string): void => {                                 // Método que altera o nome do alvo
    this._TrgName = _TrgName
    console.log(`Nome do alvo alterado para: ${this._TrgName}`)
  }

  changeScrDual = (_ScrDual: [number, number] ): void => {                      // Método que altera a resolução: largura x altura - Pixels.
    this._ScrDual = [_ScrDual[0], _ScrDual[1]]
    console.log(`Dimensão alterada para: ${this._ScrDual[0]}px
                 - ${this._ScrDual[1]}px`)
  }

  changeLatency = (_Latency: number): void => {                                 // Método que altera a latência de verificação
    this._Latency = _Latency
    console.log(`A latência de verificação foi alterada para:
                 ${this._Latency} minutos`)
  }

  changeLogical = (): void => {                                                 // Método que altera FullPage
    if( this._Logical == true ) {
      this._Logical = false
      console.log(`O alvo ${this._TrgName} cancelou a opção FullPage!`)
    }

    if( this._Logical == false ) {
      this._Logical = true
      console.log(`O alvo ${this._TrgName} selecionou  a opção FullPage!`) 
    }
  }
}