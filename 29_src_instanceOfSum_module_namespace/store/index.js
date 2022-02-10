//import vue for Vue.use(), since vuex have to be implemented before store
import Vue from 'vue'
//import Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})
