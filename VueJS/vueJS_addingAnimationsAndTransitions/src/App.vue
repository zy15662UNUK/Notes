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
                <transition :name="animation" type="animation">
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              show: true,
              animation: "fade"
            }
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
