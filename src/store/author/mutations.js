import app from '../../main'
export const SET_ERR = 'SET_ERR'
export const SET_AUTHOR_INFO = 'SET_AUTHOR_INFO'
export const SET_AUTHOR_COLLECTS = 'SET_AUTHOR_COLLECTS'
export const SET_LOADING = 'SET_LOADING'
export const NEED_ROUTER = 'NEED_ROUTER'

export default {
  [SET_ERR] (state, {flag, msg}) {
    state.err = flag
  },
  [SET_AUTHOR_INFO] (state, {data}) {
    if (data) {
      state.author.info = data
    }
  },
  [SET_AUTHOR_COLLECTS] (state, {data}) {
    if (data) {
      state.author.collects = data
    }
  },
  [SET_LOADING] (state, {flag}) {
    state.loading = flag
  },
  NEED_ROUTER (state, path) {
    app.$router.push(path)
  }
}
