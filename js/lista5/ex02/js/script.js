voto1 = document.getElementById("voto1");
voto2 = document.getElementById("voto2");
voto3 = document.getElementById("voto3");
voto4 = document.getElementById("voto4");

imagens = {
    img1: "img/candidato1.png",
    img2: "img/candidato2.png",
    img3: "Img/candidato3.png",
    img4: "img/candidato4.png"
}


img1 = document.getElementById("img1").addEventListener("click", function() {incremento(1);});
img2 = document.getElementById("img2").addEventListener("click", function() {incremento(2);});
img3 = document.getElementById("img3").addEventListener("click", function() {incremento(3);});
img4 = document.getElementById("img4").addEventListener("click", function() {incremento(4);});


function incremento(candidato){
    voto = document.getElementById("voto" + candidato); 
    voto.textContent = parseInt(voto.textContent) + 1;
}
