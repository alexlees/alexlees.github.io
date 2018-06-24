
export const TABS = ['ask', 'share', 'job', 'good', 'dev']
export const TABS_NAME = {
  ask: '问答',
  share: '分享',
  job: '招聘',
  good: '精华',
  dev: '测试'
}

export const CODE = {
  SUCCESS: 0,
  FAIL: 1
}

export const TAB_NAME = ['问答', '分享', '招聘', '精华']

export const REQUEST_METHODS = {
  POST: 'POST',
  GET: 'GET'
}

export default {
  BASE_URL: 'https://cnodejs.org/api/v1',
  TOPICS: {
    path: '/topics',
    methods: REQUEST_METHODS.GET,
    params: {
      page: {
        type: 'number',
        default: 1
      },
      tab: {
        validator (v) {
          return TABS.indexOf(v) !== -1
        }
      },
      limit: {
        type: 'number',
        default: 10
      },
      mdrender: {
        type: 'boolean',
        default: true
      }
    }
  },
  TOPIC: {
    path: '/topic/:id',
    paramsPath: ':id',
    methods: REQUEST_METHODS.GET,
    params: {
      mdrender: {
        type: 'boolean',
        default: true
      },
      accesstoken: {
        type: 'string'
      }
    }
  },
  POST_TOPIC: {
    path: '/topics',
    methods: REQUEST_METHODS.POST,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      },
      tab: {
        validator (v) {
          return TABS.indexOf(v) !== -1
        }
      },
      title: {
        type: 'string'
      },
      content: {
        required: true,
        validator (v) {
          return v.length >= 10
        }
      }
    }
  },
  UPDATE_TOPIC: {
    path: '/topics/update',
    methods: REQUEST_METHODS.POST,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      },
      tab: {
        validator (v) {
          return TABS.indexOf(v) !== -1
        }
      },
      topic_id: {
        type: 'string',
        required: true
      },
      title: {
        type: 'string'
      },
      content: {
        required: true,
        validator (v) {
          return v.length >= 10
        }
      }
    }
  },
  TOPIC_COLLECT: {
    path: '/topic_collect/collect',
    methods: REQUEST_METHODS.POST,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      },
      topic_id: {
        type: 'string',
        required: true
      }
    }
  },
  TOPIC_DE_COLLECT: {
    path: '/topic_collect/de_collect',
    methods: REQUEST_METHODS.POST,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      },
      topic_id: {
        type: 'string',
        required: true
      }
    }
  },
  USER_TOPIC_COLLECT: {
    path: '/topic_collect/:loginname',
    methods: REQUEST_METHODS.GET,
    paramsPath: ':loginname',
    params: {}
  },
  // post /topic/:topic_id/replies 新建评论
  POST_TOPIC_REPLIES: {
    path: '/topic/:topic_id/replies',
    paramsPath: ':topic_id',
    methods: REQUEST_METHODS.POST,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      },
      content: {
        required: true,
        validator (v) {
          return v.length >= 1
        }
      },
      reply_id: {
        type: 'string'
      }
    }
  },
  // post /reply/:reply_id/ups 为评论点赞
  POST_UP_REPLY: {
    path: '/reply/:reply_id/ups',
    paramsPath: ':reply_id',
    methods: REQUEST_METHODS.POST,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      }
    }
  },
  // get /user/:loginname 用户详情
  USER: {
    path: '/user/:loginname',
    paramsPath: ':loginname',
    methods: REQUEST_METHODS.GET,
    params: {}
  },
  // post /accesstoken 验证 accessToken 的正确性
  POST_ACCESSTOKEN: {
    path: '/accesstoken',
    methods: REQUEST_METHODS.POST,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      }
    }
  },
  // get /message/count 获取未读消息数
  MESSAGE_COUNT: {
    path: '/message/count',
    methods: REQUEST_METHODS.GET,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      }
    }
  },
  // get /messages 获取已读和未读消息
  MESSAGES: {
    path: '/messages',
    methods: REQUEST_METHODS.GET,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      },
      mdrender: {
        type: 'boolean'
      }
    }
  },
  // post /message/mark_all 标记全部已读
  POST_MARK_ALL_MESSAGE: {
    path: '/message/mark_all',
    methods: REQUEST_METHODS.POST,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      }
    }
  },
  // post /message/mark_one/:msg_id
  POST_MARK_ONE_MESSAGE: {
    path: '/message/mark_one/:msg_id',
    pathParams: ':msg_id',
    methods: REQUEST_METHODS.POST,
    params: {
      accesstoken: {
        type: 'string',
        required: true
      }
    }
  }
}
