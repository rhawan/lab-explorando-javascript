var joao = {
	nome: 'João',
	idade: 25,
	endereco : {
		logradouro: 'Av Brasil',
		numero: 100,
		complemento: 'Apto 202',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}
}

// Iterando sobre o objeto e mostrando chave, valor
for (var prop in joao) {
	console.log(prop, '->', joao[prop]);
}