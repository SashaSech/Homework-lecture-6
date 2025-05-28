// Создайте функцию combineKeysAndValues(keys, values), которая принимает два массива (один с ключами, второй со значениями) и 
// возвращает объект, где ключи соответствуют своим значениям.
function combineKeysAndValues(keys, values) {
    let arr = keys.map( (key, i) => [key, values[i]])
    const newObject = Object.fromEntries(arr);
    return newObject;
}

let keys = ['name', 'age', 'salary'];
let values = ['Sanya', 25, 500];

console.log(combineKeysAndValues(keys, values));
