##### Basic model
- ```
.container{
display: flex;
flex-wrap: wrap;
}
.box{
width: 100%;
}
```
.container is the container of boxes<br>
.box is the boxes.
##### media query for different devices
- For small window on computer or laptop:<br>
```
@media screen and (min-device-width: 100px) and (max-width: 660px){}
```
- For small screen devices, i.e. smart phone:
```
@media screen and (min-device-width: 100px) and (max-device-width: 660px){}
```
##### Changing class by adding relavent class
- 当有media query时候最好不要这么做。因为加上去的class虽然使样式改变方便快捷，但是这样会让media query的内容和加上去的class的css样式冲突造成不便
- id拥有最高权限，它的css样式会覆盖前面写的class或者tag的样式
- nav如果在小屏幕下收起，则与其展开对应的css样式也要写在第一个media query下，否则无法执行。
- 收起点开弹窗最简便的方法是用js添加/删除展开的css样式。这是第一点中唯一的例外。
##### css miscellaneous
- Identify DOM element from parents:<br>
```
.navigation ul li {}
```
<br> This means list in class .navigation
##### How to set up background img?
- Search 'background image css 128x128', pick uo the smallest img as we can ,since we are going to repeat that img.
- https://www.pexels.com/ to find a img
- Now start our project
- "..\\img\\cat.jpeg"
Here ".." means goes a directory back
- If the background img is smaller than the screen size, the img will be automatically repeated. Now we have to use ```  background: url("..\\img\\cat.jpeg") no-repeat;
```
- To keep the background img occupying the whole page:
```
body{
  background: url("..\\img\\cat.jpeg") no-repeat center center fixed;
  background-size: cover;
}

```
1. 1st "center": left-right direction center. 2nd "center": top-bottom direction center.
2. ```  background-size: cover;```: cover the left-right direction
3. "fixed": final step, cover the whole page.
##### Copy and paste this code whenever needs to set up background
##### Manipulating on the text position
```
h1{
  color: white;
  text-align: center;
  border: 3px solid red;
  width: 500px;
  padding: 20px;
  margin: 0(Top-bottom) auto(left-right);
  margin-top: 300px;
  <!-- Attention this distance is relative to the top element -->
}
```
By changeing the margin and margin top
##### Text and fonts
- google fonts https://fonts.google.com/?selection.family=Barlow+Condensed
- font-size: 3em; em is relative to the normal size(16px)
- To make a background color for a text:
HTML:
```
<div>
  <h1>This is a background practice</h1>
</div>
```
css
```
div{
  background-color: lightblue;
}

```
- Font awesome http://fontawesome.io/
###### Text-align: center
- 仅需要放在最外层div中即可让其中所有文字都居中
###### How to center an object exactly in the center
- https://css-tricks.com/
- ```
.centered{
  position: fixed; / or absolute
  top: 50%;
  left: 50%;
}
```
Now the top left corner is at the center of the screen
- Then we have to move 50% of the object to the left and Top
- ```
.centered{
  position: fixed; / or absolute
  top: 50%;
  left: 50%;
  margin-top: -50%;
  margin-left: -50%;
}

```
##### How to find video?
- https://pixabay.com/zh/videos/

##### Handle with video
- ```
video{
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
}
```
- ```   position: fixed;
        top: 0;
        left: 0;
```top&left are to locate the element.
Position: http://www.w3school.com.cn/cssref/pr_class_position.asp
- ```   z-index: -1;```Lower z-index value than content
- ```
min-width: 100%;
min-height: 100%;
width: auto;
height: auto;
```
This is to make sure the video cover the whole page regardless the page size<br>
The first two lines are to set the lower limit. The last two are to "free" the video size
<b>Notice: width/height = 100% doesn't mean covering the whole page</b>

##### Handle the link:
```
a{
  display: inline-block;
  padding: 12px 48px;
  border: solid 4px rgb(255,60,100);
  text-decoration: none;
  font-size: 24px;
  color: rgb(255,60,100);
}
```
Here ```  text-decoration: none;```is to remove the underline
##### Style the link
- It has been decorated since created. E.x.: underline, change color after clicking.
- Order of styling the link:
  1. link
  2. visited
  3. hover
  4. active: when clicked
```
a{
  font-size: 35px;
}
a:link{
  color: red;
}
a:visited{
  color: green;
}
a:hover{
  color: chartreuse;
}
a:active{
  color: darkmagenta;
}
```
Now do some complicated thing
```
a:link, a:visited {
  background-color: hotpink;
  color: white;
  padding: 15 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
<!-- make people feel that they cliock on something -->
a:hover{
  background-color: red;
}
a:active{
  background-color: forestgreen;
}

```
##### "#id"VS.".class"
- id overides everthing
- id is for one object only
##### Navigation bar
- unordered list
- Handle the dots of <li>
```
ul{
  list-style-type: disc/none/square
  margin: 0;
  overflow: hidden;// make the background-color on two sides of the nav connect together.
  background-color: #333；
}
```
****   overflow: hidden;// make the background-color on two sides of the nav connect together.

- make the list in horizontal Order
```
li{
  float: left;

}
<!-- for <a> in <li> -->
li a{
  display: block;//or display: inline-block
  color: white;
  text-align: center;
  padding: 15px 18px;
  text-decoration: none;

}
li a:hover{
  background-color: darkred;
}
<!-- this class is created for every element that needs to be shifted right -->
.rightly{
  float: right;
}
```
- whenever we want to make anything active on that particular page, we add this class to it;
```
.active{
  background-color: orangered;
}
```
##### css gradient
-
```
.big{
  background: linear-gradient(to bottom right, red, white);
}
```
<br>
- Multi-color gradient
```
.big{
  background: linear-gradient(#ff6633,#ffffff,white,red);
}
```
- radial-gradient<br>
```
background: radial-gradient(re[dat center],white)
```
##### Line through a section of text
- ```h1{text-decoration: line-through;}```
##### Check through effect of css(CSS for input when it is checked)
- ```input[type="checkbox"]:checked + label{
  text-decoration: line-through;
}
```
- ```input[type="checkbox"]```select the input which is checkbox
- ```input[type="checkbox"]:checked + label```when the checkbox is checked, label will be crossed.
##### Box sizing
-
```
.one{
  border: 2px solid red;
  width: 300px;
  height: 100px;
}
.two{
  border: 2px solid red;
  width: 300px;
  height: 100px;
  padding: 50px;
  box-sizing: border-box;
}
```
-
```  box-sizing: border-box;
```
This is to let the box with padding to have the same size as the box without padding;
##### css onclick animation
-
```
button{
  font-family: 'Lobster', cursive;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  width: 20%;
  color: white;
  background-color: grey;
  border-radius: 2px;
  cursor: pointer; // Cursor ==> finger
}
button:active{
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(3px);
}
```
##### Styling the button in the header:
```
.header button{
  background-color: #f63;
  border-color: #f63;//Don't forget the border color!!
}
.header button a{
  color: white;
  font-size: 25px;
  font-weight: bold;
}// The font properties can only be adjusted by styling the inner <a>
```
##### 如何使navbar始终处于窗口顶端，不论如何滑动窗口？
- 给navbar加上一个sticky-top的class。
- https://getbootstrap.com/docs/4.0/components/navbar/
##### Override class
- `color: #f63!important`;
##### 如何使navbar在窗口处于页面顶端时为一种样式，当页面滑动到其他位置时又是另一种样式？
- 将两种位置时的css样式分别放置在不同的class中，当窗口滚动后通过js来增减class来达到改变样式的目的。
- 判断窗口位置使用window.scrollY(): https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollY
- (更复杂的办法是监听每次滚动结束，但是这需要另写代码。因为jquery本身的scroll仅能保证在滚动时生效)：https://j11y.io/javascript/special-scroll-events-for-jquery/
- js code:
```
function notAtTop(){
  $("nav").addClass('bg-dark');
  $("nav").removeClass('navAtTop');
  $("#header-top").removeClass('headerAtTop');
}
function atTop(){
  $("nav").removeClass('bg-dark');
  $("nav").addClass('navAtTop');
  $("#header-top").addClass('headerAtTop');
}
$(window).scroll(function(event) {
  if(window.scrollY != 0) {
    notAtTop();
  }
  else{
    atTop();
  }
});
```
- css code:
```
.headerAtTop{
  position: absolute;
  top: 0;
  z-index: 0;
}
.navAtTop{
  background-color: rgba(0,0,0,0.0);
  z-index: 1;
}
```
