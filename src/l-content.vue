<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OContent"
}
</script>

<style scoped lang="scss">
.content{
  border:1px solid red;
  flex-grow:1;
}
</style>
