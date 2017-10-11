var temFoto = true;
// se tem foto: perfil.jpg
// se não tem foto: mock-perfil.jpg
// <img src="pathFoto">

var pathFoto = '';
if (temFoto) {
	pathFoto = 'maria-perfil.jpg';
} else {
	pathFoto = 'mock-perfil.jpg';
}

// Com operador ternário
var pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg';
console.log('path da foto', pathFoto);