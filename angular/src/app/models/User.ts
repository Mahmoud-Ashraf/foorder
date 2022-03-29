// import { Order } from ''
export interface User {
  id?: string;
  name?: string;
  // lastName: string;
  email: string;
  // companyNeckname: string;
  // phone: string;
  orders?: [];
  password: string;
  // wallet?: [];
  voted?: boolean;
}
