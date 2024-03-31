import { getAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class ClientAPI {
  // public async getlistClient(searchQuery: string): Promise<any> {
  //   const query: string = ''
  //   if (searchQuery !== '') {
  //     const response = await getAPI(Action.ClientList, `?search=${searchQuery}`)
  //     return response
  //   } else {
  //     const response = await getAPI(Action.ClientList, query)
  //     return response
  //   }
  // }
  public async getClients(query = '') {
    const response = await getAPI(Action.ClientList, query)
    return response
  }

  async getdetailClient(id: number) {
    const url = pathReplacer(Action.ClientDetail, [{ name: '<id>', value: id }])
    const response = await getAPI(url)
    return response
  }
})()
