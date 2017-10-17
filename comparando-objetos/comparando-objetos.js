var joao = {
	nome: 'João',
	idade: 25,
	email: 'teste@email.com',
	igualA: function(obj) {
		return this.email === obj.email;
	}
}

var maria = {
	nome: 'Maria',
	idade: 27,
	email: 'teste@email.com',
	igualA: function(obj) {
		return this.email === obj.email;
	}
}

console.log(joao === maria);
console.log('João e Maria tem os mesmos e-mails?', joao.igualA(maria));
console.log('Maria e João tem os mesmos e-mails?', maria.igualA(joao));