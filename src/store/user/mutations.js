import store from '../../util/store'
import { Toast } from 'vant'

export const NEED_LOGIN = 'NEED_LOGIN'
export const SET_USER = 'SET_USER'
export const SET_TOKEN = 'SET_TOKEN'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const ERR = 'ERR'
export const LOADING = 'LOADING'
export const SET_ADD_LOGO = 'SET_ADD_LOGO'
export const ERR_TOAST = 'ERR_TOAST'
export const SUCCESS_TOAST = 'SUCCESS_TOAST'
export const LOADING_TOAST = 'LOADING_TOAST'

export default {
  [NEED_LOGIN] () {
    Toast.fail({duration: 500, message: '需要登陆'})
  },
  [USER_LOGIN] (state, user) {
    state.user = user
    store.set('user', user)
    state.needLogin = false
    Toast.success({duration: 500, message: '登陆成功！'})
  },
  [USER_LOGOUT] (state) {
    state.user = {}
    state.needLogin = true
    store.clear()
    Toast.success({duration: 500, message: '注销成功！'})
  },
  [ERR] (state, message) {
    Toast.fail({duration: 500, message})
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
  },
  [ERR_TOAST] (state, {message = '操作失败', mask = false, duration = 500}) {
    Toast.fail({
      message,
      mask,
      duration
    })
  },
  [SUCCESS_TOAST] (state, {message = '操作成功', mask = false, duration = 500}) {
    Toast.success({
      message,
      mask,
      duration
    })
  },
  [LOADING_TOAST] (state, {flag, message = '加载中...', mask = true}) {
    if (flag) {
      Toast.loading({
        message,
        mask
      })
    } else {
      Toast.clear()
    }
  }
}
