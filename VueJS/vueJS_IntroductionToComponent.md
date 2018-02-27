##### component： reuseable section
- one vue instance can only serve one element---> unable to build reuseable template
-
```
Vue.component("componentName",{same object as in vue istance});
```
- the data property in component **must be a function which returns the similar object as data in Vue instance**

```
<div id="app">
  <my-cmp></my-cmp>
  <my-cmp></my-cmp>
  <my-cmp></my-cmp>
</div>
<script type="text/javascript">
  Vue.component("my-cmp",{
    data: function(){
      return {
        status: "critical"
      };
    },
    methods: {
      methodName() {

      }
    },
    template: "<p>server status: {{status}}</p>",
    methods: {...},
    computed: {...}
  });
  new Vue({
    el: "#app"
  });
</script>
```
- now `<my-cmp></my-cmp>` is a reuseable template, but only in #app
-
```
return {
  status: "critical"
};
```
**return an object enable different storage place for each `<my-cmp></my-cmp>`. The <my-cmp> will be independent, and their methods will not interact with each other. Functions in methods will be private for each <my-cmp>**

##### Register component locally and globally
```
<div id="app1">
  <my-cmp></my-cmp>
  <my-cmp></my-cmp>
  <my-cmp></my-cmp>
</div>
<div id="app2">
  <my-cmp></my-cmp>
  <my-cmp></my-cmp>
  <my-cmp></my-cmp>
</div>
<script type="text/javascript">
  var cmp = {
    data: function(){
      return {
        status: "critical"
      };
    },
    template: "<p>server status: {{status}}</p>"
  };
  new Vue({
    el: "#app1",
    components: {
      "my-cmp": cmp
    }
  });
  new Vue({
    el: "#app2"
  });
</script>
```
- now the component object is set globally, but registered locally in #app1
```
new Vue({
  el: "#app1",
  components: {
    "my-cmp": cmp
  }
});
```
- Now <my-cmp></my-cmp> only displays in #app1, unless it is registered in the #app2

##### Root component in the App.vue file
- main.js: the major js file to set up vue instance. `render: h => h(App)` is to render the template in App.vue. `import` is to import the template

```
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
/* eslint-disable no-new */
Vue.component("app-server-status",Home);
new Vue({
  el: '#app',
  render: h => h(App)
});
```

- App.vue: is the main template. However, it can also constitute templates from other seperate file, like Home.vue

```
<template>
  <app-server-status></app-server-status>
</template>

<script>
export default {}
</script>
```

- Home.vue: origin of `<app-server-status></app-server-status>`. `<template>` must include at least one `div`, no 'hr'


```
<template>
  <div id="app">
    <h1>server status: {{status}}</h1>
  </div>
</template>

<script>
// objects that is going to be rendered in `render: h => h(App)`
// Seeting is the same as component
export default {
  data: function(){
    return {
      status: "criticals"
    };
  },
  methods: {
    changeStatus() {
       this.status = "Normal";
    }
  }
}
</script>
```

##### Using component locally and globally in project
- main.js
  1. `Vue.component("app-servers",Home);` is global component
  2. serve Home to App as template

```
import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
/* eslint-disable no-new */
Vue.component("app-servers",Home);
new Vue({
  el: '#app',
  render: h => h(App)
});
```

- App.vue: using template from

```
<template>
  <app-servers></app-servers>
</template>

<script>
</script>
```

- Home.vue
  1. `components` here is the local component only serving Home.vue
  2. 'v-for="server in 5"' means repeat the template <app-server-status> five times
  3. `import serverStatus from './/serverStatus.vue'` import the template in serverStatus and the object

```
<template>
  <div class="">
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
import serverStatus from './/serverStatus.vue'
export default {
  components: {
    "app-server-status": serverStatus
  }
}
</script>
```
- serverStatus.vue: the main serverStatus templates

```
<template>
  <div >
    <h1>server status: {{status}}</h1>
    <hr>
    <button type="button" name="button" @click="changeStatus()">changeStatus</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      status: "criticals"
    };
  },
  methods: {
    changeStatus() {
       this.status = "Normal";
    }
  }
}
</script>
```
##### Folder structure
- component folder in src
- feature folder in component

##### Naming of component tags
- with or without "" doesn't matter

##### style
- By default, any style set up for one template will be global style
- `<style scoped></style>` now this style becomes local style, will not affect with style in other template
http://vuejs.org/guide/components.html
