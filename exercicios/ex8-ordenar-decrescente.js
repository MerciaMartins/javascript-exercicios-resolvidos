/*
  8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
  decrescente.
*/

// Lê três valores inteiros do usuário.
let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));
let valor3 = Number(prompt("Digite o terceiro valor:"));

// Cria um array com os três valores para facilitar a ordenação.
let valores = [valor1, valor2, valor3];

// O método "sort()" ordena o array.
// A função de comparação (b - a) garante que a ordenação seja decrescente.
// Se fosse (a - b), seria crescente.
valores.sort(function(a, b) {
  return b - a;
});

// Imprime os valores ordenados no console.
console.log("Os valores em ordem decrescente são: " + valores[0] + ", " + valores[1] + ", " + valores[2]);

// Uma alternativa sem usar "sort()" seria com condicionais "if/else", mas é mais complexo.
// O uso do método "sort()" é a maneira mais eficiente e limpa.