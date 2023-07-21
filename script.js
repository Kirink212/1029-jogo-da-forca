// Inicializar um array de palavras possíveis
// Gerar um índice aleatório
// Acessar a palavra que está nesse índice

// Executar os passos abaixo até o jogador perder ou ganhar:
// mostrar a palavra "mascarada" para o usuário (underline no lugar das letras)

// Solicitar ao usuário a letra que ele deseja tentar
// Se a letra pertence à palavra
// Mostra todas as ocorrências dessa letra na palavra "mascarada"
// Caso contrário, se a letra não pertence à palavra
// Decrementa uma vida do total de vidas restantes

// Se a palavra "mascarada" for igual à palavra original
// Jogador venceu!

// Se o total de vidas chegar em ZERO
// Jogador perdeu!


// 1 - Gerar uma palavra aleatória
// 2 - Para resolver (1), eu preciso gerar um índice aleatório
// 3 - Para resolver (2), eu preciso gerar um número aleatório entre 0 e o tamanho do array (que no nosso caso é 7)
// 4 - Para resolver (3), eu preciso multiplicar o Math.random() pelo length do array de palavras
function geraPalavraAleatoria(arrayPalavras) {
    const indice = parseInt(Math.random() * arrayPalavras.length);
    return arrayPalavras[indice];
  }

  alert("Bem-vindo ao Jogo da Forca!");
  
  // PASSO 1 - Gerar a palavra aleatória
  const arrayPalavras = [
    "Barbie",
    "Oppenheimmer",
    "Flash",
    "Vingadores",
    "Transformers",
    "Titanic",
    "Avatar",
  ];
  const palavraAleatoria = geraPalavraAleatoria(arrayPalavras);
  let letrasUsadas = "";
  let totalVidas = 6;
  let fimDoJogo = false;
  
  // PASSO 2 - Mostrar palavra "mascarada" e solicitar tentativa ao jogador
  
  // Em Javascript, string são IMUTÁVEIS, enquanto arrays são MUTÁVEIS
  // Por isso o código abaixo não funciona...
  // for (let i=0; i<palavraAleatoria.length; i++) {
  //     palavraAleatoria[i] = "_ ";
  // }
  let palavraMostrada = "";
  for (let i = 0; i < palavraAleatoria.length; i++) {
    palavraMostrada += "_";
  }
  
  while (fimDoJogo != true) {
    let letraDigitada = prompt(`
    A palavra é:
    ${palavraMostrada.split("").join(" ")}
    
    Letras já usadas: ${letrasUsadas}
    
    Tentativas restantes: ${totalVidas}
    `);
  
    if (letrasUsadas.includes(letraDigitada)) {
      alert("Esta letra já foi utilizada. Tente outra vez!");
      continue;
    }
  
    palavraMostrada = palavraMostrada.split("");
  
    // PASSO 3 - Checar se o jogador acertou ou errou
    if (palavraAleatoria.includes(letraDigitada)) {
      for (let i=0; i < palavraAleatoria.length; i++) {
        if (palavraAleatoria[i] == letraDigitada) {
          palavraMostrada[i] = letraDigitada;
        } 
      }
    } else {
      totalVidas--;
    }
  
    letrasUsadas += `${letraDigitada},`;
  
    // Condição de vitória: Caso a palavra mostrada seja igual à palavra original, o jogador venceu o jogo da forca
    palavraMostrada = palavraMostrada.join("");
    console.log(palavraMostrada, palavraAleatoria);
    if (palavraAleatoria == palavraMostrada) {
      alert("Parabéns, você ganhou!");
      fimDoJogo = true;
    }
  
    if (totalVidas == 0) {
      alert("Que pena! Você perdeu...");
      fimDoJogo = true;
    }
  }