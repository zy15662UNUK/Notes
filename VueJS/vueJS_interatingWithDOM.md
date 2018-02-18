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
