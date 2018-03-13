<template>
  <ul class="nav justify-content-end">
    <router-link tag="li" to="/" exact active-class="active"><a>Home</a></router-link>
    <router-link tag="li" to="/User" active-class="active"><a>User1</a></router-link>
  <!-- click link doesn't reload the page, better than <a></a> -->

</ul>
</template>
<script>
export default {

}
</script>
<style scoped>
</style>
