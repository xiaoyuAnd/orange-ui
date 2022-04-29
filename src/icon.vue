<template>
  <svg  class="r-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import  "./svg"
export default {
  name: "OIcon",
  props:["name"]
}
</script>

<style scoped lang="scss">
.r-icon {
  width: 1em;
  height: 1em;
}
</style>
