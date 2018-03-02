<template>
  <div id="">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr>
    <div class="">
      <slot name="content">abc</slot>
    </div>
    <slot name="subtitle">slot default</slot>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  div{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: auto;
    text-align: center;
  }
  h2{
    color: red
  }
</style>
