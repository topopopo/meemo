import * as types from '../mutation-types'

// state
export const state = {
  [types.WELCOME_MENU_STATE]: 0,
  [types.WELCOME_ALL_STATE]: true,
  [types.SUCCESS_MODAL_STATE]: false
}

// mutations
export const mutations = {
  [types.UPDATE_WELCOME_MENU_STATE] (state, status) {
    state[types.WELCOME_MENU_STATE] = status
  },
  [types.UPDATE_WELCOME_ALL_STATE] (state, status) {
    state[types.WELCOME_ALL_STATE] = status
  },
  [types.UPDATE_SUCCESS_MODAL_STATE] (state, status) {
    state[types.SUCCESS_MODAL_STATE] = status
  }
}

// actions
export const actions = {
  [types.UPDATE_WELCOME_MENU_STATE] ({ commit }, payload) {
    commit(types.UPDATE_WELCOME_MENU_STATE, payload)
  },
  [types.UPDATE_WELCOME_ALL_STATE] ({ commit }, payload) {
    commit(types.UPDATE_WELCOME_ALL_STATE, payload)
  },
  [types.UPDATE_SUCCESS_MODAL_STATE] ({ commit }, payload) {
    commit(types.UPDATE_SUCCESS_MODAL_STATE, payload)
  }
}

// getters
export const getters = {
  [types.WELCOME_MENU_STATE]: state => state[types.WELCOME_MENU_STATE],
  [types.WELCOME_ALL_STATE]: state => state[types.WELCOME_ALL_STATE],
  [types.SUCCESS_MODAL_STATE]: state => state[types.SUCCESS_MODAL_STATE]
}

export default {
  state,
  mutations,
  actions,
  getters
}
