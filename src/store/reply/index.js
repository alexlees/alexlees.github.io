import mutations from './mutations'
import getters from './getters'
import actions from './actions'
export default {
  namespaced: true,
  state: {
    reply: null,
    at: [],
    err: false,
    loading: false,
    errmsg: ''
  },
  mutations,
  getters,
  actions
}
