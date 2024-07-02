// Function declaration 
function sapa(nama:string){
    console.log("Halo, aku" + nama);
}
sapa("Marsha!")

// Function Expression
function calculate (a:number, b:number, c:number):number{
    return a + b + c
}; 
let hasil : number = calculate(3, 5, 1)
console.log("Hasil Penjumlahan: " + hasil);

// Arrow Function 
let multiplication = (x:number, y:number) => {
    return x * y
}
let result = multiplication(5,8)
console.log("Hasil perkalian: "+ result);

// Challange func expression 
const cube = function(num:number){
    return num ** 3
}
console.log(cube(3));

function greet(nama:string){
    console.log("Halo, aku" + nama);
}
greet("Marsha!")

// Object 

let pers: {
    name: string,
    age: number,
    address: string
}
pers = {
    name: "Marsha Yanto",
    age: 19,
    address: "Tegal"
}
console.log(pers);



