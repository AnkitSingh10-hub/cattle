import type { Page } from './page.interface'

export interface PaginatedMilkProduction extends Page{
    results: MilkProduction[];
  }

  export interface MilkProduction {
    id: number;
    month_year: string;
    days_in_milk: string;
    total_milk: number;
    animal: number;
  }
  

  export interface PaginatedMilkSold extends Page {
    results: MilkSold[];
  }
  export interface MilkSold {
    id: number;
    user: string;
    month_year: string;
    milk_to_coop: number;
    milk_to_others: number;
    total_milk_sold: number;
  }
  