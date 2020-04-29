# 每周总结可以写在这里

> Q: 找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？
  JavaScript 有三大对象，分别是本地对象、内置对象和宿主对象。

  宿主对象指宿主环境提供的对象，比如浏览器提供的`Window`和`Document`；
  内置对象指本身就是实例化内置对象，比如 `Math`、`Global`和`JSON`；
  本地对象指 ECMAScript 实现提供的对象，运行时需要通过 `new` 来实例对象，其中有`Object`,`Array`,`Date`,`RegExp`,`Function`,`Boolean`,`Number`,`String`等；

