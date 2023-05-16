import { PhoneDescription } from './TabletDescription';
import { TabletsMain } from './TabletMain';

export interface Tablet extends TabletsMain {
  id: number,
  color: string,
  year: number,
  image: string,
  capacityAvailable: string[],
  colorsAvailable: string[],
  images: string[],
  description: PhoneDescription[],
  resolution: string,
  processor: string,
  camera: string,
  zoom: string,
  cell: string[]
}
