import { SET_ERR, SET_AUTHOR_INFO, SET_AUTHOR_COLLECTS, SET_LOADING, NEED_ROUTER } from './mutations'
import { fetchUser, fetchUserTopicCollect } from '../../util/api'
import { LOADING_TOAST, ERR_TOAST } from '../user/mutations'
export default {
  async getUser ({ commit }, {loginname, path}) {
    if (!loginname) {
      return
    }
    commit(SET_LOADING, {flag: true})
    commit(LOADING_TOAST, {message: '加载中...', flag: true}, {root: true})
    try {
      const res = await fetchUser({loginname})
      if (res.success) {
        commit(SET_AUTHOR_INFO, res)
        if (path) {
          commit(NEED_ROUTER, path)
        }
      } else {
        commit(SET_ERR, {flag: true, msg: res.error_msg})
        commit(ERR_TOAST, {message: res.error_msg})
      }
    } catch (error) {
      commit(SET_ERR, {flag: true, msg: error})
      commit(ERR_TOAST, {message: '未知错误'})
    } finally {
      commit(LOADING_TOAST, {message: '加载中...', flag: false}, {root: true})
      commit(SET_LOADING, {flag: false})
    }
  },
  async getCollect ({ commit, state }, {loginname}) {
    if (!loginname) {
      return
    }
    try {
      commit(SET_LOADING, {flag: true})
      commit(LOADING_TOAST, {message: '加载中...', flag: true}, {root: true})
      const res = await fetchUserTopicCollect({loginname})
      if (res.success) {
        commit(SET_AUTHOR_COLLECTS, res)
      } else {
        commit(SET_ERR, {flag: true, msg: res.error_msg})
        commit(ERR_TOAST, {message: res.error_msg}, {root: true})
      }
    } catch (error) {
      commit(SET_ERR, {flag: true, msg: error})
      commit(ERR_TOAST, {message: '未知错误'}, {root: true})
    } finally {
      commit(SET_LOADING, {flag: false})
      commit(LOADING_TOAST, {message: '加载中...', flag: false}, {root: true})
    }
  }
}
