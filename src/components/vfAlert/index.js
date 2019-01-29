import VfAlert from './vfAlert.vue'

export default Vue => {
  console.log(VfAlert.name)
  Vue.component(VfAlert.name, VfAlert)
}
