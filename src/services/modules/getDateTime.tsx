/* Um código lindo que eu escrevi sozinho, que orgulho do pai ;)
export abstract class setNewDate {

  _Fdate: Date
  _Ydate: String
  _Mdate: string
  _Ddate: string
  _Htime: string
  _Mtime: string
  _Stime: string

  constructor( _Fdate: Date, _Ydate: String, _Mdate: string, _Ddate: string,
               _Htime: string, _Mtime: string, _Stime: string ) {

      this._Fdate = _Fdate
      this._Ydate = _Ydate
      this._Mdate = _Mdate
      this._Ddate = _Ddate
      this._Htime = _Htime
      this._Mtime = _Mtime
      this._Stime = _Stime

    }

  static GetNewDate = (): string => {
    this._Fdate = new Date();
    this._Ydate = String(this._Fdate.getFullYear());
    this._Mdate = String(this._Fdate.getMonth() + 1).padStart(2, '0'); // Os meses são zero-based
    this._Ddate = String(this._Fdate.getDate()).padStart(2, '0');
    this._Htime = String(this._Fdate.getHours()).padStart(2, '0');
    this._Mtime = String(this._Fdate.getMinutes()).padStart(2, '0');
    this._Stime = String(this._Fdate.getSeconds()).padStart(2, '0');

    return `${this._Ydate}-${this._Mdate}-${this._Ddate}+
            ${this._Htime}:${this._Mtime}:${this._Stime}`;
  }
}  


*/

export abstract class SetNewDate {
  static _Ydate: string;
  static _Mdate: string;
  static _Ddate: string;
  static _Htime: string;
  static _Mtime: string;
  static _Stime: string;

  static GetNewDate = (): string => {
    const _Fdate = new Date();
    this._Ydate = String(_Fdate.getFullYear());
    this._Mdate = String(_Fdate.getMonth() + 1).padStart(2, '0'); // Os meses são zero-based
    this._Ddate = String(_Fdate.getDate()).padStart(2, '0');
    this._Htime = String(_Fdate.getHours()).padStart(2, '0');
    this._Mtime = String(_Fdate.getMinutes()).padStart(2, '0');
    this._Stime = String(_Fdate.getSeconds()).padStart(2, '0');

    return `${this._Ydate}-${this._Mdate}-${this._Ddate} ${this._Htime}:${this._Mtime}:${this._Stime}`;
  }
}
