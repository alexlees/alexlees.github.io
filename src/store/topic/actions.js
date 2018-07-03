/* eslint camelcase: 0 */
import { SET_ID, SET_TOPIC, LOADING, ERR, SET_COLLECT, SET_UP_REPLY, NEED_LOGIN } from './mutations'
import { fetchTopic, postTopicCollect, postTopicDeCollect, postUpReply } from '../../util/api'
import { ERR_TOAST, SUCCESS_TOAST, LOADING_TOAST } from '../user/mutations'

export default {
  async getTopic ({ commit, state, rootGetters }, {id}) {
    const accesstoken = rootGetters.token
    commit(SET_ID, id)
    commit(LOADING, true)
    commit(LOADING_TOAST, {flag: true}, {root: true})
    try {
      const res = await fetchTopic({id, accesstoken})
      if (res.success) {
        commit(SET_TOPIC, res.data)
      } else {
        commit(ERR, res.error_msg)
        commit(ERR_TOAST, {message: res.error_msg}, {root: true})
      }
    } catch (error) {
      commit(LOADING, false)
      commit(ERR, error)
      commit(ERR_TOAST, {message: '未知错误!'}, {root: true})
    } finally {
      commit(LOADING, false)
      commit(LOADING_TOAST, {flag: false}, {root: true})
    }
  },
  async topicCollect ({ commit, state, rootGetters }) {
    const accesstoken = rootGetters.token
    const {id} = state
    const isCollect = state.topic.is_collect
    const func = isCollect ? postTopicDeCollect : postTopicCollect
    if (!accesstoken) {
      commit(NEED_LOGIN, null, { root: true })
      return
    }
    try {
      const res = await func({accesstoken, topic_id: id})
      if (res.success) {
        const message = isCollect ? '取消成功' : '收藏成功'
        commit(SET_COLLECT, !isCollect)
        commit(SUCCESS_TOAST, {message}, {root: true})
      } else {
        commit(ERR, res.error_msg)
        commit(SUCCESS_TOAST, {message: res.error_msg}, {root: true})
      }
    } catch (error) {
      commit(ERR, error)
      commit(SUCCESS_TOAST, {message: '未知错误'}, {root: true})
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
        commit(ERR_TOAST, {message: res.error_msg}, {root: true})
      }
    } catch (error) {
      commit(ERR, error)
      commit(ERR_TOAST, {message: '未知错误'}, {root: true})
    }
  },
  deleteTopic ({commit}) {
    commit(SET_TOPIC, null)
  }
}
