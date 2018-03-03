<template>
  <div class="row">
    <div v-for="(quote,index) in quoteArray" style="width:100%;text-align:center">
      <div class="col-sm-6 col-md-4 col-lg-3 quote" @click="clickQuote(index)">
        <div style="border: 1px solid gray;padding:10px;">
          {{quote}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['quoteArr'],
  data: function(){
    return {
      quoteArray: this.quoteArr
    };
  },
  methods: {
    clickQuote(e) {
      this.quoteArr.splice(e,1);
      this.$emit("changeArr",this.quoteArr);
    }
  }
}
</script>
<style scoped>
.quote{
  height: 100px;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  font-family: 'Pacifico', cursive;
}
.quote div:hover{
  background-color: pink;
}
</style>
