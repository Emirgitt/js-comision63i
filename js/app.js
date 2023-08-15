"use strict";

// console.log("holaa");

// let variable1;
// const variable2 = "chau";

// variable1 =
// variable2 = "holaaaa";
// console.log(5 === 5);
let edad1;
edad1 = prompt("Ingrese su edad");

let edad2;
edad2 = prompt("Ingrese la otra edad");

let edad1Num = Number(edad1);
let edad2Num = Number(edad2);

if (isNaN(edad1Num)) console.log("no es un numero");

console.log(edad1Num + edad2Num);

console.log(Number(edad1) + Number(edad2));

if (edad1Num > edad2Num) {
  console.log("la mayor edad es la 1");
} else if (edad1 < edad2) {
  console.log("la mayor edad es la 2");
} else {
  console.log("las edades son iguales");
}
