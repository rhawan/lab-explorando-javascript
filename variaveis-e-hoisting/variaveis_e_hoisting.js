var percentualImposto = 0.15;
var valorMercadoria = 100;
var total = valorMercadoria * percentualImposto;

console.log('Total imposto a pagar:', total);


/*
 * HOISTING - move todas as declaracoes utilizadas para o inicio do arquivo, possibilitando utilizar
 * variáveis mesmo que ainda não tenham sido declaradas, porém move apenas as declarações e não atribuições de valores
 */
var percentualImposto, valorMercadoria, total;
total = valorMercadoria * percentualImposto;
console.log('Total imposto a pagar:', total);