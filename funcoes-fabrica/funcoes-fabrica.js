// A criação de um objeto da forma simples, pode causar erros de digitação e possíveis bugs,
// então a criação de uma função ajuda na padronização da criação do objeto (pattern builder)

var criarCarro = function(nome, placa) {
	return {
		nome: nome,
		placa: placa,
		fabricante: 'VW'
	};
}

var fox = criarCarro('Fox', 'AAA-1111');
console.log('fox', fox);

var gol = criarCarro('Gol', 'AAA-2222');
console.log('gol', gol);