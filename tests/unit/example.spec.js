import { shallowMount } from '@vue/test-utils'
import Biblioteca from '../../src/views/biblioteca/Index.vue'

describe('Biblioteca.vue', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(Biblioteca)
  })


  test('O evento do-sign-in é disparado quando o vm.submit() é executado', () => {
    console.log(wrapper.getGeracaos())

  })

})
