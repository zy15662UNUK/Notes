<template>
  <div class="">
    <h3>Some User Details</h3>
    <hr>
    <p>User loaded ID: {{$route.params.id}}</p>
    <!-- Extract ids in the URL -->
    <router-link :to="'/user/'+$route.params.id+'/edit'" class="btn btn-primary" tag="button">UserEdit</router-link>
    <router-link :to="{ name: 'UserEdit', params: {id: $route.params.id},query: {locale:'en',q:100}}" class="btn btn-primary">UserEdit2</router-link>
  </div>
</template>
