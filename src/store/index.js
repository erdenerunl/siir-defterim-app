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
    fillCitationList(state, initCitationList) {
      state.citationList = initCitationList
    },
    setPoemToUI(state, newPoem){
      state.poemList.push(newPoem);
    },
    setCitationToUI(state, newCitation){
      state.citationList.push(newCitation);
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
      axios.get("http://localhost:3000/citationList").then(resp => {
        commit("fillCitationList", resp.data || [])
      }).catch(err => {
        console.log(err)
      })
    },
    setPoemToDataBase({commit}, newPoem) {
      axios.post("http://localhost:3000/poemList", newPoem).then(resp => {
        commit('setPoemToUI', resp.data || [])
      })
    },
    setCitationToDataBase({commit}, newCitation) {
      axios.post("http://localhost:3000/citationList", newCitation).then(resp => {
        commit('setCitationToUI', resp.data || [])
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
    citationList: state => state.citationList,
    poemDetails: state => state.poemDetails
  },
  
  modules: {
  }
})
