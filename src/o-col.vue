<template>
  <div class="col" :class="comClass" :style=" comPadding">
    <div style="border: 1px solid green;height: 100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "OCol",
  computed:{
    comPadding(){
      return {paddingLeft:this.gutter/2 + 'px',paddingRight:this.gutter/2 + 'px'}
    },
    comClass(){
      return [this.span && `col-${this.span}`,this.offset && `offset-${this.offset}`]
    }
  },
  data(){
    return{
      gutter:0
    }
  },
  props:{
    span:{
      type:[String,Number]
    },
    offset:{
      type:[String,Number]
    },

  }
}
</script>

<style scoped lang="scss">
.col {
  //border: 1px solid #ccc;
  //background: grey;
  color: orange;
  //padding: 0 10px;
  width: 50%;
  height: 100px;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc(($n / 24) * 100%);
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: calc(($n / 24) * 100%);
    }
  }
}
</style>
