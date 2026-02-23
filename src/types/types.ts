export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IReview {
  title: string;
  description: string;
  rating: number;
  img: string;
  thumbnail: string;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface CartItem {
  productId: string;
  image: string;
  title: string;
  description: string;
  size: string;
  color: string;
  quantity: number;
  isFavorite: boolean;
}

export interface CartState {
  items: CartItem[];
}
