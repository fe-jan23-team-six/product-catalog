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

export interface PhoneDetails extends PhoneMain {
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
  cell: string[],
}

interface Description {
  title: string,
  text: string[],
}

export interface PhoneDetailed {
  id: number,
  slug?: string,
  namespaceId?: string,
  category?: string,
  name: string,
  priceRegular: number,
  priceDiscount: number,
  screen: string,
  capacity: string,
  ram: string,
  color?: string,
  year?: number,
  image: string,
  capacityAvailable?: string[],
  colorsAvailable?: string[],
  images?: string[],
  description?: Description[],
  resolution?: string,
  processor?: string,
  camera?: string,
  zoom?: string,
  cell?: string[],
}
