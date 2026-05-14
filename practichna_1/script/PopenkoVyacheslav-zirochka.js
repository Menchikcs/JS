let dollar = 43.7, euro = 51.2;
let income_1 = 100000, income_2 = 200000, income_3 = 300000, income_4 = 150000;
let total_income = income_1 + income_2 + income_3 + income_4;

let tax = 0.05, esv = 18000;
let total_tax = total_income * tax;
let after_tax = total_income - total_tax - esv;

let povernis_zivim = after_tax * 0.10;
let dity_geroiv = after_tax * 0.05;

let other_balance = 2500 * euro + 3000 * dollar;

let end_balance = after_tax - povernis_zivim - dity_geroiv - other_balance - 100000 //розвиток бізнесу;

console.log(`За рік Максим заробив — ${total_income} грн`)
console.log(`Єдиний податок 5% складає ${total_tax} грн`)
console.log(`Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${ povernis_zivim} грн та ${dity_geroiv} грн відповідно`)
console.log(`На валютну карту сумарно відкладено ще ${other_balance} грн`)
console.log(`Залишок на рахунку Максима складає ${end_balance} грн`)