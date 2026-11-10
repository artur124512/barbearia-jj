export type ServiceCategory = 'todos' | 'cabelo' | 'barba' | 'combos' | 'tratamentos';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number;
  duration: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  photo: string;
  instagramHandle: string;
  instagramUrl: string;
  rating: number;
  cutsCount: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fade' | 'social' | 'barba' | 'platinado' | 'todos';
  barberName: string;
  imageUrl: string;
  tag: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}
