export type ImageUrls = {
  mobile: string;
  tablet: string;
  desktop: string;
}

export type ProductType = {
  idProduct: number;
  slug: string;
  name: string;
  cartName : string;
  image: ImageUrls;
  category: string;
  categoryImage: ImageUrls;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: ImageUrls;
    second: ImageUrls;
    third: ImageUrls;
  };
  others: {
    slug: string;
    name: string;
  }[];
}

export type ItemState = {
  idProduct : number;
  quantity : number;
  slug : string;
  price : string;
  cartName : string;
}

export type CartState =  {
  items : ItemState[]
}

export type FormValues = {
  name: string;
  email: string;
  tel: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  payment: 'emoney' | 'cashOnDelivery';
  eMoneyNumber?: string;
  eMoneyPIN?: string;
};




