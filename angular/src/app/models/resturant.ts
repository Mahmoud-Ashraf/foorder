// import { MenuSections } from "./menu";

export interface Resturant {
  id?: string;
  name: string;
  content: string;
  phone?: string;
  scannedMenu?: [];
  // menu: MenuSections[];
  elmenusLink?: string;
  logo?: string;
  todaySelection?: boolean;
  registeredPhone?: string;
  vote?: number;
}
