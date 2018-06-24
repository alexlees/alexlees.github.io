import mutations from './mutations'
import getters from './getters'
import actions from './actions'
export default {
  namespaced: true,
  state: {
    topics: [],
    page: 1,
    err: false,
    loading: false,
    msg: ''
  },
  mutations,
  getters,
  actions
}
