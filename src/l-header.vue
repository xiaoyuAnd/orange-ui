<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OHeader"
}
</script>

<style scoped lang="scss">
.header{
  border: 1px solid red;
}
</style>
