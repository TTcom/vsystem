import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  breadContentarr:[]
  },
  getters: {
      breadContentarr: state => {
        return state.breadContentarr
      }
  },
  mutations: {
	  breadContentarr(state,arr){
		  state.breadContentarr = arr;
	  },

  },
  actions: {
	  OnbreadContentarr({commit},arr){
		  commit("breadContentarr",arr)
	  },

	  
  },
  modules: {
  }
})
