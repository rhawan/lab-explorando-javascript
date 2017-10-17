var nomes = ['João', 'Pedro', 'Maria', 'José'];

// Laço for convencional
for (var i = 0; i < nomes.length; i++) {
	console.log('nomes[',i,'] =',nomes[i]);
}

// forEach
nomes.forEach(function(e){
	console.log(e);
});