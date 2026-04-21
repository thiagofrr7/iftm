
const botaoFacil = document.getElementById('botaoFacil');
const botaoMedio = document.getElementById('botaoMedio');
const botaoDificil = document.getElementById('botaoDificil');

botaoFacil.addEventListener('click', () => {
    window.location.href = "jogo.html?dificuldade=facil";
});

botaoMedio.addEventListener('click', () => {
    window.location.href = "jogo.html?dificuldade=media";
});

botaoDificil.addEventListener('click', () => {
    window.location.href = "jogo.html?dificuldade=dificil";
});

