---
sidebar: auto
sidebarDepth: 2
---
# 面试秘籍

> 多年面试经验总结

## 自我介绍

## 项目问答

- 项目的背景是什么；
- 当前项目的目的是什么；
- 在开发过程中，你的角色是什么；
- 在开发过程中有遇到过什么样的难题；
- 遇到这些问题，你都是如何进行解决的；
- 项目完成之后，取得了哪些成果；

## 技术面

## Html5

### 1.`WEB`标准以及`W3C`标准是什么?

- 标签闭合、标签小写、不乱嵌套、使用外链`css`和`js`、结构行为表现的分离

### 2.`Doctype`作用? 严格模式与混杂模式如何区分？它们有何意义?

- 页面被加载的时，`link`会同时被加载，而`@imort`页面被加载的时，`link`会同时被加载，而`@import`引用的`CSS`会等到页面被加载完再加载 `import`只在`IE5`以上才能识别，而`link`是`XHTML`标签，无兼容问题 `link`方式的样式的权重 高于`@import`的权重
- `<!DOCTYPE>` 声明位于文档中的最前面，处于 `<html>` 标签之前。告知浏览器的解析器， 用什么文档类型 规范来解析这个文档
- 严格模式的排版和 `JS` 运作模式是 以该浏览器支持的最高标准运行
- 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。 `DOCTYPE`不存在或格式不正确会导致文档以混杂模式呈现

#### 2.1 `HTML5` 为什么只需要写 `<!DOCTYPE HTML>`?

- `HTML5` 不基于 `SGML`，因此不需要对`DTD`进行引用，但是需要`doctype`来规范浏览器的行为
- 而`HTML4.01`基于`SGML`,所以需要对`DTD`进行引用，才能告知浏览器文档所使用的文档类型

### 3. `html`头部`meta`相关

``` html
<!--H5标准声明，使用 HTML5 doctype，不区分大小写-->
<!DOCTYPE html>
<!--标准的 lang 属性写法-->
<head lang=”en”>
<!--声明文档使用的字符编码-->
<meta charset=’utf-8′>
<!--优先使用 IE 最新版本和 Chrome-->
<meta http-equiv=”X-UA-Compatible” content=”IE=edge,chrome=1″/>
<!--页面描述-->
<meta name=”description” content=”不超过150个字符”/>
<!-- 页面关键词-->
<meta name=”keywords” content=””/>
<!--网页作者-->
<meta name=”author” content=”name, email@gmail.com”/>
<!--搜索引擎抓取-->
<meta name=”robots” content=”index,follow”/>
<!--为移动设备添加 viewport-->
<meta name=”viewport” content=”initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no”>
<!--iOS 设备 begin-->
<!--添加到主屏后的标题（iOS 6 新增）-->
<meta name=”apple-mobile-web-app-title” content=”标题”>
<!--是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏-->
<meta name=”apple-mobile-web-app-capable” content=”yes”/>
<!--添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）-->
<meta name=”apple-itunes-app” content=”app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL”>
<!--设置苹果工具栏颜色-->
<meta name=”apple-mobile-web-app-status-bar-style” content=”black”/>
<!--忽略自动识别数字为电话号码、邮箱号-->
<meta name=”format-detection” content=”telphone=no, email=no”/>
<!-- 启用浏览器的极速模式(webkit)-->
<meta name=”renderer” content=”webkit”>
<!--避免IE使用兼容模式-->
<meta http-equiv=”X-UA-Compatible” content=”IE=edge”>
<!--不让百度转码-->
<meta http-equiv=”Cache-Control” content=”no-siteapp” />
<!--针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓-->
<meta name=”HandheldFriendly” content=”true”>
<!--微软的老式浏览器-->
<meta name=”MobileOptimized” content=”320″>
<!--uc强制竖屏-->
<meta name=”screen-orientation” content=”portrait”>
<!--QQ强制竖屏-->
<meta name=”x5-orientation” content=”portrait”>
<!--UC强制全屏-->
<meta name=”full-screen” content=”yes”>
<!--QQ强制全屏-->              
<meta name=”x5-fullscreen” content=”true”>     
<!--UC应用模式-->  
<meta name=”browsermode” content=”application”>
<!-- QQ应用模式-->
<meta name=”x5-page-mode” content=”app”>
<!--windows phone 点击无高亮-->
<meta name=”msapplication-tap-highlight” content=”no”>
<!--设置页面不缓存--> 
<meta http-equiv=”pragma” content=”no-cache”>
<meta http-equiv=”cache-control” content=”no-cache”>
<meta http-equiv=”expires” content=”0″>
```

#### 3.1 `viewport`

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
  // width    设置viewport宽度，为一个正整数，或字符串‘device-width’
  // device-width  设备宽度
  // height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
  // initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数
  // minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
  // maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
  // user-scalable    是否允许手动缩放
```

怎样处理 移动端 1px 被 渲染成 2px问题?

- 局部处理
  - meta标签中的 viewport属性 ，initial-scale 设置为 1
  - rem按照设计稿标准走，外加利用transfrome 的scale(0.5) 缩小一倍即可；
- 全局处理
  - mate标签中的 viewport属性 ，initial-scale 设置为 0.5
  - rem 按照设计稿标准走即可

### 4.`html5`有哪些新特性、移除了那些元素？

- `HTML5` 现在已经不是 `SGML` 的子集，主要是关于图像，位置，存储，多任务等功能的增加
  - 新增选择器 `document.querySelector`、`document.querySelectorAll`
  - 拖拽释放`(Drag and drop) API`
  - 媒体播放的 `video` 和 `audio`
  - 本地存储 `localStorage` 和 `sessionStorage`
  - 离线应用 `manifest`
  - 桌面通知 `Notifications`
  - 语意化标签 `article、footer、header、nav、section`
  - 增强表单控件 `calendar、date、time、email、url、search`
  - 地理位置 `Geolocation`
  - 多任务 `webworker`
  - 全双工通信协议 `websocket`
  - 历史管理 `history`
  - 跨域资源共享`(CORS) Access-Control-Allow-Origin`
  - 页面可见性改变事件 `visibilitychange`
  - 跨窗口通信 `PostMessage`
  - `Form Data` 对象
  - 绘画 `canvas`
- 移除的元素：
  - 纯表现的元素：`basefont、big、center、font、 s、strike、tt、u`
  - 对可用性产生负面影响的元素：`frame、frameset、noframes`
- 支持`HTML5`新标签：
  - `IE8/IE7/IE6`支持通过`document.createElement`方法产生的标签
  - 可以利用这一特性让这些浏览器支持`HTML5`新标签
  - 浏览器支持新标签后，还需要添加标签默认的样式
  - 当然也可以直接使用成熟的框架、比如`html5shim`
- 如何区分 `HTML` 和 `HTML5`
  - `DOCTYPE`声明、新增的结构元素、功能元素

### 5.谈谈对语义化的理解

- 用正确的标签做正确的事情！
- `HTML`语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
- 在没有样式`CSS`情况下也以一种文档格式显示，并且是容易阅读的。
- 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 `SEO`。
- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

``` js
CACHE MANIFEST
#v0.11
CACHE:
js/app.js
css/style.css
NETWORK:
resourse/logo.png
FALLBACK:
/offline.html
```

- 浏览器是怎么对`HTML5`的离线储存资源进行管理和加载的呢？
  - 在线的情况下，浏览器发现`html`头部有`manifest`属性，它会请求`manifest`文件，如果是第一次访问`app`，那么浏览器就会根据`manifest`文件的内容下载相应的资源并且进行离线存储。如果已经访问过`app`并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的`manifest`文件与旧的`manifest`文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
  - 离线的情况下，浏览器就直接使用离线存储的资源。

## Css

### 1.盒模型

- 基本概念：所有 `HTML` 元素都可以视为一个盒子，该盒子包括：`边距(margin)`、`边框(border)`、`填充(padding)`和`实际内容(content)`
- 标准模型（`W3C模型`） 和 `IE` 模型
  - 差异：宽高计算方式不同
  - 标准模型：计算元素的宽高只算 `content` 的宽高
  - IE模型：计算元素的宽高包含 `content` 、`padding`、`border`
- 如何设置两种模型?

``` css
div {
  // 设置标准模型(默认值)
  box-sizing: content-box;
  // 设置IE模型
  box-sizing: border-box;
}
```

- `JS` 如何设置盒模型的宽高?

``` js
// 假设已经获取节点 dom
// 只能获取内联样式设置的宽高
dom.style.width/height
// 获取渲染后即时运行的宽高，只支持IE
dom.currentStyle.width/height
// 获取渲染后即时运行的宽高，兼容性很好
dom.getComputedStyle.width/height
// 获取渲染后即时运行的宽高，兼容性很好，一般用来获取元素的绝对位置
dom.getBoundingClientRect().width/height
```

### 2.浮动与清除浮动

- `float`特性
  - 浮动元素会从普通文档流中脱离，但浮动元素影响的不仅是自己，它会影响周围的元素对其进行环绕；
  - 不管一个元素是行内元素还是块级元素，只要被设置了浮动，那浮动元素就会形成一个块级框，可以设置它的宽度和高度，因此浮动元素常常用于制作横向配列的菜单，可以设置大小并且横向排列。
- 父元素高度塌陷问题：一个块级元素如果没有设置高度，其高度是由子元素撑开的。如果对子元素设置了浮动，那么子元素就会脱离文档流，也就是说父元素没有内容可以撑开其高度，这样父级元素的高度就会被忽略，这就是所谓的高度塌陷。
- 清除浮动的方法
  - 给父元素定义高度（优点：操作简单；缺点：高度定死）
  - 添加一个空元素 `<div class="clear"></div> (.clear { clear: both })`（优点：浏览器支持好；缺点：凭空多出很多无用空节点）
  - 父元素设置 `overflow: hidden auto`（缺点：无法显示溢出的元素）
  - 父元素伪元素设置清除浮动

``` css
.father {
  ...
}
.father:: after {
  content: ' ';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
```

### 3.水平垂直居中

- 知道宽高

``` css
  .outer {...}
  /* 
  * absolute + 负margin
  * 优点：兼容性好,易于理解
  * 缺点：需要知道子元素的宽高
  */
  .inner {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
    ...
  }
  /* 
  * absolute + auto margin
  * 优点：兼容性好,易于理解
  * 缺点：需要知道子元素的宽高
  */
  .inner {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    ...
  }
  /* 
  * absolute + calc
  * 优点：易于理解
  * 缺点：兼容性依赖于 calc，只支持 IE9及以上,需要知道子元素的宽高
  */
  .inner {
    position: absolute;
    width: 200px;
    height: 200px;
    left: calc(50% - 100px);
    right: calc(50% - 100px);
    ...
  }
```

- 不知道宽高

``` css
  .outer { ... }
  /* 
  * absolute + transform
  * 优点：易于理解,实现简单,无需知道子元素宽高
  * 缺点：兼容性依赖于 transform，只支持 IE9 及以上
  */
  .inner {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    ...
  }
  /* 
  * table
  * 优点：兼容性好,易于实现,不需要知道子元素宽高,可读性强
  */
  .outer {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    ...
  }
  .inner { ... }
  /* 
  * flex
  * 优点：实现简单
  * 缺点：兼容性依赖于 flex
  */
  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
    ...
  }
  .inner { ... }
  /* 
  * grid
  * 优点：实现简单
  * 缺点：兼容性依赖于 grid
  */
  /*父元素指定子元素对齐方式*/
  .outer {
    display: grid;
    align-content: center;
    justify-content: center;
    ...
  }
  .inner { ... }
  /*子元素自己指定对齐方式*/
  .outer {
    display: grid;
    ...
  }
  .inner {
    align-self: center;
    justify-self: center;
    ...
  }
```

## JavaScript

### 1.数据类型

1.1 JS有哪些数据类型？哪些是基本数据类型？哪些是引用数据类型？

- 基本数据类型：number、string、boolean、undefined、null、symbol
- 引用数据类型：object(array、function)

1.2 基本数据类型和引用数据类型的区别？

- 两种类型的区别是：存储位置不同
- `基本数据类型`是存储在`栈(stack)`中的,`引用数据类型`是存储在`堆(heap)`中的

1.2.1 为什么要这样存储？

- `基本数据类型`直接存储在`栈(stack)`中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储
- `引用数据类型`存储在`堆(heap)`中的对象，占据空间大、大小不固定，如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

### 2.类型判断

2.1`typeof`是否能正确判断类型？

- `typeof`对于基本类型来说，除了`null`都可以显示正确的类型

``` js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
```

- `typeof`对于对象来说，除了函数都会显示`object`，所以说`typeof`并不能准确判断变量到底是什么类型

``` js
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'
```

2.2 如何准确判断对象类型？

- 如果我们想判断一个对象的正确类型，这时候可以考虑使用`instanceof`，因为内部机制是通过原型链来判断的

``` js
const Person = function() {}
const p1 = new Person()
p1 instanceof Person // true

var str1 = new String('hello world')
str1 instanceof String // true
```

::: tip 注意：
直接通过 instanceof来判断基本类型是不行的

``` js
var str = 'hello world'
str instanceof String // false
```

:::

2.3 有没有什么办法既能准确判断基本类型也能准确判断`原生`引用类型？

- 有，`Object.prototype.toString()`方法，会返回一个形如`"[object XXX]`的字符串
- 如果对象的`toString()`方法未被重写，就会返回如上面形式的字符串
- 但是，大多数对象，`toString()`方法都是重写了的，这时，需要用`call()`或`Reflect.apply()`等方法来调用

``` js
/**判断基本类型*/
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call("1"); // "[object String]"
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"

/**判断原生引用类型*/
function fn(){}
Object.prototype.toString.call(fn); // "[object Function]"
Object.prototype.toString.call(new Date()); // "[object Date]"
Object.prototype.toString.call([1,2,3]); // "[object Array]"
Object.prototype.toString.call(/[hbc]at/gi); // "[object RegExp]"
```

::: tip 注意：
`Object.prototype.toString()`不能正确判断自定义类型，自定义类型只能用`instanceof`操作符进行判断

``` js
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person("Rose", 18);
Object.prototype.toString.call(person); // "[object Object]"
person instanceof Person; // true
```

:::
2.3.1 `Object.prototype.toString()`的原理

- 对于 `Object.prototype.toString.call(arg)`，若参数为 `null` 或 `undefined`，直接返回结果。

```js
Object.prototype.toString.call(null);       // => "[object Null]"
Object.prototype.toString.call(undefined);  // => "[object Undefined]"
```

- 若参数不为 `null` 或 `undefined`，则将参数转为对象，再作判断。
- 转为对象后，取得该对象的 `[Symbol.toStringTag]` 属性值（可能会遍历原型链）作为 `tag`， 然后返回 `"[object " + tag + "]"` 形式的字符串。

``` js
// Boolean 类型，tag 为 "Boolean"
Object.prototype.toString.call(true);            // => "[object Boolean]"
// Number 类型，tag 为 "Number"
Object.prototype.toString.call(1);               // => "[object Number]"
// String 类型，tag 为 "String"
Object.prototype.toString.call("");              // => "[object String]"
// Array 类型，tag 为 "Array"
Object.prototype.toString.call([]);              // => "[object Array]"
// Arguments 类型，tag 为 "Arguments"
Object.prototype.toString.call((function() {
  return arguments;
})());                                           // => "[object Arguments]"
// Function 类型， tag 为 "Function"
Object.prototype.toString.call(function(){});    // => "[object Function]"
// Error 类型（包含子类型），tag 为 "Error"
Object.prototype.toString.call(new Error());     // => "[object Error]"
// RegExp 类型，tag 为 "RegExp"
Object.prototype.toString.call(/\d+/);           // => "[object RegExp]"
// Date 类型，tag 为 "Date"
Object.prototype.toString.call(new Date());      // => "[object Date]"
// 其他类型，tag 为 "Object"
Object.prototype.toString.call(new class {});    // => "[object Object]"
```

::: tip 注意：
如无该属性，或该属性值不为字符串类型，则会被忽略，返回`"[object Object]"`

```js
const o1 = { [Symbol.toStringTag]: "A" };
const o2 = { [Symbol.toStringTag]: "" };
const o3 = { [Symbol.toStringTag]: null };
const o4 = { [Symbol.toStringTag]: [] };
Object.prototype.toString.call(o1);      // => "[object A]"
Object.prototype.toString.call(o2);      // => "[object ]"
Object.prototype.toString.call(o3);      // => "[object Object]"
Object.prototype.toString.call(o4);      // => "[object Object]"
```

:::

### 3.类型转换

- JS 中类型转换只有三种情况，分别是：`转换为布尔值` `转换为字符串` `转换为数字`

|        原始值         | 转换目标 |                           结果                           |
| :-------------------: | :------: | :------------------------------------------------------: |
|        number         |  布尔值  |                  除了0、-0、NaN都为true                  |
|        string         |  布尔值  |                   除了空字符串都为true                   |
|    undefined、null    |  布尔值  |                          false                           |
|       引用类型        |  布尔值  |                           true                           |
|        number         |  字符串  |                        5转换成'5'                        |
| boolean、函数、symbol |  字符串  |                          'true'                          |
|         数组          |  字符串  |                     [1,2]转换成'1,2'                     |
|         对象          |  字符串  |                    '[object Object]'                     |
|        string         |   数字   |                 '1'转换成1，'a'转换成NaN                 |
|         数组          |   数字   | []转换成0，[1]转换成1，['1']转换成1，其它情况都转换成NaN |
|         null          |   数字   |                            0                             |
|  除数组外的引用类型   |   数字   |                           NaN                            |
|        symbol         |   数字   |                           抛错                           |
::: tip 条件判断
在条件判断时，除了 `undefined，null， false， NaN， ''， 0， -0`，其他所有值都转为 true，包括所有对象
:::

#### 3.1 对象转原始类型

对象在转换类型的时候，会调用内置的 `[[ToPrimitive]]` 函数，对于该函数来说，算法逻辑一般来说如下：

- 如果已经是原始类型了，那就不需要转换了
- 调用 `x.valueOf()`，如果转换为基础类型，就返回转换的值
- 调用 `x.toString()`，如果转换为基础类型，就返回转换的值
- 如果都没有返回原始类型，就会报错
::: tip 注意
`Symbol.toPrimitive`函数可以被重写，该方法在转原始类型时调用优先级最高。

``` js
const a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}
1 + a // => 3
```

:::

#### 3.2 四则运算符(+、-、*、/)运算时的类型转换

`加法(+)`运算它有以下几个特点：

- 特点一：运算中其中一方为字符串，那么就会把另一方也转换为字符串
- 特点二：如果一方不是字符串或者数字，那么会将它转换为数字或者字符串

```js
1 + '1' // '11' 触发特点一，将数字1转换为字符串'1'
true + true // 2 触发特点二，将true转换为数字1
4 + [1,2,3] // "41,2,3" 触发特点二，将数组通过toString转为字符串'1,2,3'
```

::: tip 注意
另外对于加法还需要注意这个表达式 `'a' + + 'b'`

``` js
'a' + + 'b' // -> "aNaN"
```

因为 `+ 'b'` 等于 `NaN`，所以结果为 `"aNaN"`，你也可以通过 `+ '1'`的形式来快速获取 `number` 类型。
:::
对于`除了加法的运算符(-、*、/)`来说，不是数字的一方会被转换成数字后再计算

```js
4 * '3' // 12
4 * [] // 0
4 * [1, 2] // NaN
```

#### 3.3 比较运算符

- 如果是对象，就通过 `toPrimitive` 转换对象
- 如果是字符串，就通过 `unicode` 字符索引来比较

``` js
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  }
}
a > -1 // true 因为 a 是对象，所以会通过 valueOf 转换为原始类型再比较值。
'a'>'b' // false
```

### 4.变量声明(var、let、const)

有 3 个关键字可以声明变量：`var、const 和 let`。其中，`var` 在`ECMAScript的所有版本`中都可以使用，而 `const` 和 `let` 只能在 `ECMAScript 6 及更晚的版本`中使用。

#### 4.1 var 关键字

- 声明作用域：使用 `var` 操作符定义的变量会成为包含它的函数的局部变量

```js
function test() {
 var message = "hi"; // 局部变量
 msg = "hello"; // 全局变量（在严格模式下，给未声明的变量赋值，会抛出 ReferenceError。）
}
test(); // 调用它会创建这个变量并给它赋值。调用之后变量随即被销毁
console.log(message); // message is not defined 变量被销毁所以会出错！
console.log(msg); // "hello" 去掉 var 操作符之后，msg变成了全局变量，所以可以在函数外部访问到。
```

- 声明提升：使用`var`关键字声明的变量会自动提升到函数作用域顶部

```js
function foo() {
 console.log(age);
 var age = 26;
 /* 之所以不会报错，是因为 ECMAScript 运行时把它看成等价于如下代码：
  * var age;
  * console.log(age);
  * age = 26; 
  */
}
foo(); // undefined
// 这就是所谓的“提升”（hoist），也就是把所有变量声明都拉到函数作用域的顶部。
```

#### 4.2 let 声明

- `let` 声明的范围是块作用域，而 `var` 声明的范围是函数作用域。

```js
if (true) {
 var name = 'Matt';
 console.log(name); // Matt
}
console.log(name); // Matt

if (true) {
 let age = 26;
 console.log(age); // 26
}
console.log(age); // ReferenceError: age is not defined
// age 变量之所以不能在 if 块外部被引用，是因为它的作用域仅限于该块内部。
// 块作用域是函数作用域的子集，因此适用于 var 的作用域限制同样也适用于 let。
```

- `let` 不允许同一个块作用域中出现冗余声明。这样会导致报错：

```js
var name;
var name; // 不会报错
let age;
let age2; // SyntaxError: Identifier 'age' has already been declared

// 此嵌套使用相同的标识符不会报错，而这是因为同一个块中没有重复声明：
let age = 30;
console.log(age); // 30
if (true) {
 let age = 26;
 console.log(age); // 26
}

// 对声明冗余报错不会因混用 let 和 var 而受影响。
// 这两个关键字声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在：
var name;
let name; // SyntaxError: Identifier 'name' has already been declared
let age;
var age; // SyntaxError: Identifier 'age' has already been declared
```

- 暂时性死区：`let` 声明的变量不会在作用域中被提升

``` js
// name 会被提升
console.log(name); // undefined
var name = 'Matt';
// age 不会被提升
console.log(age); // ReferenceError：age is not defined
let age = 26; 

/*
* 在解析代码时，JavaScript 引擎也会注意出现在块后面的 let 声明，
* 只不过在此之前不能以任何方式来引用未声明的变量。
* 在 let 声明之前的执行瞬间被称为 “暂时性死区”（temporal dead zone），
* 在此阶段引用任何后面才声明的变量都会抛出 ReferenceError。
*/
```

- 全局声明：与 `var` 关键字不同，使用 `let` 在全局作用域中声明的变量不会成为 `window` 对象的属性（`var` 声明的变量则会）。

``` js
var name = 'Matt';
console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); // undefined
/*
* 不过，let 声明仍然是在全局作用域中发生的，相应变量会在页面的生命周期内存续。
* 因此，为了避免 SyntaxError，必须确保页面不会重复声明同一个变量。
*/
```

- 条件声明：在使用 `var` 声明变量时，由于声明会被提升，`JavaScript` 引擎会自动将多余的声明在作用域顶部合并为一个声明。因为 `let` 的作用域是块，所以不可能检查前面是否已经使用 `let` 声明过同名变量，同时也就不可能在没有声明的情况下去声明它。

```js
<script>
 var name = 'Nicholas';
 let age = 26;
</script>

<script>
// 假设脚本不确定页面中是否已经声明了同名变量
// 那它可以假设还没有声明过
var name = 'Matt';
// 这里没问题，因为可以被作为一个提升声明来处理
// 不需要检查之前是否声明过同名变量

let age = 36;
// 如果 age 之前声明过，这里会报错 
</script>

// 使用 try/catch 语句或 typeof 操作符也不能解决，因为条件块中 let 声明的作用域仅限于该块。
<script>
  if(typeof name === 'undefined'){
    var name;
  }
  // name 会被提升到函数作用域顶部
  // 所以这个赋值是有效的
  name = 'Matt';

 if (typeof name === 'undefined') {
  let name;
 }
 // name 被限制在 if {} 块的作用域内
 // 因此这个赋值形同全局赋值
 name = 'Matt';
 try {
  console.log(age); // 如果 age 没有声明过，则会报错
 }
 catch(error) {
  let age;
 }
 // age 被限制在 catch {}块的作用域内
 // 因此这个赋值形同全局赋值
 age = 26;
</script>
// 为此，对于 let 这个新的 ES6 声明关键字，不能依赖条件声明模式。
```

- `for` 循环中的 `let` 声明：

``` js
// let 出现之前，for 循环定义的迭代变量会渗透到循环体外部：
for (var i = 0; i < 5; ++i) {
 // 循环逻辑
}
console.log(i); // 5
// 改成使用 let 之后，这个问题就消失了，因为迭代变量的作用域仅限于 for 循环块内部：
for (let i = 0; i < 5; ++i) {
 // 循环逻辑
}
console.log(i); // ReferenceError: i 没有定义
// 在使用 var 的时候，最常见的问题就是对迭代变量的奇特声明和修改：
for (var i = 0; i < 5; ++i) {
 setTimeout(() => console.log(i), 0)
}
// 你可能以为会输出 0、1、2、3、4
// 实际上会输出 5、5、5、5、5
// 之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值：5。
// 在之后执行超时逻辑时，所有的 i 都是同一个变量，因而输出的都是同一个最终值。
// 而在使用 let 声明迭代变量时，JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。
// 每个 setTimeout 引用的都是不同的变量实例，所以 console.log 输出的是我们期望的值，也就是循
// 环执行过程中每个迭代变量的值。
for (let i = 0; i < 5; ++i) {
 setTimeout(() => console.log(i), 0)
}
// 会输出 0、1、2、3、4
// 这种每次迭代声明一个独立变量实例的行为适用于所有风格的 for 循环，包括 for-in 和 for-of循环。
```

#### 4.3 const 声明

`const` 的行为与 `let` 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且
尝试修改 `const` 声明的变量会导致运行时错误。

``` js
const age = 26;
age = 36; // TypeError: 给常量赋值
// const 也不允许重复声明
const name = 'Matt';
const name = 'Nicholas'; // SyntaxError
// const 声明的作用域也是块
const name = 'Matt';
if (true) {
 const name = 'Nicholas';
}
console.log(name); // Matt
// const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象，
// 那么修改这个对象内部的属性并不违反 const 的限制。
const person = {};
person.name = 'Matt'; // ok
```

::: tip 注意
 在严格模式下，不能定义名为 `eval` 和 `arguments` 的变量，否则会导致语法错误。
:::
::: tip 声明风格及最佳实践

1. 不使用 `var`，限制自己只使用 `let` 和 `const` 有助于提升代码质量，因为变量有了明确的作用域、声明位置，以及不变的值。
2. `const` 优先，`let` 次之；使用 `const` 声明可以让浏览器运行时强制保持变量不变，也可以让静态代码分析工具提前发现不合法的赋值操作。因此，应该优先使用 `const` 来声明变量，只在提前知道未来会有修改时，再使用 `let`。这样可以让开发者更有信心地推断某些变量的值永远不会变，同时也能迅速发现因意外赋值导致的非预期行为。
:::

## 框架

## 浏览器

## 网络协议

## 前端工程化/自动化

## 性能优化

## 算法

## 规划

## 问题
