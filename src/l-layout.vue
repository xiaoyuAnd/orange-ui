<template>
  <div class="layout" :class="{'hasSider':hasSider}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OLayout",
  data() {
    return {
        hasSider: false
    }
  },
  mounted() {
    // console.log(this.$children[0].$options)
    this.$children.forEach((vm) => {
      // console.log(vm.$options.name)
      if ('OSider' === vm.$options.name) {
        this.hasSider = true
      }
    })
  }
}
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hasSider{
    flex-direction: row;
  }
}
</style>
