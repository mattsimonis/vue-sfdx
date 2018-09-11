import Vue from 'vue'
import Vuex from 'vuex'
import accountsApi from '@/api/accounts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    accounts: null
  },
  getters: {
    getAccount: (state, {dispatch}) => accountId => {
      return state.accounts ? state.accounts.find(accountId => {
        return account.id === accountId
      }) : {}
    }
  },
  mutations: {
    setAccounts: (state, payload) => { state.accounts = payload }
  },
  actions: {
    getAllAccounts: ({commit}) => {
      accountsApi.getAllAccounts(accounts => {
        commit('setAccounts', accounts)
      })
    }
  }
})