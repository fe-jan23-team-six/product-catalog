import { PhoneDescription } from './PhoneDescription';
import { PhoneMain } from './PhoneMain';

export interface Phone extends PhoneMain {
  color: string,
  year: number,
  capacityAvailable: string[],
  colorsAvailable: string[],
  images: string[],
  description: PhoneDescription[],
  resolution: string,
  processor: string,
  camera: string,
  zoom: string,
  cell: string[],
}
