'use strict'

// Базовые операторы, математика

/* Термины: «унарный», «бинарный», «операнд»
Прежде, чем мы двинемся дальше, давайте разберёмся с терминологией.

Операнд – то, к чему применяется оператор. Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2. Иногда их называют «аргументами» вместо «операндов».

Унарным называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак числа на противоположный: */

// Бинарным называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:

// Сложение строк при помощи бинарного +
// Обратите внимание, если хотя бы один операнд является строкой, то второй будет также преобразован в строку.

// Операторы ++ и -- могут быть расположены не только после, но и до переменной.
// Когда оператор идёт после переменной — это «постфиксная форма»: counter++.
// «Префиксная форма» — это когда оператор идёт перед переменной: ++counter.
/* Давайте проясним этот момент. Как мы знаем, все операторы возвращают значение. Операторы инкремента/декремента не исключение. Префиксная форма возвращает новое значение, в то время как постфиксная форма возвращает старое (до увеличения/уменьшения числа). */

// Задачи
/* Постфиксная и префиксная формы
Чему будут равны переменные a, b, c и d в примере ниже? */
/* let a = 1, b = 1;
alert( ++a ); // 2, префиксная форма возвращает новое значение
alert( b++ ); // 1, постфиксная форма возвращает старое значение
alert( a ); // 2, значение увеличено один раз
alert( b ); // 2, значение увеличено один раз */

/* Результат присваивания
Чему будут равны переменные a и x после исполнения кода в примере ниже? */
/* let a = 2;
let x = 1 + (a *= 2);
a = 4 (умножено на 2)
x = 5 (вычислено как 1 + 4) */

/* Преобразование типов */
// Какой результат будет у выражений ниже?
/* "" + 1 + 0 // 10 (1)
"" - 1 + 0 // -1 (2)
true + false // 1
6 / "3" //2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 //$45
"4" - 2 // 2
"4px" - 2  // NaN 
"  -9  " + 5 // '-9 5' (3) 
"  -9  " - 5 // -14 (4) 
null + 1 // 1 (5)
undefined + 1 // NaN (6)
" \t \n" - 2 // -2 (7)  */

/* 1 -  Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.
2 - Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.
3. Сложение со строкой превращает число 5 в строку и добавляет к строке.
4. Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).
5. null становится 0 после численного преобразования.
6. undefined становится NaN после численного преобразования.
7. Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования. */

// Исправьте сложение
/* Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3. */
/* let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
console.log(+a + +b); // 3
console.log(Number(a) + Number(b)); //3 */

