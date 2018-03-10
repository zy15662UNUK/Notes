<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                    <transition name="rotate" mode="out-in">
                      <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
                    </transition>

            </div>
        </div>
    </div>
</template>

<script>
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';

    export default {
        data() {
            return {
                mode: 'app-question'
            }
        },
        methods: {
          answered(isCorrect) {
              if (isCorrect) {
                  this.mode = 'app-answer';
              } else {
                  this.mode = 'app-question';
                  alert('Wrong, try again!');
              }
          }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer
        }
    }
</script>

<style>
  .rotate-enter{

  }
  .rotate-enter-active{
    animation: rotate-in 0.3s ease-out forwards;
  }
  .rotate-leave{

  }
  .rotate-leave-active{
    animation: rotate-out 0.3s ease-out forwards;
  }
  @keyframes rotate-in {
   from {
     transform: rotateY(1.57rad);
   }
   to{
     transform: rotateY(0);
   }
  }
  @keyframes rotate-out {
   from {
     transform: rotateY(0);
   }
   to{
     transform: rotateY(1.57rad);
   }
  }
</style>
