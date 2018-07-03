/* eslint camelcase: 0 */
import { postReply } from '../../util/api'
import { SUCCESS_TOAST, ERR_TOAST } from '../user/mutations'

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
        commit(SUCCESS_TOAST, {message: '评论成功'}, {root: true})
      } else {
        commit(ERR_TOAST, {message: res.error_msg}, {root: true})
      }
    } catch (error) {
      commit(ERR_TOAST, {message: '未知错误'}, {root: true})
    }
  }
}
