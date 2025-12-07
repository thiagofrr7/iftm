// Lista de personagens
const personagens = ["Last of the Order", "Assassin Prince", "Vigilante Thief", "Turncloak Soldier", "Ancient Exile", "Forgotten Master", "Prancing Puppet", "Vicious Vessel"];

// Criar cartas (2 de cada personagem)
let cartas = [];
personagens.forEach((nome, i) => {
    cartas.push({nome: nome, img: `../img/personagem${i+1}.jpg`});
    cartas.push({nome: nome, img: `../img/personagem${i+1}.jpg`});
});

// Embaralhar cartas
cartas.sort(() => Math.random() - 0.5);

const tabuleiro = document.getElementById('tabuleiro');
let primeiraCarta = null;
let segundaCarta = null;
let cartaTravada = false;
let paresEncontrados = 0;

// Criar cartas no HTML
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

    // Checar combinação
    if (primeiraCarta.dataset.nome === segundaCarta.dataset.nome) {
        paresEncontrados++;
        resetarCartas();
        if (paresEncontrados === personagens.length) {
            document.getElementById('status').innerText = "Parabéns! Você encontrou todos os pares!";
        }
    } else {
        setTimeout(() => {
            primeiraCarta.classList.remove('flipped');
            segundaCarta.classList.remove('flipped');
            resetarCartas();
        }, 1000);
    }
}

function resetarCartas() {
    [primeiraCarta, segundaCarta] = [null, null];
    cartaTravada = false;
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelector('.sidebar.left').style.top = `${-scrollY * 0.2}px`;
    document.querySelector('.sidebar.right').style.top = `${-scrollY * 0.2}px`;
});


