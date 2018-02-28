<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently {{myStatus}}</p>
    </div>

</template>

<script>
  import {eventBus} from "../../main.js";
  export default{
    data: function(){
      return {
        myStatus: "not updated"
      };
    },
    created() {
      //do something after creating vue instance
      eventBus.$on("statusChanged",(d)=>{
        this.myStatus = d;
      });
    }
  };
</script>

<style>

</style>
