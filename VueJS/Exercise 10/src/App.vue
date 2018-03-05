<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-my-vOn:mouseenter="enter">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button class="btn btn-primary"v-my-vOn:click="myAlert">alert</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        "my-vOn": {
          bind(el,binding,vnode){
            el.addEventListener(binding.arg,binding.value);
          }
        }
      },
      methods: {
        myAlert(){
          console.log(1);
          alert('eocb');
        },
        enter(){
          alert("iwucbe");
        }
      }
    }
</script>

<style>
</style>
