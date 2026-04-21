window.addEventListener("DOMContentLoaded", function(){

    textoJogador1 = document.getElementById("textoJogador1");
    textoJogador2 = document.getElementById("textoJogador2");

    botaoJogadores = document.getElementById("botaoJogadores").addEventListener("click", function(){

        if(textoJogador1.value === "" && textoJogador2.value === ""){
            alert("Preencha ambos os campos para continuar: Jogador 1 e Jogador 2");
        }
        else if(textoJogador1.value === "" ){
            alert("Preencha campo: Jogador 1");
        }
        else if(textoJogador2.value === "" ){
            alert("Preencha campo: Jogador 2");
        }
        else{
            jogador1 = textoJogador1.value;
            jogador2 = textoJogador2.value;
            localStorage.setItem("Jogador1", jogador1);
            localStorage.setItem("Jogador2", jogador2);
            window.location.href = "selecionadificuldade.html";
        }

    })
})

contaLogada = document.getElementById("contaLogada");
nomeConta = localStorage.getItem("Nome");
contaLogada.textContent = nomeConta;