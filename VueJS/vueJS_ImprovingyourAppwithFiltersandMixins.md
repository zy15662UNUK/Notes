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
