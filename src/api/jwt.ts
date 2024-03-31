import { postAPI } from '../api'
import type { UserLoginInfo } from '@/models/JWT.interface'
import { Action } from '../api/action'

export default new (class JWTAPI {
  public async getJWT(user: UserLoginInfo) {
    const response = await postAPI(Action.Token, user, {
      withCredentials: true
    })
    console.log(response)
    return response
  }

  public async refreshAccessToken() {
    try {
      const response = await postAPI(
        Action.RefreshToken,
        {},
        {
          withCredentials: true
        }
      )
      return response
    } catch (error) {
      //pass
    }
  }

  public async ClearToken() {
    const response = await postAPI(
      Action.ClearToken,
      {},
      {
        withCredentials: true
      }
    )
    return response
  }
})()
