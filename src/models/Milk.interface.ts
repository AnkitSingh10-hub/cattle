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
  

  