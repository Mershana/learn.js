'use strict'

// Переменные
// Придумывайте правильные имена
/* Несколько хороших правил:

Используйте легко читаемые имена, такие как userName или shoppingCart.
Избегайте использования аббревиатур или коротких имён, таких как a, b, c, за исключением тех случаев, когда вы точно знаете, что так нужно.
Делайте имена максимально описательными и лаконичными. Примеры плохих имён: data и value. Такие имена ничего не говорят. Их можно использовать только в том случае, если из контекста кода очевидно, какие данные хранит переменная.
Договоритесь с вашей командой об используемых терминах. Если посетитель сайта называется «user», тогда мы должны называть связанные с ним переменные currentUser или newUser, а не, к примеру, currentVisitor или newManInTown. */

/* Итого
Мы можем объявить переменные для хранения данных с помощью ключевых слов var, let или const.

let – это современный способ объявления.
var – это устаревший способ объявления. Обычно мы вообще не используем его, но мы рассмотрим тонкие отличия от let в главе Устаревшее ключевое слово "var" на случай, если это всё-таки вам понадобится.
const – похоже на let, но значение переменной не может изменяться.
Переменные должны быть названы таким образом, чтобы мы могли легко понять, что у них внутри. */

// Задачи
// Работа с переменными
/* Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»). */
/* let name = 'Джон'
let admin = name;
console.log(admin);  *///Джон

// Придумайте правильные имена
/* Создайте переменную для названия нашей планеты. Как бы вы её назвали?
Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную? */
/* let ourPlanetName = 'Земля';
let currentUserName = 'Robert'; */

// Какие буквы (заглавные или строчные) использовать для имён констант?
// Рассмотрим следующий код:
/* const birthday = '18.04
const age = someCode(birthday);
У нас есть константа birthday, а также age, которая вычисляется при помощи некоторого кода, используя значение из birthday (в данном случае детали не имеют значения, поэтому код не рассматривается).

Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?

const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы? можно, ведь дата рождения никогда не поменяется

const AGE = someCode(BIRTHDAY); // а здесь? */ //здесь вполне можно обойтись без вверхнего регистра, т.к каждый год значение(года пользователя) будут меняться