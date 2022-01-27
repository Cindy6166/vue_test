import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el:'#app',
  render:c =>  c(App)
  // render:createElement =>  createElement('h1','Hello')
// render(createElement){
//   return createElement('h1','Hello')
// }
})