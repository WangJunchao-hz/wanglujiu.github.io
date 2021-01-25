---
sidebar: auto
sidebarDepth: 2
---
# 面试秘籍

> 多年面试经验总结

## 自我介绍

## 项目问答

## 技术面

## Html

## Css

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

::: tip 注意
 在严格模式下，不能定义名为 `eval` 和 `arguments` 的变量，否则会导致语法错误。
:::

## 框架

## 浏览器

## 网络协议

## 前端工程化/自动化

## 性能优化

## 算法

## 规划

## 问题
