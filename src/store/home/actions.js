import { UNSHIFT_TOPICS, LOADING, ERR, PAGE_ADD_ONE, SHIFT_TOPICS } from './mutations'
import { fetchTopics } from '../../util/api'
import { LOADING_TOAST, ERR_TOAST } from '../user/mutations'

export default {
  async getTopics ({ commit, state }, init = false) {
    try {
      commit(LOADING, true)
      if (init) {
        commit(LOADING_TOAST, {flag: true, message: '初始化...'}, {root: true})
      }
      const res = await fetchTopics({page: state.page})
      if (res.success) {
        commit(UNSHIFT_TOPICS, res.data)
        commit(PAGE_ADD_ONE)
        commit(LOADING, false)
      } else {
        commit(LOADING, false)
        commit(ERR, res)
        commit(ERR_TOAST, {message: res.error_msg}, {root: true})
      }
      if (state.topics.length >= 60) {
        commit(SHIFT_TOPICS, 10)
      }
    } catch (error) {
      commit(LOADING, false)
      commit(ERR, error)
      commit(ERR_TOAST, {message: '未知错误'}, {root: true})
    }
    if (init) {
      commit(LOADING_TOAST, {flag: false}, {root: true})
    }
  }
}
