import { UNSHIFT_TOPICS, LOADING, ERR, PAGE_ADD_ONE, SHIFT_TOPICS } from './mutations'
import { fetchTopics } from '../../util/api'
import { LOADING_TOAST, ERR_TOAST } from '../user/mutations'

export default {
  async getTopics ({ commit, state }, {tab}) {
    if (state[tab].topics.length === 0) {
      commit(LOADING_TOAST, {flag: true}, {root: true})
    }
    try {
      commit(LOADING, {tab, flag: true})
      const res = await fetchTopics({page: state[tab].page, tab})
      if (res.success) {
        commit(UNSHIFT_TOPICS, {tab, topics: res.data})
        commit(PAGE_ADD_ONE, {tab})
      } else {
        commit(ERR, {tab, msg: res.error_msg})
        commit(ERR_TOAST, {message: res.error_msg}, {root: true})
      }
      if (state[tab].topics.length >= 60) {
        commit(SHIFT_TOPICS, {tab, conut: 10})
      }
    } catch (error) {
      commit(ERR, {tab, msg: error})
      commit(ERR_TOAST, {message: '未知错误'}, {root: true})
    }
    commit(LOADING, {tab, flag: false})
    commit(LOADING_TOAST, {flag: false}, {root: true})
  }
}
