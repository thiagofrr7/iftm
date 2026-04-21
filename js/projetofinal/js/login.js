window.addEventListener("DOMContentLoaded", function(){

    logaNome = document.getElementById("logaNome");
    logaSenha = document.getElementById("logaSenha");
    botaoLogin = document.getElementById("botaoLogin");

    botaoLogin.addEventListener("click", function(){

        let nomeSalvo = localStorage.getItem("Nome");
        let senhaSalva = localStorage.getItem("Senha");

        if(logaNome.value === nomeSalvo && logaSenha.value === senhaSalva){
            window.location.href = "selecionajogadores.html";
        }
        else if(logaNome.value === "" && logaSenha.value === ""){
            alert("AVISO: Os campos devem ser preenchidos.");
        }
        else if(logaNome.value === ""){
            alert("AVISO: Campo \"Nome\" está vazio.");
        }
        else if(logaSenha.value === ""){
            alert("AVISO: Campo \"Senha\" está vazio.");
        }
        else{
            alert("AVISO: Conta não existe.")
        }
    })
})

