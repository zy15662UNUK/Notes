##### A Basic <input> Form Binding
- v-model
- v-model ->double binding.

```
<div class="form-group">
    <label for="email">Mail</label>
    <input
            type="text"
            id="email"
            class="form-control"
            v-model="email">
</div>
<script>
    export default {
      data: function(){
        return {
          email: ""
        };
      }
    }
</script>
```
##### Grouping Data and Pre-Populating Inputs
- group all information into one object

```
<div class="form-group">
    <label for="email">Mail</label>
    <input
            type="text"
            id="email"
            class="form-control"
            v-model="userData.email">
</div>
<script>
    export default {
      data: function(){
        return {
          userData: {
            email: "",
            password: "",
            age: 27
          }
        };
      }
    }
</script>
```

##### Modifying User Input with Input Modifiers
- v-model.lazy: update the binding element only when click outside the element

```
<input
        type="password"
        id="password"
        class="form-control"
        v-model.lazy="userData.password">
```
- v-model.number: transfer the input string into number

```
v-model.lazy.number="userData.password">
```
##### Binding <textarea> and Saving Line Breaks
- Also using v-model
- If you want to set default value, just put the value into the data property

```
<textarea
        id="message"
        rows="5"
        class="form-control"
        v-model="message"
        ></textarea>
```
- Reserve the line break in the input

```
<p style="white-space: pre">Message: {{message}}</p>
```
- The multiline style will be kept when shown

##### Using Checkboxes and Saving Data in Arrays
- v-model for each checkbox: they will be store in one Array:

```
<div class="form-group">
    <label for="sendmail">
        <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"> Send Mail
    </label>
    <label for="sendInfomail">
        <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"> Send Infomail
    </label>
</div>
<script>
    export default {
      data: function(){
        return {
          userData: {
            email: "",
            password: "",
            age: 27
          },
          message: "Put your message here",
          sendMail: []
        };
      }
    }
</script>
```
- These two choices are all bound to sendMail. If we tick anyone, it will be added to the array
- To render the choices:

```
<ul>
    <li v-for="elem in sendMail">{{elem}}</li>
</ul>
```
##### Using Radio Buttons
- Make sure we can only select one and store the selected value

```
<label for="male">
    <input
            type="radio"
            id="male"
            value="Male"
            v-model="gender"
            > Male
</label>
<label for="female">
    <input
            type="radio"
            id="female"
            value="Female"
            v-model="gender"> Female
</label>
<script>
    export default {
      data: function(){
        return {
          userData: {
            email: "",
            password: "",
            age: 27
          },
          message: "Put your message here",
          sendMail: [],
          gender: "Male"
        };
      }
    }
</script>
```
- Also bind choices to the same property. The 'value' attr of each choice will be taken.
- As `gender` is a string, vuejs automatically restrict the choice number

##### Handling Dropdowns with <select> and <option>

```
<select
        id="priority"
        class="form-control"
         v-model="selectedPriority">
    <option v-for="elem in priorities" :selected="elem=='medium'">{{elem}}</option>
</select>
<script>
    export default {
      data: function(){
        return {
          userData: {
            email: "",
            password: "",
            age: 27
          },
          message: "Put your message here",
          sendMail: [],
          gender: "Male",
          priorities: ["high","medium","low"],
          selectedPriority: "high"
        };
      }
    }
</script>
```
- drop down menu controlled by `<option v-for="elem in priorities" :selected="elem=='medium'">{{elem}}</option>` loop through priorities array
- selected item collected by `<select
        id="priority"
        class="form-control"
         v-model="selectedPriority">` also by v-model

##### What v-model does and How to Create a Custom Control
- v-model="userData.email" is equivalent to :value="userData.email"+ @input="userData.email=$event.target"

##### Submitting a Form
- @click.prevent: prevent to submit to the server

```
<button
        class="btn btn-primary" @click.prevent="submitted">Submit!
</button>
```
