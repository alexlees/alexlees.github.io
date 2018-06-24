import app from '../../main'
export const UNSHIFT_TOPICS = 'UNSHIFT_TOPICS'
export const SHIFT_TOPICS = 'SHIFT_TOPICS'
export const LOADING = 'LOADING'
export const ERR = 'ERR'
export const PAGE_ADD_ONE = 'PAGE_ADD_ONE'
export const SHOW_TOAST = 'SHOW_TOAST'
export default {
  [UNSHIFT_TOPICS] (state, {tab, topics}) {
    console.log(topics)
    state[tab].topics.unshift(...topics)
  },
  [SHIFT_TOPICS] (state, {tab, conut}) {
    state[tab].topics.splice(-conut)
  },
  [ERR] (state, {tab, msg}) {
    state[tab].err = true
    state[tab].msg = msg
    app.$toast.fail(msg)
  },
  [LOADING] (state, {tab, flag}) {
    state[tab].loading = flag
  },
  [PAGE_ADD_ONE] (state, {tab}) {
    state[tab].page += 1
  },
  [SHOW_TOAST] (state, {flag}) {
    console.log('toast')
    if (flag) {
      app.$toast.loading({mask: true, message: '初始化中....'})
    } else {
      app.$toast.clear()
    }
  }
}
