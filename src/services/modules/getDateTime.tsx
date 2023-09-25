// Um código lindo que eu escrevi "sozinho", que orgulho do pai:D

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
    this._Mdate = String(_Fdate.getMonth() + 1).padStart(2, '0');               // Os meses são zero-based
    this._Ddate = String(_Fdate.getDate()).padStart(2, '0');
    this._Htime = String(_Fdate.getHours()).padStart(2, '0');
    this._Mtime = String(_Fdate.getMinutes()).padStart(2, '0');
    this._Stime = String(_Fdate.getSeconds()).padStart(2, '0');

    return ` ${this._Ydate}-${this._Mdate}-${this._Ddate}
             ${this._Htime}:${this._Mtime}:${this._Stime}`;
  }
}