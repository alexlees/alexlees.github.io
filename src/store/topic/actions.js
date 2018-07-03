/* eslint camelcase: 0 */
import { SET_ID, SET_TOPIC, LOADING, ERR, SET_COLLECT, SET_UP_REPLY, NEED_LOGIN } from './mutations'
import { fetchTopic, postTopicCollect, postTopicDeCollect, postUpReply } from '../../util/api'

export default {
  async getTopic ({ commit, state, rootGetters }, {id}) {
    const accesstoken = rootGetters.token
    commit(SET_ID, id)
    try {
      commit(LOADING, true)
      const res = await fetchTopic({id, accesstoken})
      if (res.success) {
        setTimeout(() => {
          commit(SET_TOPIC, res.data)
          commit(LOADING, false)
        }, 200)
      } else {
        commit(ERR, res.error_msg)
        commit(LOADING, false)
      }
    } catch (error) {
      commit(LOADING, false)
      commit(ERR, error)
    }
  },
  async topicCollect ({ commit, state, rootGetters }) {
    const accesstoken = rootGetters.token
    const {id} = state
    const isCollect = state.topic.is_collect
    const func = isCollect ? postTopicDeCollect : postTopicCollect
    if (!accesstoken) {
      commit(NEED_LOGIN, null, { root: true })
      console.log('accesstoken', accesstoken)
      return
    }
    try {
      const res = await func({accesstoken, topic_id: id})
      if (res.success) {
        commit(SET_COLLECT, !isCollect)
      } else {
        commit(ERR, res.error_msg)
      }
    } catch (error) {
      commit(ERR, error)
    }
  },
  async upReply ({ commit, state, rootGetters }, {reply_id}) {
    const accesstoken = rootGetters.token
    if (!accesstoken) {
      console.log('accesstoken', accesstoken)
      return commit(NEED_LOGIN, null, { root: true })
    }
    try {
      const res = await postUpReply({accesstoken, reply_id})
      if (res.success) {
        commit(SET_UP_REPLY, {flag: res.action, id: reply_id})
      } else {
        commit(ERR, res.error_msg)
      }
    } catch (error) {
      commit(ERR, error)
    }
  },
  deleteTopic ({commit}) {
    commit(SET_TOPIC, null)
  }
}
