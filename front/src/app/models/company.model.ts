import { User } from "./user.model";

export interface Company {
  id: number;
  name: string;
  address: string;
  employees?: User[];
  isDeleted: boolean;
  pictures?: string[];
  rating?: number;
  reviews?: Review[];
  coord: Coord
}

export interface Review {
    id: number;
    company: Company;
    date: number;
    content: string;
    rating: number;
}

export interface Coord {
  lat: string;
  lng: string;
}

export interface Address {
  libelle: string;
  city: string;
  location?: number[];
}

export interface Location {
  latitude: number;
  longitude: number;
}
