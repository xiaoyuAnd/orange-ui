<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OCol",
  props:{
    span:{
      type:[String,Number]
    }
  }
}
</script>

<style scoped lang="scss">
.col {
  border: 1px solid #ccc;
  background: orange;
  width: 50%;
  height: 100px;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc(($n / 24) * 100%);
    }
  }
}
</style>
