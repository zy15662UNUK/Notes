##### Development server
- vuejs runs on the client, but the app will be served by a server anyway
- test your app under realistic circumstances, not loading all files on start up, we need a server
- use a development server

##### development workflow
- single file template: the template outsourced into a separate file and the workflow will be using has a certain tool in it which understands such single file templates and then is able to compile them

##### vue CLI--intall and first project
- vuejs project templates
- after installation of vuejs CLI, first switch path to the file where we want to build the project. `cd "C:\Users\zy156\Documents\实习信息\FrontEnd-related\Notes\VueJS"`
- then `vue init templateName projectName`. Now a new project file is created at the working path.
- To get started, input
```
     cd firstVueCLI
     npm install
     npm run dev
```
- the `npm run dev` will run a local host and it will automatically recompile everything and reload our server automatically whenever we change a file
##### Webpack template folder structure
- src folder, where to write our source code
- .babelrc: transfer between ES6 and ES5
- index.html: html file that actually gets served
- `<script src="/dist/build.js"></script>` in index.html file: build.js is a bundled js file, which bundle muliple vue js file into this one file. To see this disk folder, have to build it for production.

##### .vue file in src folder
- outsource our template in our vuejs code in seperate file which will get compile to normal js therefore are able to run natively in the browser. Can compile any template and html code to JavaScript because there are javascript object representations of html elements and that is how to build our application
- main.js file: `render: h => h(App)`this function will automatcally render a certain template in the place of `el:'#app'`
- app.vue is the single-file components with a .vue extension. Its default content is the vue welcoem page. we can delete it to write our own
##### the object in vue file;
```
<script>
export default {
}
</script>
```

- `export default{}` behave like a vue instance, which is not required and can be deleted. It is required if want to attach some business logic to this template.

##### deploy the application
- `npm run build` this will build it for production which means it will now actually create the disk folder which holds the bundle and minify it

```
More about ".vue" Files and the CLI
Section 6, Lecture 88
The ".vue" File

You can learn more about ".vue" Files in this Article from the official Docs: http://vuejs.org/guide/single-file-components.html

Learn more about the render()  method in another Article in the official Docs: http://vuejs.org/guide/render-function.html

Finally, it's important to be aware of the fact, that you can also load your App.vue File (your main Component/ Instance) via the following two Ways (Alternatives to render() ):

1) Using the ES6 Spread Operator (for that, you need to add babel-preset-stage-2 as a Dependency and to your .babelrc File):

npm install --save-dev babel-preset-stage-2

.babelrc:

{
  "presets": [
    ["es2015", { "modules": false }],
    ["stage-2"]
  ]
}


import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  ...App
});


2) Using mount() :

Also install the stage-2 preset as described above.

import Vue from 'vue'
import App from './App.vue'

const vm = new Vue({
  ...App
});

vm.$mount('#app');


The CLI

Learn more about the CLI here: https://github.com/vuejs/vue-cli

Local CSS / Sass Files and CLI Templates

The webpack-simple template doesn't support local CSS or Sass files, because no CSS loader is set up.

Use the webpack template (not webpack-simple) to get this functionality: https://github.com/vuejs-templates/webpack
```
