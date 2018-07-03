import { SET_MESSAGE, SET_LOADING, SET_ERR, MESSAGE_READ } from './mutations'
import { fetchMessage, postMarkMessage } from '../../util/api'

export default {
  async getMessage ({commit, rootGetters}) {
    commit(SET_LOADING, true)
    const accesstoken = rootGetters.token
    if (!accesstoken) {
      setTimeout(() => {
        commit(SET_LOADING, false)
      }, 200)
      commit('NEED_LOGIN', null, { root: true })
      return
    }
    try {
      const res = await fetchMessage({accesstoken})
      if (res.success) {
        commit(SET_MESSAGE, res.data)
      } else {
        commit(SET_ERR, {tag: true, msg: res.error_msg})
      }
      commit(SET_LOADING, false)
    } catch (error) {
      console.error(error)
      commit(SET_ERR, {tag: true, msg: error})
      commit(SET_LOADING, false)
    }
  },
  async markMessage ({commit, rootGetters}, {id}) {
    const accesstoken = rootGetters.token
    try {
      const res = await postMarkMessage({accesstoken, msg_id: id})
      if (res.success) {
        commit(MESSAGE_READ, {id: res.data.marked_msg_id})
      } else {
        commit(SET_ERR, {tag: true, msg: res.error_msg})
      }
    } catch (error) {
      console.error(error)
      commit(SET_ERR, {tag: true, msg: error})
    }
  }
}
