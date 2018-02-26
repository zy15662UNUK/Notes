<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <my-middle></my-middle>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
  import Header from './/Header.vue'
  import middle from './/middle.vue'
  import Footer from './/Footer.vue'

  export default {
    components: {
      "my-header": Header,
      "my-middle": middle,
      "my-footer": Footer
    }
  };
</script>

<style>

</style>
