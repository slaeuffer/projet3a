import { User } from "./user.model";

export interface Company {
  id: string;
  name: string;
  address: string;
  employees?: User[];
  isDeleted: boolean;
  pictures?: string[];
  rating?: number;
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
