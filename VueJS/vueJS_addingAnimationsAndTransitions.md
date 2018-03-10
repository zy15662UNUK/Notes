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

##### Understanding JavaScript Animations
- events: before-enter, enter, after-enter, enter-cancelled, before-leave, leave, after-leave, leave-cancelled
- Pay attention to leave(el,done) and enter(el,done)

```
<transition :name="animation"  mode="out-in"
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  @enter-cancelled="enterCancelled"
  @before-leave="beforeLeave"
  @leave="leave"
  @after-leave="afterLeave"
  @leave-cancelled="leaveCancelled"
>
  <div style="width:100px;height:100px;background-color:lightgreen" v-if="load">

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
show: false,
animation: "fade",
load: true
}
},
methods: {
beforeEnter(el) {
console.log("beforeEnter");
},
enter(el,done) {
console.log("Enter");
done();
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
},
leave(el,done) {
console.log("leave");
done();
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
```
- click the button twice, in console:

```
beforeLeave
leave
afterLeave
beforeEnter
Enter
afterEnter
```
- leaveCancelled and enterCancelled will ont be shown, since the enter and leave was not cancelled

###### Excluding CSS from your Animation

```
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
```
- `:css="false"` means don't look for css classes, we don't use them

##### Creating an Animation in JavaScript
- Pay attention to the `done()`, it should be executed when we really are done; so it should be placed after `clearInterval(interval)`

```
<script>
    export default {
        data() {
            return {
              show: false,
              animation: "fade",
              load: false,
              elementWidth: 100
            }
        },
        methods: {
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
```

##### Animating Dynamic Components
- Switch the components by `:is`
- `name='fade'` bind it to fade CSS
- `mode="out-in"` remove the chunk

```
<transition name="fade" mode="out-in">
  <componentName :is="selectedComponent"
  ></componentName>
</transition>
```
- This

```
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
              selectedComponent: "DangerAlert"
            }
        },
        components: {
          DangerAlert: dangerAlert,
          SuccessAlert: successAlert
        },
        methods: {
          clickFn(){
            console.log(this.selectedComponent);
            if(this.selectedComponent=='SuccessAlert'){
              this.selectedComponent='DangerAlert'
            }else{this.selectedComponent='SuccessAlert'}
          },

</script>
```

##### Animating Lists with <transition-group>
- Methods for adding and removing items
```
methods: {
  addItem(){
    const pos = Math.floor(Math.random()*this.numbers.length);
    this.numbers.splice(pos,0,this.numbers.length+1);
    // add a array length+1 at random place
  },
  removeItem(index){
    this.numbers.splice(index,1);
  },
}
```
- `<transition-group name="slide">` inside the function

```
<button @click="addItem" class="btn btn-primary" type="button" name="button">Add item</button>
<ul class="list-group">
  <transition-group name="slide">
    <li @click="removeItem(index)" style="cursor:pointer" class="list-group-item" v-for="(elem,index) in numbers" :key="elem">{{elem}}</li>
  </transition-group>
</ul>
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
```
- note on the notes in `.slide-leave-active` and `.slide-move`
