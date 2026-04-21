document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const delayCartas = 600;

  cards.forEach((card, index) => {
    const delay = index * delayCartas;

    setTimeout(() => {
      card.classList.remove('hidden');
      card.classList.add('visible');
    }, delay);
  });
});

contaLogada = document.getElementById("contaLogada");
nomeConta = localStorage.getItem("Nome");
contaLogada.textContent = nomeConta;