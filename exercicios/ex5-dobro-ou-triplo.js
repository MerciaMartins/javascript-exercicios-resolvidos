/*
  Exercício 5: Dobro ou Triplo
  Este algoritmo encontra o dobro de um número se ele for positivo
  e o triplo se ele for negativo, imprimindo o resultado.
*/

let numero = -15; // Altere este valor para testar

if (numero >= 0) {
  // Se o número for positivo (ou zero), calcula o dobro
  let resultado = numero * 2;
  console.log(`O número é positivo. O dobro de ${numero} é ${resultado}.`);
} else {
  // Se o número for negativo, calcula o triplo
  let resultado = numero * 3;
  console.log(`O número é negativo. O triplo de ${numero} é ${resultado}.`);
}