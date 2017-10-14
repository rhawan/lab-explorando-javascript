// function declaration
function somar(a, b) {
	//Uma function no JS permite passar mais parametros que o necessario, esta variavel ajuda a visualizar o que está sendo passado como argumento
	console.log('arguments ->', arguments);
	return a + b;
}

// function expression
// Este tipo de declaração não executa o hoisting, então sempre deve ser declarada antes de sua utilização
var subtrair = function(a, b) {
	return a - b;
}

var soma = somar(2,3);
console.log('2 + 3 =', soma);

var subtraido = subtrair(6,2);
console.log('6 - 2 =', subtraido);

console.log('typeof subtrair', typeof subtrair);