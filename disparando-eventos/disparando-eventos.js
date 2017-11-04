$(function() {
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(e) {
		var keyCode = e.keyCode;
		if (keyCode == 13) {
			//disparar o evento...
			atividade.trigger('enter', atividade.val());
			atividade.val('');
		}
	});


	//Evento personalizado
	atividade.on('enter', function(evento, texto) {
		console.log('executou primeiro');
		listaAtividades.prepend('<li>' + atividade.val() + '</li>');
	});

	atividade.on('enter', function(evento) {
		console.log('outro evento executou aqui...');
	});
	
});