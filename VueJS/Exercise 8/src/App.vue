<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="color='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="color='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="color='appRed'">Load Red Template</button>
                <hr>
                <component :is="color"><h4>This is the caption</h4></component>
                <app-blue><h1>Fuck</h1></app-blue>
                <app-green><h1>Fuck</h1></app-green>
                <app-red><h1>Fuck</h1></app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
          return {
            color: "appBlue"
          };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
