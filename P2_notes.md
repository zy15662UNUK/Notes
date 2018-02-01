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
