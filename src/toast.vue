<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OToast",
  props:{
    autoClose:{
      type:String,
      default:true
    },
    autoCloseDelay:{
      type:Number,
      default: 3
    }
  },
  mounted() {
    if(this.autoClose){
      setTimeout(()=>{
        this.close()
      },this.autoCloseDelay*1000)
    }

  },
  methods:{
    close(){
      this.$el.remove()
      this.$destroy()
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size; height: $toast-height; line-height: 1.8;
  position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  padding: 0 16px;
}
</style>
