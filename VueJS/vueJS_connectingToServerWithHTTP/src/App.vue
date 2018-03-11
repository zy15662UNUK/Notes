<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label for="">UserName</label>
                  <input class="form-control" type="text" name="" value="" v-model="user.username">
                </div>
                <div class="form-group">
                  <label for="">Mail</label>
                  <input class="form-control" type="text" name="" value="" v-model="user.email">
                </div>
                <button @click="submit" class="btn btn-primary" type="button" name="button">Submit</button>
                <hr>
                <input class="form-control" type="text" name="" value="" v-model="node">
                <button @click="fetchData" class="btn btn-primary" type="button" name="button">Get data</button>
                <ul class="list-group-item">
                  <li class="list-group-item" v-for="elem in users">{{elem.username}} - {{elem.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data: function(){
        return {
          user: {
            username: "",
            email: ""
          },
          users: [],
          resource: {},
          node: "data"
        };
      },
      methods: {
        submit() {
          // this.$http.post("data.json",this.user)
          // .then(function(response){console.log(response);},function(error){console.log(error);});
         // send the request.then() is the action after sending the request
         this.resource.saveAlt(this.user);
         // A shorter way than the previous code to submit
         // {} means any parameters we want to pass to the URL
       },
       fetchData(){
          // this.$http.get("data.json").then(
          //   function(response){
          //     return response.json();
          //     // .json() is to parse the jason
          //     // The response is a promise not object
          //   }
          // )
          // // Get response data is Async, need another .then() to accept the data
          // .then(function(data){
          //   console.log(data);
          //   var result = [];
          //   for(var k in data){
          //     result.push(data[k]);
          //   }
          //   this.users = result;
          // });

          this.resource.getData({node: this.node})
          .then(
            function(response){
              return response.json();
              // .json() is to parse the jason
              // The response is a promise not object
            }
          )
          .then(function(data){
            console.log(data);
            var result = [];
            for(var k in data){
              result.push(data[k]);
            }
            this.users = result;

          });
       }
     },
     created() {
       const customAction={
         saveAlt:{method: "POST",url:"alternative.json"},
         getData: {method: "GET"}
       };
       // create quick resources with new URL
       this.resource = this.$resource("{node}.json",{},customAction);
       // pass data field into $resource
     }
    }
</script>

<style>
</style>
