export const UNSHIFT_TOPICS = 'UNSHIFT_TOPICS'
export const SHIFT_TOPICS = 'SHIFT_TOPICS'
export const LOADING = 'LOADING'
export const ERR = 'ERR'
export const PAGE_ADD_ONE = 'PAGE_ADD_ONE'
export default {
  [UNSHIFT_TOPICS] (state, {tab, topics}) {
    state[tab].topics.unshift(...topics)
  },
  [SHIFT_TOPICS] (state, {tab, conut}) {
    state[tab].topics.splice(-conut)
  },
  [ERR] (state, {tab, msg}) {
    state[tab].err = true
    state[tab].msg = msg
  },
  [LOADING] (state, {tab, flag}) {
    state[tab].loading = flag
  },
  [PAGE_ADD_ONE] (state, {tab}) {
    state[tab].page += 1
  }
}
