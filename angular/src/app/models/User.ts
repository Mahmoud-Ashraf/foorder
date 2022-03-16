// import { Order } from ''
export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  companyNeckname: string;
  phone: string;
  orders?: [];
  // wallet?: [];
  voted?: boolean;
}
