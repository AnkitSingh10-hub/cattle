import { getAPI, postAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class PaymentAPI {
  //   public async getlistFarmer(searchQuery: string): Promise<any> {
  //     const query: string = ''
  //     if (searchQuery !== '') {
  //       const response = await getAPI(Action.FarmerList, `?search=${searchQuery}`)
  //       return response
  //     } else {
  //       const response = await getAPI(Action.FarmerList, query)
  //       return response
  //     }
  //   }

  //   async getdetailFarmer(id: number) {
  //     const url = pathReplacer(Action.FarmerDetail, [{ name: '<id>', value: id }])
  //     const response = await getAPI(url,'?show_tree=true')
  //     return response
  //   }

  public async getPayment(query = '') {
    const response = await getAPI(Action.PaymentList, query)
    return response
  }

  async getdetailPayment(id: number) {
    const url = pathReplacer(Action.FarmerDetail, [{ name: '<id>', value: id }])
    const response = await getAPI(url, '?show_payment=true')
    return response
  }
  public async postPayment(data: any) {
    const response = await postAPI(Action.Payment, data)
    return response
  }

  public async postPaymentRequest(payment_id: number) {
    const response = await postAPI(Action.PaymentRequest, { payment_id })
    return response
  }
  public async postPaymentVerification(merchant_process_id: string) {
    console.log('api ko merchantprocessid:', merchant_process_id)
    // const url = pathReplacer(Action.PaymentVerification, [
    //   { name: '<merchant_process_id>', value: merchantprocessid }
    // ])
    console.log('api ko merchantprocessid heeeeelllll:', merchant_process_id)
    const response = await postAPI(Action.PaymentVerification, { merchant_process_id })
    return response
  }

  public async getPlotPayment(query = '') {
    const response = await getAPI(Action.PlotPaymentReward, query)
    return response
  }
})()
