// false
// 0
// 0n
// ""
// null
// undefined
// NaN

// if(умова){
//     [інструкція якщо істина];
//     [інструкція якщо істина];
// }else if{
//     [інструкція якщо істина];
//     [інструкція якщо істина];
// }else{
//     [інструкція якщо хиба];
// }

// ОПЕРАТОРИ ПОРІВНЯННЯ
// ==
// !=
// >
// <
// >=
// <=
// ===
// !==
// let a = 3, b = '3';
// console.log(a === b);

// let a = prompt('Enter first number');
// let b = prompt('Enter second number');
// let c;
// if (a > b){
//     c = 'a > b'
// }else if (a < b){
//     c = 'a < b'
// }else{
//     c = 'a == b'
// }
// alert(c);
// let a = prompt('Enter first number');
// let b = prompt('Enter second number');
// let c;
// if(a > b)c = 'a > b';
// else if(a < b)c = 'a < b';
// else c = 'a == b'
// alert(c);

// УМОВА SWITCH

// let course = prompt('What is the name of the course?'), title;
// switch (course) {
//     case "figma":
//         title = 'WEB інструменти';
//         break;
//     case 'Python':
//     case 'Javascript':
//         title = "Програмування";
//         break;
//     case 'frontend':
//     case 'CSS':
//     case 'HTML':
//         title = 'WEB програмування';
//         break;
//
//     default:
//         title = "Не знаю, що ти хочеш!";
//         break;
// }
// alert(title);

// let a = 'false', b = false, c = true;
//
// console.log(!a);
// console.log(!!a);
//
// console.log(a && c);
// console.log(a || b);

// let age = prompt('How old are you?'), info;
// if (age < 18){
//     info = 'No pivasik'
// }else if (age >= 18 && age < 35){
//     info = 'Призивний'
// }else{
//     info = 'Ще є шанс'
// }
// alert(info);

// let let let let let let let let let let let let let let let let let let
let name = prompt("What is your name?"),
    greeting = `Hello, ${name || 'guest'}`;
alert(greeting);