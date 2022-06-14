import { Resturant } from "./resturant";

export interface MenuItem {
  _id?: string;
  name?: string;
  price?: string;
  ingredients?: string;
  // itemSize: string;
  // count: number;
  resturantId?: Resturant
}
