##### Passing contents with slots
- Using <slot></slot> component
- App.vue:

```
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <appQuote>
                <h2>This is a quote</h2>
                <p>A wonderful quote</p>
              </appQuote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote.vue"
    export default {
        components: {
          appQuote: Quote
        }
    }
</script>
```
- Put contents in the template
- Quote.vue:

```
<template>
  <div id="">
    <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
```
- `<slot></slot>` in div of the template

##### How Slot Content gets Compiled and Styled
```
<appQuote>
  <h2>This is a quote</h2>
  <p>A wonderful quote</p>
</appQuote>
```
- The <h2> and <p> can ony be styled in Quote.vue, not App.vue
- However anyother manipulation with DOM can only be set up in App.vue. Like:

```
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <appQuote>
                <h2>{{quoteTitle}}</h2>
                <p>A wonderful quote</p>
              </appQuote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote.vue"
    export default {
        data: function(){
          return {
            quoteTitle: "This is a quote"
          };
        },
        components: {
          appQuote: Quote
        }
    }
</script>
```
- Here setting the content of
```
<appQuote>
  <h2>{{quoteTitle}}</h2>
  <p>A wonderful quote</p>
</appQuote>
```
should be in App.vue

##### Using Multiple Slots (Named Slots)
- Name the slot by attr "name" in Quote.vue (template)

```
<template>
  <div id="">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr>
    <div class="">
      <slot name="content"></slot>
    </div>
  </div>
</template>
```
- Refer to the name in App.vue

```
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <appQuote>
                <h2 slot="title">{{quoteTitle}}</h2>
                <p slot="content">A wonderful quote</p>
              </appQuote>
            </div>
        </div>
    </div>
</template>
```

##### Default Slots and Slot Defaults
- Default slot:`<slot>`, which has no attr "name='slotName'" Elements with no attr "slot=" will be sent to default slot
- slot default: `    <slot name="subtitle">slot default</slot>` when the slot is unoccupied, "slot default" will be shown. It will be replaced by the unoccupied content

##### Switching Multiple Components with Dynamic Components
- Suppose we have multiple componenets. We want to selectively display one of them
- Need to build templates first:

- New.vue

```
<template>
  <div id="">
    <p>This is app new</p>
  </div>
</template>
```
- Author.vue

```
<template>
  <div id="">
    <p>This is app author</p>
  </div>
</template>
```
- In App.vue using `<component>` to represent general components

```
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button type="button" name="button" @click="selectTemp='appQuote'">appQuote</button>
              <button type="button" name="button" @click="selectTemp='appNew'">appNew</button>
              <button type="button" name="button" @click="selectTemp='appAuthor'">appAuthor</button>
              <componentName :is="selectTemp">
                <h2 slot="title">{{quoteTitle}}</h2>
                <p slot="content">A wonderful quote</p>
              </componentName>
              <!-- <appQuote>
                <h2 slot="title">{{quoteTitle}}</h2>
                <p slot="content">A wonderful quote</p>
              </appQuote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote.vue"
    import Author from "./components/Author.vue"
    import New from "./components/New.vue"
    export default {
        data: function(){
          return {
            quoteTitle: "This is a quote",
            selectTemp: "appQuote"
          };
        },
        components: {
          appQuote: Quote,
          appNew: New,
          appAuthor: Author
        }
    }
</script>
<style>
</style>
```
- Then store the current component name in "data"

```
data: function(){
  return {
    quoteTitle: "This is a quote",
    selectTemp: "appQuote"
  };
```
- Switch the current component by click button

```
<button type="button" name="button" @click="selectTemp='appQuote'">appQuote</button>
<button type="button" name="button" @click="selectTemp='appNew'">appNew</button>
<button type="button" name="button" @click="selectTemp='appAuthor'">appAuthor</button>
```
- Switch component display by binding `selectTemp` to `<component>` by `:is=""`

```
<componentName :is="selectTemp">
  <h2 slot="title">{{quoteTitle}}</h2>
  <p slot="content">A wonderful quote</p>
  <!-- above are default content -->
</componentName>
```
- **When we Switching between components, they are distoryed and recreated**

##### Keeping Dynamic Components Alive
- `<keep-alive>`

```
<keep-alive>
  <component :is="selectTemp">
    <h2 slot="title">{{quoteTitle}}</h2>
    <p slot="content">A wonderful quote</p>
  </component>
</keep-alive>
```
- Now all components will not be distoryed when we switch. Their state will be kept
