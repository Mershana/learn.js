'use strict'

// Оператор нулевого слияния (??)

/* Итого
Оператор нулевого слияния ?? — это быстрый способ выбрать первое «определённое» значение из списка.
Используется для присвоения переменным значений по умолчанию:
// будет height=100, если переменная height равна null или undefined
height = height ?? 100;
Оператор ?? имеет очень низкий приоритет, лишь немного выше, чем у ? и =, поэтому при использовании его в выражении, скорее всего, потребуются скобки.
Запрещено использовать вместе с || или && без явно указанного приоритета, то есть без скобок. */
