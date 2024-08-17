const ordersSet = new Set ( [
'Pasta',
'Pizza'
• 'Pizza',
'Risotto',
'Pasta',
'Pizza',
]);
console.log(ordersSet);


console.log(new Set ('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet. has ('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);


// ▶ Set (3) {"Pasta", "Pizza", "Risotto"} script.js:59
// ▶ Set (5) {"J", "o", "n", "a", "s"} script.js:61
// 3 script.js:63
// true script.js:64
// false script.js:65
// script.js:68
// Set (4) {"Pasta", "Pizza", "Risotto", "Garlic Brea
// d"}
