<template>
  <div class="">
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
import serverStatus from './/serverStatus.vue'
// objects that is going to be rendered in `render: h => h(App)`
// Seeting is the same as component
export default {
  components: {
    "app-server-status": serverStatus
  }
}
</script>
