let employee = [
    { name: 'John', age: 30, gender: 'M', isMarried: true },
    { name: 'Pieter', age: 20, gender: 'M', isMarried: false },
    { name: 'Andre', age: 25, gender: 'M', isMarried: false },
    { name: 'Rinto', age: 27, gender: 'M', isMarried: true },
    { name: 'Finanda', age: 35, gender: 'F', isMarried: true },
    { name: 'Grace', age: 29, gender: 'F', isMarried: false },
];

console.log(employee);
let employee2 = employee.every(getEmployee);
let employee3 = employee.some(getEmployee);

// perempuan dan belum menikah
function getEmployee(element, index, array) {
    return element.gender == 'F';
}
console.log('Semua karyawan adalah cewek?', employee2);
console.log('Sebagian karyawan adalah cewek?', employee3);