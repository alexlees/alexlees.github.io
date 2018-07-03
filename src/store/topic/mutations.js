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
    state.loading = tag
  },
  [ERR] (state, msg) {
    state.msg = msg
  },
  [SET_COLLECT] (state, tag) {
    state.topic.is_collect = tag
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
