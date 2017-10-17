// criação vazia
var emails = [];
emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';

// um array é do tipo object
console.log(typeof emails);
console.log('emails[0]', emails[0]);
console.log('emails[5]', emails[5]);

// criando e instanciando valores
var nomes = ['João', 'Maria'];
console.log('Quantos nomes?', nomes.length);

// Quando adicionada em um indice superior, as posições do intervalo são criadas com valores 'vazios'
nomes[4] = 'José';
console.log('Quantos nomes depois do José?', nomes.length);
console.log('nomes[3]', nomes[3]);