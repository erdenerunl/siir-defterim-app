import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    poemList: [],
    citationList: [],
    url : "http://localhost:3000/poemList",
    poemDetails: []
  },
  mutations: {
    fillPoemList(state, initPoemList) {
      state.poemList = initPoemList;
    },
    setPoemToUI(state, newPoem){
      state.poemList.push(newPoem);
    },
    setPoemDetailsToUI(state, poemDetails) {
      state.poemDetails = poemDetails;
      console.log("committeki data", state.poemDetails);
    }
  },
  actions: {
    initApp({commit}) {
      axios.get("http://localhost:3000/poemList").then(resp => {
        commit("fillPoemList", resp.data || []);
      }).catch(err => {
        console.log(err)
      })
    },
    setPoemToDataBase({commit}, newPoem) {
      axios.post("http://localhost:3000/poemList", newPoem).then(resp => {
        commit('setPoemToUI', resp.data || [])
      })
    },
    getPoemDetails({commit, state}, poemId) {
      axios.get(`${state.url}?id=${poemId}`).then(resp => {
        console.log(resp);
        commit('setPoemDetailsToUI', resp.data || [])
      })
    }
  },
  getters: {
    _poemList: state => state.poemList,
    poemDetails: state => state.poemDetails
  },
  
  modules: {
  }
})
