<template>
  <div class="middle">
    <h4>Quote</h4>
    <div class="text-center">
      <textarea name="name" rows="8" cols="80" id="inputArea"></textarea>
    </div>
    <button type="button" style="background-color: green;border:0;margin: 0; color: white;margin:10px auto;display:block" @click="collectInput">Add quote</button>
  </div>
</template>
<script>
export default {
  props: {
    quoteArr: Array
  },
  data: function(){
    return {
      input: ""
    };
  },
  methods: {
    collectInput() {
      this.input = document.getElementById("inputArea").value;
      this.$emit("newQuote",this.input);
    }
  }
}
</script>
<style scoped>
  .middle{
    margin-top: 20px;
  };
  .middle h4{
    margin-left: 20%;
  }
</style>
