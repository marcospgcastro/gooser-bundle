import * as URL from 'url'
import * as DNS from 'dns'

export abstract class NewHost {
  private readonly _HostName: string                                            

  constructor(_HostName: string){                                                   
    this._HostName = _HostName 
  }

  onlineHost = (): void => {
    DNS.lookup( String(URL.parse( this._HostName, true ).host), (error) => {
      if(error && error.code === 'ENOTFOUND') {
         console.error( ' Alvo não localizado - Gooser finalizado!')
         throw error;
      }
    })
  }
}