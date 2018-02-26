<template>
  <div >
    <h1>server status: {{status}}</h1>
    <hr>
    <button type="button" name="button" @click="changeStatus()">changeStatus</button>
  </div>
</template>

<script>
// objects that is going to be rendered in `render: h => h(App)`
// Seeting is the same as component
export default {
  data: function(){
    return {
      status: "criticals"
    };
  },
  methods: {
    changeStatus() {
       this.status = "Normal";
    }
  }
}
</script>
