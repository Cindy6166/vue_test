import Vue from 'vue'
import App from './App.vue'

// wholly import
// import ElementUI
// import ElementUI from 'element-ui';
// import whole css style
// import 'element-ui/lib/theme-chalk/index.css';

//partly import
import { Button,Row,DatePicker } from 'element-ui'

Vue.config.productionTip = false

// apply
// Vue.use(ElementUI);
Vue.component('my-button',Button)
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);


new Vue({
  el: '#app',
  render: h => h(App),
})
