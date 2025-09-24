btnExibir = document.getElementById("botaoExibir");
txtNome = document.getElementById("textoNome");

btnExibir.addEventListener("click", exibir);

function exibir() {
    alert(txtNome.value);
}