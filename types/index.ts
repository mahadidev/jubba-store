export interface ProductType {
  id: string;
  name: string;
  price: number;
  qty: number;
  description: string;
  images: string[];
  thumbnail: null | string;
  size: {
    id: number;
    label: string;
    value: string;
  }[];
  colors: string[];
}

export interface QtyItemType {
  qty: number;
  price: number;
  product: ProductType;
  variants: {
    size: string;
    color: string;
    qty: number;
  }[];
}
