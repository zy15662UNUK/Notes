<template>
    <div class="container">
      <my-header :num="quotes.length"></my-header>
      <my-middle :quoteArr="quotes" @newQuote="newQuotes($event)"></my-middle>
      <my-quote :quoteArr="quotes" @changeArr="quotes=$event"></my-quote>
      <p class="text-center row" style="background-color:lightblue;padding:10px;margin-top:20px">
        Info:Click on quote to delete it
      </p>
    </div>
</template>

<script>
    import Header from "./components/Header.vue"
    import Middle from "./components/Middle.vue"
    import Quote from "./components/Quote.vue"

    export default {
     data: function(){
       return {
         maxQuoteNum: 9,
         quotes: ["Just a quote to start with something"],
       };
     },
     components: {
       myHeader: Header,
       myMiddle: Middle,
       myQuote: Quote
     },
     methods: {
       newQuotes(e){
         if(this.quotes.length<=this.maxQuoteNum){
            this.quotes.push(e);
            this.quoteNum ++;
          }else{
            alert("Motherfucker!Only 10 quotes allowance")
          }
       }
     }
    }
</script>

<style>
</style>
