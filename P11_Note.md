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
##### 如何解决当navbar-collapse展开时将下面的elements都顶开？
- 见app.js中的collapseAtTop()
##### bootstrap dropdown menu not working?
- http://yongfei-blog.logdown.com/posts/1889892
- ```<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
```
Need to add these two at the end of the <body>
##### Override class
- `color: #f63!important`;
