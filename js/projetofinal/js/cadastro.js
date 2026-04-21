window.addEventListener("DOMContentLoaded", function(){

    cadastraNome = document.getElementById("cadastraNome");
    cadastraSenha = document.getElementById("cadastraSenha");
    botaoCadastro = document.getElementById("botaoCadastro");

    botaoCadastro.addEventListener("click", function(){

        if(cadastraNome.value === "" && cadastraSenha.value === ""){
            alert("AVISO: Os campos devem ser preenchidos.");
        }
        else if(cadastraNome.value === ""){
            alert("AVISO: Campo \"Nome\" está vazio.");
        }
        else if(cadastraSenha.value === ""){
            alert("AVISO: Campo \"Senha\" está vazio.");
        }
        else{
            let nome = cadastraNome.value;
            let senha = cadastraSenha.value;
            localStorage.setItem("Nome", nome);
            localStorage.setItem("Senha", senha);
            window.location.href = "index.html";
        }


    })
})