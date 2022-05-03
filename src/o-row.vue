<template>
  <div class="row" :style="{marginLeft: -gutter/2 + 'px',marginRight: -gutter/2 + 'px' }">
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
