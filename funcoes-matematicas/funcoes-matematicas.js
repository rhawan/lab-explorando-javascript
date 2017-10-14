/* Funções do objeto Math */

/* MIN */
var menorNota = Math.min(3,5,1,6,10);
console.log('Menor nota', menorNota);

/* MAX */
var maiorNota = Math.max(3,5,1,6,10);
console.log('Maior nota', maiorNota);

/* ROUND - DE 1 A 4 ARREDONDA PARA BAIXO, ACIMA DE 4 ARREDONDA PARA CIMA */
var temperatura = Math.round(22.5);
console.log('Temperatura', temperatura);

/* RANDOM */
var valorAleatorio = Math.random();
console.log('Valor Aleatório', valorAleatorio);
var numero = valorAleatorio * 60;
console.log('Número', numero);

/* FLOOR - SEMPRE ARREDONDA PARA BAIXO */
var numeroMega = Math.floor(numero) + 1;
console.log('Número da mega', numeroMega);