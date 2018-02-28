##### Using Props for Parent => Child Communication
- we want to use data from User.vue in UserDetail.vue
- main.js

```
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
```
- App.vue

```
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';

    export default {
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
```
- User.vue

```
<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
```
- UserDetail.vue

```
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
    </div>
</template>

<script>
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
```
- To solve this problem, several changes are necessary

- User.vue
```
<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button type="button" name="button" @click="changeName">chaneg my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
          return {
            name: "James"
          };
        },
        methods: {
          changeName() {
            this.name="fuck";
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
```
- UserDetail.vue

```
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{name}}</p>
    </div>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
```
1.
In UserDetail.vue the code below define the properties that is settable from outside. The properties here should match the properties used in this template
```
export default {
  props: ['name']
}
```
2. in User component

```
<app-user-detail :name="name"></app-user-detail>
```
- the "name" property in UserDetail.vue is dynamically binded to the name in the data object of User.vue through v-bind
- :propNameInUserDetail="propNameInUser
- propNameInUserDetail should be the same as `props: ['name']`

##### Using props in child components
- in UserDetail.vue

```
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{switchName()}}</p>
    </div>
</template>
<script>
  export default {
    props: ['name'],
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      }
    }
  }
</script>
```
- Notice here `props: ['name']` can be referred like data
- `this.name` refers the `props: ['name']`

##### Validate props
- In the above case, if name in User.vue is an int, an error will be thrown since split() can not accept Int. Hence we need to validate the props
- In UserDetail.vue

```
<script>
  export default {
    props: {
      name: [Array,String]
    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      }
    }
  }
</script>
```
- `name: [Array,String]` means only accept Array or String. Once, say, an Int is passed in, a warning will be thrown in console
- Can also be

```
props: {
  name: {
    type: String,
    required: true
  }
}
```
This means the props must be a string. And a value must be passed in
- `name: {type: String,dafault: "max"}` set the default value

#####Using Custom Events for Child => Parent Communication
- in UserDetail.vue

```
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{switchName()}}</p>
        <button type="button" name="button" @click="resetName()">Reset name</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: [Array,String]
    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      },
      resetName(){
        this.name="max"
      }
    }
  }
</script>
```
- **`this.name="max"` now this will only change the "name" here. BUT if name is an object or array passed from User.vue, change it here will also change the "name" in User.vue**
- But now we still have to pass this change to User.vue. for the `changeName()` function
- In UserDetail.vue

```
<script>
  export default {
    props: {
      name: [Array,String]
    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      },
      resetName(){
        this.name="max";
        this.$emit("nameWasReset",this.name);
      }
    }
  }
</script>
```
- `this.$emit()`create an event named "nameWasReset", passing the this.name in UserDetail.vue to the User.vue. Now we need to add listener in User.vue to this event. Simply adding @nameWasReseton the template

```
<app-user-detail :name="name" @nameWasReset="name=$event"></app-user-detail>
```
- `$event` is the data passed in in this event

##### Understanding Unidirectional Data Flow
- information travels childX <--> parent. But can not pass among children
- child1 <--> parent <--> child3

##### Communicating with Callback Functions
- Now we put the `resetName()` function in User.vue and pass it to the UserDetail.vue
- In User.vue

```
<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button type="button" name="button" @click="changeName">chaneg my name</button>
        <p>name is {{name}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" :resetFun="resetName" @nameWasReset="name=$event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
          return {
            name: "James"
          };
        },
        methods: {
          changeName() {
            this.name="fuck";
          },
          resetName(){
            this.name="max";
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>
```
- `:resetFun="resetName"` pass the resetName function into resetFun in UserDetail.vue
- In UserDetail.vue

```
<script>
  export default {
    props: {
      name: [Array,String],
      resetFun: Function
    },
  }
</script>
```
- Receive the pass in function in props

##### Communication between Sibling Components
- a more basic way child1 --> parent -->child2
- In UserEdit.vue (child1)

```
<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button type="button" name="button" @click="editAge">Edit age</button>
         <p>age is {{userAge}}</p>
    </div>
</template>
<script>
  export default{
    props: ['userAge'],
    methods:{
      editAge(){
        this.userAge = 30;
        this.$emit("ageEdit",this.userAge);
      }
    }
  }
</script>
```
- In userAge.vue (parent)

```
<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button type="button" name="button" @click="changeName">chaneg my name</button>
        <p>name is {{name}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" :userAge="age" :resetFun="resetName" @nameWasReset="name=$event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageEdit="age=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
          return {
            name: "James",
            age: 27
          };
        },
        methods: {
          changeName() {
            this.name="fuck";
          },
          resetName(){
            this.name="max";
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>
```
- In UserDetail.vue (child2)

```
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{switchName()}}</p>
        <p>age is {{userAge}}</p>
        <button type="button" name="button" @click="resetName()">Reset name</button>
        <button type="button" name="button" @click="resetFun()">Reset name</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: [Array,String],
      resetFun: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      },
      resetName(){
        this.name="max";
        this.$emit("nameWasReset",this.name);
      }
    }
  }
</script>
```
- age initially in User.vue --->pass to UserEdit by props--->changed in UserEdit and passed to User by $emit()--->pass to UserDetail by props

##### Using an Event Bus for Communication
- create event bus in main.js-->import eventBus to UserEdit and $emit()change to eventBus--->import eventBus to UserDetail and receive it in created()

- In main.js, the eventBus must be created before the render app

```
import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
})
```
- In UserEdit

```
<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button type="button" name="button" @click="editAge">Edit age</button>
         <p>age is {{userAge}}</p>
    </div>
</template>

<script>
import {eventBus} from "../main.js"
  export default{
    props: ['userAge'],
    methods:{
      editAge(){
        this.userAge = 30;
        // this.$emit("ageEdit",this.userAge);
        eventBus.$emit("ageEdit",this.userAge);
      }
    }
  }
</script>
```
- `eventBus.$emit("ageEdit",this.userAge);` can also be put in main.js as `export const eventBus = new Vue({methods:{changeAge(age){this.$emit("ageEdit",age);}}});`

- In UserDetail. Callback in change() function

```
<script>
import {eventBus} from "../../main.js"

  export default {
    props: {
      name: [Array,String],
      resetFun: Function,
      userAge: Number
    },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      },
      resetName(){
        this.name="max";
        this.$emit("nameWasReset",this.name);
      }
    },
    created() {
      //do something after creating vue instance
      eventBus.$on("ageEdit",(ageData) => {
        this.userAge = ageData;
      });
    }
  }
</script>
```
