import { getAPI } from '.'
import { Action } from './action'
import { pathReplacer } from '../utils/router.utils'

export default new (class AnimalAPI {
  async getdetailAnimal(id: number) {
    const url = pathReplacer(Action.Animal, [{ name: '<id>', value: id }])
    const response = await getAPI(url, '?show_tree=true')
    return response
  }

  public async getAnimal(query = '') {
    const response = await getAPI(Action.Animal, query)
    return response
  }
 
})
