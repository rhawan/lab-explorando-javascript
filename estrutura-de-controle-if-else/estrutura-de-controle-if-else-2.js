var valor = 0;

if (valor === 0) {
	console.log('Valor deve ser maior que zero!');
}

/* Estes se equivalem porque o javascript permite esta forma simplificada de comparação */
if (!valor) {
	console.log('Valor deve ser maior que zero!');
}

var idade = 10;
/* O javascript permite este if, porque !!10 = true, apenas !!0 = false */
if (idade) {
	console.log('Daqui a 5 anos você terá', idade + 5, 'anos');
}