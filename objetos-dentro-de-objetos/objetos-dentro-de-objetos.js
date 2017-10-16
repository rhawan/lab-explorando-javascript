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

console.log(joao);

console.log('Cidade que o João mora', joao.endereco.cidade);

joao.endereco.numero = 101;
// Objeto depois da alteração de número do endereço
console.log(joao);

// Undefined
console.log(joao.endereco.cep);

// Acessando propriedades de forma dinâmica
console.log('Estado', joao['endereco']['estado']);