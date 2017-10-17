var emails = [];

// adicionar elemento no final da pilha
emails.push('joao@email.com');
emails.push('maria@email.com');
emails.push('jose@email.com');

// tamanho do array
console.log(emails.length);

// remove ultimo elemento inserido na pilha
emails.pop();

// insere no inicio do array
emails.unshift('pedro@email.com');

// remove primeiro da fila
emails.shift();

console.log(emails);

var elementoRemovido = emails.splice(1,1);
console.log(elementoRemovido);