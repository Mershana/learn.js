'use strict'

// Function Expression
/* Итого
Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
Если функция объявлена как отдельная инструкция в основном потоке кода, то это Function Declaration.
Если функция была создана как часть выражения, то считается, что эта функция объявлена при помощи Function Expression.
Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
Функции, объявленные при помощи Function Expression, создаются, только когда поток выполнения достигает их.
В большинстве случаев, когда нам нужно создать функцию, предпочтительно использовать Function Declaration, т.к. функция будет видима до своего объявления в коде. Это позволяет более гибко организовывать код и улучшает его читаемость.

Таким образом, мы должны прибегать к объявлению функций при помощи Function Expression в случае, когда синтаксис Function Declaration не подходит для нашей задачи. Мы рассмотрели несколько таких примеров в этой главе, и рассмотрим их ещё больше в будущем. */

/* Function Expression в сравнении с Function Declaration
Давайте разберём ключевые отличия Function Declaration от Function Expression.

Во-первых, синтаксис: как определить, что есть что в коде.

Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.

// Function Declaration
function sum(a, b) {
  return a + b;
}
Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части «выражения присваивания» =:

// Function Expression
let sum = function(a, b) {
  return a + b;
};
Более тонкое отличие состоит, в том, когда создаётся функция движком JavaScript. */

