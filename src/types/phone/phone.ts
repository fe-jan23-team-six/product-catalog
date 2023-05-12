export interface PhoneMain {
  id: number,
  capacity: string,
  category: string,
  name: string,
  nameSpaceId: string,
  priceDiscount: number,
  priceRegular: number,
  ram: string,
  screen: string,
  slug: string,
}

export interface PhoneDescription {
  id: number,
  title: string,
  text: string[],
}

export interface PhoneDetails {
  id: number,
  name: string,
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
  cell: string[],
}
