import './main.scss'
import Vuefire from '../../src'
import Box from './theme/box'
import Vuecode from 'viewcode/dist/vuecode.common.js'
import 'viewcode/dist/vuecode.css'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Vuefire)
  Vue.use(Vuecode,{
    theme:'flat'
  })
  Vue.component('Box', Box)
}