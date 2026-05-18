const spanNome = document.querySelector ('#nome-inserido');
const caixaTexto = document.querySelector ('#condicao');
const botaoAvancar = document.querySelector ('#avancar-p3');

const nomeSalvo = localStorage.getItem ('nomeJogador');
const condicaoAntiga = localStorage.getItem('condicaoJogo');

if (nomeSalvo) {
  spanNome.innerText = nomeSalvo;
}

if (condicaoAntiga) {
  caixaTexto.value = condicaoAntiga;
}

botaoAvancar.addEventListener('click', function() {
  let condicaoAtual = caixaTexto.value.trim();
  
  if (condicaoAtual === "") {
    condicaoAtual = "Comprar sorvete para todos!";
  }
  
  localStorage.setItem('condicaoJogo', condicaoAtual);
  
  window.location.href = "p4.html";
});
