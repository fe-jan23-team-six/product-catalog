import { Category } from './enums/Category';

export interface ProductMain {
  id: string,
  namespaceId: string,
  category: Category,
  name: string,
  priceDiscount: number,
  priceRegular: number,
  screen: string,
  capacity: string,
  ram: string,
  image: string;
}
