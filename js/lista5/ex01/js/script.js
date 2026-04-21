imgpadrao = document.getElementById("imgpadrao");
msg = document.getElementById("msg");

imagens = [
    {img: "img/alegre.png"},
    {img: "img/Assustado.png"},
    {img: "img/Nervoso.png"},
    {img: "img/Pensativo.png"}
];

imgpadrao.addEventListener("onload", personagemDormindo);
imgpadrao.addEventListener("mouseout", personagemDormindo);
imgpadrao.addEventListener("mouseenter", personagemAssustado);
imgpadrao.addEventListener("click", personagemInterativo);

function personagemDormindo() {
    imgpadrao.src = "img/Pensativo.png";
    msg.textContent = "zzzzzzzzz!";
}

function personagemAssustado() {
    imgpadrao.src = "img/Assustado.png";
    msg.textContent = "O que você quer?";
}

function personagemInterativo() {

    nome = prompt("Qual é o seu nome?");

    if(nome.trim() == "" || nome == null){ // Nessa parte eu coloquei o trim para espaço vazio e null se o usuário cancelar
        imgpadrao.src = "img/Nervoso.png";
        msg.textContent = "Não me faça perder o meu tempo!";
        imgpadrao.classList.add("shake");
        setTimeout(() => {imgpadrao.classList.remove("shake");}, 700);
    }

    else{
       imgpadrao.src = "img/alegre.png";
       msg.textContent = nome + " seja bem-vindo!";
       imgpadrao.classList.add("dance");
       setTimeout(() => {imgpadrao.classList.remove("dance");}, 2000);
    }

}
