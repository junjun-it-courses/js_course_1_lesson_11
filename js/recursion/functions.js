// Function Declaration
// function sum(a, b) {
//     return a + b;
// }

// Function Expression
// var sum = function(a, b) {
//     return a + b;
// }



// Основное отличие между ними: функции, объявленные как Function Declaration, создаются интерпретатором до выполнения кода.
// Поэтому их можно вызвать до объявления, например:


// sayHi("Вася"); // Привет, Вася
//
// function sayHi(name) {
//     alert( "Привет, " + name );
// }


// sayHi("Вася"); // ошибка!
//
// var sayHi = function(name) {
//     alert( "Привет, " + name );
// }



// Условное объявление


// var age = prompt('Сколько вам лет?');
//
// var sayHi;
//
// if (age >= 18) {
//     sayHi = function() {
//         alert( 'Прошу Вас!' );
//     }
// } else {
//     sayHi = function() {
//         alert( 'До 18 нельзя' );
//     }
// }
//
// sayHi();