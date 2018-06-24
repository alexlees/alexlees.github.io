import store from '../../util/store'
import app from '../../main'

export const NEED_LOGIN = 'NEED_LOGIN'
export const SET_USER = 'SET_USER'
export const SET_TOKEN = 'SET_TOKEN'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const ERR = 'ERR'
export const LOADING = 'LOADING'
export const SET_ADD_LOGO = 'SET_ADD_LOGO'

export default {
  [NEED_LOGIN] () {
    app.$toast.fail({duration: 500, message: '需要登陆'})
  },
  [USER_LOGIN] (state, user) {
    state.user = user
    store.set('user', user)
    state.needLogin = false
    app.$toast.success({duration: 500, message: '登陆成功！'})
  },
  [USER_LOGOUT] (state) {
    state.user = {}
    state.needLogin = true
    store.clear()
    app.$toast.success({duration: 500, message: '注销成功！'})
  },
  [ERR] (state, message) {
    app.$toast.fail({duration: 500, message})
  },
  [SET_TOKEN] (state, accesstoken) {
    state.accesstoken = accesstoken
    store.set('token', accesstoken)
  },
  [LOADING] (state, flag) {
    if (flag) {
      // TODO
    }
    state.loading = flag
  },
  [SET_ADD_LOGO] (state, flag) {
    state.addLogo = flag
    store.set('addLogo', flag)
  }
}
