import { parse as URL } from 'url'
import { lookup as DNS } from 'dns'

const checkURL = new URL()
const checkDNS = new DNS()

export abstract class NewHost {
  private readonly _HostName: string                                            

  constructor(_HostName: string){                                                   
    this._HostName = _HostName 
  }

  onlineHost = (): void => {
    checkDNS( checkURL( this._HostName, true ).host, (error) => {
      if(error && error.code === 'ENOTFOUND') {
         console.error( ' Alvo não localizado - Gooser finalizado!')
         throw error;
      }
    }) 
  }
}