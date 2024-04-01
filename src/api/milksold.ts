import { getAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class MilkSoldAPI {

  async getdetailMildSold(id: number) {
    const url = pathReplacer(Action.MilkSold, [{ name: '<id>', value: id }])
    const response = await getAPI(url, '?show_tree=true')
    return response
  }

  public async getMilkSold(query = '') {
    const response = await getAPI(Action.MilkSold, query)
    return response
  }
 
})
