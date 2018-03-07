##### Creating a Local Filter
- In App.vue:

```
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                 <p>{{text | toUppercase}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      data: function() {
        return {
          text: "hello there"
        };
      },
      filters: {
        toUppercase(value){
          return value.toUpperCase();
        }
      },
    }
</script>
```
- `filters: {filterName(ValueBinded){return newValue;}}`
- `<p>{{text | toUppercase}}</p>` this is the way to apply filter. Notice we don't have to write like `toUppercase()`

##### Global Filters and How to Chain Multiple Filters
- The global filter is set up in main.js:

```
Vue.filter("to-lowercase",function(value){
  return value.toLowerCase();
});
new Vue({
  el: '#app',
  render: h => h(App)
})
```
- Chain multiple filters in App.vue:

```
<p>{{text | toUppercase | to-lowercase}}</p>
```
- ***The return value from the first filter enters the second filter, and it returns the final value***

##### An (often-times better) Alternative to Filters: Computed Properties
- In App.vue:

```
<ul>
  <li v-for="elem in filterFruits">{{elem}}</li>
</ul>
<script>
    export default {
      data: function() {
        return {
          text: "hello there",
          fruits: ["apple","banana","mango","melon"],
          filterText: ""
        };
      },
      filters: {
        toUppercase(value){
          return value.toUpperCase();
        }
      },
      computed: {
        filterFruits(){
          var self = this;
          return this.fruits.filter(function(elem){
            return elem.match(self.filterText);
          });
        }
      }
    }
</script>
```
- This computed Property filter the fruits list once input has been changed.
- `array.filter(fn(){})`
- `string.match("string")`

##### Creating and Using Mixins
- Mixin can avoid code duplication. Here the duplicated codes in App.vue and List.vue are:

```
data: function() {
  return {
    fruits: ["apple","banana","mango","melon"],
    filterText: ""
  };
},
computed: {
  filterFruits(){
    var self = this;
    return this.fruits.filter(function(elem){
      return elem.match(self.filterText);
    });
  }
}
```
- Now we put this code section in an mixin, which is a seperate js code with a js object:

```
export const fruitMixin = {
  data: function() {
    return {
      fruits: ["apple","banana","mango","melon"],
      filterText: ""
    };
  },
  computed: {
    filterFruits(){
      var self = this;
      return this.fruits.filter(function(elem){
        return elem.match(self.filterText);
      });
    }
  }
};
```
- Now we can inport this js file into App.vue and List.vue and assign them to mixin Property:
- In List.js:

```
<script>
    import {fruitMixin} from "./fruitMixin.js"
    export default {
      mixins: [fruitMixin]
    }
</script>
```
- In App.js, just leave the nonduplicated section and import the duplicted section as mixin

```
<script>
    import List from "./List.vue"
    import {fruitMixin} from "./fruitMixin.js"
    export default {
      data: function() {
        return {
          text: "hello there",
        };
      },
      filters: {
        toUppercase(value){
          return value.toUpperCase();
        }
      },
      components: {
        appList: List,
      },
      mixins: [fruitMixin]
    }
</script>
```

##### How Mixins get Merged
- Doesn't destory the data in Vue instance
- Execute before components, i.e. components always ha the right to override the mixins

##### Creating a Global Mixin (Special Case!)
- Apply to every component and every instance of the application

```
Vue.mixin({
  created() {
    //do something after creating vue instance
    console.log("global mixin created");
  }
});
```
- Better to use local mixin

##### Mixins and Scope
- The mixin, though shared by components, does not have shared data. Change data in one component will not affect others
