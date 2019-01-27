import Vue from 'vue'
import App from './App'
import Vuefire from './'
Vue.use(Vuefire)

new Vue({
  render: h => h(App)
}).$mount('#app')
