/*
  9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
  calcule seu peso ideal, utilizando as seguintes fórmulas:
  - para homens: (72.7 * h) – 58;
  - para mulheres: (62.1 * h) – 44.7.
*/

// Lê a altura da pessoa e converte para número.
let altura = Number(prompt("Digite sua altura (ex: 1.75):"));

// Lê o sexo da pessoa. Usamos "toLowerCase()" para garantir que a comparação não seja sensível a maiúsculas/minúsculas.
let sexo = prompt("Digite seu sexo (M para masculino, F para feminino):").toLowerCase();

let pesoIdeal;

// Verifica o sexo e aplica a fórmula correspondente.
if (sexo === "m") {
  // Fórmula para homens.
  pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "f") {
  // Fórmula para mulheres.
  pesoIdeal = (62.1 * altura) - 44.7;
} else {
  // Caso o usuário digite um sexo inválido.
  console.log("Sexo inválido. Por favor, digite 'M' ou 'F'.");
}

// Verifica se a variável "pesoIdeal" foi calculada e imprime o resultado.
// O ".toFixed(2)" é usado para formatar o número com duas casas decimais.
if (pesoIdeal) {
  console.log("Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg.");
}