<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                 <input v-model="filterText">
                 <ul>
                   <li v-for="elem in filterFruits">{{elem}}</li>
                 </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {fruitMixin} from "./fruitMixin.js"
    export default {
      mixins: [fruitMixin]
    }
</script>

<style>

</style>
