import { defineStore } from 'pinia'
import type { Payment, PaginatedPayment } from '@/models/payment.interface'
import type { LandReward, PaginatedLandReward } from '@/models/landreward.interface'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { Query } from '../models/page.interface'
import API from '@/api/payment'
import { queryBuilder } from '@/utils/api.utils'
export const usePaymentStore = defineStore({
  id: 'usePaymentStore',
  state: () => ({
    PaginatedPayment: {} as PaginatedPayment,
    // farmerlist: {} as PaginatedFarmer,
    paymentdetail: {} as Payment,
    LandReward: {} as LandReward,
    PaginatedLandReward: {} as PaginatedLandReward,
    PaymentTablePagination: {
      sortBy: 'registered_date',
      descending: true,
      page: 1,
      rowsPerPage: 5,
      rowsNumber: 1
    } as QTablePagination
  }),
  // getters: {
  //   getFarmerList(state) {
  //     return state.farmerlist
  //   }
  // },
  actions: {
    setPaymentTablePagination(data: QTablePagination) {
      this.PaymentTablePagination = data
    },
    async getPayment(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const farmer = (await API.getPayment(query)) as PaginatedPayment
      this.PaginatedPayment = farmer
    },
    // async getlistFarmer(searchQuery: string): Promise<any> {
    //   const response = await API.getlistFarmer(searchQuery)
    //   console.log(response)
    //   this.farmerlist = response
    //   return response
    // },

    async getdetailPayment(id: number) {
      const response = await API.getdetailPayment(id)
      this.paymentdetail = response
      return response
    },
    async postPayment(data: any) {
      const response = await API.postPayment(data)
      console.log('store ko response', response)
      return response
    },
    async postPaymentRequest(payment_id: number) {
      console.log('store ko tansactionid:', payment_id)
      return await API.postPaymentRequest(payment_id)
    },
    async postPaymentVerification(merchant_process_id: string) {
      console.log('store ko merchant id:', merchant_process_id)
      return await API.postPaymentVerification(merchant_process_id)
    },
    async getPlotPayment(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const payment = (await API.getPlotPayment(query)) as PaginatedLandReward
      this.PaginatedLandReward = payment
    }
  }
})
