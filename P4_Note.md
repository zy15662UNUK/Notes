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
