import { Page } from "./page.interface";

export interface PaginatedIncome extends Page {
    results: Income[];
  }
  export interface Income {
    id: number;
    user: string;
    date: string;
    particulars: string;
    quantity: number;
    amount: number;
  }
  