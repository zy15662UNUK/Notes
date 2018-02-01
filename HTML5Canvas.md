http://www.w3school.com.cn/tags/html_ref_canvas.asp

##### Color selector
```<input type="color" name="" value="" id="color-input">
```
##### Set up a canvas:
HTML```
<canvas id="canvas"></canvas>
```
css```
#canvas{
  width: 100%;
  height:100%;
  cursor: crosshair;
  color: white;
```
js```
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
```
context is the drawing context on the canvas
##### Draw a line:
context.beginPath()//This is to begin the path
context.moveTo(50,50)//move to a new position where 50px top, left from starting.
context.lineTo(x,y)// draw a line to (x,y)
context.lineWidth = 40//line width to be 40px;
context.strokeStyle = //line color
context.stroke(); // line visible
context.lineCap = "round"// set the line cap, round butt square
context.lineJoin = "round" //set line join style(bevel, round, miter)


##### Local storage
localStorage VS. sessonStorage(Once close the window, all data will lost)
- click on the save button
```
$(".save").click(function(){
	if(typeOf(localStorage) != null){
	localStorage.setItem("imgCanvas",canvas.toDataURL());
	// "imgCanvas" will be our variable, canvas.toDataURL() is the value we store in variable "imgCanvas";

	window.alert(localStorage.getItem("imgCanvas");
	// return url message of the graphical information

	}else{
	window.alert("your browser does not support local storage");
	//in case doesnot support the local storage
	}
});


```
- onload saved work from the local storage:
```
	if(localStorage.getItem("imgCanvas") != null){
		window .alert("x is there and it is equal to"+localStorage.getItem("imgCanvas"));
		var img = new Image();
		// img constructor

		img.onload = function(){
			context.drawImage(img,0,0)
		}
		//when img finishing loading, draw it on the canvas

		img.src = localStorage.getItem("imgCanvas");
		// Set the source of the img
	};

```
##### Reset the canvas
```
$('.reset').click(function(){
	context.clearRect(0,0,canvas.width,canvas.height);
	//0, 0 is the top left, canvas.width,canvas.height is the left bottom
	paintOrNot = true;
});
```
