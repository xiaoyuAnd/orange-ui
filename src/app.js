import Vue from "vue"
import Button from "./button"
import Icon from "./icon.vue"
import ButtonGroup from "./buttonGroup"
import Input from "./input"
import Col from "./o-col"
import Row from "./o-row"
import Layout from "./l-layout"
import Header from "./l-header"
import Content from "./l-content"
import Sider from "./l-sider"
import Footer from "./l-footer"
import Toast from "./toast"
import TPlugin from "./t-plugin";

Vue.component('o-button',Button)
Vue.component('o-icon',Icon)
Vue.component('o-button-group',ButtonGroup)
Vue.component('o-input',Input)
Vue.component('o-col',Col)
Vue.component('o-row',Row)

Vue.component('o-layout',Layout)
Vue.component('o-content',Content)
Vue.component('o-sider',Sider)
Vue.component('o-header',Header)
Vue.component('o-footer',Footer)

Vue.component('o-toast',Toast)
Vue.use(TPlugin)

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
        },
        showMessage(){
            this.$toast('我是展示信息')
        }
    }
})
