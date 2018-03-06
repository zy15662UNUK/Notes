<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                 <p>{{text | toUppercase | to-lowercase}}</p>
                 <input v-model="filterText">
                 <ul>
                   <li v-for="elem in fruits">{{elem}}</li>
                 </ul>
                 <hr>
                 <ul>
                   <li v-for="elem in filterFruits">{{elem}}</li>
                 </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data: function() {
        return {
          text: "hello there",
          fruits: ["apple","banana","mango","melon"],
          filterText: ""
        };
      },
      filters: {
        toUppercase(value){
          return value.toUpperCase();
        }
      },
      computed: {
        filterFruits(){
          var self = this;
          return this.fruits.filter(function(elem){
            return elem.match(self.filterText);
          });
        }
      }
    }
</script>

<style>

</style>
