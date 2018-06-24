export default {
  set (key, value) {
    try {
      const str = JSON.stringify(value)
      console.assert(str)
      return localStorage.setItem(key, str)
    } catch (error) {
      console.error('key', key)
      console.error(error)
    }
  },
  get (key) {
    if (!key) {
      return null
    }
    try {
      const res = localStorage.getItem(key)
      return JSON.parse(res)
    } catch (error) {
      console.error('key', key)
      console.error(error)
    }
  },
  clear () {
    try {
      return localStorage.clear()
    } catch (error) {
      console.error(error)
    }
  },
  remove (key) {
    if (key) {
      try {
        return localStorage.clear()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
