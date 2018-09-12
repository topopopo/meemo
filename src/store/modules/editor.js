import * as types from '../mutation-types'

// state
export const state = {
  [types.EDITOR_MODE_STATE]: 0
}

// mutations
export const mutations = {
  [types.UPDATE_EDITOR_MODE_STATE] (state, status) {
    state[types.EDITOR_MODE_STATE] = status
  }
}

// actions
export const actions = {
  [types.UPDATE_EDITOR_MODE_STATE] ({ commit }, payload) {
    commit(types.UPDATE_EDITOR_MODE_STATE, payload)
  }
}

// getters
export const getters = {
  [types.EDITOR_MODE_STATE]: state => state[types.EDITOR_MODE_STATE]
}

export default {
  state,
  mutations,
  actions,
  getters
}
