//import vue for Vue.use(), since vuex have to be implemented before store
import Vue from 'vue'
//import Vuex
import Vuex from 'vuex'
Vue.use(Vuex)


const actions = {
  // plus(context, value){
  //   // console.log('action',context,value)
  //   context.commit('PLUS', value)
  // },
  // minus(context, value){
  //   context.commit('MINUS', value)
  // },
  plusOdd(context, value){
    if(state.sum % 2){
      context.commit('PLUS', value)
    }
  },
  plusWait(context, value){
    setTimeout(() => {
        context.commit('PLUS', value)
    }, 500);
  },
}

const mutations = {
  PLUS(state, value){
    // console.log('mu',state,value)
    state.sum += value
  },
  MINUS(state, value){
    // console.log('mu',state,value)
    state.sum -= value
  }
}

const state = {
    sum: 0,
}

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