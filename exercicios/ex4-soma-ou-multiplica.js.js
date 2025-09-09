/*
  Exercício 4: Soma ou Multiplica
  Este algoritmo lê dois valores (A e B).
  Se forem iguais, soma A e B. Caso contrário, multiplica A por B.
  O resultado é atribuído a uma variável C e depois exibido.
*/

let A = 10;
let B = 5;
let C;

// Verifica se os valores são iguais
if (A === B) {
  C = A + B;
  console.log(`Os valores são iguais. A soma de ${A} + ${B} é ${C}.`);
} else {
  C = A * B;
  console.log(`Os valores são diferentes. A multiplicação de ${A} * ${B} é ${C}.`);
}

console.log(`O conteúdo da variável C é: ${C}`);