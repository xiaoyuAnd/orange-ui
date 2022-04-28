<template>
  <svg  class="r-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "r-icon",
  props:["name"]
}
</script>

<style scoped lang="scss">
.r-icon {
  width: 1em;
  height: 1em;
}
</style>
