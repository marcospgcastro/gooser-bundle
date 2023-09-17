import * as URL from 'url'                                                      // Importação de módulo externo url
import * as DNS from 'dns'                                                      // Importação de módulo externo dns

export class NewHost {                                                          // Criação de classe abstrata
  private readonly _HostName: string                                            // Tipagem de variável; o método "readonly" indica somente leitura
  private _ErroHost: boolean

  constructor(_HostName: string, _ErroHost: boolean){                                               // Método construtor                                                   
    this._HostName = _HostName                                                  // A variável declarada recebe o valor de _HostName
    this._ErroHost = _ErroHost
  }
  
/*
  onlineHost = (): void => {                                                    // Definição de função que verifica se um endereço fornecido está online
    DNS.lookup( String(URL.parse( this._HostName, true ).host), (error) => {    // Verificação de endereço usando as funções url.parse() e dns.lookup() 
      if(error && error.code === 'ENOTFOUND') {                                 // Condição para verificação da existência de erros ao buscar o endereço
         console.error( ' Alvo não localizado!')                                // Log de saída para caminho inexistente
         throw error;                                                           // Emissão de erro e finalização da execução do aplicativo.
      }
    })
  }
*/

  setError = (_ErroHost: boolean): void => {                                    // Atribuição de valor lógico ao erro
    this._ErroHost = _ErroHost
  }

  statError = (): boolean => {                                                  // Retorna status lógico do erro
    return this._ErroHost
  }

  onlineHost = (_HostName: string): boolean => {                                // Definição de função que verifica se um endereço fornecido está online
    DNS.lookup( String(URL.parse(this._HostName,true).host), (error) => {
      if(error && error.code === 'ENOTFOUND') {                                 // Condição para verificação da existência de erros ao buscar o endereço
        console.error( ' \u26a0 Alvo não localizado! \u26a0')                   // Log de saída para caminho inexistente
        this.setError(false);                                                   // Atribuição lógica de erro: é falso que o endereço está disponível
      }
      else {
        this.setError(true);                                                    // Atribuição lógica de erro: é falso que o endereço está disponível
      }
    })
    return this.statError()                                                     // Devolve o valor lógico
  }

}