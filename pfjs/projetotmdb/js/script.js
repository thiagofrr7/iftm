window.addEventListener("DOMContentLoaded", function() {

    const chaveAPI = "86805aed1379a636b1189dcbf3b32116";
    const divFilmes = document.getElementById("divFilmes");
    const interfaceModal = document.getElementById("interfaceModal");
    const conteudoModal = document.getElementById("conteudoModal");
    const botaoFechar = document.getElementById("botaoFechar");

    botaoFechar.addEventListener("click", function() {
        interfaceModal.style.display = "none";
    });

    interfaceModal.addEventListener("click", function(e) {
        if (e.target === interfaceModal) {
            interfaceModal.style.display = "none";
        }
    });

    const pegaFilmes = async () => {
        await pegaGeneros();
        const resultado = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${chaveAPI}&language=pt-BR&page=1`);
        const dados = await resultado.json();
        mostraTop10(dados);
    }

    const generosMap = {};
    
    const pegaGeneros = async () => {

        const generos = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${chaveAPI}&language=pt-BR`);
        const dadosGeneros = await generos.json();
            dadosGeneros.genres.forEach(genero => {
            generosMap[genero.id] = genero.name;
            });

    }


    const mostraTop10 = (dados) => {
        const top10 = dados.results.slice(0, 10);
        console.log(top10);

        top10.forEach(filme => {


            const addFilme = document.createElement("div");
            addFilme.className = "card";
            addFilme.innerHTML = `
                <div class="molduraPoster">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${filme.poster_path}"> 
                </div>
                <h1>${filme.title}</h1>
            `;
            divFilmes.appendChild(addFilme);

            const poster = addFilme.querySelector(".poster");

            poster.addEventListener("click", function() {
                interfaceModal.style.display = "flex";

                const ano = filme.release_date.slice(0, 4);

                conteudoModal.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w1280${filme.backdrop_path}" 
                         style="width:100%; object-fit:cover; border-radius:10px; margin-bottom:20px;">
                    <h1 style="color:gold; margin-bottom:10px;">${filme.title} (${ano})</h1>
                    <p style="text-align:justify; line-height:1.5; font-size: 20px">${filme.overview}</p>
                    <br>
                    <p>Gêneros: ${filme.genre_ids.map(id => generosMap[id]).join(", ")}</p>
                    <br>
                    <p style="font-size:18px; margin-top:10px;">Avaliação do público: 🌟 <span style="background-color: gold; color: black; border-radius: 5px; font-size: 24px">${filme.vote_average.toFixed(1)}</span></p>

                `;
            });
        });
    }


    pegaFilmes();

});