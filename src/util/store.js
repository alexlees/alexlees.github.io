export default {
  set (key, value) {
    if (key && value) {
      const str = JSON.stringify(value)
      console.assert(str)
      return localStorage.setItem(key, str)
    }
  },
  get (key) {
    if (key) {
      let res = localStorage.getItem(key)
      console.log(res)
      return JSON.parse(res)
    }
  },
  clear () {
    localStorage.clear()
  },
  remove (key) {
    if (key) {
      return localStorage.removeItem(key)
    }
  }
}
