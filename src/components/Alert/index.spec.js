import { shallowMount } from '@vue/test-utils'
import Alert from './index.vue'

describe('alert.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'hello'
    const wrapper = shallowMount(Alert, {
      propsData: { msg }
    })
    console.log('=====', wrapper.props())
    expect(wrapper.props().msg).toBe(msg)
  })
})
