<template>
  <div class="">
    <p>Counter is: {{ doubleCounter }}</p>
    <hr>
    <p>counter string is: {{stringCounter}}</p>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        computed: {
          ...mapGetters([
          "doubleCounter",
          "stringCounter"
        ])
      },
    }
</script>
