/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import axios from 'axios';
import translate from 'translate';

const actions = {

  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////

  // Vertical NavMenu
  updateVerticalNavMenuWidth({commit}, width) {
    commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
  },

  // VxAutoSuggest
  updateStarredPage({commit}, payload) {
    commit('UPDATE_STARRED_PAGE', payload)
  },

  // The Navbar
  arrangeStarredPagesLimited({commit}, list) {
    commit('ARRANGE_STARRED_PAGES_LIMITED', list)
  },
  arrangeStarredPagesMore({commit}, list) {
    commit('ARRANGE_STARRED_PAGES_MORE', list)
  },

  // /////////////////////////////////////////////
  // UI
  // /////////////////////////////////////////////

  toggleContentOverlay({commit}) {
    commit('TOGGLE_CONTENT_OVERLAY')
  },
  updateTheme({commit}, val) {
    commit('UPDATE_THEME', val)
  },

  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////

  updateUserInfo({commit}, payload) {
    commit('UPDATE_USER_INFO', payload)
  },

  /* CRUD básico */
  get({commit}, dados) {
    return new Promise((resolve, reject) => {
      axios.get(`/${dados.rota}`, {params: dados.params})
        .then((response) => {
          console.log('retorno', response)
          commit('SET_VARIOS', response.data.data);
          resolve(response.data.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getGeracaos({commit}, dados) {
    return new Promise((resolve, reject) => {
      axios.get(dados.url, {params: dados.params})
        .then((response) => {
          console.log('retorno', response)
          commit('SET_GERACOES', response.data.results);
          resolve(response.data.results)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getItems({commit}, dados) {
    return new Promise((resolve, reject) => {
      axios.get(dados.url,)
        .then((response) => {
          console.log('retorno', response)
          commit('SET_ITEMS', response.data);
          resolve(response.data.results)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  setHistory({commit}, dados) {
    return new Promise((resolve, reject) => {

      commit('SET_HISTORY', dados);
      resolve(dados)
    })

  },
  removeHistory({commit}, dados) {
    return new Promise((resolve, reject) => {
      commit('POP_HISTORY', dados);
      resolve(dados)
    })

  },
  clearHistory({commit}, dados) {
    commit('CLEAR_HISTORY');
  },

}

export default actions
