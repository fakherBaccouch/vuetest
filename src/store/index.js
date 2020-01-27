import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: [
      { id: 1, name: "HTML5" },
      { id: 2, name: "CSS3" },
      { id: 3, name: "JAVASCRIPT" },
    ]
  },
  getters: {
    skills(state) {
      return state.skills
    }

  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
