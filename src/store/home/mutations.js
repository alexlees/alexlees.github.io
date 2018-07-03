export const PUSH_TOPICS = 'PUSH_TOPICS'
export const UNSHIFT_TOPICS = 'UNSHIFT_TOPICS'
export const SHIFT_TOPICS = 'SHIFT_TOPICS'
export const LOADING = 'LOADING'
export const ERR = 'ERR'
export const PAGE_ADD_ONE = 'PAGE_ADD_ONE'

export default {
  [PUSH_TOPICS] (state, topics) {
    state.topics.push(...topics)
  },
  [UNSHIFT_TOPICS] (state, topics) {
    state.topics.unshift(...topics)
  },
  [SHIFT_TOPICS] (state, conut) {
    state.topics.splice(-conut)
  },
  [ERR] (state, msg) {
    state.err = true
    state.msg = msg
  },
  [LOADING] (state, flag) {
    state.loading = flag
  },
  [PAGE_ADD_ONE] (state) {
    state.page += 1
  }
}
