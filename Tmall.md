##### placeholder styling:
```
input::-webkit-input-placeholder{
 font-size: 12px;
 color: #999;
}
```
##### Block vertical align
```
vertical-align:top;
对齐到顶端
```
##### clear
- https://stackoverflow.com/questions/1012131/what-is-the-use-of-style-clearboth
##### how to include html in html
- https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
##### 商品详情上面红线：
- http://how2j.cn/frontshowFullStyle?step.id=3245
- 使用:before和:after
```
.selected::before{
  content: "";
  border: 1px solid #b00000;
  width: 90px;
  height: 0;
  position: absolute;
  <!-- 绝对定位，其父元素超链是相当定位的，所以这绝对定位就会基于父元素 -->
  top: -1px;
  left: -1px;
}
.selected::after{
  border-color: #b00000 transparent transparent;
  /* 美人尖的原理是只有上边框，其他边框是透明色，#b00000 transparent transparent; 这种写法既表示只有上边框有颜色，其他都是透明色 */
  border-style: solid;
  border-width: 5px;
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: -1px;
  left: 50%;
  margin-left: -5px;
}
```
