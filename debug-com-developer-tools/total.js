console.log('Iniciando...');

var valorElement = document.getElementById('valor');
var totalElement = document.getElementById('total');

console.log('valorElement', valorElement);
console.log('totalElement', totalElement);

valorElement.addEventListener('keyup', function(e) {
	var total = 0;
	var valor = parseFloat(valorElement.value);

	if (valor < 10) {
		total = valor + valor * 0.3 + 5;
	}

	totalElement.innerHTML = total;
	console.log('valor', valorElement.value);
});