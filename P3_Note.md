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
##### Color palettes(调色板) and canvas
- http://www.color-hex.com/color-palette/185
- Color palettes make your website in a resembalance of color. Always stick to one color palettes.
- https://www.canva.com 设计模板
##### Parallax 视差（滚动时背景图不动）
- pixel cog: parallax.js: https://github.com/pixelcog/parallax.js
##### Editing template
- Free HTML templates http://www.htmltemplates.net/
##### Slider problem:
- https://www.w3schools.com/howto/howto_js_sidenav.asp
- Hide
```
transform: translate3d(-500px, 0, 0);//Move out of the canvas
transition: transform 0.2s;//transition time
z-index: 1;
```
- show
```
.show{
  position: absolute;// stay in place and make z-index work
  z-index: 1;// upper layer
  transform: translate3d(0, 0, 0);//Go back to x=0, y=0, z=0
  transition: transform 0.5s;
  overflow: hidden;* Disable horizontal scroll */
  height: 500px;// Limit the page height
  opacity: 0.95;
}

```
- Handle click
```
$("#ham").click(function(event) { //click hambuger icon
  $(".left_side_bar").toggleClass('show');
});
$("#cross").click(function(event) { // click close
  $(".left_side_bar").toggleClass('show');
});

```
