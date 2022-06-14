export interface Order {
  _id?: string;
  userId: any;
  resturantId: any;
  // date?: number;
  items: any[];
  totalOrderPrice?: Number,
  createdOn: string,
  grandTotal: Number
}
