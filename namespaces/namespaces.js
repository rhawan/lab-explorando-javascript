var Algaworks = Algaworks || {};

Algaworks.Estado = (function() {

	function Estado() {
		console.log('Função Construtora Estado...');
		this.comboEstado = $('#combo-estado');
		this.emitter = $({});
		this.on = this.emitter.on.bind(this.emitter);
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

		this.comboEstado.on('change', onEstadoAlterado.bind(this));
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

	function onEstadoAlterado() {
		this.emitter.trigger('alterado', this.comboEstado.val());
	}

	return Estado;

})();

Algaworks.Cidade = (function() {

	function Cidade(estado) {
		this.comboCidade = $('#combo-cidade');
		this.estado = estado;
	}

	Cidade.prototype.iniciar = function() {
		console.log('Iniciando cidade...');

		this.estado.on('alterado', onEstadoSelecionado.bind(this));
	}

	function onEstadoSelecionado(evento, uf) {
		if (uf) {
			$.ajax({
				url: 'http://localhost:8080/cidades',
				method: 'GET',
				dataType: 'jsonp',
				data: {
					uf: uf
				},
				success: onCidadesRetornadas.bind(this),
				error: onError
			});
		} else {
			reset.apply(this);
		}
	}

	function reset() {
		this.comboCidade.html('');
		this.comboCidade.attr('disabled', 'disabled');
	}

	function onCidadesRetornadas(cidades) {
		this.comboCidade.removeAttr('disabled');
		this.comboCidade.html('<option>Selecione a cidade</option>');
		cidades.forEach(function(cidade) {
			var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
			this.comboCidade.append(optionCidade);

		}.bind(this));

	}

	function onError() {
		alert('Erro ao pesquisar cidades no servidor!!!');
	}

	return Cidade;

})();

$(function() {
	var estado = new Algaworks.Estado();
	estado.iniciar();

	var cidade = new Algaworks.Cidade(estado);
	cidade.iniciar();
});