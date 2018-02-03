http://how2j.cn/k/json/json-tutorial/531.html
##### 创建JSON对象

JSON对象由 名称/值对组成 名称和值之间用冒号:隔开
名称必须用双引号" 包含起来
值可以是任意javascript数据类型，字符串，布尔，数字 ，数组甚至是对象
不同的名称/值对之间用 逗号 , 隔开
```
var green = {"name":"james","age":"18"};
```

访问JSON对象
```
green.name;
green.age;
```
##### JSON数组
```
var heros=
[
    {"name":"盖伦","hp":616},
    {"name":"提莫","hp":313},
    {"name":"死哥","hp":432},
    {"name":"火女","hp":389}
];

console.log(heros[0].name);
```
##### 对象转换
- JSON对象与JavaScript对象：不存在JSON对象与JavaScript对象的转换问题
- 字符串转为JSON对象：
```
var s = "{\"name\":\"James\",\"age\":\"18\"}";
var gareen = eval("("+s+")");
```
