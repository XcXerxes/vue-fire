import Box from './theme/box'
import './main.scss'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  console.log('=============options',options)
  console.log('==============siteData', siteData)
  Vue.component('Box', Box)
}