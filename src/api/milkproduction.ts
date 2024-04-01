import { getAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class MilkProductionAPI {
  async getdetailMilkProduction(id: number) {
    const url = pathReplacer(Action.MilkProduction, [{ name: '<id>', value: id }])
    const response = await getAPI(url, '?show_tree=true')
    return response
  }

  public async getMilkProduction(query = '') {
    const response = await getAPI(Action.MilkProduction, query)
    return response
  }
 
})
