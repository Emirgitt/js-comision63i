/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5 -> Output: Suficiente
Input: 50 -> Output: Número erróneo
Input: hola10 -> Output: Introduce un número válido
*/
/*
1- pedimos el numero
2- verificar si es un numero
3- verificar que este entre 0 y 10
4- analizar los rangos y el numero ingresado
5- Mostrar la calificacion en un alert
*/

// PRIMERA VERSION -------------------
//let numero = prompt("Ingrese un numero del 0 al 10")
let numero = 4;

//si No es un numero; ingresa al if
if (isNaN(numero)) {
  //si No es un numero; ingresa al if
  console.log("No ingreso un numero valido");
} else if (!(numero >= 0 && numero <= 10)) {
  // Es un numero, pero fuera del rango
  console.log("ingrese un numero dentro del rango establecido");
} else {
  //rang0o 0-2
  if (numero >= 0 && numero <= 2) {
    console.log("muy deficiente");
  } else if (numero <= 4) {
    console.log("Insuficiente");
  } else if (numero <= 6) {
    console.log("suficiente");
  } else if (numero === 7) {
    console.log("Bien");
  } else if (numero <= 9) {
    console.log("notable");
  } else {
    console.log("Sobresaliente");
  }
}

//segunda version ------------------------------------
