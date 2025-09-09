/*
  Exercício 2: Dados de uma pessoa e tempo de casada
  Este algoritmo lê o nome, sexo e estado civil de uma pessoa.
  Se o sexo for 'F' e o estado civil for 'CASADA', solicita o tempo de casada em anos.
*/

// Para executar no Node.js, você pode usar a biblioteca 'readline-sync'
// const readline = require('readline-sync');

// Atribui os valores diretamente para o exemplo
let nome = "Maria";
let sexo = "F";
let estadoCivil = "CASADA";

// Condição para solicitar o tempo de casada
if (sexo.toUpperCase() === "F" && estadoCivil.toUpperCase() === "CASADA") {
  // Simula a solicitação do tempo de casada
  let tempoDeCasada = 15; // Valor de exemplo
  console.log(`Nome: ${nome}, Sexo: ${sexo}, Estado Civil: ${estadoCivil}`);
  console.log(`Tempo de casada: ${tempoDeCasada} anos.`);
} else {
  console.log(`Nome: ${nome}, Sexo: ${sexo}, Estado Civil: ${estadoCivil}`);
  console.log("Não é necessário informar o tempo de casada.");
}