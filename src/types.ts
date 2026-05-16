export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  isPopular?: boolean;
  offerBadge?: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
}
