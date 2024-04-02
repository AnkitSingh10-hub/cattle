import { getAPI, deleteAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class IncomeAPI {
  async getdetailIncome(id: number) {
    const url = pathReplacer(Action.Income, [{ name: '<id>', value: id }])
    const response = await getAPI(url, '?show_tree=true')
    return response
  }
  async deleteIncome(id: number) {
    const url = pathReplacer(Action.IncomeDelete, [{ name: '<id>', value: id }])
    const response = await deleteAPI(url)
    return response
  }

  public async getIncome(query = '') {
    const response = await getAPI(Action.Income, query)
    return response
  }
 
})
