window.addEventListener("DOMContentReloaded", function (){

    txtUser = document.getElementById("textoUsuario");
    txtSenha = document.getElementById("textoSenha");

    btnValidar = document.getElementById("botaoValidar").addEventListener("click", async() => {
        const urlCriptografia = "https://thiagofrr7.github.io/iftm/pfjs/provaajax/js/criptografia.js";

        try {
            const resposta = await fetch(urlCriptografia);
            const senhaCriptografada = await resposta.json;
            validaUsuarioESenha(senhaCriptografada);
        } catch {
            console.log(error.message);
            return [];
        }
        
        } );

        const validaUsuarioESenha = (senhasProntas) =>{

            senhasProntas.forEach(dados => {
                    if(txtUser.value = usersData.nome){
                        if(bycript.compareSync(txtSenha.value, dados.senha))
                            console.log("Senhas iguais");
                        else{
                            console.log("Senhas diferentes");
                        }
                    }
                    console.log("Usuário e/ou senha incorretas.");
                })
        
        }

    // const senhasJSON = [
    //     {senhaCript: "$2a$10$6nyTZbbn9IvSB7jeDtQUa.RlzE7PDC9o5rhYTDenKWxi4lBtq0Oq6"},
    //     {senhaCript: "$2a$10$cfSeh9JQ728jewfCQdxePuUtrD6Eoguy8jCgMoOrAOgslqUprPBTS"},
    //     {senhaCript: "$2a$10$ZFxSjLMExvVNXigIde4YQuoxkjnUwx2dgKYtSf2aZY4C1uzg9tAke"},
    //     {senhaCript: "$2a$10$Mpvxake9O69CPeLOir0llexK.tpL5XrYbD8J2D6LEoBq4eRzsKDCa"},
    //     {senhaCript: "$2a$10$tiNOjVe5HIEzkkP5RzpF7.UeYzN3HZYmqFzy0khQYUf03ijQWkCUi"}
    // ]

})