import { getAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class MilkContentAPI {
  
  async getdetailMilkContent(id: number) {
    const url = pathReplacer(Action.MilkContent, [{ name: '<id>', value: id }])
    const response = await getAPI(url, '?show_tree=true')
    return response
  }

  public async getMilkContent(query = '') {
    const response = await getAPI(Action.MilkContent, query)
    return response
  }
  
 
})
