- https://getbootstrap.com/
- CDN: conotent delivery network

##### bootstrap dropdown menu not working?
- http://yongfei-blog.logdown.com/posts/1889892
- ```<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
```
Need to add these two at the end of the <body>
###### Grid system:
- Better to add class into <div>
- A simple way to apply color:
```
.text-white{
  color: #ffffff;
}
.background-blue{
  background-color: #3b5998;
}

```
- cols in cols:
```
<div class="row">
  ....write something
  <div class="row">
    some thing about a new row
    <div class="col-md-"></div>
  </div>
</div>
```
##### Grid system with different screen size
-
```
<div class="col-sm-3 col-md-2">

</div>
<div class="col-sm-9 col-md-10">

</div>

</div>
```
##### css
###### Typography Code
- These two we don't have to take a look.
###### table forms buttons images
- Take a look at the classes.
###### Components.
###### Javascript
- carousal
###### Layout it
- http://www.layoutit.com/build
- A website to play around the layout with bootstrap then download the souce code.
###### Unsplash: free img website
- https://unsplash.com/
##### Animations: search: animate.css

##### Navbar: directly show the code for the whole navbar
- https://getbootstrap.com/docs/4.0/components/navbar/
##### Navs: show how to make your own Navs
- https://getbootstrap.com/docs/4.0/components/navs/#fill-and-justify
##### JumbotronLightweight, flexible component for showcasing hero unit style content.
- https://getbootstrap.com/docs/4.0/components/jumbotron/
##### Offsetting columns
- https://getbootstrap.com/docs/4.0/layout/grid/#offsetting-columns
##### container VS. container-fluid:
- . Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).
##### sidebar by bootstrap
- https://v4-alpha.getbootstrap.com/examples/dashboard/#
- ```
<nav class="col-sm-3 col-md-2 sidebar">
  <ul class="nav nav nav-pills flex-column">
    <li class="nav-item"><a class="nav-link" href="#">Report</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Report</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Report</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Report</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Report</a></li>
  </ul>
</nav>
```
-
```
<div class="placeholders row">
  <div class="col-sm-6 col-6 col-lg-3 placeholder">
    <img src="img\carlos-muza-84523.jpg" class="img-responsive" width="200px" height="200px" alt="">
  </div>
  <div class="col-sm-6 col-6 col-lg-3 placeholder">
    <img src="img\carlos-muza-84523.jpg" class="img-responsive" width="200px" height="200px" alt="">
  </div>
  <div class="col-sm-6 col-6 col-lg-3 placeholder">
    <img src="img\carlos-muza-84523.jpg" class="img-responsive" width="200px" height="200px" alt="">
  </div>
  <div class="col-sm-6 col-6 col-lg-3 placeholder">
    <img src="img\carlos-muza-84523.jpg" class="img-responsive" width="200px" height="200px" alt="">
  </div>
</div>
```
- col-6 means on the extreme small screen, col-sm-6 on small screen, col-lg-3 on large screen. This is the way bootstrap apply media inquiry
##### Table in bootstrap
```
<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Detail 1</th>
        <th>Detail 2</th>
        <th>Detail 3</th>
        <th>Detail 4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>234</td>
        <td>John</td>
        <td>Pentesting</td>
        <td>China</td>
      </tr>
      <tr>
        <td>234</td>
        <td>John</td>
        <td>Pentesting</td>
        <td>China</td>
      </tr>
      <tr>
        <td>234</td>
        <td>John</td>
        <td>Pentesting</td>
        <td>China</td>
      </tr>
      <tr>
        <td>234</td>
        <td>John</td>
        <td>Pentesting</td>
        <td>China</td>
      </tr>
      <tr>
        <td>234</td>
        <td>John</td>
        <td>Pentesting</td>
        <td>China</td>
      </tr>
    </tbody>
  </table>
</div>
```
###### Tricky to leave some margin for the nav Bar
-
```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
```
- Just put nav bar content into a container div
###### Tricky to right align some navbar items
-
```
<ul class="navbar-nav ml-auto">
  <li class="nav-item">
    <a class="nav-link" href="#">Sign up</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Log in</a>
  </li>
</ul>
```
- ```.ml-auto```:
  1. https://getbootstrap.com/docs/4.0/utilities/flex/#auto-margins
  2. Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (.mr-auto), and pushing two items to the left (.ml-auto).
  ```
  <div class="d-flex">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>

  <div class="d-flex">
    <div class="mr-auto p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>

  <div class="d-flex">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="ml-auto p-2">Flex item</div>
  </div>
  ```
  - Attention on ```.justify-content-end```. This is not going to work here
    1. Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, or around.
    2. https://getbootstrap.com/docs/4.0/utilities/flex/#justify-content
###### Trick to change the color of any navbar items
1. Make sure our own css file is loaded after bootstrap
  ```
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  <link href="css/style.css" rel="stylesheet" type="text/css">
  ```
2. Check devtool to see which class control the color
3. Write overide color set in your own style stylesheet
```
.navbar-light .navbar-brand{
  color: Yellow;
}
```
Here ```.navbar-light .navbar-brand``` are the two classes that involve in the color control
##### Centering the conotent
- This center the div block with individual internal css
```
<div class="container">
  <div class="text-center mt-5">
```
- mt-5: margin top is 5
##### Create dropdown with bootstrap.
-
```
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Log in
  </a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <a class="dropdown-item" href="#"><i class="fa fa-twitter" aria-hidden="true"></i>  Twitter</a>
    <a class="dropdown-item" href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i>  Facebook</a>
    <a class="dropdown-item" href="#"><i class="fa fa-weixin" aria-hidden="true"></i>  Wechat</a>
  </div>
</li>
```
- These codes form a single dropdown list.
##### Hide scrollbar for certain class:
-```  .parallax-window::-webkit-scrollbar {
    display: block;
}
```
##### Solve the text overflow in small screen
-
```
@media screen and (max-width: 992px){
  .major{
    min-height: 100vh;
  }
```
- 992px is the media query point set by bootstrap
- .major is the outest container for the overflow content
- The overflow origins from the bootstrap setting: the box size will no longer equal to row size but its original size. However the row size is a constant in px, so it over flows.
- For some currently unknown reason, set row height to 100% is not going to work.
##### .pull-right/.pull-left
##### adjust button size
- ```
.jumbotron .btn{
  padding: 15px 25px;
}
```
##### Responsive img
- img-fluid class
##### Text-align : text-right + text-right
