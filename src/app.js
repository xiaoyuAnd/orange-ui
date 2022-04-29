import Vue from "vue"
import Button from "./button"
import Icon from "./icon.vue"
import ButtonGroup from "./buttonGroup"
import Input from "./input"

Vue.component('o-button',Button)
Vue.component('o-icon',Icon)
Vue.component('o-button-group',ButtonGroup)
Vue.component('o-input',Input)
new Vue({
    el:'#app',
    data:{
        message:'双向绑定',
        loading1:false,
        loading2:true,
        loading3:false,
    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    }
})
