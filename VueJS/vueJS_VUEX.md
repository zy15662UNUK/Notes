##### Why a Different State Management May Be Needed
- Previous state Management: child-->parent-->child + eventBus
- Not suitable for big application: one bus get crowdled, changes are hard to track

##### Understanding "Centralized State"
- Central state: store state in one file of application
- child1--->central store--->child3
- Common data is storeed in this central file
##### Using the Centralized State
- store folder parallel state of components, set up store.js in this folder. This is the central store
- `npm install --save vuex`
- in store.js:

```
import Vue from "vue";
import Vuex from "vuex";
// Import the modules for vuex
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    counter: 0
  },
});//Main task is to store the state of the app
```
- Now the counter data is stored in the 'state'
- Also have to import the exported `const store` to main.js:

```
import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store.js";

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
```
- If we want to pass the counter data from the counter.vue to the central state, in Counter.vue:

```
<script>
    export default {
        methods: {
            increment() {
                this.$store.state.counter++;
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>
```
- To fetch data from central state, in Result.vue:

```
<script>
    export default {
        computed: {
          counter(){
            return this.$store.state.counter;
          }
        }
    }
</script>
```

##### Understanding Getters
- Getter will fetch state from central state, and do any calculation you need
- Then we access our getter from different components then we avoid duplicated codes----we don't have to repeat the accessing-to-state code in each component

##### Using Getters
- set up getters in the store.js:

```
export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: function(state){
      // state is the above 'state' property,
      // which is automatically passed in by vuejs
      return state.counter *2;
    },
  }
});//Main task is to store the state of the app
```
- can add as many fun as we want in getters
- fn in getters must return the desire data
- call getters in the Result.vue:

```
<script>
    export default {
        computed: {
          counter(){
            return this.$store.getters.doubleCounter;
          }
        }
    }
</script>
```

##### Mapping Getters to Properties
- `npm install --save-dev babel-preset-stage-2` in cmd
- in .babelrc add ["stage-2"]

```
{
  "presets": [
    ["es2015", { "modules": false }],
    ["stage-2"]
  ]
}
```
- import mapGetters in result.vue

```
<template>
  <div class="">
    <p>Counter is: {{ doubleCounter }}</p>
    <hr>
    <p>counter string is: {{stringCounter}}</p>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        computed: {
          ...mapGetters([
          "doubleCounter",
          "stringCounter"
        ])
      },
    }
</script>
```
- attention `...mapGetters`, this ensure we can write our own computed methods
- mapGetters([]) fetch our getters in the included list, **so we don't have to write computed method for each getter**
- `{{ getterName }}` in the template to call the getter

##### Understanding Mutations
- if multiple componenets manipulating the state, it's hard to track which component at which point of time added to the state
- Need a "Setter": "Mutations"
- child's child1---> Mutations-->state--->getters

##### Using Mutations
- setting and using is exactly the same as Getters, also has mapMutations
- set up mutation in store.js

```
export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment: function(state){
      state.counter++;
    },
    decrement: function(state){
      state.counter--;
    }
  }
```
- using in Counter.vue:
- Notice im "methods" `...mapMutations([mutationName])`

```
<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";
    export default {
        methods: {
            ...mapMutations([
              "increment",
              "decrement"
            ]),
        }
    }
</script>
```

##### Why Mutations have to run Synchronously
- can not use asyc in Mutations, such as setTimeout()

##### How Actions improve Mutations
- Want to use async in Mutations---Actions
- child's child1--->Actions--->Mutations--->state

##### Using Actions
- in store.js:

```
export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment: function(state,payload){
      state.counter+=payload;
    },
    decrement: function(state){
      state.counter--;
    }
  },
  actions: {
    increment: function(context,payload){
      context.commit("increment",payload);
      // commit the increment in mutations
    },
    decrement: function(context){
      context.commit("decrement");
      // commit the increment in mutations
    },
    asyncIncrement: function(context,payload){
      setTimeout(function(){
        context.commit("increment",payload.by);
      },payload.time);
    },
    asyncDecrement: function(context){
      setTimeout(function(){
        context.commit("decrement");
      },1000);
    },
  }
});
```
- in Counter.vue:

```
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
```
- `asyncIncrement: function(context,payload)` actually receive multiple parameters
- body of one action actually commit a mutation, while passing the extra parameters to the mutation

```
asyncIncrement: function(context,payload){
  setTimeout(function(){
    context.commit("increment",payload.by);
  },payload.time);
}
```
- so the mutations should be designed to be able to receive multiple parameters

```
mutations: {
  increment: function(state,payload){
    state.counter+=payload;
  }
}
```

##### Improving Folder Structures
- the store.js is going to grow bigger and bigger
- need to create a module folder in store folder
##### Modularizing the State Management
- counter.js and value.js in module folder
- put all getters, mutations, actions and state in counter.js

```
const state={
  counter: 0
};
const getters = {
  doubleCounter: function(state){
    // state is the above 'state' property,
    // which is automatically passed in by vuejs
    return state.counter *2;
  },
  stringCounter: function(state){
    return state.counter + " clicks";
  }
};
const mutations = {
  increment: function(state,payload){
    state.counter+=payload;
  },
  decrement: function(state){
    state.counter--;
  }
};
const actions = {
  increment: function(context,payload){
    context.commit("increment",payload);
    // commit the increment in mutations
  },
  decrement: function(context){
    context.commit("decrement");
    // commit the increment in mutations
  },
  asyncIncrement: function(context,payload){
    setTimeout(function(){
      context.commit("increment",payload.by);
    },payload.time);
  },
  asyncDecrement: function(context){
    setTimeout(function(){
      context.commit("decrement");
    },1000);
  },
};
export default{
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
```
- import to store.js

```
import counter from "./module/counter.js";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {

  },
  getters: {
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    counter: counter,
  }
});//Main task is to store the state of the app
```

##### Using Separate Files
- can also split getters, mutations and actions in separate files, more sppecific things in modules
- `import * as actions from './actions.js'`
- `export const updateValue=function(state,payload){}` in actions.js

##### Using Namespaces to Avoid Naming Problems
- can not duplicate name among the modules
