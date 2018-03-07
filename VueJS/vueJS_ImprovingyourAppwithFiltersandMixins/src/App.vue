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
                 <hr>
                 <appList></appList>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "./List.vue"
    import {fruitMixin} from "./fruitMixin.js"
    export default {
      data: function() {
        return {
          text: "hello there",
        };
      },
      filters: {
        toUppercase(value){
          return value.toUpperCase();
        }
      },
      components: {
        appList: List,
      },
      mixins: [fruitMixin]
    }
</script>

<style>

</style>
