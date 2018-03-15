<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by:50,time:500})">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";
    import {mapActions} from "vuex";
    export default {
        methods: {
            ...mapMutations([
              "increment",
              "decrement"
            ]),
            ...mapActions([
              "increment",
              "decrement",
              "asyncIncrement"
            ])
        }
    }
</script>
