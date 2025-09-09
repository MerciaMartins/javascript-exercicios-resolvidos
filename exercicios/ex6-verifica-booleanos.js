/*
  Exercício 6: Verifica booleanos
  Este algoritmo lê dois valores booleanos e determina se ambos são
  VERDADEIROS ou FALSOS.
*/

let valor1 = true;
let valor2 = false;

// Verifica se ambos são verdadeiros
if (valor1 && valor2) {
  console.log("Ambos os valores são VERDADEIROS.");
}
// Verifica se ambos são falsos
else if (!valor1 && !valor2) {
  console.log("Ambos os valores são FALSOS.");
}
// Se não se encaixa nas condições acima, eles têm valores diferentes
else {
  console.log("Os valores são diferentes (um é verdadeiro e o outro é falso).");
}