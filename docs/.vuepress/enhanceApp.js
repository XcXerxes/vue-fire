import Box from './theme/box'
import Vuecode from 'viewcode/dist/vuecode.common.js'
import 'viewcode/dist/vuecode.css'
import './main.scss'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  console.log('=============options',options)
  console.log('==============siteData', siteData)
  Vue.use(Vuecode,{
    theme:'flat'
  })
  Vue.component('Box', Box)
}