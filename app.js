var input = document.querySelector(".container__input");
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(document.querySelector("input").max);

textoInicial();

function textoInicial() {
  textoCampos("h1", "Hora do Desafio");
  textoCampos("p", `Escolha um número de 1 a ${input.max}`);
}

function textoCampos(tag, valor) {
  let campo = document.querySelector(tag);
  campo.innerHTML = valor;
  responsiveVoice.speak(valor, "Brazilian Portuguese Female", {
    rate: 1.2,
  });
}

function verificarChute() {
  let chute = parseInt(document.querySelector("input").value);
  let teste = numeroSecreto > chute ? "Maior" : "Menor";
  if (chute == numeroSecreto) {
    textoCampos("h1", "Parabéns, você acertou!");
    textoCampos("p", "Clique em Novo Jogo para jogar novamente");
    habilitarBotao("reiniciar", false);
  } else {
    textoCampos(
      "p",
      `O número secreto é ${teste} que o chute. (Tentativa ${tentativas})`
    );
    limparCampo("input");
    tentativas++;
  }
}

function limparCampo(tag) {
  document.querySelector(tag).value = "";
}

function habilitarBotao(tag, value) {
  document.getElementById(tag).disabled = value;
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * input.max + 1);
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  input.max++;
  textoInicial();
  limparCampo("input");
  habilitarBotao("reiniciar", true);
  tentativas = 1;
}
