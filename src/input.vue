<template>
  <div class="wrap" :class="{error:error,success:success}">
    <input type="text" :value="value" placeholder="placeholder" :disabled="disabled" :readonly="readonly"
           @change=$emit('change',$event.target.value)
           @input=$emit('input',$event.target.value)
           @focus=$emit('focus',$event.target.value)
           @blur=$emit('blur',$event.target.value)
    >

    <span v-if="error">
      <o-icon name="error"  class="icon-error"></o-icon>
      <span  class="errorMessage">{{error}}</span>
    </span>
    <span v-if="success">
      <o-icon name="nike"  class="icon-success"></o-icon>
      <span  class="successMessage">{{success}}</span>
    </span>
  </div>
</template>

<script>
import Icon from "./icon"
export default {
  name: "OInput",
  components:{
    oIcon:Icon
  },
  props:{
    value:{
      type:String,
    },
    placeholder:{
      type:String,
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readonly:{
      type:Boolean,
      default:false
    },
    error:{
      type:String,
    },
    success:{
      type:String,
    }
  }
}
</script>

<style scoped lang="scss">
//--button-height: 32px;
//--font-size: 14px;
//--button-bg: white;
//--button-active-bg: #eee;
//--border-radius: 4px;
//--color: #333;
//--border-color: #999;
//--border-color-hover: #666;

$height:36px;
$border-color: #999;
$border-color-hover: #666;
$red: #F1453D;
$green: #67c23a;
.wrap{
  display: inline-block;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  & > input{
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding-left: 1em;
    &:hover{
      border: 1px solid $border-color-hover;
    }
    &:focus{
      outline: none;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .3);
    }
    &:disabled,&:read-only{
      cursor: not-allowed;
      border: 1px solid #ddd;
      color: #ddd;
    }
  }
  &.error {
    > input { border-color: $red; color: $red;}
  }
  .icon-error { fill: $red; }
  .errorMessage { color: $red; }
  &.success {
    > input { border-color: $green; color:$green}
  }
  .icon-success { fill: $green; }
  .successMessage { color: $green; }
}
</style>
