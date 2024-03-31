import { getAPI} from '../api'
import { Action } from '../api/action'

export default new (class DashboardCountAPI {

public async getDashboardCountAPI(query=''):Promise<any>{
  const response = await getAPI(Action.DashboardCount, query);
  return response
}
})
