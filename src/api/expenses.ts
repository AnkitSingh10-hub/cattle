import { getAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class ExpensesAPI {
  async getdetailExpenses(id: number) {
    const url = pathReplacer(Action.Expenses, [{ name: '<id>', value: id }])
    const response = await getAPI(url, '?show_tree=true')
    return response
  }

  public async getExpenses(query = '') {
    const response = await getAPI(Action.Expenses, query)
    return response
  }
 
})
