import { UNSHIFT_TOPICS, LOADING, ERR, PAGE_ADD_ONE, SHIFT_TOPICS, SHOW_TOAST } from './mutations'
import { fetchTopics } from '../../util/api'

export default {
  async getTopics ({ commit, state }, {tab}) {
    if (state[tab].topics.length === 0) {
      commit(SHOW_TOAST, {flag: true})
    }
    try {
      commit(LOADING, {tab, flag: true})
      const res = await fetchTopics({page: state[tab].page, tab})
      if (res.success) {
        commit(UNSHIFT_TOPICS, {tab, topics: res.data})
        commit(PAGE_ADD_ONE, {tab})
        setTimeout(() => {
          commit(LOADING, {tab, flag: false})
        }, 500)
      } else {
        commit(LOADING, {tab, flag: false})
        commit(ERR, {tab, msg: res})
      }
      if (state[tab].topics.length >= 60) {
        commit(SHIFT_TOPICS, {tab, conut: 10})
      }
      setTimeout(() => {
        commit(SHOW_TOAST, {flag: false})
      }, 500)
    } catch (error) {
      commit(LOADING, {tab, flag: false})
      commit(ERR, {tab, msg: error})
    }
  }
}
