var x;

if (x != null) {
	console.log('Existe um valor em x!', x);
} else {
	console.log('x não tem um valor útil');
}

/*
 * Excepcionamente para comparar undefined e/ou null, pode se utilizar o comparador curto (!=),
 * pois null e undefined possuem o mesmo 'valor', porem de tipos diferentes
 */