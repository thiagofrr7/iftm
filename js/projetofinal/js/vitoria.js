window.addEventListener('DOMContentLoaded', function() {
    // Coloquei para pegar os dados da URL
    const urlParams = new URLSearchParams(window.location.search);
    const vencedor = urlParams.get('vencedor') || '1';
    const pontuacao1 = urlParams.get('p1') || '0';
    const pontuacao2 = urlParams.get('p2') || '0';
    const dificuldade = urlParams.get('dificuldade') || 'facil';
    const pontosVencedor = Math.max(parseInt(pontuacao1), parseInt(pontuacao2));
    
    const nomeJogador1 = localStorage.getItem("Jogador1") || "Jogador 1";
    const nomeJogador2 = localStorage.getItem("Jogador2") || "Jogador 2";
    
    const nomeVencedor = vencedor === '1' ? nomeJogador1 : nomeJogador2;
    
    document.getElementById('vencedor').textContent = `Parabéns, ${nomeVencedor}!`;
    document.getElementById('pontuacao-final').textContent = `Você venceu com ${pontosVencedor} pontos!`;
    document.getElementById('pont-j1').textContent = pontuacao1;
    document.getElementById('pont-j2').textContent = pontuacao2;
    
    document.getElementById('btnLogin').addEventListener('click', function() {
        window.location.href = "index.html";
    });
    
    document.getElementById('btnJogarNovamente').addEventListener('click', function() {
        window.location.href = `jogo.html?dificuldade=${dificuldade}`;
    });
});

contaLogada = document.getElementById("contaLogada");
nomeConta = localStorage.getItem("Nome");
contaLogada.textContent = nomeConta;