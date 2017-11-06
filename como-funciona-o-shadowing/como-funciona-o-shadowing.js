var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
	fabricante: 'GM'
}

console.log('fox.fabricante', fox.fabricante);
// Forma de setar o prototype do objeto
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante ->', fox.fabricante);

console.log('fox', fox);

delete fox.fabricante;
console.log('fox.fabricante ->', fox.fabricante);

// No for in, é possível acessar as propriedades do prototype
// A propriedade fox.hasOwnProperty(propriedade) verifica se a propriedade é criada pelo próprio objeto
for(propriedade in fox) {
	console.log(propriedade, fox.hasOwnProperty(propriedade));
}