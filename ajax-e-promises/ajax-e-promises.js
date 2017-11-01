$(function() {
	var resposta = $.ajax({
		url: 'http://localhost:8888/estados',
		method: 'GET',
		dataType: 'jsonp'
	});

	resposta.done(function(estados) {
		var comboEstado = $('#combo-estado');
		console.log('Estados:', estados);
		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	resposta.fail(function() {
		alert('Erro ao pesquisar estados no servidor!!!');
	});

});

$(function() {

	$('#combo-estado').change(function() {
		$('#combo-cidade').prop('disabled', false);

		var estadoSelecionado = $('#combo-estado').val();
		var resposta = $.ajax({
			url: 'http://localhost:8888/cidades?uf=' + estadoSelecionado,
			method: 'GET',
			dataType: 'jsonp'
		});

		resposta.done(function(cidades) {
			var comboCidade = $('#combo-cidade');
			comboCidade.empty();
			console.log('Cidades:', cidades);
			cidades.forEach(function(cidade) {
				var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
				comboCidade.append(optionCidade);
			});
		});

		resposta.fail(function() {
			alert('Erro ao pesquisar cidades no servidor!!!');
		});

	});

	$('#combo-cidade').change(function() {
		alert('Cidade selecionada: ' + $('#combo-cidade').val());
	});
	
});