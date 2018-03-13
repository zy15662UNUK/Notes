<template>
  <div class="">
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary" type="button" name="button">To Home</button>
    <hr>
    <router-view></router-view>
    <!-- To load sub-routes of User.vue -->
  </div>
</template>
<script>
  export default{
    // data: function(){
    //   return {
    //     id: this.$route.params.id
    //     // id here is the path: "/user/:id" in routes.js
    //   };
    // },
    // watch: {
    //   "$route": function(to,from){
    //     this.id = to.params.id;
    //   }
    // },
    methods: {
      navigateToHome() {
        this.$router.push({name: "Home"});
        // push to the stack of route
      }
    }
  }
</script>
