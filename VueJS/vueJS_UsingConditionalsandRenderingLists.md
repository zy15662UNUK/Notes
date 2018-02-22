##### v-if--conditional rendering
- v-if="ture/return true", render. v-if="false/return false" remove
- Actually attach or detach element and its children in doms, not just hide or show

```
<p v-if="show">you can see me</p>
<p>Do you see me</p>
<button type="button" name="button" @click="show=!show">hind or show</button>

<script type="text/javascript">
  new Vue({
    el: '#app',
    data: {
      show: true
    },
  });
</script>
```
- v-else: automatically react to v-if before. if v-if show, v-else removed, vice versa
##### v-if with template
- template: <template> itself won't show in DOM, but elements inside it will show in DOM
- apply v-if on <template>: show/remove multiple elements at the same time
##### v-show
- hide element, rather than remove it
- same syntax as v-if, but not working on <template>
##### v-list--render lists
- iterate through list and demonstrate on DOM

```
<ul>
  <li v-for="(elem,i) in indredients">{{elem}} ({{i}})</li>
</ul>
<script type="text/javascript">
  new Vue({
    el: '#app',
    data: {
      indredients: ["meat","fruit","cookies"],
      people: [{name: "James",age:"21",color:"red"},{name: "Alan",age:"25",color:"blue"}]          
    },
  });
</script>
```
- <li v-for="(elem,index) in list">{{elem}} {{index}}</li>
- only one <li> is necessary
##### v-for with <template>--same syntax as loop on <ul>
```
<template id="" v-for="(elem,i) in indredients">
  <h1>{{elem}}</h1>
  <p>{{i}}</p>
</template>
<script type="text/javascript">
  new Vue({
    el: '#app',
    data: {
      indredients: ["meat","fruit","cookies"],
      people: [{name: "James",age:"21",color:"red"},{name: "Alan",age:"25",color:"blue"}]          
    },
  });
</script>
```
##### loop through objects
```
<ul>
  <li v-for="elem in people"><p v-for="(val,key,index) in elem">{{key}}: {{val} ({{index}})}</p></li>
</ul>
<script type="text/javascript">
  new Vue({
    el: '#app',
    data: {
      indredients: ["meat","fruit","cookies"],
      people: [{name: "James",age:"21",color:"red"},{name: "Alan",age:"25",color:"blue"}]          
    },
  });
</script>
```
- val: value of each attrs in each object in the array.
- key: attr name
- index: attr index
##### loop through nums

```
<ul>
  <li v-for="n in 10">{{n}})</li>
</ul>

```
- show numbers from 1 to 10
##### Add a key to the ele in loop--keep tracking the ele when list is changed

```
<template id="" v-for="elem in indredients" :key="elem">
  <h1>{{elem}}</h1>
</template>
<button type="button" name="button" @click="indredients.push('a')">click</button>
<script type="text/javascript">
  new Vue({
    el: '#app',
    data: {
      indredients: ["meat","fruit","cookies"],
      people: [{name: "James",age:"21",color:"red"},{name: "Alan",age:"25",color:"blue"}]          
    },
  });
</script>
```
- vuejs will track both the item position in the list and the item key.
- basically the key should be unique for every element
##### v-if has actually the same fucntion as if
- for example:

```
<ul>
  <li v-for="(elem,key) in testData" :key="key">
     <div class="" v-if="Array.isArray(elem)">
        <ul v-for="val in elem">
          <li>{{val}}</li>
        </ul>
     </div>
     <div class="" v-else>
         {{elem}}
     </div>
  </li>
</ul>
<script type="text/javascript">
new Vue({
  el: '#exercise',
  data: {
    testData: {
      name: 'TESTOBJECT',
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }
  }
});
</script>
```
- v-if: judge if the value of elem in an object is an array. If so,
