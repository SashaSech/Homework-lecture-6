// Напишите функцию, которая удаляет свойства из объекта по заданному массиву ключей. Используйте Object.keys() для 
// проверки наличия ключей и удаления их через delete.
function removeKeys(obj, keys) {
    const objectKeys = Object.keys(obj);
    keys.forEach(key => {
        if (objectKeys.includes(key)) {
            delete obj[key];
        }
    });
}

const obj = { a: 1, b: 2, c: 3, d: 4 };
removeKeys(obj, ['a', 'c', 'aboba']);
console.log(obj);
