<template>
  <div class="">
    <h3>Edit the User</h3>
    <hr>
    <p>locale: {{$route.query.locale}}</p>
    <p>Analytics: {{$route.query.q}}</p>
    <hr>
    <button @click="confirmed = true" class="btn btn-primary" type="button" name="button">Confirm</button>
  </div>
</template>
<script>
export default{
  data: function(){
    return {
      confirmed: false
    };
  },
  beforeRouteLeave: function(to,from,next){
    if(this.confirmed){
      // if click confirm, allow to leave
      next();
    }else{
      if(confirm("Are you sure you want to leave")){
        // ask users if they want to leave
        // if yes, then keep going
        next();
      }else{
        // if no, stay on current page
        next(false);
      }
    }
  }
}
</script>
