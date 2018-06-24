/* eslint camelcase: 0 */
// import app from '../../main'
export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERR = 'SET_ERR'

export default {
  [SET_MESSAGE] (state, {hasnot_read_messages, has_read_messages}) {
    state.none = hasnot_read_messages
    state.read = has_read_messages
    state.err = false
  },
  [SET_LOADING] (state, tag) {
    if (tag) {
      // TODO
    }
    state.loading = tag
  },
  [SET_ERR] (state, {tag, msg}) {
    if (tag) {
      // TODO
    }
    state.tag = tag
    state.errmsg = msg
  }
}
