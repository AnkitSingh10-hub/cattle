import { postAPI } from '../api'
import { Action } from '../api/action'
import type { Register } from '@/models/User.interface';

export default new (class RegisterClientAPI {
  
  public async registerClient(user: Register): Promise<any> {
    const response = await postAPI(Action.RegisterClient, user);
    return response
}

})
