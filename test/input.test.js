

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    it('props/v.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: '1234'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('input')
        expect(useElement.value).to.equal('1234')
        vm.$destroy()
    })
    it('props/p.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                placeholder:'1234'
            }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.placeholder).to.equal('1234')
        vm.$destroy()
    })
    // it('props/p.', () => {
    //     const Constructor = Vue.extend(Input)
    //     const vm = new Constructor({
    //         propsData: {
    //             disabled:true
    //         }
    //     }).$mount()
    //     const useElements = vm.$el.querySelectorAll('input')
    //     expect(useElements.disabled).to.equal('true')
    //     vm.$destroy()
    // })

})
