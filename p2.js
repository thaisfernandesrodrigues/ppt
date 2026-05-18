const Nome = document.querySelector ('#nome-jogador');
const Avancar = document.querySelector ('#avancar');

Avancar.addEventListener ('click', function () {
  let nomeDoPlayer =  Nome.value.trim();

  if (nomeDoPlayer === "") {
    nomeDoPlayer = "Jogador 1";
  }

  localStorage.setItem('nomeJogador', nomeDoPlayer);
  window.location.href = "p3.html";
});