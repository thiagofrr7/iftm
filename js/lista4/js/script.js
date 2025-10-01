listaCandidatos = [
  { nome: "Jair Messias Bolsonaro", partido: "PL", img: "candidato1.png" },
  { nome: "Luís Inácio Lula da Silva", partido: "PT", img: "candidato2.png" },
  { nome: "Ciro Gomes", partido: "PDT", img: "candidato3.png" },
  { nome: "Simone Tebet", partido: "MDB", img: "candidato4.png" }
]

document.getElementById("btnGerar").onclick = function () {
  sorteados = [0, 1, 2, 3]
  indiceA = sorteados.splice(Math.floor(Math.random() * sorteados.length), 1)[0]
  indiceB = sorteados.splice(Math.floor(Math.random() * sorteados.length), 1)[0]

  candA = listaCandidatos[indiceA]
  candB = listaCandidatos[indiceB]

  votosA = Math.random() * 100
  votosB = 100 - votosA

  document.getElementById("nomeCandidato1").textContent = candA.nome
  document.getElementById("partidoCandidato1").textContent = candA.partido
  document.getElementById("imgCandidato1").src = "img/" + candA.img
  document.getElementById("percentual1").textContent = votosA.toFixed(1)

  document.getElementById("nomeCandidato2").textContent = candB.nome
  document.getElementById("partidoCandidato2").textContent = candB.partido
  document.getElementById("imgCandidato2").src = "img/" + candB.img
  document.getElementById("percentual2").textContent = votosB.toFixed(1)

  vencedorAtual = "Empate"
  if (votosA > votosB) {
    vencedorAtual = candA.nome
  } else if (votosB > votosA) {
    vencedorAtual = candB.nome
  }

  document.getElementById("nomeVencedor").textContent = vencedorAtual
}
