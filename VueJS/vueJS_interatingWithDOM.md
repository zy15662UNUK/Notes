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
