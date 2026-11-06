document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  const form = document.querySelector('form') || document.querySelector('.formsBorda');
  const inputAutor = document.getElementById('autor');
  const inputTitulo = document.getElementById('titulo');
  const inputIsbn = document.getElementById('isbn');
  const btnLimpar = document.querySelector('.botaoLimpar');
  const btnBuscar = document.querySelector('.botaoBuscar');

  const containerResultados = document.getElementById('resultados');
  const loadingBar = document.getElementById('loadingBar');

  const btnAjuda = document.getElementById('btnAjuda');
  const modalAjuda = document.getElementById('modalAjuda');
  const btnFecharModal = document.getElementById('fecharModal');
  const btnTopo = document.getElementById('btnTopo');

  const modalLimpar = document.getElementById('modalLimpar');
  const btnConfirmarLimpar = document.getElementById('confirmarLimpar');
  const btnCancelarLimpar = document.getElementById('cancelarLimpar');
  const btnFecharModalLimpar = document.getElementById('fecharModalLimpar');

  const mensagemStatus = document.createElement('p');
  mensagemStatus.className = 'mensagem-status';

  const containerBotoes = document.querySelector('.botoes');
  if (containerBotoes && containerBotoes.parentNode) {
    containerBotoes.parentNode.insertBefore(mensagemStatus, containerBotoes);
  }

  function atualizarVisibilidadeBotaoTopo() {
    if (!btnTopo) return;
    if (window.scrollY > 100 || (containerResultados && containerResultados.children.length > 0)) {
      btnTopo.classList.remove('hidden');
    } else {
      btnTopo.classList.add('hidden');
    }
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
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const valorAutor = inputAutor ? inputAutor.value.trim() : '';
      const valorTitulo = inputTitulo ? inputTitulo.value.trim() : '';
      const valorIsbn = inputIsbn ? inputIsbn.value.trim() : '';

      if (!valorAutor && !valorTitulo && !valorIsbn) {
        mensagemStatus.style.color = '#d9534f';
        mensagemStatus.textContent = 'Por favor, preencha pelo menos um campo para realizar a busca.';
        return;
      }

      mensagemStatus.style.color = '#3B574B';
      mensagemStatus.textContent = 'Realizando a consulta no acervo...';
      btnBuscar.disabled = true;
      btnBuscar.style.opacity = '0.6';
      if (loadingBar) loadingBar.classList.remove('hidden');
      if (containerResultados) containerResultados.innerHTML = '';
      atualizarVisibilidadeBotaoTopo();

      try {
        let apiUrl = '';
        const isbnLimpo = valorIsbn.replace(/[^0-9X]/gi, '');

        if (isbnLimpo) {
          apiUrl = `https://openlibrary.org/search.json?isbn=${isbnLimpo}&limit=20`;
        } else {
          let queryParams = [];
          if (valorAutor) queryParams.push(`author=${encodeURIComponent(valorAutor)}`);
          if (valorTitulo) queryParams.push(`title=${encodeURIComponent(valorTitulo)}`);
          apiUrl = `https://openlibrary.org/search.json?${queryParams.join('&')}&limit=20`;
        }

        const response = await fetch(apiUrl);

        if (!response.ok) throw new Error('Falha ao conectar com o servidor.');

        const data = await response.json();

        if (data.docs && data.docs.length > 0) {
          mensagemStatus.style.color = '#4A6B5D';
          mensagemStatus.textContent = `Busca realizada com sucesso! (${data.docs.length} resultados encontrados)`;

          await renderizarResultados(data.docs);
          atualizarVisibilidadeBotaoTopo();
        } else {
          mensagemStatus.style.color = '#d9534f';
          mensagemStatus.textContent = 'Nenhuma publicação encontrada para os dados informados.';
        }
      } catch (error) {
        mensagemStatus.style.color = '#d9534f';
        mensagemStatus.textContent = 'Erro ao consultar o servidor. Tente novamente mais tarde.';
      } finally {
        btnBuscar.disabled = false;
        btnBuscar.style.opacity = '1';
        if (loadingBar) loadingBar.classList.add('hidden');
      }
    });
  }

  // ===== Botão Limpar com confirmação =====
  function limparTudo() {
    if (inputAutor) inputAutor.value = '';
    if (inputTitulo) inputTitulo.value = '';
    if (inputIsbn) inputIsbn.value = '';

    mensagemStatus.textContent = '';
    if (loadingBar) loadingBar.classList.add('hidden');
    if (containerResultados) containerResultados.innerHTML = '';
    atualizarVisibilidadeBotaoTopo();
  }

  function fecharModalLimpar() {
    modalLimpar.classList.add('hidden');
  }

  if (btnLimpar && modalLimpar) {
    btnLimpar.addEventListener('click', () => {
      const temConteudo =
        (inputAutor && inputAutor.value.trim()) ||
        (inputTitulo && inputTitulo.value.trim()) ||
        (inputIsbn && inputIsbn.value.trim()) ||
        (containerResultados && containerResultados.children.length > 0);

      // Se não tem nada pra apagar, nem precisa perguntar
      if (!temConteudo) {
        limparTudo();
        return;
      }

      modalLimpar.classList.remove('hidden');
    });

    btnConfirmarLimpar.addEventListener('click', () => {
      limparTudo();
      fecharModalLimpar();
    });

    btnCancelarLimpar.addEventListener('click', fecharModalLimpar);
    btnFecharModalLimpar.addEventListener('click', fecharModalLimpar);

    modalLimpar.addEventListener('click', (e) => {
      if (e.target === modalLimpar) fecharModalLimpar();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modalLimpar.classList.contains('hidden')) {
        fecharModalLimpar();
      }
    });
  }

  async function obterIsbnFallback(livro) {
    if (livro.isbn && livro.isbn.length > 0) return livro.isbn[0];
    if (livro.isbn_13 && livro.isbn_13.length > 0) return livro.isbn_13[0];
    if (livro.isbn_10 && livro.isbn_10.length > 0) return livro.isbn_10[0];

    if (livro.key) {
      try {
        const res = await fetch(`https://openlibrary.org${livro.key}/editions.json?limit=1`);
        if (res.ok) {
          const edicaoData = await res.json();
          if (edicaoData.entries && edicaoData.entries.length > 0) {
            const ed = edicaoData.entries[0];
            if (ed.isbn_13 && ed.isbn_13.length > 0) return ed.isbn_13[0];
            if (ed.isbn_10 && ed.isbn_10.length > 0) return ed.isbn_10[0];
          }
        }
      } catch (e) {
        return 'Não disponível';
      }
    }

    return 'Não disponível';
  }

  async function renderizarResultados(livros) {
    if (!containerResultados) return;

    for (const livro of livros) {
      const card = document.createElement('div');
      card.className = 'card-livro';

      const capaid = livro.cover_i;
      const urlCapa = capaid
        ? `https://covers.openlibrary.org/b/id/${capaid}-M.jpg`
        : 'https://via.placeholder.com/60x90?text=Sem+Capa';

      const autorNome = livro.author_name ? livro.author_name.join(', ') : 'Autor desconhecido';
      const anoPublicacao = livro.first_publish_year || 'N/A';

      const isbnExibicao = await obterIsbnFallback(livro);

      card.innerHTML = `
        <img src="${urlCapa}" alt="Capa de ${livro.title}">
        <div class="card-info">
          <h4>${livro.title}</h4>
          <p><strong>Autor:</strong> ${autorNome}</p>
          <p><strong>Primeira publicação:</strong> ${anoPublicacao}</p>
          <p><strong>ISBN:</strong> ${isbnExibicao}</p>
        </div>
      `;
      containerResultados.appendChild(card);
    }
  }

  // ===== Modal de ajuda =====
  if (btnAjuda && modalAjuda && btnFecharModal) {
    btnAjuda.addEventListener('click', () => {
      modalAjuda.classList.remove('hidden');
    });

    btnFecharModal.addEventListener('click', () => {
      modalAjuda.classList.add('hidden');
    });

    modalAjuda.addEventListener('click', (e) => {
      if (e.target === modalAjuda) {
        modalAjuda.classList.add('hidden');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modalAjuda.classList.contains('hidden')) {
        modalAjuda.classList.add('hidden');
      }
    });
  }

  if (btnTopo) {
    window.addEventListener('scroll', atualizarVisibilidadeBotaoTopo);

    btnTopo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});