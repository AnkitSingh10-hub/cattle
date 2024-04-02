import { Page } from "./page.interface";


export interface PaginatedAnimal extends Page { 
    results: Animal[];
  }
  
  export interface Animal {
    id: number;
    date_created: string;
    date_modified: string;
    animal_code: string;
    species: string;
    breed: string;
    dob: string;
    sire_id: string;
    dam_id: string;
    owner: number;
  }
  