import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elRow:[]
  },
  mutations: {
    increment(state, elRow) {
        state.elRow.push(elRow)
    }
},
  actions: {
    
  }
})
