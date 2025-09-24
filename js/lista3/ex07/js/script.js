txtlogin = document.getElementById("textoLogin");
senha1 = document.getElementById("textoSenha1");
senha2 = document.getElementById("textoSenha2");
btnentrar = document.getElementById("botaoEntrar");
btnlimpar = document.getElementById("botaoLimpar");

btnentrar.addEventListener("click", entrar);
btnlimpar.addEventListener("click", limpar);

function entrar(){
    if(txtlogin.value.trim() != ""){
        if(isNaN(senha1.value) && isNaN(senha2.value)){
            alert("As senhas não possuem apenas números.")
            return;
        }
        if(isNaN(senha1.value)){
            alert("A senha 1 não contém apenas números.")
            return;
        }
        if(isNaN(senha2.value)){
            alert("A senha 2 não contém apenas números.")
            return;
        }
        if(senha1.value == senha2.value){
            alert("Todos os campos foram digitados corretamente.")
            return;
        }
    else
        alert("Você não digitou nenhuma informação!")
    }
}

function limpar(){
    txtlogin.value = "";
    senha1.value = "";
    senha2.value = "";
}