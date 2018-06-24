import { USER_LOGIN, USER_LOGOUT, ERR, SET_TOKEN } from './mutations'
import { postToken } from '../../util/api'

export default {
  async userLogin ({ commit, state }, {accesstoken, cb}) {
    try {
      const res = await postToken({accesstoken})
      if (res.success) {
        commit(USER_LOGIN, res)
        commit(SET_TOKEN, accesstoken)
        if (cb) {
          cb()
        }
      } else {
        commit(ERR, res)
      }
    } catch (error) {
      commit(ERR, '未知错误')
    }
  },
  userLogout ({ commit, state }) {
    commit(USER_LOGOUT)
    commit(SET_TOKEN, '')
  }
}
