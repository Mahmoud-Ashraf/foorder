import { MenuItem } from './menu-item';
// import { MenuSections } from "./menu";

export interface Resturant {
  _id: string;
  name: string;
  type: string;
  vote?: number;
  elmenusUrl?: string;
  lastVotedAt?: string
  phone?: string;
  savedPhone?: string;
  menu?: MenuItem[] | string[] 
  // scannedMenu?: [];
  // // menu: MenuSections[];
  // logo?: string;
  // todaySelection?: boolean;
  // registeredPhone?: string;
}
