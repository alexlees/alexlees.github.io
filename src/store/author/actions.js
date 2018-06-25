import { SET_ERR, SET_AUTHOR_INFO, SET_AUTHOR_COLLECTS, SET_LOADING, NEED_ROUTER } from './mutations'
import { fetchUser, fetchUserTopicCollect } from '../../util/api'

export default {
  async getUser ({ commit }, {loginname, path}) {
    if (!loginname) {
      return
    }
    commit(SET_LOADING, {flag: true})
    try {
      const res = await fetchUser({loginname})
      if (res.success) {
        commit(SET_AUTHOR_INFO, res)
        commit(SET_LOADING, {flag: false})
        if (path) {
          commit(NEED_ROUTER, path)
        }
      } else {
        commit(SET_ERR, {flag: true, msg: res.error_msg})
        commit(SET_LOADING, {flag: false})
      }
    } catch (error) {
      commit(SET_ERR, {flag: true, msg: error})
      commit(SET_LOADING, {flag: false})
    }
  },
  async getCollect ({ commit, state }, {loginname}) {
    if (!loginname) {
      return
    }
    try {
      commit(SET_LOADING, {flag: true})
      const res = await fetchUserTopicCollect({loginname})
      if (res.success) {
        commit(SET_AUTHOR_COLLECTS, res)
      } else {
        commit(SET_ERR, {flag: true, msg: res.error_msg})
      }
      commit(SET_LOADING, {flag: false})
    } catch (error) {
      commit(SET_ERR, {flag: true, msg: error})
      commit(SET_LOADING, {flag: false})
    }
  }
}
