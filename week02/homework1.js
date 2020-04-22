// 1. 编写带括号的四则运算产生式

// 定义Number
<Number> := "0" | "1" | "2"| "3" | "4"| "5" | "6"| "7" | "8"| "9"
<DecimalNumber> := '0' | (("1" | "2"| "3" | "4"| "5" | "6"| "7" | "8"| "9") <Number>*)

// 加法 减法
<AddAndSubitionExpression> := <BracketedExpression> |
  <AddAndSubitionExpression> "+" <BracketedExpression> 
  <AddAndSubitionExpression> "-" <BracketedExpression>

// 乘法 除法
<MultiAndDiviExpression> := <BracketedExpression> |
    <MultiAndDiviExpression> "*"<BracketedExpression> |
    <MultiAndDiviExpression>  "/" <BracketedExpression>

// 带括号
<BracketedExpression>:= <DecimalNumber> 
    | "(" <AddAndSubitionExpression> ")"
    | "(" <MultiAndDiviExpression> ")"


// 2. 尽可能寻找你知道的计算机语言，尝试把它们分类

/**
 * 首先有四类
 * 0. 无限制文法
 * 1. 上下文相关文法
 * 2. 上下文无相关文法
 * 3. 正规文法 
 */

/**
 * C++        1型，* 可能是指针，可能是乘号
 * Java       1型
 * Python     不太确定，
 * JavaScript 绝大部分是2型，但是有些情况会是1型，比如说 `/`,可能是除号，可能是正则
 * HTML       2型
 * CSS        2型
 */</MultiAndDiviExpression>