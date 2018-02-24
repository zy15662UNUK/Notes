##### Multiple vueJS instances

```
<div id="app1">
  <h1 ref="heading">{{ title }}</h1>
  <h1 ref="heading">{{ title }}</h1>
  <button v-on:click="show">Show Paragraph</button>
  <p v-if="showParagraph">This is not always visible</p>
</div>
<div id="app2">
  <h1 ref="heading">{{ title }}</h1>
</div>
<script type="text/javascript">
  new Vue({
    el: '#app1',
    data: {
      title: 'The VueJS Instance',
      showParagraph: false
    },
    methods: {
      show: function() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
      },
      updateTitle: function(title) {
        this.title = title;
      }
    },
    computed: {
      lowercaseTitle: function() {
        return this.title.toLowerCase();
      }
    },
    watch: {
      title: function(value) {
        alert('Title changed, new value: ' + value);
      }
    }
  });
  new Vue({
    el: '#app2',
    data: {
      title: 'The VueJS Instance',
    }
  });
</script>
```
- there is no connection between two instances
- better to put it all in one instance for easier access

##### Access from outside:
- Add a name for each instance. access them through their unique name

```
<div id="app1">
  <h1 ref="heading">{{ title }}</h1>
  <h1 ref="heading">{{ title }}</h1>
  <button v-on:click="show">Show Paragraph</button>
  <p v-if="showParagraph">This is not always visible</p>
</div>
<div id="app2">
  <h1 ref="heading">{{ title }}</h1>
  <button type="button" name="button" @click="onChange">change vm1 from vm2</button>
</div>
<script type="text/javascript">
  var vm1=new Vue({
    el: '#app1',
    data: {
      title: 'The VueJS Instance',
      showParagraph: false
    },
    methods: {
      show: function() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
      },
      updateTitle: function(title) {
        this.title = title;
      }
    },
    computed: {
      lowercaseTitle: function() {
        return this.title.toLowerCase();
      }
    },
    watch: {
      title: function(value) {
        alert('Title changed, new value: ' + value);
      }
    }
  });
  var vm2=new Vue({
    el: '#app2',
    data: {
      title: 'The VueJS Instance',
    },
    methods: {
      onChange: function(){
        vm1.title = "changed"
      }
    }
  });
</script>
```
- **We can create properties like this`vm1.cheers="cheers"`but it is not going to be watched and dynamically changed by vuejs**

##### $el $data and $refs in a vueJS instance object
- $el: refer to HTML template. How vueJS keeps track of what our html code is
- $data: hold the data properties. Hence we can access the data from outside like: `vm1.$data.title`
- $refs: show all registered html elemnt in js

```
<div id="app1">
  <h1 ref="heading">{{ title }}</h1>
  <h1 ref="heading">{{ title }}</h1>
  <button v-on:click="show" ref="myButton">Show Paragraph</button>
  <p v-if="showParagraph">This is not always visible</p>
</div>
<script type="text/javascript">
  var vm1=new Vue({
    el: '#app1',
    data: {
      title: 'The VueJS Instance',
      showParagraph: false
    },
    methods: {
      show: function() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
        this.$refs.myButton.innerText = "test";
      }
    });
</script>
```
- `<button v-on:click="show" ref="myButton">Show Paragraph</button>`register the buttom element. `this.$refs.myButton.innerText = "test";`access the html element and change the content.
- `this.$refs.myButton` gets a html elemnt object, just like document.getElementById();
- can also be accessed from outside

##### $mount()
- `vm1.$mount("#app1")` == `el: "#appl"`
- if we know which DOM element to work with, using `el:`
- if we dont know, use $mount() after creating the instance
- create and append a template into HTML by vueJS.

```
<div id="app3">

</div>
<script type="text/javascript">
  var vm3 = new Vue({
    template: "<h3>hello!</h3>"
  });
  vm3.$mount("#app3");
</script>
```
- this is equal to:

```
<script type="text/javascript">
  var vm3 = new Vue({
    template: "<h3>hello!</h3>"
  });
  vm3.$mount();
  document.getElementById("app3").appendChild(vm3.$el);
</script>
```
- since `vm3.$el` returns the template in vm3

##### Using component
- A reusable section of html component

```
<div id="app2">
  <h1 ref="heading">{{ title }}</h1>
  <button type="button" name="button" @click="onChange">change vm1 from vm2</button>
  <hello></hello>
  <hello></hello>
</div>
<script type="text/javascript">
  Vue.component("hello", {
    template: "<h3>hello!</h3>"
  });
  var vm2=new Vue({
    el: '#app2',
    data: {
      title: 'The VueJS Instance',
    },
    methods: {
      onChange: function(){
        vm1.title = "changed"
      }
    }
  });
</script>
```
- **Attention！**`<hello></hello>`must be placed in a HTML element, like `app2`, who has been binded to a vueJS instance

##### vueJS lifecycle
- beforeCreate->created->beforeMount->Mount->beforeUpdate-updated->beforeDestory->destoryed
- destory will break the bind between vueJS instance and dom. But it wont remove the DOM element

```
<div id="app">
  <h1>{{title}}</h1>
  <button type="button" name="button" @click="title='changed'">updateTitle</button>
  <button type="button" name="button" @click="destory">destory</button>
</div>

<script>
new Vue({
  el: "#app",
  data: {
    title: "The vue js instance"
  },
  beforeCreate: function(){
    console.log("beforeCreate()");
  },
  created: function(){
    console.log("created()");
  },
  beforeMount: function(){
    console.log("beforeMount()");
  },
  mounted: function(){
    console.log("mounted()");
  },
  beforeDestroy: function(){
    console.log("beforeDestroy()");
  },
  destroyed: function(){
    console.log("destroyed()");
  },
  methods: {
    destory: function(){
      this.$destroy();
    }
   }
});
</script>
```
