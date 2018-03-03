<template>
  <div id="">
    <h1>Quote Added</h1>
    <div class="bar">
        <div class="bar text-center" style="background-color: green; margin: 0; color: white;padding-top:10px" :style="style()">
          {{num}}/10
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['num'],
  data: function(){
    return {

    };
  },
  methods: {
    style(){
      var Width=this.num*10+"%";
      return {width:Width};
    }
  }
}
</script>
<style scoped>
  .bar{
    width: 100%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
  }
</style>
