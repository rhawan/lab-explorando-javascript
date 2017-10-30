$(function() {
	var resposta = $.ajax({
		url: 'http://localhost:8888/estados',
		method: 'GET',
		dataType: 'jsonp'
	});

	resposta.done(function(estados) {
		var comboEstado = $('#combo-estado');
		console.log('Voltou com sucesso!');
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	resposta.fail(function() {
		alert('Erro ao pesquisar estados no servidor!!!');
	});

});