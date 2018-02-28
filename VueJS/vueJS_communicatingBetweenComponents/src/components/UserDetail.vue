<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{switchName()}}</p>
        <p>age is {{userAge}}</p>
        <button type="button" name="button" @click="resetName()">Reset name</button>
        <button type="button" name="button" @click="resetFun()">Reset name</button>
    </div>
</template>

<script>
import {eventBus} from "../main.js"

  export default {
    props: {
      name: [Array,String],
      resetFun: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      },
      resetName(){
        this.name="max";
        this.$emit("nameWasReset",this.name);
      }
    },
    created() {
      //do something after creating vue instance
      eventBus.$on("ageEdit",(ageData) => {
        this.userAge = ageData;
      });
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
