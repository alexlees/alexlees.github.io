import app from '../../main'
export const NEED_LOGIN = 'NEED_LOGIN'
export const SET_ID = 'SET_ID'
export const SET_TOPIC = 'SET_TOPIC'
export const SET_COLLECT = 'SET_COLLECT'
export const LOADING = 'LOADING'
export const ERR = 'ERR'
export const CALL_BACK = 'CALL_BACK'
export const SET_UP_REPLY = 'SET_UP_REPLY'

export default {
  [SET_ID] (state, id) {
    state.id = id
  },
  [SET_TOPIC] (state, topic) {
    state.topic = topic
  },
  [LOADING] (state, tag) {
    if (tag) {
      app.$toast.loading({message: '加载中...', mask: true})
    } else {
      app.$toast.clear()
    }
    state.loading = tag
  },
  [ERR] (state, msg) {
    app.$toast.fail(msg)
    state.msg = msg
  },
  [SET_COLLECT] (state, tag) {
    const message = tag ? '收藏成功！' : '取消收藏！'
    app.$toast.success({duration: 500, message})
    state.topic.is_collect = tag
  },
  [CALL_BACK] (state, path) {
    if (path && typeof path === 'string') {
      app.$router.push(path)
    }
  },
  [SET_UP_REPLY] (state, {flag, id}) {
    state.topic.replies.forEach((item) => {
      if (item.id === id) {
        if (flag === 'up') {
          item.is_uped = true
          item.ups.push('点赞')
        } else {
          item.is_uped = false
          item.ups.pop()
        }
      }
    })
  }
}
