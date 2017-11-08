var estado = (function() {
	var comboEstado = $('#combo-estado');

	function iniciar() {
		$.ajax({
			url: 'http://localhost:8888/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados,
			error: onError
		});

	}

	function onEstadosRetornados(estados) {
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	}

	function onError() {
		alert('Erro ao pesquisar estados no servidor!!!');
	}

	return {
		iniciar: iniciar
	}

})();

estado.iniciar();