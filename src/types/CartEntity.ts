export interface CartEntity {
  id: number,
  category: string,
  name: string,
  image: string;
  priceDiscount: number,
  priceRegular: number,
  quantity: number,
  totalDiscount: number,
  totalPrice: number,
}
