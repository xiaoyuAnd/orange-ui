<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]" :style="{paddingLeft:gutter/2 + 'px',paddingRight:gutter/2 + 'px'}">
    <div style="border: 1px solid green;height: 100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "OCol",
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
