##### {{}}syntax
- e.x. <p>{{title}}</p>
- called interpolation or string interpolation
- the vuejs create a template based on that instanciation:
```
new Vue({
  el: '#app',
  data: {
    title: "hello world"
    <!-- This is the words to be inserted to the <p>{{ title }}</p>-->
  },//all the data needed for this ele
  methods: {
    changeTitle: function(e){
      this.title= e.target.value;
      //This refer to the data attr
    },
    sayHello: function(){
      return "hello";
    },
    sayHelloWorld: function(){
      return this.title;
    }

  }
  });
```
- accessing all data in data object in this way: {{title}}
- store methods in the method object
- accessing all methods in method object in this way: {{sayHello()}}. The value returned from the function is put into dom element.
- accessing data in the vuejs instance:
```
new Vue({
  el: '#app',
  data: {
    title: "hello world"
  },
  methods: {
    sayHelloWorld: function(){
      return this.title;
    }
  }
  //Here this does not refer to data object in normal JS
  //But vuejs creates a easy access for us to the properties
  //It proxy them in a way that by simply calling "this" anywhere
  //in our instance object here will give us access to these proxy
  //properties methods whatever it is
```
##### Binding to attributes
- The way mentioned above can only be used for binding the text part
- v-bind:nameOfAttr="dataAttrInVueInstance". Or simply :nameOfAttr=""

```
<a v-bind:href="link">google</a>

new Vue({
  el: '#app',
  data: {
    title: "hello world",
    link: "https://google.com"
  },
  methods: {
    sayHelloWorld: function(){
      return this.title;
    }
  }
```
- Remember: no {{}}
##### v-bind: Understanding and Using directive
- Directive is an instruction placed in the code
- v-bind here means bind something to my data stored in vuejs instance
##### v-once: disable re-rendering
- set ele to stick to the initial value
- e.x
```
<h1 v-once>{{title}}</h1>
```
##### v-html="nameOfDataProperty": output raw link
- {{}} will only output raw text
- if we want to output a html code:
```
<p v-html="finishLink"></p>
<script>
new Vue({
  el: '#app',
  data: {
    link: "https://google.com",
    finishLink: "<a href='https://www.baidu.com'>baidu</a>"
  }
})
</script>
```
##### v-on: listen to event
- v-on:eventName="functionName"
 e.x.
```
<button type="button" name="button" v-on:click="increase">click</button>
<script>
new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    increase: function(){
      this.counter++;
    }
  }
})
</script>
```
##### getting event data
-
```
<p v-on:mousemove="mouseCoordinate">coordinates: {{x}},{{y}}</p>
<script>
new Vue({
  el: '#app',
  data: {
    x: 0,
    y: 0
  },
  methods: {
    mouseCoordinate: function(e){
      this.x=e.clientX;
      this.y=e.clientY;
    }
  }
})
</script>
//when hover over the <p>, mouse coordinates will be updated
```
- function(e) passes the event data to the function
##### passing both default event data and your own parameter to the event listener function

```
<p v-on:mousemove="mouseCoordinate(2,$event)">coordinates: {{x}},{{y}}</p>
<script>
  mouseCoordinate: function(step,e){...}
</script>
```
##### v-on:eventName.modifierProperty=""---Modify an event
- stop the propagation of mousemove event on the dead zoon

```
<p v-on:mousemove="mouseCoordinate">coordinates: {{x}},{{y}}<span v-on:mousemove.stop="">dead zone</span>
</p>
```
##### v-on:keyboardEvent="functionName"---Listen to keyboard event
- Event handling and modifying: https://vuejs.org/v2/guide/events.html#Key-Modifiers
-
```
<input type="text" name="" value="" v-on:keyup.enter.space="alertMe">
<script>
new Vue({
  el: '#app',
  methods: {
    alertMe: function(){
      alert("fuck!");
    }
  }
})
</script>
// Only press enter and space will initiate the alert
```
##### writing JS code in the template
- Can write simple JS code after v-on:eventName="JS code" or in {{}}

```
<button type="button" name="button" v-on:click="counter++">click</button>
<div>
  {{counter*2}}
</div>

<script>
new Vue({
  el: '#app',
  data: {
    counter: 0
  }
</script>
```
##### v-mode="data"---two way binding
- once the value in html is changed , the value in vuejs instance also change, vice versa

```
<input type="text" v-model="title">
<p>{{title}}</p>
<script>
new Vue({
  el: '#app',
  data: {
    title: "0"
  }
</script>
```
- The "title" value will always equal to input value. Also, the value in the input box will also be set to be the "title" value
- Same function as v-bind
##### computed---chaneg with computed properties
- use like a property inside data object
- compare the "computed" and "methods"

```
<button type="button" name="button" v-on:click="counter++">increase</button>
<button type="button" name="button" v-on:click="counterSec++">increase_2</button>
<p>counter {{counter}} | {{counterSec}}</p>
<p>{{result()}} | {{result_}}</p>
<script>
new Vue({
  el: '#app',
  data: {
    counter: 0,
    counterSec: 0
  },
  methods: {
    result: function() {
      if(this.counter > 5){
        return ">5";
      }else {
        return "<=5";
      }
    }
  },
  computed: {
    result_: function() {
      if(this.counter > 5){
        return ">5";
      }else {
        return "<=5";
      }
    }
  }
</script>
```
- Attention: {{result()}} VS {{result_}}
- They have the same function--changing counter value.
- result() executes whenever the button is clicked, no matter which one.
- result_ executes only when increase button is clicked, which is the necessary case.
- !!TRY TO use computed rather than methods---the former one will limit the unnecessary calculation.
##### watch---an alternative computed property
```
new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  watch: {
    counter: function(valueOfCounter){
      var self = this;
      setTimeout(function(){
        self.counter = 0;
      },5000);
    }
  }
});
```
- watch the value change of counter in data object
- once changed, excute the function
##### shortcut:
- v-on:click=""-->@click-""
- v-bind:href=""-->:href=""
##### Dynamic styling the css
```
<div class="demo" @click="attachRed=!attachRed" :class="{red:attachRed}"></div>
<div class="demo"></div>
<div class="demo"></div>
new Vue({
  el: '#app',
  data: {
    attachRed: false;
  }
})
```
- "{red:attachRed}" means class is red if attachRed is true

```
<div class="demo" :class="redBlue"></div>
<div class="demo" :class="[color,{red: attachRed}]"></div>
<input type="text" name="" value="" v-model="color">
<script>
new Vue({
  el: '#app',
  data: {
    color: green,
    attachRed: false
  },
  computed: {
    redBlue: function(){
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  }
</script>
```
- "[color,{red: attachRed}]" means if color is not empty(empty input), the turn red if attachRed is true
- redBlue is a function which returns a JS object
- CONCLUSION:
  1. add or remove class by true/false indicator e.x.: @click="attachRed=!attachRed" :class="{red:attachRed}"
  2. function returns js object e.x. `<div class="demo" :class="redBlue"></div>`
  3. directly from data object e.x.`<div class="demo" :class="[color,{red: attachRed}]"></div>`
