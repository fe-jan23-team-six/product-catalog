import { ProductDescription } from './ProductDescription';
import { ProductMain } from './ProductMain';

export interface Product extends ProductMain {
  productCode: string,
  color: string,
  year: number,
  capacityAvailable: string[],
  colorsAvailable: string[],
  images: string[],
  description: ProductDescription[],
  resolution: string,
  processor: string,
  camera: string | null,
  zoom: string | null,
  cell: string[],
}
