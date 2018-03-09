##### Preparing Code to use Transitions
- Only one element allowance in <transition>. Also it can not be a list
##### Setting Up a Transition
- First we have to name the <transition>

```
<transition name="fade">
  <div class="alert alert-info mt-4" v-if="show">
    This is some alert info
  </div>
</transition>
```
- Then the enter and leave css should have the class name of :

```
<style>
.fade-enter{

}
.fade-enter-active{

}
.fade-leave{

}
.fade-leave-active{

}
</style>
```
- The place to set up transition css is in .-active class
- .fade-enter and .fade-leave will be removed once transition starts

```
<style>
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
</style>
```
- **Don't set `opacity=1` here, or it will override the transition effect**
##### Creating a "Slide" Transition with the CSS Animation Pro

```
<transition name="slide">
  <div class="alert alert-info" v-if="show">
    This is some alert info
  </div>
</transition>

<style>
  .slide-enter{
    transform: translateY(20px);
  }
  .slide-enter-active{
    animation: slide-in 0.5s ease-out forwards;
  }
  .slide-leave{
    transform: translateY(0px);
  }
  .slide-leave-active{
    animation: slide-out 0.5s ease-out forwards;
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
```
- `@keyframes slide-in` is for the Animation

##### Mixing Transition and Animation Properties
```
<style>
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
```
- Just put both transition and animation into one CSS
- However if mix animation and transition make sure to set up which one dictates the length by the `type` attr

```
<transition name="slide" type="animation">
  <div class="alert alert-info" v-if="show">
    This is some alert info
  </div>
</transition>
```
- `type="animation"` means the element will be removed once the animation is finished, not the transition
###### Animating v-if and v-show
- It is the same as v-if

###### Setting Up an Initial (on-load) Animation

```
<transition name="fade" appear >
  <div class="alert alert-info" v-if="show">
    This is some alert info
  </div>
</transition>
```
- The `appear` here enable the animation of this element be executed once the page finish loading

##### Using Different CSS Class Names
- animate.css cdn:
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">`
- Now we want to use out sourced animation in vuejs:
- First we have to bind the link in index.html
- Then

```
<transition
          appear
          enter-active-class="animated bounce"
          leave-active-class="animated shake">
  <div class="alert alert-info" v-if="show">
    This is some alert info
  </div>
</transition>
```
- `enter/leave-active-class="outsourced class name"`

##### Using dynamic names and attributes

```
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
```
- bind the `name` of transition to a Property in data

##### Transitioning between Multiple Elements
- Once element dispear then the other one enter

```
<transition :name="animation" mode="out-in">
  <div class="alert alert-info" v-if="show">
    This is some alert info
  </div>
  <div class="alert alert-warning" v-else>
    This is some alert info
  </div>
</transition>
```
- we can use two v-if or v-v-if + v-else to switch between elements. **Attention, v-show cannot be used here**
- `mode="out-in"`: means animate out first then animate in, in-out is the reverse
