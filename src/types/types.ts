export type ImageUrls = {
  mobile: string;
  tablet: string;
  desktop: string;
}

export type ProductType = {
  idProduct: number;
  slug: string;
  name: string;
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
    image: ImageUrls;
  }[];
}




