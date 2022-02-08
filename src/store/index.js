//import vue for Vue.use(), since vuex have to be implemented before store
import Vue from 'vue'
//import Vuex
import Vuex from 'vuex'
Vue.use(Vuex)


const actions = {}

const mutations = {}

const state = {}

export default new Vuex.Store({
    actions,
    mutations,
    state
})

// const store = new Vuex.Store({
//     actions, // actions = actions (重名可觸發object的簡寫)
//     mutations,
//     state,
// })

// export default store