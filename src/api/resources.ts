import type { Infographics } from '@/models/Resources.interface'
import type { Category } from '@/models/Category.interface'
import { getAPI, postAPI, patchAPI, deleteAPI } from '../api'
import { Action } from '../api/action'
import { pathReplacer } from '@/utils/router.utils'

export default new (class ResourceAPI {
  public async getResources(query = '') {
    const response = await getAPI(Action.Resources, query)
    return response
  }

  public async PostResourcesAPI(resources: Infographics, data: FormData): Promise<any> {
    const response = await postAPI(Action.Resources, data)
    return response
  }
  public async PatchResourcesAPI(id: number, data: FormData) {
    const url = pathReplacer(Action.ResourcesDetail, [{ name: '<id>', value: id }])
    const response = await patchAPI(url, data)
    return response
  }

  public async DeleteResourcesAPI(id: number) {
    const url = pathReplacer(Action.ResourcesDetail, [{ name: '<id>', value: id }])
    const response = await deleteAPI(url)
    return response
  }

  public async getCategory(query = '') {
    const response = await getAPI(Action.Category, query)
    return response
  }

  public async PostCategoryAPI(resource: Category, data: FormData): Promise<any> {
    const response = await postAPI(Action.Category, data)
    return response
  }
})()
