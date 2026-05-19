// N1
// for(let i = 1; i<11; i++){
//     console.log(i);
// }

// N2
// let n = (prompt('Скільки чисел'))
// for (let i=1; i < n-0+1; i++){
//     if(i % 2 !== 0) continue;
//     console.log(i)
// }

// N3
// let n = prompt('Скільки чисел'), sum = 0;
// for(let i = 1; i < n-0+1; i++) {
//     sum += i;
// }
// console.log(sum);

// N4
// let n = prompt('Скільки чисел')
// for(n; n>=1; n--){
//     console.log(n-0)
// }

// N5
// let num = prompt('Таблицю множення якого числа треба?')
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num*i}`)
// }

// N6
// let password = 'admin123', guess
// do {
//     guess = prompt('Enter your Password');
//     if (guess !== password) alert('Неправильний пароль')
// }while (guess !== password);
// alert('Пароль правильний')

// N7
// let password = 'qwerty123', guess;
// for(let i = 1; i <= 3; i++) {
//     guess = prompt('Enter password');
//     if (guess === password) {
//         alert('Доступ дозволено');
//         break;
//     }
//     else if (i === 3) {
//         alert('Доступ заблоковано')
//     }
//     else alert(`Неправильно, залишилось ${3-i} спроби`)
// }

// N8
// for (let i=1; i <= 20; i++){
//     if(i % 2 === 0) continue;
//     console.log(i)
// }

// N9
// let word = prompt('В якому слові порахувати к-сть символів?'), num=0;
// num = word.length;
// console.log(num);

// N10
let num = 52, guess;
do {
    guess = prompt('Вгадайте число від 1 до 100')
    if(guess < num) alert('Треба більше');
    else if (guess > num) alert('Треба менше');
    else{
        alert('Ви вгадали');
        break;
    }
}while (guess !== num);