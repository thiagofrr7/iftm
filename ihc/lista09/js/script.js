document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form') || document.querySelector('.formsBorda');
  const inputAutor = document.getElementById('autor');
  const inputTitulo = document.getElementById('titulo');
  const inputIsbn = document.getElementById('isbn');
  const btnLimpar = document.querySelector('.botaoLimpar');
  const btnBuscar = document.querySelector('.botaoBuscar');

  const mensagemStatus = document.createElement('p');
  mensagemStatus.className = 'mensagem-status';
  mensagemStatus.style.marginTop = '15px';
  mensagemStatus.style.textAlign = 'center';
  mensagemStatus.style.fontSize = '14px';
  mensagemStatus.style.fontWeight = 'bold';
  
  const containerBotoes = document.querySelector('.botoes');
  if (containerBotoes && containerBotoes.parentNode) {
    containerBotoes.parentNode.insertBefore(mensagemStatus, containerBotoes);
  }

  [inputAutor, inputTitulo, inputIsbn].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        if (mensagemStatus.style.color === 'rgb(217, 83, 79)' || mensagemStatus.style.color === '#d9534f') {
          mensagemStatus.textContent = '';
        }
      });
    }
  });

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const valorAutor = inputAutor ? inputAutor.value.trim() : '';
      const valorTitulo = inputTitulo ? inputTitulo.value.trim() : '';
      const valorIsbn = inputIsbn ? inputIsbn.value.trim() : '';

      const camposVazios = [];
      if (!valorAutor) camposVazios.push('Autor');
      if (!valorTitulo) camposVazios.push('Título');
      if (!valorIsbn) camposVazios.push('ISBN');

      if (camposVazios.length > 0) {
        mensagemStatus.style.color = '#d9534f';

        if (camposVazios.length === 3) {
          mensagemStatus.textContent = 'Por favor, preencha todos os campos para realizar a busca.';
        } else if (camposVazios.length === 2) {
          mensagemStatus.textContent = `Por favor, preencha também os campos: ${camposVazios.join(' e ')}.`;
        } else if (camposVazios.length === 1) {
          mensagemStatus.textContent = `Por favor, preencha também o campo: ${camposVazios[0]}.`;
        }
        return;
      }

      mensagemStatus.style.color = '#0275d8';
      mensagemStatus.textContent = 'Realizando a consulta...';
      btnBuscar.disabled = true;
      btnBuscar.style.opacity = '0.6';

      setTimeout(() => {
        mensagemStatus.style.color = '#5cb85c';
        mensagemStatus.textContent = 'Busca realizada com sucesso!';
        btnBuscar.disabled = false;
        btnBuscar.style.opacity = '1';
      }, 1500);
    });
  }

  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      if (inputAutor) inputAutor.value = '';
      if (inputTitulo) inputTitulo.value = '';
      if (inputIsbn) inputIsbn.value = '';

      mensagemStatus.textContent = '';
    });
  }
});