//0 é false
if (0) {
	console.log('0 é true');
} else {
	console.log('0 é false');
}

//As 6 situações abaixo retornam false
console.log(!!0);
console.log(!!'');
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!false);

var nome = '';
if (!nome) {
	console.log('informe o nome');
}