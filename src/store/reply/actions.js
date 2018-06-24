/* eslint camelcase: 0 */
import { SET_REPLY, SET_ERR } from './mutations'
import { postReply } from '../../util/api'

export default {
  async reply ({commit, rootGetters}, {content, topic_id, reply_id}) {
    const accesstoken = rootGetters.token
    const addLogo = rootGetters.addLogo
    if (!accesstoken) {
      return commit('NEED_LOGIN', null, { root: true })
    }
    try {
      if (addLogo) {
        content = content + '来自[CNode.js社区](http://alexlees.github.io)'
      }
      const res = await postReply({accesstoken, content, reply_id, topic_id})
      if (res.success) {
        commit(SET_REPLY, res)
      } else {
        commit(SET_ERR, res.error_msg)
      }
    } catch (error) {
      commit(SET_ERR, error)
    }
  }
}
