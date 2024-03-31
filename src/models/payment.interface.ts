import type { Page } from './page.interface'

export interface PaginatedPayment extends Page {
  results: Payment[]
}

export interface Payment {
  id: number
  of_user: string
  reward_trees: number
  account_holder_name: string
  account_type: string
  account_type_picture: string
  bank_name: string
  account_no: string
  branch: string
  wallet_name?: null
  wallet_no?: null
  is_verified: boolean
  rate: number
  subtotal: number
}



export interface PaginatedTransaction extends Page{
  results: Transaction[]
}

export interface Transaction {
  id: number;
  date_created: string;
  date_modified: string;
  source_acc_name: string;
  source_acc_no: string;
  source_bank: string;
  source_currency: string;
  total_paid_amount: string;
  process_id: string;
  payment_status: string;
}


export interface PaginatedPaymentDetail extends Page {
  results: PaymentDetail[]
}
export interface PaymentDetail {
  id: number;
  date_created: string;
  date_modified: string;
  txn_id: string;
  no_of_trees: number;
  rate: string;
  total_amount: string;
  payment: number;
  reciever: number;
  user_payment_detail: UserPaymentDetail;
}

export interface UserPaymentDetail {
  id: number;
  reward_trees: number;
  mobile_number: string;
  account_holder_name: string;
  account_type: string;
  account_type_picture?: null;
  bank_name: string;
  account_no: string;
  branch?: null;
  wallet_name?: null;
  wallet_no?: null;
  is_verified: boolean;
  of_user: number;
}
