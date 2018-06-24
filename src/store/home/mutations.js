import app from '../../main'
export const PUSH_TOPICS = 'PUSH_TOPICS'
export const UNSHIFT_TOPICS = 'UNSHIFT_TOPICS'
export const SHIFT_TOPICS = 'SHIFT_TOPICS'
export const LOADING = 'LOADING'
export const ERR = 'ERR'
export const PAGE_ADD_ONE = 'PAGE_ADD_ONE'
export const SHOW_TOAST = 'SHOW_TOAST'

export default {
  [PUSH_TOPICS] (state, topics) {
    state.topics.push(...topics)
  },
  [UNSHIFT_TOPICS] (state, topics) {
    console.log(topics)
    state.topics.unshift(...topics)
  },
  [SHIFT_TOPICS] (state, conut) {
    state.topics.splice(-conut)
  },
  [ERR] (state, msg) {
    state.err = true
    state.msg = msg
    app.$toast.fail(msg)
  },
  [LOADING] (state, flag) {
    state.loading = flag
  },
  [SHOW_TOAST] (state, flag) {
    if (flag) {
      app.$toast.loading({
        mask: true,
        message: '初始化...'
      })
    } else {
      app.$toast.clear()
    }
  },
  [PAGE_ADD_ONE] (state) {
    state.page += 1
  }
}
