import * as LinkName from 'url'
import * as LinkTest from 'dns'

export abstract class onlineHost {
  private readonly _HostName: string                                            

  constructor(_HostName: string){                                                   
    this._HostName = _HostName 
  }

  onlineHost = (): void => {
    LinkTest.lookup( LinkName.parse( this._HostName, true ).host, (error) => {
      if(error && error.code === 'ENOTFOUND') {
         console.error( ' Alvo não localizado - Gooser finalizado!')
         throw error;
      }
    }) 
  }
}