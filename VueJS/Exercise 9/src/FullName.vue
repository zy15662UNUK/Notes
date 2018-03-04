<template>
  <div class="row">
    <input type="text" name="" value="" :value="firstName" @input="firstNameChange($event)">
    <input type="text" name="" value="" :value="lastName" @input="lastNameChange($event)">
  </div>
</template>
<script>
export default {
  props: ['thefullName'],
  computed: {
    firstName(){
      return this.thefullName.split(" ")[0];
    },
    lastName(){
      return this.thefullName.split(" ")[1];
    },
  },
  methods: {
    firstNameChange(e) {
      var Name = e.target.value+" "+this.lastName;
      this.$emit('firstnamechange', Name);
    },
    lastNameChange(e) {
      var Name = this.firstName+" "+e.target.value;
      this.$emit('lastnamechange', Name);
    }
  }
  }
</script>
<style scoped>
</style>
