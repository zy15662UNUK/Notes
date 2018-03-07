<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <input v-model="stringEx1">
                <p>{{stringEx1 | myFilter}}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <hr>
                <p>{{stringEx1 | myFilter2}}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <p>{{myFilter3}}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    import {myFilter3} from "./myFilter3.js";
    export default {
      data: function(){
        return {
          stringEx1: "",
        };
      },
      filters: {
        myFilter: function(value){
          
          return value.split("").reverse().join("");
        }
      },
      mixins: [myFilter3]


    }
</script>

<style>
</style>
