// import { Order } from ''
// export interface User {
//   id?: string;
//   name?: string;
//   // lastName: string;
//   email: string;
//   // companyNeckname: string;
//   // phone: string;
//   orders?: [];
//   password: string;
//   // wallet?: [];
//   voted?: boolean;
// }
export class User {
  constructor(
    public name: string,
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  // User.token to get the token
  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}