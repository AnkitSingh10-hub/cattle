import { getAPI, postAPI, patchAPI } from '../api'
import { Action } from '../api/action'
import { pathReplacer } from '@/utils/router.utils'

export default new (class TreeAPI {
  public async getTree(query = '') {
    const response = await getAPI(Action.Tree, query)
    return response
  }
  public async getRegisteredTrees(query = '') {
    const response = await getAPI(Action.RegisteredTree, query)
    return response
  }
  
  public async getVerifiedTrees(query = '') {
    const response = await getAPI(Action.VerifiedTree, query)
    return response
  }
  public async getPaidTrees(query = '') {
    const response = await getAPI(Action.PaidTree, query)
    return response
  }
  public async getRejectedTrees(query = '') {
    const response = await getAPI(Action.RejectedTree, query)
    return response
  }
  public async getTreeDetail(id: number) {
    const url = pathReplacer(Action.TreeDetail, [{ name: '<id>', value: id }])
    const response = await getAPI(url)
    return response
  }
  public async getNextTreeDetail(id: number) {
    const url = pathReplacer(Action.NextTree, [{ name: '<id>', value: id }])
    const response = await getAPI(url)
    return response
  }
  public async getGeoTreeDetail(id: number) {
    const url = pathReplacer(Action.GeoTreeDetail, [{ name: '<id>', value: id }])
    const response = await getAPI(url)
    return response
  }
  public async postVerifyTree(id: number) {
    const url = pathReplacer(Action.ApproveTree, [{ name: '<id>', value: id }])
    const response = await postAPI(url, {})
    return response
  }
  public async postTreeReject(id: number, data: any) {
    const url = pathReplacer(Action.RejectTree, [{ name: '<id>', value: id }])
    const response = await postAPI(url, data)
    return response
  }
  public async getAvailableTreeList(query = '') {
    const response = await getAPI(Action.TreeAvailable, query)
    return response
  }

  public async getCompletedTreeDetail(query = '') {
    const response = await getAPI(Action.TreeCompletedDetail, query)
    return response
  }
})()
