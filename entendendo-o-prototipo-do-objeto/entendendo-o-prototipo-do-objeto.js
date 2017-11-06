var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111'
}
// Forma de setar o prototype do objeto
Object.setPrototypeOf(fox, volks);

// Propriedade __proto__ permite informar qual o protótipo do objeto,
// porém não é muito recomendado sua utilização devido a compatibilidade
var celta = {
	nome: 'Celta',
	placa: 'AAA-3333',
	__proto__: volks
}

//var gol = {
//	nome: 'Gol',
//	placa: 'AAA-2222'
//}

// Forma utilizada para instanciar um objeto a partir de um prototype
var gol = Object.create(volks);
gol.nome = 'Gol';
gol.placa = 'AAA-2222';

console.log('fox', fox);
console.log('gol', gol);
console.log('celta.fabricante', celta.fabricante);

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log('fox.fabricante ->', fox.fabricante);
// Ao logar o objeto, as propriedades do prototype não são exibidas
console.log('toString do fox', fox);