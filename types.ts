
export enum PageType {
  LISTING = 'listing',
  ABOUT = 'about',
  CONTACT = 'contact',
  PRODUCT_DETAIL = 'product_detail'
}

export type Category = 'All' | 'Wedding' | 'Hotel' | 'Portfolio' | 'Business' | 'Restaurant';

export interface Product {
  id: string;
  title: string;
  description: string;
  category: Category;
  thumbnail: string;
  price: number;
  demoUrl: string;
  features: string[];
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}
