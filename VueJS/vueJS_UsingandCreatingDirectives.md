##### Understanding Directives
- v-text="'string'"
- v-html="'<strong></strong>'"
##### How Directives Work - Hook Functions
- bind(el,binding,vnode): once directive is attached. Argument binding,vnode should be treated as read only
- inserted(el,binding,vnode): inserted in parent node
- update(el,binding,vnode,oldVnold): once component is updated without children
- componentUpdated(el,binding,vnode,oldVnold) once component is updated with children
- unbind(el,binding,vnode): once directive is removed
##### Custom directives--Creating a Simple Directive
- In main.js create the directive:

```
import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{
  bind(el,binding,vnode){
    el.style.backgroundColor='green';
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
```
- In vue.js, when using this :

```
<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <h1>Custom Directives</h1>
    <p v-highlight>color this</p>
</div>
```
-Then is "<p>" tag has a backgroundColor of green

##### Passing Values to Custom Directives
- In main.js:

```
Vue.directive('highlight',{
  bind(el,binding,vnode){
    el.style.backgroundColor = binding.value;
  }
```
- binding is the value `v-highlight="value"`, here value is the string

- In app.vue:

```
<p v-highlight="'red'">color this</p>
```
##### Passing Arguments to Custom Directives
- In main.js:

```
Vue.directive('highlight',{
  bind(el,binding,vnode){
    if(binding.arg == "background"){
      el.style.backgroundColor = binding.value;
    }else{
      el.style.color = binding.value;
    }
  }
});
```
- In app.vue

```
<p v-highlight:background="'red'">color this</p>
```
- `v-highlight:background` passes the 'background' arg into the v-highlight

##### Modifying a Custom Directive with Modifiers
- binding.modifiers is an object
- In main.js:

```
Vue.directive('highlight',{
  bind(el,binding,vnode){
    var delay=0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(function(){
      if(binding.arg == "background"){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value;
      }
    },delay);
  }
});
```
- `binding.modifiers["delayed"]` returns true if there is an attr `delayed` in binding.modifiers
- in app.vue:

```
<p v-highlight:background.delayed="'red'">color this</p>
```
##### Above is about global directive, local directive will be introduced below

##### Registering Directives Locally
- In app.vue:

```

<script>
    export default {
      directives: {
        "local-highlight": {
          bind(el,binding,vnode){
            var delay=0;
            if (binding.modifiers["delayed"]) {
              delay = 3000;
            }
            setTimeout(function(){
              if(binding.arg == "background"){
                el.style.backgroundColor = binding.value;
              }else{
                el.style.color = binding.value;
              }
            },delay);
          }
        }
      }
    }
</script>
```
##### Using Multiple Modifiers
- In main.js:

```
<script>
    export default {
      directives: {
        "local-highlight": {
          bind(el,binding,vnode){
            var delay=0;
            if (binding.modifiers["delayed"]) {
              delay = 3000;
            }
            if (binding.modifiers["blink"]) {
              var mainColor = binding.value;
              var secondColor = "blue";
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
```
- In the html code: `<p v-local-highlight:background.delayed.blink="'red'">color this too</p>`

##### Passing more Complex Values to Directives
- can pass objects into directive

```
<p v-local-highlight:background.delayed.blink="{mainColor: 'red',secondColor:'green',delay:500}">color this too</p>

```
- if we want to pass in the Function: just write function in methods and call is as normal v-on

```
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
```
- `binding.arg` is the event passed in. Such as click event `v-my-vOn:click`. `binding.value` is the function passed in
