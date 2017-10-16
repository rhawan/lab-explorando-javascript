// declaração simples de um objeto JavaScript
var fox = { cor: 'prata',
			modelo: 'Fox',
			fabricante: 'VW'
		}

console.log('fox', fox);
console.log(typeof fox);

// Acessando uma propriedade, caso tente acessar uma propriedade que não exista, retorna 'undefined'
console.log('Cor do fox', fox.cor);

// pintando o fox
fox.cor = 'Branco';
console.log('Fox depois de pintado', fox.cor);

// outra forma de acessar uma propriedade
console.log('Modelo:',fox['modelo']);

// adicionando novas propriedades ao objeto
fox.peso = 1100;
fox.ligar = function() {
	console.log('Ligando o carro!');
};

console.log(fox);
fox.ligar();

var celta = {
	cor: 'branco',
	modelo: 'celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('Ligando o carro');
	}
};
console.log('celta', celta);