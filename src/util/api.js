import API, {REQUEST_METHODS} from '../config/index'

export function toUrl (INFO, parmas) {
  checkParams(INFO, parmas)
  let str = ''
  let path = INFO.path
  if (INFO.paramsPath) {
    path = INFO.path.replace(INFO.paramsPath, parmas[INFO.paramsPath.slice(1)])
  }
  if (INFO.methods === REQUEST_METHODS.GET) {
    str += '?'
    for (const key in parmas) {
      if (parmas[key]) {
        str += `${encodeURIComponent(key)}=${encodeURIComponent(parmas[key])}&`
      }
    }
    str = str.slice(0, -1)
    return {
      url: API.BASE_URL + path + str
    }
  } else if (INFO.methods === REQUEST_METHODS.POST) {
    const DATA = postParam(parmas)
    return {
      url: API.BASE_URL + path,
      data: DATA
    }
  }
}
function checkParams (INFO, params) {
  // 检查是否传递 params
  if (INFO.paramsPath) {
    if (!params[INFO.paramsPath.slice(1)]) {
      throw new Error(INFO.paramsPath.slice(1))
    }
  }
  // 检查params
  if (Object.keys(INFO.params).length !== 0) {
    for (const key of Object.keys(INFO.params)) {
      if (INFO.params[key].required === true && params[key] === 'undefined') {
        throw new Error(`MUST post ${key}`)
      }
      if (typeof INFO.params[key].validator === 'function' && typeof params[key] !== 'undefined') {
        const res = INFO.params[key].validator(params[key])
        if (!res) {
          throw new Error(`${key} validator 类型错误`)
        } else {
          return true
        }
      }
      // eslint-disable-next-line
      if (INFO.params[key].type !== typeof params[key] && typeof params[key] !== 'undefined') {
        throw new Error(`${key} 存在类型错误`)
      }
    }
  }
}

function mergeParams (INFO, params) {
  const finallyParams = {}
  const defaultParams = {}
  const keys = Object.keys(INFO.params).filter((v) => INFO.params[v].default)

  for (const key of keys) {
    defaultParams[key] = INFO.params[key].default
  }
  Object.assign(finallyParams, defaultParams, params)
  return finallyParams
}

export async function fetchTopics (params = {}) {
  const URL = toUrl(API.TOPICS, mergeParams(API.TOPICS, params))
  try {
    const res = await fetch(URL.url, {
      method: API.TOPICS.methods
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export async function fetchTopic (params = {}) {
  const URL = toUrl(API.TOPIC, mergeParams(API.TOPIC, params))
  try {
    const res = await fetch(URL.url, {
      method: API.TOPIC.methods
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export async function postReply (params = {}) {
  const URL = toUrl(API.POST_TOPIC_REPLIES, mergeParams(API.POST_TOPIC_REPLIES, params))
  try {
    const res = await fetch(URL.url, {
      method: API.POST_TOPIC_REPLIES.methods,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: URL.data
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

function postParam (params) {
  const formBody = []
  for (let key in params) {
    const encodedKey = encodeURIComponent(key)
    const encodedValue = encodeURIComponent(params[key])
    if (params[key]) {
      formBody.push(`${encodedKey}=${encodedValue}`)
    }
  }
  return formBody.join('&')
}

export async function postToken (params = {}) {
  const URL = toUrl(API.POST_ACCESSTOKEN, mergeParams(API.POST_ACCESSTOKEN, params))
  try {
    const res = await fetch(URL.url, {
      method: API.POST_ACCESSTOKEN.methods,
      body: URL.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export async function fetchMessage (params = {}) {
  const URL = toUrl(API.MESSAGES, mergeParams(API.MESSAGES, params))
  try {
    const res = await fetch(URL.url, {
      method: API.MESSAGES.methods
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export async function fetchUser (params = {}) {
  const URL = toUrl(API.USER, mergeParams(API.USER, params))
  try {
    const res = await fetch(URL.url, {
      method: API.USER.methods
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export async function postUpReply (params = {}) {
  const URL = toUrl(API.POST_UP_REPLY, mergeParams(API.POST_UP_REPLY, params))
  try {
    const res = await fetch(URL.url, {
      method: API.POST_UP_REPLY.methods,
      body: URL.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export async function postTopicCollect (params = {}) {
  const URL = toUrl(API.TOPIC_COLLECT, mergeParams(API.TOPIC_COLLECT, params))
  try {
    const res = await fetch(URL.url, {
      method: API.TOPIC_COLLECT.methods,
      body: URL.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export async function postTopicDeCollect (params = {}) {
  const URL = toUrl(API.TOPIC_DE_COLLECT, mergeParams(API.TOPIC_DE_COLLECT, params))
  try {
    const res = await fetch(URL.url, {
      method: API.TOPIC_DE_COLLECT.methods,
      body: URL.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}
export async function postMarkMessage (params = {}) {
  const URL = toUrl(API.POST_MARK_ONE_MESSAGE, mergeParams(API.POST_MARK_ONE_MESSAGE, params))
  try {
    const res = await fetch(URL.url, {
      method: API.POST_MARK_ONE_MESSAGE.methods
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export async function fetchUserTopicCollect (params = {}) {
  const URL = toUrl(API.USER_TOPIC_COLLECT, mergeParams(API.USER_TOPIC_COLLECT, params))
  try {
    const res = await fetch(URL.url, {
      method: API.USER_TOPIC_COLLECT.methods
    })
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}
