let pecaDeXadrez = 'toRrE';
pecaDeXadrez = pecaDeXadrez.toLowerCase();

switch(pecaDeXadrez) {
  case 'bispo':
    console.log('diagonais')
    break

  case 'peao':
    console.log('verticais com limite de 2 casas no primeiro movimento e depois 1 casa')
    break
  
  case 'dama':
    console.log('diagonais, verticais e horizontais')
    break
  
  case 'rei':
    console.log('diagonais, verticais e horizontais com limite de 3 casas de distância')
    break

  case 'cavalo':
    console.log('se movimenta em forma de L')
    break

  case 'torre':
    console.log('verticais e horizontais')
    break

  default:
    console.log('erro')
}