/*
  Exercício 1: Verifica a soma de A + B
  Este algoritmo lê três valores (A, B e C) e verifica se a soma de A + B
  é menor que C, imprimindo o resultado na tela. +----
*/

// Para executar no Node.js, você pode usar a biblioteca 'readline-sync'
// const readline = require('readline-sync');

// Atribui os valores diretamente para o exemplo
let A = 10;
let B = 5;
let C = 20;

// Calcula a soma de A e B
let soma = A + B;

// Verifica se a soma é menor que C
if (soma < C) {
  console.log(`A soma de A (${A}) + B (${B}) é menor que C (${C}).`);
} else {
  console.log(`A soma de A (${A}) + B (${B}) não é menor que C (${C}).`);
}