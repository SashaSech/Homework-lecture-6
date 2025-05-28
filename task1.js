// Напишите функцию countNumericValues(obj), которая принимает объект и возвращает количество его свойств, значения которых являются числами.
function countNumericValues(obj) {
    let values = Object.values(obj);
    return values.filter(value => typeof value === "number").length;
}

const obj = {
    name: 'Sanya',
    age: 25,
    salary: 200
};

console.log(countNumericValues(obj));