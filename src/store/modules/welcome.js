import * as types from '../mutation-types'

// state
export const state = {
  [types.WELCOME_MENU_STATE]: 1
}

// mutations
export const mutations = {
  [types.UPDATE_WELCOME_MENU_STATE] (state, status) {
    state[types.WELCOME_MENU_STATE] = status
  }
}

// actions
export const actions = {
  [types.UPDATE_WELCOME_MENU_STATE] ({ commit }, payload) {
    commit(types.UPDATE_WELCOME_MENU_STATE, payload)
  }
}

// getters
export const getters = {
  [types.WELCOME_MENU_STATE]: state => state[types.WELCOME_MENU_STATE]
}

export default {
  state,
  mutations,
  actions,
  getters
}
