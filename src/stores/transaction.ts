import { defineStore } from "pinia";
import type { Transaction, PaginatedTransaction, Payment, PaginatedPaymentDetail } from "@/models/payment.interface";
import type { QTablePagination, PageFilter, Page } from "@/models/page.interface";
import type { Query } from "@/models/page.interface";
import API from '@/api/transaction';
import { queryBuilder } from "@/utils/api.utils";

export const useTransactionStore = defineStore({
    id: 'useTransactionStore',
    state: () => ({
        PaginatedTransaction: {} as PaginatedTransaction,
        PaginatedPaymentDetail: {} as PaginatedPaymentDetail,
        transactiondetail: {} as Payment,
        TransactionTablePagination: {
            sortBy: 'registered_data',
            descending: true,
            page: 1,
            rowsPerPage: 10,
            rowsNumber: 1,
        } as QTablePagination,
        PaymentDetailTablePagination: {
            sortBy: 'registered_data',
            descending: true,
            page: 1,
            rowsPerPage: 10,
            rowsNumber: 1,
        }
    }),
    actions: {
        setTransactionTablePagination(data: QTablePagination) {
            this.TransactionTablePagination = data

        },
        setPaymentDetailTablePagination(data: QTablePagination) {
            this.PaymentDetailTablePagination = data
        },

        async getTransaction(params: PageFilter = {}) {
            const query = queryBuilder(params as Query)
            const transaction = (await API.getTransaction(query)) as PaginatedTransaction
            this.PaginatedTransaction = transaction
        },

        async getPaymentDetails(params: PageFilter = {}) {
            const query = queryBuilder(params as Query)
            const payment_detail = (await API.getPaymentDetails(query)) as PaginatedPaymentDetail
            this.PaginatedPaymentDetail = payment_detail
        },

        async getdetailTransaction(id: number) {
            const response = await API.getdetailTransaction(id)
            this.transactiondetail = response
            return response
        },


    }
})
