"use strict";
// Function declaration 
function sapa(nama) {
    console.log("Halo, aku" + nama);
}
sapa("Marsha!");
// Function Expression
function calculate(a, b, c) {
    return a + b + c;
}
;
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan: " + hasil);
// Arrow Function 
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("Hasil perkalian: " + result);
// Challange func expression 
const cube = function (num) {
    return num ** 3;
};
console.log(cube(3));
function greet(nama) {
    console.log("Halo, aku" + nama);
}
greet("Marsha!");
// Object 
let pers;
pers = {
    name: "Marsha Yanto",
    age: 19,
    address: "Tegal"
};
console.log(pers);
