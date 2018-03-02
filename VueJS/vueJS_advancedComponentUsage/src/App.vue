<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button type="button" name="button" @click="selectTemp='appQuote'">appQuote</button>
              <button type="button" name="button" @click="selectTemp='appNew'">appNew</button>
              <button type="button" name="button" @click="selectTemp='appAuthor'">appAuthor</button>
              <keep-alive>
                <component :is="selectTemp">
                  <h2 slot="title">{{quoteTitle}}</h2>
                  <p slot="content">A wonderful quote</p>
                </component>
              </keep-alive>
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
