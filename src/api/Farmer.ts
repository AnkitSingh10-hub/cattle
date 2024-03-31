import { getAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class FarmerAPI {
  async getdetailFarmer(id: number) {
    const url = pathReplacer(Action.FarmerDetail, [{ name: '<id>', value: id }])
    const response = await getAPI(url, '?show_tree=true')
    return response
  }

  public async getFarmer(query = '') {
    const response = await getAPI(Action.FarmerList, query)
    return response
  }
  public async getFarmerRejectedTree(query = '') {
    const response = await getAPI(Action.FarmerRejectedTreeList, query)
    return response
  }
  public async getFarmerRegisteredTree(query = '') {
    const response = await getAPI(Action.FarmerRegisteredTreeList, query)
    return response
  }
  public async getFarmerAssignedTree(query = '') {
    const response = await getAPI(Action.FarmerAssignedTreeList, query)
    return response
  }
  public async getFarmerReward(query = '') {
    const response = await getAPI(Action.FarmerReward, query)
    return response
  }
  public async getTreeCompletedList(query = '') {
    const response = await getAPI(Action.TreeCompleted, query)
    return response
  }
})()
