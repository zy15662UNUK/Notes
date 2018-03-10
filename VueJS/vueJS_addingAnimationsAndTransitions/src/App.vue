<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="animation" class="form-control">
                  <option value="slide">slide</option>
                  <option value="fade">fade</option>
                </select>
                <hr>
                <button class="btn btn-primary" @click="show=!show" type="button" name="button">Show alert</button>
                <br>
                <transition :name="animation">
                  <div class="alert alert-info" v-if="show">
                    This is some alert info
                  </div>
                </transition>
                <transition :name="animation" type="animation"
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancelled"
                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled"
                >
                  <div class="alert alert-info" v-if="show">
                    This is some alert info
                  </div>
                </transition>
                <transition
                          appear
                          enter-active-class="animated bounce"
                          leave-active-class="animated shake">
                  <div class="alert alert-info" v-if="show">
                    This is some alert info
                  </div>
                </transition>
                <transition :name="animation"  mode="out-in">
                  <div class="alert alert-info" v-if="show">
                    This is some alert info
                  </div>
                  <div class="alert alert-warning" v-else>
                    This is some alert info
                  </div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load=!load" type="button" name="button">load</button>
                <transition :name="animation"  mode="out-in"
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancelled"
                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled"
                  :css="false"
                >
                  <div style="width:100px;height:100px;background-color:lightgreen" v-if="load">

                  </div>
                </transition>
                <hr>
                <button @click="clickFn()" class="btn btn-primary" type="button" name="button">switch component</button>
                <transition name="fade" mode="out-in">
                  <componentName :is="selectedComponent"
                  ></componentName>
                </transition>
                <hr>
                <button @click="addItem" class="btn btn-primary" type="button" name="button">Add item</button>
                <ul class="list-group">
                  <transition-group name="slide" mode="on">
                    <li @click="removeItem(index)" style="cursor:pointer" class="list-group-item" v-for="(elem,index) in numbers" :key="elem">{{elem}}</li>
                  </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import dangerAlert from "./dangerAlert.vue";
    import successAlert from "./success.vue";
    export default {
        data() {
            return {
              show: false,
              animation: "fade",
              load: false,
              elementWidth: 100,
              selectedComponent: "DangerAlert",
              numbers: [1,2,3,4,5]
            }
        },
        components: {
          DangerAlert: dangerAlert,
          SuccessAlert: successAlert
        },
        methods: {
          addItem(){
            const pos = Math.floor(Math.random()*this.numbers.length);
            this.numbers.splice(pos,0,this.numbers.length+1);
            // add a array length+1 at random place
          },
          removeItem(index){
            this.numbers.splice(index,1);
          },
          clickFn(){
            console.log(this.selectedComponent);
            if(this.selectedComponent=='SuccessAlert'){
              this.selectedComponent='DangerAlert'
            }else{this.selectedComponent='SuccessAlert'}
          },
          beforeEnter(el) {
            console.log("beforeEnter");
            this.elementWidth = 100;
            el.style.width=this.elementWidth+"px";
            // ensure enter animation starts from 100px
          },
          enter(el,done) {
            console.log("Enter");
            let round = 1;
            var self = this;
            const interval=setInterval(function () {
              console.log("ss");
              el.style.width=(self.elementWidth+round*10)+"px";
              round ++;
              if(round>20){
                clearInterval(interval);
                done();
              }
            }, 20);
            // increase each round per 20s, stop increasing the 20th round


            // done() tells the vuejs the animation finishes
          },
          afterEnter(el) {
            console.log("afterEnter");
          },
          enterCancelled(el) {
            console.log("cancelledEnter");
          },
          beforeLeave(el) {
            console.log("beforeLeave");
            this.elementWidth=300;
            el.style.width=this.elementWidth+"px";
            // ensure the leave animation starts from 300px width
          },
          leave(el,done) {
            console.log("leave");
            var round = 1;
            var self = this;
            const interval=setInterval(function () {
              el.style.width=(self.elementWidth-round*10)+"px";
              round ++;
              if(round>20){
                clearInterval(interval);
                done();
              }
            }, 20);
            // decrease each round per 20s, stop increasing the 20th round
          },
          afterLeave(el) {
            console.log("afterLeave");
          },
          leaveCancelled(el) {
            console.log("leaveCancelled");
          },
        }
    }
</script>

<style>
.alert{
  margin: 10px 0;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave{

}
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter{
  transform: translateY(20px);
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 1s;

}
.slide-leave{
  transform: translateY(0px);
}
.slide-leave-active{
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
  /* to remove the chunk during removing items */
  /* the old item removed still have its position in document flow */
  /* the position will only changed when the old item is removed */
  /* position: absolute allows items to move up when old one is animated */
}
.slide-move{
  transition: transform 1s;
  /* for the movement process */
  /* whenever the transform happens, animate it in 1 sec */
}
@keyframes slide-in {
  from{
    transform: translateY(20px);
  }
  /* where we want to start */
  to{
    transform: translateY(0);
  }
  /* where we want to end */
}
@keyframes slide-out {
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(20px);
  }
  /* where we want to end */
}
</style>
