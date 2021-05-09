import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    poemList: [],
    citationList: [],
    url : "http://localhost:3000/poemList"
  },
  mutations: {
    fillPoemList(state, initPoemList) {
      state.poemList = initPoemList
    },
    setPoemToUI(state, newPoem){
      state.poemList.push(newPoem);
    }
  },
  actions: {
    initApp({commit}) {
      axios.get("http://localhost:3000/poemList").then(resp => {
        commit("fillPoemList", resp.data)
      })
    },

    setPoemToDataBase({commit}, newPoem) {
      
      axios.post("http://localhost:3000/poemList", newPoem).then(resp => {
        commit('setPoemToUI', resp.data )
      })

    }
  },
  getters: {
    _poemList: state => state.poemList
  },
  
  modules: {
  }
})
