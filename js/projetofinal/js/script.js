window.addEventListener('DOMContentLoaded', function() {
    jogador1 = document.getElementById("jogador1");
    jogador2 = document.getElementById("jogador2");

    nomej1 = localStorage.getItem("Jogador1");
    nomej2 = localStorage.getItem("Jogador2");

    jogador1.textContent = nomej1;
    jogador2.textContent = nomej2;

    // Usei para conseguir mudar a dificuldade dinamicamente
    const urlParams = new URLSearchParams(window.location.search);
    const dificuldade = urlParams.get('dificuldade') || 'facil';

    // Inicia o jogo automaticamente quando a página carregar
    configurarJogo(dificuldade);
});

contaLogada = document.getElementById("contaLogada");
nomeConta = localStorage.getItem("Nome");
contaLogada.textContent = nomeConta;

// Variáveis para pontuação e controle de jogadores
let pontuacao1 = 0;
let pontuacao2 = 0;
let jogadorAtual = 1; // Inicia com o jogador 1
let paresEncontrados = 0;
let primeiraCarta = null;
let segundaCarta = null;
let cartaTravada = false;

// Função para configurar o jogo com base na dificuldade
function configurarJogo(dificuldade) {

    let cartas = [];
    // Nome dos personagens do Towerfall Ascension (artes dos personagens)
    const personagensIniciais = ["Last of the Order", "Assassin Prince", "Vigilante Thief", "Turncloak Soldier", "Ancient Exile", "Forgotten Master", "Prancing Puppet", "Vicious Vessel"];
    const personagensNovos = [
        "Vigilante Mask", "Vanglorious Ghoul", "Blind prince", "Loyal Kingsguard", 
        "Sacred Sister", "Young Master", "Prancing Puppet New Version", "Crimson Corsair"
    ];

    const body = document.body;

    // Definir número de personagens com base na dificuldade
    if (dificuldade === "dificil") {
        // 8 personagens iniciais + 8 novos personagens (todos duplicados)
        personagensIniciais.forEach((nome, i) => {
            cartas.push({nome: nome, img: `./img/personagem${i+1}.jpg`});
            cartas.push({nome: nome, img: `./img/personagem${i+1}.jpg`});
        });

        personagensNovos.forEach((nome, i) => {
            const indiceNovo = i + 9;
            cartas.push({nome: nome, img: `./img/personagem${indiceNovo}.jpg`});
            cartas.push({nome: nome, img: `./img/personagem${indiceNovo}.jpg`});
        });
        body.classList.add('modo-dificil');
    } else if (dificuldade === "media") {
        // 8 personagens iniciais duplicados
        personagensIniciais.forEach((nome, i) => {
            cartas.push({nome: nome, img: `./img/personagem${i+1}.jpg`});
            cartas.push({nome: nome, img: `./img/personagem${i+1}.jpg`});
        });
        body.classList.add('modo-medio');

    } else if (dificuldade === "facil") {
        // 4 primeiros personagens iniciais duplicados
        const personagensFacil = personagensIniciais.slice(0, 4);
        personagensFacil.forEach((nome, i) => {
            cartas.push({nome: nome, img: `./img/personagem${i+1}.jpg`});
            cartas.push({nome: nome, img: `./img/personagem${i+1}.jpg`});
        });
        body.classList.add('modo-facil');
    }

    // Embaralhar cartas
    cartas.sort(() => Math.random() - 0.5);

    // Criar as cartas no HTML
    const tabuleiro = document.getElementById('tabuleiro');
    tabuleiro.innerHTML = ""; // Limpa o tabuleiro
    
    // Ajustar o grid dinamicamente
    if (dificuldade === "facil") {
        tabuleiro.style.gridTemplateColumns = "repeat(4, 110px)"; // 4x2 = 8 cartas
    } else if (dificuldade === "media") {
        tabuleiro.style.gridTemplateColumns = "repeat(4, 110px)"; // 4x4 = 16 cartas
    } else if (dificuldade === "dificil") {
        tabuleiro.style.gridTemplateColumns = "repeat(8, 110px)"; // 8x4 = 32 cartas
    }
    
    // Aqui ele cria as cartas dinamicamente e coloca a foto da parte de trás da carta para todas as cartas
    cartas.forEach(carta => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.nome = carta.nome;

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front"></div>
                <div class="card-back" style="background-image: url('${carta.img}')"></div>
            </div>
        `;

        cardElement.addEventListener('click', virarCarta);
        tabuleiro.appendChild(cardElement);
    });

    // Função que lida com a virada das cartas
    function virarCarta() {
        if (cartaTravada) return;
        if (this.classList.contains('flipped')) return;

        this.classList.add('flipped');

        if (!primeiraCarta) {
            primeiraCarta = this;
            return;
        }

        segundaCarta = this;
        cartaTravada = true;

        // Aqui ele confere se a primeira carta virada é igual a segunda
        if (primeiraCarta.dataset.nome === segundaCarta.dataset.nome) {
            paresEncontrados++;

            // Aumenta a pontuação dependendo do jogador
            if (jogadorAtual === 1) {
                pontuacao1++;
            } else {
                pontuacao2++;
            }

            // Atualiza a pontuação na tela
            document.getElementById("pontuacao1").textContent = `Pontuação: ${pontuacao1}`;
            document.getElementById("pontuacao2").textContent = `Pontuação: ${pontuacao2}`;
            
            // Reseta as cartas sem mudar de jogador
            [primeiraCarta, segundaCarta] = [null, null];
            cartaTravada = false;

            // Verifica se todos os pares foram encontrados, se sim, vai paro o site da vitória
            if (paresEncontrados === cartas.length / 2) {
                setTimeout(() => {
                    mostrarVitoria();
                }, 500);
            }
        } else {
            // Se não, vira as cartas e muda de jogador
            setTimeout(() => {
                primeiraCarta.classList.remove('flipped');
                segundaCarta.classList.remove('flipped');
                
                [primeiraCarta, segundaCarta] = [null, null];
                cartaTravada = false;
                mudarJogador(); 
            }, 1000);
        }
    }

    function mudarJogador() {
        jogadorAtual = jogadorAtual === 1 ? 2 : 1;
        document.getElementById("status").textContent = `Vez do Jogador ${jogadorAtual}`;
        mudarFundoCardJogador(jogadorAtual);
    }


    // Aqui eu chamo a função que muda de jogador (que está fora dessa função), que passa de 1 pra 2, de 2 pra 1
     mudarFundoCardJogador(jogadorAtual);
}

function mudarFundoCardJogador(jogador) {

        const divJogador1 = document.getElementById("divJogador1");
        const divJogador2 = document.getElementById("divJogador2");

        // Esquema para mudar a cor de fundo na vez de determinado jogador, se for 1, o fundo fica dourado e o do jogador 2 fica dourado, e vice versa
        if (jogador === 1) {
            divJogador1.style.backgroundColor = "gold";
            divJogador2.style.backgroundColor = "rgb(24, 37, 155)"; 
        } else {
            divJogador2.style.backgroundColor = "gold";
            divJogador1.style.backgroundColor = "rgb(24, 37, 155)"; 
        }

}

// Função para exibir a tela de vitória
function mostrarVitoria() {
    const vencedor = pontuacao1 > pontuacao2 ? 1 : 2;
    // Redireciona para a página de vitória com os dados na URL

    // Passa a dificuldade para a página da vitória caso o jogador queira jogar novamente
    const urlParams = new URLSearchParams(window.location.search);
    const dificuldade = urlParams.get('dificuldade') || 'facil';

    window.location.href = `vitoria.html?vencedor=${vencedor}&p1=${pontuacao1}&p2=${pontuacao2}&dificuldade=${dificuldade}`;
}
