var nome = 'AlgaWorks'; //variável global

var capitalizar = function() {
	//nome é uma variável local à função capitalizar
	var nome = 'AlgaWorks'.toUpperCase();
	console.log('nome', nome);
}

capitalizar();
console.log('nome', nome);

var capitalizar2 = function() {
	// variável declarada sem a key 'var', se torna global e pode ser acessada de fora da function
	nome = 'AlgaWorks'.toUpperCase();
}

capitalizar2();
console.log('nome2', nome);