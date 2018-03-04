<template>
    <div class="container">
        <form v-if="!isSubmit">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <form class="" action="index.html" method="post">
                      <input type="text" v-model="fullName">
                      <input type="text" name="" value="" v-model="mail">
                      <input type="text" name="" value="" v-model="Password">
                      <label for=""><input type="radio" name="" value="Yep" v-model="store">store</label>
                      <label for=""><input type="radio" name="" value="Nop" v-model="store">Not store</label>

                    </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <div class="row">
                       <button type="button" name="button" @click.prevent="submit">Submit</button>
                    </div>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <div class="row">
                      <myFullName :thefullName="fullName" @firstnamechange="fullName=$event" @lastnamechange="fullName=$event"></myFullName>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmit">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Mail: {{mail}}</p>
                        <p>Password: {{Password}}</p>
                        <p>Store in Database?: {{store}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue"
    export default {
      data: function(){
        return {
          fullName: "James LUO",
          mail: "Please input your mail address",
          Password: "Please input your password",
          store: "Nop",
          isSubmit: false
        };
      },
      components: {
        myFullName: FullName
      },
      methods: {
        submit() {
          this.isSubmit=true;
        }
      }
    }
</script>

<style>
</style>
