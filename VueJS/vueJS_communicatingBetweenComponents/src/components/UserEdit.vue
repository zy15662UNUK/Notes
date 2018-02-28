<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button type="button" name="button" @click="editAge">Edit age</button>
         <p>age is {{userAge}}</p>
    </div>
</template>

<script>
import {eventBus} from "../main.js"
  export default{
    props: ['userAge'],
    methods:{
      editAge(){
        this.userAge = 30;
        // this.$emit("ageEdit",this.userAge);
        eventBus.$emit("ageEdit",this.userAge);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
