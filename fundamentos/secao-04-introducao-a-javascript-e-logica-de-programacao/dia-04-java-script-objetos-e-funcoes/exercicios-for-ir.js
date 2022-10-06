let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, ' + info.personagem);

info['recorrente'] = 'Sim';

for (let key in info) {
  console.log(key);
}

for (let key in info) {
  console.log(info[key]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente : 'Sim',
};

for (let key in info) {
  if (info[key] === info2[key]) {
    console.log('Ambos ' + key);
  } else {
  console.log(info[key] + ' e ' + info2[key])
  }
}

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

let quantidade = 0;

for (let key in leitor.livrosFavoritos) {
  quantidade += 1;
}

console.log(leitor.nome + ' tem ' + quantidade + ' livros favoritos');