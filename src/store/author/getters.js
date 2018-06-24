export default {
  info (state) {
    if (state.author.info) {
      return state.author.info
    }
    return {}
  },
  collects (state) {
    return state.author.collects
  },
  loading (state) {
    return state.loading
  }
}
