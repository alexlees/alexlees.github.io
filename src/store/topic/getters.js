export default {
  topic (state) {
    if (state.topic) {
      return state.topic
    }
    return {}
  },
  isLoading (state) {
    return state.loading
  },
  isErr (state) {
    return state.err
  },
  author (state) {
    if (state.topic) {
      return state.topic.author
    }
    return null
  },
  collect (state) {
    if (state.topic) {
      return state.topic.is_collect
    }
    return false
  },
  replies (state) {
    if (state.topic) {
      return state.topic.replies
    }
    return []
  },
  images (state) {
    if (state.topic) {
      const reg = /<img src="(\S+?)".+?>/g
      const res = state.topic.content.match(reg)
      return res || []
    }
    return []
  }
}
