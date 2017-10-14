// No conceito de closure, uma function permite retornar uma outra function,
// e a partir de então, mantem-se o estado da variável valor, incrementando seu valor

/* A closure acontece quando uma função mantém acesso a uma variável protegida dentro de outra function,
 * então acho que deve ser errado falar que só pelo fato de uma function estar dentro de outra chamarmos de closure
 */
function incrementar() {
	valor = 0;
	console.log('Entrou na funcao principal, valor',valor);
	return function() {
		return ++valor;
		console.log(valor);
	}
}

console.log(typeof incrementar());
var funcao = incrementar();

console.log(funcao());
console.log(funcao());
console.log(funcao());


// Esta é uma function auto-executável, ou seja, apenas chamando ela seu conteúdo já é executado
var incrementar = (function() {
	var valor = 0;

	return function() {
		return ++valor;
	}
})();

console.log(typeof incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());