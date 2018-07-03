/* eslint camelcase: 0 */
export const PUSH_AT_USER = 'PUSH_AT_USER'
export const REMOVE_AT_USER = 'REMOVE_AT_USER'
export const SET_REPLY = 'SET_REPLY'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERR = 'SET_ERR'

export default {
  [PUSH_AT_USER] (state, user) {
    state.at.push(user)
  }
}
