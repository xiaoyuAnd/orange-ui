<template>
  <div class="row" :style="comMargin">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ORow",
  props:{
    gutter:{
      type:[String,Number]
    }
  },
  computed:{
   comMargin(){
      return {marginLeft: -this.gutter/2 + 'px',marginRight: -this.gutter/2 + 'px'}
    }
  },
  mounted() {
    // console.log(this.$children)
    this.$children.forEach((el)=>{
      el.gutter = this.gutter
      // console.log(el)
    })
  }
}
</script>

<style scoped lang="scss">
.row{
  display: flex;
}
</style>
