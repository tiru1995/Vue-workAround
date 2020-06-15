import { shallow,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App.vue'
import Pet from '@/views/Pet.vue'
import Home from '@/views/Home.vue'


const localVue = createLocalVue()
localVue.use(Vuex)


describe('App', () => {
  it('renders div with id nav', () => {
    const wrapper = shallow(App)
    wrapper.expect('#nav').toHaveLength(1)
  })

  it('renders a species from query string', () => {
    const species = 'dogs'
    const wrapper = shallow(Pet, {
      mocks: {
        $route: {
          params: { species }
        }
      }
    })

    expect(wrapper.find('.pets').text()).toBe(species)
  })
  // it('renders props.msg when passed', () => {
  //   const wrapper = shallowMount(Home)
  //   wrapper.expect('#nav').toHaveLength(1)
  // })
})
