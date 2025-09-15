jokenpo = ["Pedra", "Papel", "Tesoura"];
  
  vezjogador1 = Math.floor(Math.random() * 3);
  console.log(`Jogador 1: ${jokenpo[vezjogador1]}`)
  document.write(`<img src='img/imagem1${vezjogador1}.png' width=200px>`)
  
  vezjogador2 = Math.floor(Math.random() * 3);
  console.log(`Jogador 2: ${jokenpo[vezjogador2]}`)
  document.write(`<img src='img/imagem2${vezjogador2}.png' width=220px>`)


  if (vezjogador1 == vezjogador2) 
    document.write("Empate");
    else if(vezjogador1 == 0){
        if(vezjogador2 == 1)
            document.write("\n\nJogador 2 ganhou!")
        else
            document.write("\n\nJogador 1 ganhou!")
    }
    else if(vezjogador1 == 1){
        if(vezjogador2 == 0)
            document.write("\n\nJogador 1 ganhou!")
        else
            document.write("\n\nJogador 2 ganhou!")
    }
    else if(vezjogador1 == 2){
        if(vezjogador2 == 0)
            document.write("\n\nJogador 2 ganhou!")
        else
            document.write("\n\nJogador 1 ganhou!")


    }
