- $( document ).ready(function() {
    code can be run when the page finishes loading
}) or $(functon(){})
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

##### Slide up :
- $().slideup()/slideToggle(): slide effect

##### Any movement or animation:
- $().animate({pararmeter to change},time span in ms, callback function)
```
$(".sample").animate({
  height: "+=100px",//css height increase 100px per click
  width: "+=100px"
  },1000,)
```
##### callback function:
Usually the last argument, immediately run
```
$(".sample").slideToggle(1000, functon(){
  alert("Animation complete");
  })
```
The monment the animation ended, the callback starts to execute

chaining: Multiple jquery manipulation at the same time
```
$(".sample").css('background-color','purple')
.slideUp(2000)
.slideDown(1000);
```
Chain of three manipulations

###### Getting/setting the HTML, text and form values
- $("h1").text(): get the text, without the tag
- $("h1").text("new text"): set the text
- $("h1").html(): get the HTML content, with the tag
- $("h1").html(htmlString): set the HTML content
- $("input").val(): get the value of <input>
- $("input").val(value): change the value of <input>
- $("a").attr("href"): get the attribute values
- $("a").attr("href", "https://yahoo.com")/$("a").attr({
  "href":"https://yahoo.com",
  "title":"Going to being site"
  })
- $("element").append("HTMLString"): add html string as the end child of the element
- $("element").prepend("HTMLString"): add html string as the begining child of the element
- $("element").after(): add some html string after the element
##### Toggling the css
- $().addClass("new"): change css by adding a new class
- $().toggleClass("new"): add or remove class
- $().removeClass("new")
- $(".sample").css('width',200+100)
- $().innerHeight()
- $().outerHeight(): height including padding and border
- $().css({"top":30, "left":30})

##### Select HTML elements
- $("h1.my"): <h1> with a class of mine
- $("p:first"): the first <p>
- $(".my:first-child"):  class .my which is the first child of some one
- $( "div span:first-child" ): <span> that is the first child of div
- $("p:first-child, p:last-child"): both <p> as the first child and p as the last child
- $( "li" ).has( "ul" ).css( "background-color", "red" ); Get the <li> with <ul> child
- $("div.bluebox"): div of class bluebox
- $("[href]"): all elements with href
- $("tr:even/odd"): even/odd table row.
- $(":input"): all the inputs of a page
- $(":Submit"): buttons with a type of submit
- $("div:has(table)"): all divs that have <table>
##### Events && animations
- Mouse events: (mouseenter, mouseleave) https://api.jquery.com/category/events/mouse-events/
- Keyboard event: (keypress, keydown, keyup) https://api.jquery.com/category/events/keyboard-events/
- Form event:(submit, change, focus) https://api.jquery.com/category/events/form-events/
- Document/browser event: (load, resize, scroll) scroll)https://api.jquery.com/category/events/browser-events/
- Change CSS: http://api.jquery.com/category/css/
- $("input").focus(function(){$(this.css(background-color: blue))}): Change the bgc of input boxes when they are focused(click the input box)
- $("input").blur(): lose the focus, i.e. click outside the input box
- $().click(): click event listener
- $().dblclick(function (){}): double double click
- $().hide(): hide something, the rest of the content will take up its place
- $().hide(time in ms, funct for what else happen): fade out in a given time
- $(ele).wrap(wrapper): wrap ele into the wrapper
- $().toggle(time,callback functon): same as .hide()
- $().show(): Display the matched elements.
- $().show(time in ms, funct for what else happen): come out in a given time
- $().fadeOut(time)/fadeToggle(): img fade out effect, like hide()
- $().animate({width: "200px", height: "300px"},slow): repeat it we can have a series of animation one by one
- $().delay(minisecs).animate(): delay some time before animation
##### jquery twentytwenty plug in
- https://zurb.com/playground/twentytwenty
- Need jquery.event.move.js & jquery.twentytwenty.js & twentytwenty.css
- In js part:
```
$(window).load(function() {
  $("#1").twentytwenty();
});
```
```$(window).load(function() {}``` is to ensure this js run after the whole page has finished loading
```
##### jquery TypeAhead plug in------Dynamic searching box with search hints
- https://github.com/twitter/typeahead.js/blob/master/README.md
- 介绍：https://segmentfault.com/a/1190000006036166
- Each time we use it, just change the `var states`
- Change the css for the suggestion menu:
`.tt-suggestion` is each term in the suggestion box
`.tt-dataset .tt-dataset-states` is the whole seggestion menu
##### AJAX: exchange data between webpage and server. Change parts of the page witout have the page refreshed
- Loading content from txt file:
```
$("#selector").load("path/to/.txt #paragraphWeNeeds");
```
- $.ajax({
  url: "path/to/.txt",
  success: function(dataReceived){manipulation on dataReceived},
  });
- $.ajax({
  url: "path/to/.txt"}).done(function(dataReceived) {})
##### jQuery UI: https://jqueryui.com/
- http://www.runoob.com/jqueryui/jqueryui-custom.html
- jquery UI provides variety of widgets and interaction methods
###### Draggable && droppable
 1. draggerable: http://api.jqueryui.com/draggable/
 ```
 $("").draggable()
 or override the default settings:
 $("").draggable({
   axis: "y", //Only draggable along y axis
   revert: true, // Always be able to return its original place
   start: function(){}, //function to execute when start to drag the element
   drag: function(){}, //function to execute when we drag
   stop: funtion(){}, //function to execute when we stop to drag
   helper: "clone", // Only drag a clone of the element
   appendTo: "p", // Specify which element to append the draggable element to.
   })
 ```
 2. droppable: drag another element and drop it into an element.http://api.jqueryui.com/droppable/#entry-examples
 ```
 $().droppable({
   drop: function(event,ui){
     $(this).css(change bgc);
     $(this).find("p").remove();// Remove the "You can drop things here" in the dropbox;
     $(<div></div>).text(ui.draggable.text()//Get the draggable elements' text).appendTo(this); //
     },
   accept: "#list li"// Decide which element will be accepted
   })
 ```
###### Resizable
- http://api.jqueryui.com/resizable/
- ```
$().resizable({
  maxHeight: 200,
  minHeight: 50,
  minWidth: 100,
  maxWidth: 300,
  aspectRatio: 4/3, // Keep this ratio when resizing
  ghost: true, // If set to true, a semi-transparent helper element is shown for resizing.
  containment: "#container", // Restrain the resizing by the containment.
  animate: true,
  alsoResize: "selector", // Resize another part at the same time
  resize: function(){}
  <!-- what happen when resize -->
  })
```
##### Selectable
- http://api.jqueryui.com/selectable/
- html:
```
<ul id="list">
<li class="ui-state-default">1</li>
<li class="ui-state-default">2</li>
<li class="ui-state-default">3</li>
</ul>
```
- css: style when selecting(mousedown) and selected(mouseup)
```
#list .ui-selecting{
  baackground: #740da0;
}
#list .ui-selected{
  background: #953ebb;
  color: white;
}
```
- js:
```
$("#list").selectable({
  stop: function(){
    $(".ui-selected").each(function(){
      $("<p></p>").text($(this).text()).appendTo("selectorForShowBox");
      <!-- 1. add selected content to <p> 2. append this <p> to the show box -->
      }); // excute function for each of them
    },
  }); // Run after selection.
```
##### Sortable: Rearrange the order of the list items
- http://api.jqueryui.com/sortable/
-
```
$().sortable({
  placeholder: "ui-state-highlight", //"ui-state-highlight" is the placeholder style
  cancel: ".notSortable", //".notSortable" is the item that we don't want it to be sortable
  connectWith: ".connectList",
  <!-- Say there are two lists, both with a class of "connectList". The items from one lists can now be dragged to the other. But we have to ensure that each list has a minimum height so that the we can put items into the empty list-->
  });
```
##### Accordin: Displays collapsible content panels for presenting information in a limited amount of space.折叠版
- http://api.jqueryui.com/accordion/
- Each section has a header and a content div. The outest container must have a height: auto;
- HTML for each section
```
<div>
  <h1></h1>
  <div>content</div>
</div>
```
-
```
$().accordion({
  collapsible: true,
  <!-- Make sure every panal can be fold and unfold -->
  icons: {
    header: "",
    <!-- Header icon when collapsed -->
    activeHeader: "",
    <!-- Header icon when expanded -->    
    <!-- icons list: http://api.jqueryui.com/theming/icons/ -->
  },
  heightStyle: "content",
  <!-- The content section will only take as much section as they need -->
  });

  $( ".selector" ).accordion( "refresh" );
  <!-- Process any headers and panels that were added or removed directly in the DOM and recompute the height of the accordion panels. Results depend on the content and the heightStyle option.
This method does not accept any arguments. -->
```
##### Autocomplete
- http://api.jqueryui.com/autocomplete/
- HTML
```
<input id="city"></input>
```
- CSS
```
.ui-autocomplete{
  max-height: 100px;
  overflow-y: scroll;
  max-width: 200px;
  overflow-x: scroll;
}
<!-- styling the dropbox -->

#city{
  width: 200px;
}
```
-
```
$("#city").autocomplete({
  source: [London, Shanghai, Paris, Madris],
});
```
##### Buttons: Enhances standard form elements like buttons, inputs and anchors to themeable buttons with appropriate hover and active styles.
- https://jqueryui.com/button/
-
```
$("#button1").button({
  icons: {primary: "ui-icon-folder-open",secondary: "ui-icon-carat-all"},
  <!-- primary is the icon on the left side of the icon, secondary is the one on the right -->
  text: "false";
  <!-- remove the text -->
  });

$("checkbox").button();
<!-- Style the checkbox to be a button, changing text color when checked -->

$("checkboxes").buttonset();
<!-- set a series of buttons -->

$("#radioBoxes").buttonset();
<!-- Style the set of radio boxes -->
```
##### Datepicker
- http://api.jqueryui.com/datepicker/#utility-formatDate
- HTML
```
<p>Flight departure</p> <input id="departure"></input>
```
- js:
```
$("#departure").datepicker({
  showAnim: "slideDown/drop/fadeIn",
  <!-- setting the showing animation -->
  changeYear: true,
  numberOfMonth: 2,
  <!-- show two months at the same time -->
  dateFormat: "m/dd/yy",
  <!-- Formatting the date -->
  showOn: "button",
  <!-- Open the calender by the button -->
  buttonImage: "images/calender.png",
  buttonImageOnly: true,
  <!-- style the img with a img -->
  buttonText: "choose your departure date",
  <!-- text showing when hover the button -->
  minDate: +1,
  <!-- minimum date is today's date +1 day -->
  onClose: function(selectedDate){
    $("#return").datepicker("option","minDate",selectedDate);
  }
  <!-- Restrict the return date choice  -->
  showWeek: true,
  <!-- show the week number in the calender -->
  });
```
##### Dialog
- http://api.jqueryui.com/dialog/
- HTMl:
```
<div id="myDialog" title="This is a dialog">welcome</div>
<button id="open"></button>
<!-- The "title" here will be the title for the dialog -->
<div id="confirmation" title="Are you sure you want to leave?"><p>You will lose all the information</p></div>
<button id="goToPreviousPage"></button>
```
- js:
```
$("myDialog").dialog({
  autoOpen: false,
  <!-- The dialog will not show when page loaded -->
  });
$("#open").click(function(){
  $("myDialog").dialog("open");
  <!-- bind open dialog to click the cutton -->
  });
$("button").button();
$("#confirmation").dialog({
  autoOpen: false,
  modal: true,
  buttons: {
    "Go to previous page": function(){window.history.back();},
    Cancel: function(){$(this).dialog("close")}
    },
  <!-- Add buttons in the dialog -->
  });
$("#goToPreviousPage").click(function(){
  $("#confirmation").dialog("open");
  })
```
##### Menu
- http://api.jqueryui.com/menu/
- HTML
```
<div class="bluebox ui-corner-all" id="facebook">
  <ul id="continents">
    <li>
      Europe
      <ul>
        <li>
          France
        </li>
        <li>
          UK
          <ul>
            <li>
              England
            </li>
            <li>
              Scotland
            </li>
            <li>
              Wales
            </li>
            <li>
              Northern Ireland
            </li>
          </ul>
        </li>
        <li>
          Spain
        </li>
      </ul>
    </li>
    <li>
      Africa
    </li>
    <li>
      America
    </li>
    <li>
      Asia
    </li>
    <li>
      Australia
    </li>
  </ul>
</div>
```
- js:
```
$("#continents").menu();
$("#continents2").menu();
```
##### Progress bar
- http://api.jqueryui.com/progressbar/
- HTML
```
<div id="progress">
  <div id="label"></div>
</div>
```
-
```
$().progressbar({
  value: 25,
  <!-- choose a value between 0 and 100, start value -->
  });

var x =0;
$("button").click(function(){
  $("#label").text("In progress...");
  var prograss = setInterval(function(){
    x++;
    $("#label").text(x+"%");
    $("#prograss").progressbar("option","value",x);
    if(x>99){
      clearInterval(progress);
    }
    },100);
  <!-- setInterval(cb, time): the fucntion cb will run per time -->
  })；
```
##### Select menu
- http://api.jqueryui.com/selectmenu/
- HTML
```
<select id="strength">
  <option>Motivation</option>
  <option>Motivation</option>
  <option>Motivation</option>
  <option>Motivation</option>
</strength>
```
-
```
$("#strength").selectmenu();
```
##### Slider:Drag a handle to select a numeric value
- http://api.jqueryui.com/slider/
- HTML
```
<div id="slider"></div>
<input type="text" id="slideshow" readonly></input>
```
- js
```
$("#slider").slider({
  slide: function(event,ui){
    $("#slideshow").val(ui.value);
    <!-- ui.value refer to the value of the slider ui.values[0]/ui.values[1] for two handles-->
    },
    min: 0,
    <!-- value at the beginning of the slider -->
    max: 25,
    <!-- value at the end of the slider -->
    range: true,
    <!-- two handler -->
    step: 1000,
    <!-- increasing/decreasing by 1000 -->
  });
```
##### Spinner, tabs, Tooltips

##### Detect a click outside an element
- 检测element外的点击
- https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
- stopPropagation() method:
http://www.w3school.com.cn/jsref/event_stoppropagation.asp
