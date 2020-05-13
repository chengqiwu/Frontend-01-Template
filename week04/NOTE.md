# 每周总结可以写在这里

本周通过 `Object-C` 的出发点解释如何执行 JavaScript 代码，然后讲到宏任务和微任务。

在 JS引擎 中，都是微任务。而`evaluateScript` 和 `callWithArguments` 这种不是JS 引擎内部的函数，那么就是微任务。
比如浏览器宿主环境的 `setTimeout` 和 `setInterval`，他们就会产生宏任务。