import mutations from './mutations'
import getters from './getters'
import actions from './actions'
export default {
  namespaced: true,
  state: {
    good: {
      page: 1,
      topics: [],
      err: false,
      loading: false
    },
    job: {
      page: 1,
      topics: [],
      err: false,
      loading: false
    },
    share: {
      page: 1,
      topics: [],
      err: false,
      loading: false
    },
    dev: {
      page: 1,
      topics: [],
      err: false,
      loading: false
    },
    ask: {
      page: 1,
      topics: [],
      err: false,
      loading: false
    }
  },
  mutations,
  getters,
  actions
}
