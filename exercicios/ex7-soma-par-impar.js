/*
  7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar,
  imprimir o resultado desta operação.
*/

// Solicita ao usuário que insira um número.
// O "prompt" lê a entrada como string, então usamos "Number()" para converter para número.
let numero = Number(prompt("Digite um número:"));

// Usa o operador de módulo (%) para verificar se o número é par ou ímpar.
// Se o resto da divisão por 2 for 0, é par.
if (numero % 2 === 0) {
  // Se for par, soma 5.
  numero = numero + 5;
} else {
  // Se for ímpar, soma 8.
  numero = numero + 8;
}

// Imprime o resultado final no console.
console.log("O resultado da operação é: " + numero);