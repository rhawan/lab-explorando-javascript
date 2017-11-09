var Estado = (function() {

	function Estado() {
		console.log('Função Construtora...');
		this.comboEstado = $('#combo-estado');

	}

	Estado.prototype.iniciar = function() {
		console.log('Iniciando o estado...');
		console.log('this no prototype', this);
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados.bind(this),
			error: onError
		});
	}

	function onEstadosRetornados(estados) {
		console.log('this', this);
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			this.comboEstado.append(optionEstado);
		}.bind(this));
	}

	function onError() {
		alert('Erro ao pesquisar estados no servidor!!!');
	}

	return Estado;

})();

$(function() {
	var estado = new Estado();
	estado.iniciar();

	//var cidade = new Cidade(estado);
	//cidade.iniciar();
});