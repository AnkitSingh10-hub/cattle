import { Page } from "./page.interface";

export interface PaginatedExpenses extends Page {
    results: Expenses[];
  }
  export interface Expenses {
    id: number;
    user: string;
    date: string;
    particulars: string;
    amount: number;
  }
  