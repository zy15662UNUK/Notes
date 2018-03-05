<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Fuck'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">color this</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red',secondColor:'green',delay:500}">color this too</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        "local-highlight": {
          bind(el,binding,vnode){
            var delay=0;
            if (binding.modifiers["delayed"]) {
              delay = binding.value.delay;
            }
            if (binding.modifiers["blink"]) {
              var mainColor = binding.value.mainColor;
              var secondColor = binding.value.secondColor;
              var currentColor = mainColor;
              setTimeout(function(){
                setInterval(function(){
                  if(currentColor==secondColor){
                    currentColor = mainColor;
                  }else{
                    currentColor = secondColor;
                  }
                  if(binding.arg == "background"){
                    el.style.backgroundColor = currentColor;
                  }else{
                    el.style.color = currentColor;
                  }
                },1000);

              },delay);
            }
          }
        }
      }
    }
</script>

<style>

</style>
