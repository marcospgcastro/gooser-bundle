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

    this._Address = _Address                                                    // Variável de endereçamento do alvo
    this._TrgName = _TrgName                                                    // Variável de definição de nomeação para o alvo
    this._Latency = _Latency                                                    // Variável de de definição de tempo de latência entre as verificação
    this._Logical = _Logical                                                    // Variável lógica para ajuste e controle de fluxo de dados
    this._ScrDual = [                                                           // Variável do tipo tupla, usada para definir resolução de imagem capturada
      this._ScrDual[0],                                                         // => Largura em pixels
      this._ScrDual[1]                                                          // => Altura em pixels
    ]                                          
  }

  showLogical = (): boolean => {                                                // Método que exibe status de Full Page
    return this._Logical                                                        // Retorna o valor da variável lógica de ajuste
  } 

  showLatency = (): number => {                                                 // Método que exibe latência de verificação
    return this._Latency                                                        // Retorna o valor da variável de latência 
  }

  showScrDual = (): [number, number] => {                                       // Método que exibe resolução: largura x altura - Pixels.
    return [this._ScrDual[0],this._ScrDual[1]]                                  // Retorna o valor da tupla
  }

  showTrgName = (): string => {                                                 // Método que exibe nome do alvo
    return this._TrgName                                                        // Retorna o valor da variável de nomeação
  }

  showAddress = (): string => {                                                 // Método que exibe endereço do alvo
    return this._Address                                                        // Retorna o valor da variável de endereço
  }

  changeAddress = (_Address: string): void => {                                 // Método que altera o endereço do alvo
    this._Address = _Address                                                    // Redundância na atribuição de valores
    console.log(`Endereço alterado para: ${this._Address}`)                     // Altera o valor da variável de endereço
  }

  changeTrgName = (_TrgName: string): void => {                                 // Método que altera o nome do alvo
    this._TrgName = _TrgName                                                    // Redundância na atribuição de valores
    console.log(`Nome do alvo alterado para: ${this._TrgName}`)                 // Retorna nome de diretório alterado
  }

  changeScrDual = (_ScrDual: [number, number] ): void => {                      // Método que altera a resolução: largura x altura - Pixels.
    this._ScrDual = [_ScrDual[0], _ScrDual[1]]                                  // Redundância na atribuição de valores
    console.log(`Dimensão alterada para: ${this._ScrDual[0]}px`+                // Retorna valores atualizados de resolução
                `- ${this._ScrDual[1]}px`)                                      // Sentença concatenada com sinal '+'
  }

  changeLatency = (_Latency: number): void => {                                 // Método que altera a latência de verificação
    this._Latency = _Latency                                                    // Redundância na atribuição de valores
    console.log(`A latência de verificação foi alterada para:`+                 // Mensagem de alteração de latência de verificação 
                `${this._Latency} minutos`)                                     // Sentença concatenada com sinal '+'
  }

  changeLogical = (): void => {                                                 // Método que altera FullPage
    if( this._Logical === true ) {                                              // Condição de teste para mudança de valor lógico da variável
      this._Logical = false                                                     // Atribuição de valores direta
      console.log(`O alvo ${this._TrgName} cancelou a opção FullPage!`)         // Mensagem de cancelamento 
    }

    if( this._Logical === false ) {                                             // Condição de teste para mudança de valor lógico da variável
      this._Logical = true                                                      // Atribuição de valores direta
      console.log(`O alvo ${this._TrgName} selecionou  a opção FullPage!`)      // Mensagem de confirmação
    }
  }
}