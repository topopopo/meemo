import Vue from 'vue'
import linq from 'linq'
import * as types from '../mutation-types'

// state
export const state = {
  [types.SIGNIN_FORM]: false,
  [types.SIGNUP_FORM]: false,
  [types.GOOGLE_FORM]: false
}

// mutations
export const mutations = {
  [types.UPDATE_SIGNIN_FORM] (state, { signin }) {
    state[types.SIGNIN_FORM] = signin
  },

  [types.UPDATE_SIGNUP_FORM] (state, { signup }) {
    state[types.SIGNUP_FORM] = signup
  },

  [types.UPDATE_GOOGLE_FORM] (state, { google }) {
    state[types.GOOGLE_FORM] = google
  }
}

// actions
export const actions = {
  [types.UPDATE_SIGNIN_FORM] ({ commit }, payload) {
    commit(types.UPDATE_SIGNIN_FORM, {signin: payload})
  },

  [types.UPDATE_SIGNUP_FORM] ({ commit }, payload) {
    commit(types.UPDATE_SIGNUP_FORM, {signup: payload})
  },
  [types.UPDATE_GOOGLE_FORM] ({ commit }, payload) {
    commit(types.UPDATE_GOOGLE_FORM, {google: payload})
  }
}

// getters
export const getters = {
  [types.SIGNIN_FORM]: state => state[types.SIGNIN_FORM],
  [types.SIGNUP_FORM]: state => state[types.SIGNUP_FORM],
  [types.GOOGLE_FORM]: state => state[types.GOOGLE_FORM]
}

export default {
  state,
  mutations,
  actions,
  getters
}
