import { getAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class FarmerAPI {
  async getdetailIncome(id: number) {
    const url = pathReplacer(Action.Income, [{ name: '<id>', value: id }])
    const response = await getAPI(url, '?show_tree=true')
    return response
  }

  public async getIncome(query = '') {
    const response = await getAPI(Action.Income, query)
    return response
  }
 
})
