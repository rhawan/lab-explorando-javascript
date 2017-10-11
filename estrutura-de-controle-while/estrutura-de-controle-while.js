var i = 0;

while (i < 10) {
	console.log('i', i++);
}

i = 0;

do {
	console.log('i', i++);
} while (i < 10);

var numero = 1;
while (numero < 10) {
	console.log('numero', numero);
	numero++;
	if (numero === 5) {
		break;
	}
}

// Loop infinito
while (true) {
	console.log('Fica aqui pra sempre!!');
}