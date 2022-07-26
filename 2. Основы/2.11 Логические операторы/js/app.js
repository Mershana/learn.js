'use strict'

// Логические операторы

// Задачи
// Что выведет alert (ИЛИ)?
/* alert( null || 2 || undefined );
Ответ: 2, это первое значение, которое в логическом контексте даст true. */

// Что выведет alert (ИЛИ)?
// Ответ: сначала 1, затем 2.
/* Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.
Первый оператор ИЛИ || выполнит первый alert(1).
Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного значения.
Так как второй операнд 2 является истинным, то вычисления завершатся, результатом undefined || 2 будет 2, которое будет выведено внешним alert( .... ).
Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет. */

// Что выведет alert (И)?
// Что выведет код ниже?
// alert( 1 && null && 2 );
// Ответ: null, потому что это первое «ложное» значение из списка.

// Что выведет alert (И)?
// Что выведет код ниже?
// alert( alert(1) && alert(2) );
// Ответ: 1, а затем undefined.
/* Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.
Поэтому до правого alert дело не дойдёт, вычисления закончатся на левом. */

// Что выведет этот код?
// alert( null || 2 && 3 || 4 );
// Ответ: 3.
/* Приоритет оператора && выше, чем ||, поэтому он выполнится первым.
Результат 2 && 3 = 3, поэтому выражение приобретает вид:
null || 3 || 4
Теперь результатом является первое истинное значение: 3. */

// Проверка значения из диапазона
/* Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90. */
/* let age = 90;
if (age >= 14 && age <= 90){
	console.log('true'); */


/* Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора. */
/* let age = 91
if (!(age >= 14 && age <= 90)){
	console.log('false');
} */

/* let age = 91
if (age < 14 || age > 90){
	console.log('false')
}
 */


// Вопрос о "if"
/* Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)? */
/* if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); */
/* Ответ: первое и третье выполнятся.
Подробности: */
// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
// if (-1 || 0) alert( 'first' );

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
// if (-1 && 0) alert( 'second' );

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
// if (null || -1 && 1) alert( 'third' );

// Проверка логина
/* let login = prompt('Кто там?', '');

if (login === 'Админ') {

	let pass = prompt('Пароль?', '');

	if (pass === 'Я главный'){
		alert('Здраствуйте!');
	} else if (pass === '' || pass === null){
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}
 } else if (login === '' || login === null){
	alert ('Отменено');
 } else {
	alert('Я вас не знаю');
 }
 */

/*  При выполнении ИЛИ || с несколькими значениями:
 result = value1 || value2 || value3;
 Оператор || выполняет следующие действия:
 
 Вычисляет операнды слева направо.
 Каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
 Если все операнды являются ложными (false), возвращает последний из них.
 Значение возвращается в исходном виде, без преобразования.
 
 Другими словами, цепочка ИЛИ || возвращает первое истинное значение или последнее, если такое значение не найдено. */
