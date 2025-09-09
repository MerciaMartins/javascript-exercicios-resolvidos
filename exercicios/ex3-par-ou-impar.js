/*
  Exercício 3: Par ou Ímpar
  Este algoritmo recebe um número e informa na tela se ele é par ou ímpar.
*/

// Para executar no Node.js, você pode usar a biblioteca 'readline-sync'
// const readline = require('readline-sync');

// Atribui o valor diretamente para o exemplo
let numero = 7;

// O operador de módulo (%) retorna o resto da divisão.
// Se o resto da divisão por 2 for 0, o número é par.
if (numero % 2 === 0) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}