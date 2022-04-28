import Vue from "vue"
import Button from "./button"
import Icon from "./icon.vue"
import ButtonGroup from "./buttonGroup"

Vue.component('r-button',Button)
Vue.component('r-icon',Icon)
Vue.component('r-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        a:11,
        loading1:false,
        loading2:true,
        loading3:false,
    }
})
