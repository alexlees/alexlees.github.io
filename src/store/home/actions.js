import { UNSHIFT_TOPICS, LOADING, ERR, PAGE_ADD_ONE, SHIFT_TOPICS, SHOW_TOAST } from './mutations'
import { fetchTopics } from '../../util/api'

export default {
  async getTopics ({ commit, state }, init = false) {
    try {
      commit(LOADING, true)
      if (init) {
        commit(SHOW_TOAST, true)
      }
      const res = await fetchTopics({page: state.page})
      if (res.success) {
        commit(UNSHIFT_TOPICS, res.data)
        commit(PAGE_ADD_ONE)
        setTimeout(() => {
          commit(LOADING, false)
        }, 500)
      } else {
        commit(LOADING, false)
        commit(ERR, res)
      }
      if (state.topics.length >= 60) {
        commit(SHIFT_TOPICS, 10)
      }
      commit(SHOW_TOAST, false)
    } catch (error) {
      commit(LOADING, false)
      commit(ERR, error)
      commit(SHOW_TOAST, false)
    }
  }
}
