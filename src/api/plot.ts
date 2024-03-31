import type { PlotReject } from '@/models/plot.interface'
import { getAPI, postAPI, patchAPI, putAPI } from '../api'
import { Action } from '../api/action'
import { pathReplacer } from '@/utils/router.utils'

export default new (class PlotAPI {
  public async getPlots(query = '') {
    const response = await getAPI(Action.Plot, query)
    return response
  }
  public async getRegisteredPlots(query = '') {
    const response = await getAPI(Action.RegisteredPlot, query)
    return response
  }
  public async getVerifiedPlots(query = '') {
    const response = await getAPI(Action.VerifiedPlot, query)
    return response
  }
  public async getAvailablePlotList(query = '') {
    const response = await getAPI(Action.PlotAvailable, query)
    return response
  }
  public async getPlotDetail(id: number) {
    const url = pathReplacer(Action.PlotDetail, [{ name: '<id>', value: id }])
    const response = await getAPI(url)
    return response
  }
  public async postVerifyPlot(id: number) {
    const url = pathReplacer(Action.ApprovePlot, [{ name: '<id>', value: id }])
    const response = await postAPI(url, {})
    return response
  }
  public async postPlotReject(id: number, data: PlotReject) {
    const url = pathReplacer(Action.PlotReject, [{ name: '<id>', value: id }])
    const response = await postAPI(url, data)
    return response
  }
  public async getUploadedLand(query = '') {
    const response = await getAPI(Action.UploadedLand, query)
    return response
  }
  public async getUploadedLandDetail(query = '') {
    const response = await getAPI(Action.UploadedLandDetail, query)
    return response
  }
  public async getCompletedLand(query = '') {
    const response = await getAPI(Action.LandCompleted, query)
    return response
  }
  public async getCompletedLandDetail(query = '') {
    const response = await getAPI(Action.LandCompletedDetail, query)
    return response
  }
})()
