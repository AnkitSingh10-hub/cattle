import { getAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class TransactionAPI {

  public async getdetailTransaction(id: number) {
    const url = pathReplacer(Action.FarmerDetail, [{ name: '<id>', value: id }])
    const response = await getAPI(url,'?show_tree=true')
    return response
  }

  public async getTransaction(query = '') {
    const response = await getAPI(Action.Payment, query)
    return response
  }

  public async getPaymentDetails(query = '') {
    const response = await getAPI(Action.PaymentDetail, query)
    return response
  }
  
})

