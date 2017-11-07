var contador = (function() {
	var valor = 0; //private

	var incrementar = function() {
		valor++;
		funcaoPrivada();
	};

	var exibirValor = function() {
		console.log('Valor do contador:', valor);
	}

	var reset = function() {
		valor = 0;
	}

	var funcaoPrivada = function() {
		console.log('funcao privada...');
	}

	return {
		incrementar: incrementar,
		reset: reset,
		exibirValor: exibirValor
	}
})();

contador.incrementar();
contador.incrementar();
contador.exibirValor();

contador.reset();
contador.exibirValor();

// Não pode ser acessada de fora da função (não foi declarada no return da funcao)
//contador.incrementar();