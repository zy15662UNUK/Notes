##### Exceptions
- try & catch
-
```
try{
  do some thing with some function.
}
catch(error){
  document.getElementById('test').innerHTML = error.message;
}
```
- https://www.w3schools.com/jsref/jsref_throw.asp
```
<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="message"></p>

<script>
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if(x == "")  throw "is Empty";// throw an error when x is ""
        if(isNaN(x)) throw "not a number";
        if(x > 10)   throw "too high";
        if(x < 5)    throw "too low";
    }
    catch(err) {
        message.innerHTML = "Input " + err;//if any error is throwed above, catch it and post on the page
    }
}
</script>

</body>
</html>
}
```
##### String in built method
- string.indexOf(something)
- string.lastIndexOf(something);
- string.slice(start,end);
- string.substring(start,end);
- string.substr(start,length);
- string.replace(something, otherthing to replace some thing)
- ```var name1= "kelvin";
var name2 = new String("kelvin");
```
Here name1 is a string and name2 is a object
name1 === name2 will return false
##### Number in build mathod
- parseInt(string)// extract number value from a string, but this number should be the first element of the string
- toString()
- Number(bool)
- Math.random();
- Math.min();
- Math.round();
- Math.PI
##### "use strict"; at the first line. Nolong allow things like forgetting semicolon
##### Regular expression
- https://regexr.com/---commmunity
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
##### Multiple and unknown number of arguments
-
```
var multiplyer = function() {
  var result = 1;
  for (var i = arguments.length -1; i>= 0; i--){
    result *= arguments[i];
  }
  return result;
}
```
- arguments is a collection of whatever input to this function
##### Creating objects with function
```
var superHero = function (){
  var power,villian
}// Creating a object frame, with power & villian being the properties.
peterParker = new superHero; // peterParker is now a instance of superHero
peterParker.power = "AirSwing";
peterParker.villian = "Green Goblin";
```
##### Prototyping
- http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
-
```
function walk() {
  console.log("I can walk");
}
var superHero = function (){
  var power,villian
}
superHero.prototype.walk = walk;// Now superHero has inherent the walk method from the function walk;
var peterParker = new superHero;// Now peterParker has 2 properties and 1 method inherent from walk function;
```
- create a child object:
child =  Object.create(parentObject); Now the child has inherent all the properties the parentObject has;
##### Closure
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
-
A self invoking function
-
```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```
- Practical Closure
```
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
<!-- size12, size14, and size16 are now functions which will resize the body text to 12, 14, and 16 pixels, respectively. We can attach them to buttons (in this case links) as follows: -->
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```
relavent HTML
```
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```
- Immediately invoked functions
```
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
```
- You'll notice we're defining an anonymous function that creates a counter, and then we call it immediately and assign the result to the counter variable. We could store this function in a separate variable makeCounter and use it to create several counters.
- ```
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */
```
##### DOM and NODES concepts
- ```document.getElementById("test").innerHTML```here the document is the one page (index.html)
- element node(tag like <p>)
- attribute node(id, class)
- text node (The actural text )
##### DOM accessing elements
- document methods: https://developer.mozilla.org/en-US/docs/Web/API/Document
- All elements in DOM are objects
- document = <html> + others
- <html> = <head> + <body>
- <body> = <h1> + <ul> + ...
- .innerHTML the content of a element
- document.getElementById("input").value// Both set and get the input values
##### Creating elements
- document.createElement("li");
- element.innerHTML = things //set content as things
- element.appndChid() //append to be the last child
- element.setAttribute(attribute,value)
- element.style.property = ;
- element.write(text)
- document.images
##### Grabbing form contents
- HTML part
```
<form id="myForm" action="#">
<input type="text" name="fname" value="test"><br>
<input type="text" name="lname" value="test"><br><br>
<button onclick="myFunction()">getValue</button>
</form>
```
- var selectFormElement = document.forms[index].elements[index];
-
```
function myFunction(){
  var x = document.forms["myForms"] // Get by the id name
  var text = "";
  for (var i=0; i<x.length; i++){
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("getValue").innerHTML = text;
}
```
##### Changing CSS properties
-
```
<button type="button" onMouseOver="document.getElementById('idfortarget').style.color='red'"></button>
```
##### Binding on mouse event
- onmousedown = "mDown(this)"// Press mouse
- onmouseup = "mUp(this)" // change when release your mouse
- onMouseOver
- onmouseout
- Here "this" refers to the DOM over which the mouse press
-
```
function mDown(obj){
  obj.style.backgroundColor = "yellow";
  obj.innerHTML = "You Clicked!";
}
function mUp(obj){
  obj.style.backgroundColor = "blue";
  obj.innerHTML = "You Clicked!";
}
```
##### Some useful resources
- http://graphicdesignjunction.com/
- http://www.javascriptfreecode.com/
##### Js random ini
- ```num = Math.ceil(Math.random()*9)```
##### randomly choose one character from a list:
- ```
for (var i=0;i<length;i++){
  tmp += keylist.charAt(Math.floor(Math.random(*keylist.length)))
}
```
##### Web clock
-
```
<!-- Remember! this script involves manipulation of DOM, so it should be placed at the end of the body -->

var date, hour, minutes, seconds, clock, color;
function clocky() {
  date = new Date();
   <!-- every new Date will give you the current time information, so this 'date' must be refreshed each time calling the clcocky -->

  hour = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  <!-- all these three will be strings -->
  if (hour <= 9){
    hour = "0" + hour;
  }
  if(minutes <= 9){
    minutes ="0"+ minutes;
  }
  if (seconds <= 9){
      seconds = "0" + seconds;
    }
  clock = hour + ":" + minutes + ":" + seconds;
  color = "#" + hour + minutes + seconds;
  document.getElementById("clock").innerHTML = clock;
  document.getElementById("clock").style.backgroundColor = color;

  setTimeout(clocky,1000);
  <!--  calling clocky() at the next second. -->
}
clocky();
<!-- initiate the function, once it is initiated, it will keep calling itself per second -->
```
