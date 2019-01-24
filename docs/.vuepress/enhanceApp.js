import Box from './theme/box'

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