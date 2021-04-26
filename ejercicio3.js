/*Implementar una función que dados dos parámetros numéricos, retorne verdadero si
alguno de los números es 50 o si la suma de ellos lo es.*/
let num1 = parseInt(prompt("Ingrese num1: "));
let num2 = parseInt(prompt("Ingrese num2: "));

alert("La condición es: " + isValid(num1, num2));

function isValid(num1, num2) {
  return num1 == 50 || num2 == 50 || num1 + num2 == 50;
}
