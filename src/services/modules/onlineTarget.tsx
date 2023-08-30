import * as URL from 'url'                                                      // Importação de módulo externo url
import * as DNS from 'dns'                                                      // Importação de módulo externo dns

export class NewHost {                                                          // Criação de classe abstrata
  private readonly _HostName: string                                            // Tipagem de variável; o método "readonly" indica somente leitura

  constructor(_HostName: string){                                               // Método construtor                                                   
    this._HostName = _HostName                                                  // A variável declarada recebe o valor de _HostName
  }

  onlineHost = (): void => {                                                    // Definição de função que verifica se um endereço fornecido está online
    DNS.lookup( String(URL.parse( this._HostName, true ).host), (error) => {    // Verificação de endereço usando as funções url.parse() e dns.lookup() 
      if(error && error.code === 'ENOTFOUND') {                                 // Condição para verificação da existência de erros ao buscar o endereço
         console.error( ' Alvo não localizado - Gooser finalizado!')            // Log de saída para caminho inexistente
         throw error;                                                           // Emissão de erro e finalização da execução do aplicativo.
      }
    })
  }
}