<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                Server #{{ server.id }}
                <button type="button" name="button" @click="clickFn(server.status)">Change status</button>
            </li>
        </ul>
    </div>
</template>

<script>
import {eventBus} from "../../main.js";
export default{
  data: function(){
    return {
      servers: [
        {id:1,status:"normal1"},
        {id:2,status:"normal2"},
        {id:3,status:"normal3"},
        {id:4,status:"normal4"},
        {id:5,status:"normal5"},
      ]
    };
  },
  methods: {
    clickFn(status){
      eventBus.changeStatus(status);
    }
  }
}
</script>

<style>

</style>
