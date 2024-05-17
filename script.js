"use strict";

const jogador0 = document.querySelector(".jogador-0");
const jogador1 = document.querySelector(".jogador-1");
const pontuacao0 = document.getElementById("pontuacao-0");
const pontuacao1 = document.getElementById("pontuacao-1");
const current0 = document.getElementById("current-0");
const current1 = document.getElementById("current-1");
const jogadorGanhador = document.querySelector(".player-winner");

const dado = document.querySelector(".dado");
const jogadorAtivo = document.querySelector(".jogadorAtivo");
const btnNew = document.querySelector(".btn--new");
const btnDado = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const currentAtual = document.querySelector(".currentAtual");

//Inicio

pontuacao0.textContent = 0;
pontuacao1.textContent = 0;
dado.classList.add("hidden");

let somaJogador0 = 0;
let somaJogador1 = 0;
let jogadorPrincipal = 0;
let pontuacaoSomada = 0;

//Botao do Jogar Dado

btnDado.addEventListener("click", function () {
  //Gerando numero aleatorio
  const dadoSortido = Math.trunc(Math.random() * 6) + 1;
  //   console.log("Dado Sortido: " + dadoSortido);

  //Display do dado
  dado.classList.remove("hidden");
  dado.src = "dice-" + dadoSortido + ".png";

  //Checando se o numero é 1
  if (dadoSortido !== 1) {
    pontuacaoSomada += dadoSortido;
    document.getElementById("current-" + jogadorPrincipal + "").textContent =
      pontuacaoSomada;
  } else {
    pontuacaoSomada = 0;
    document.getElementById("current-" + jogadorPrincipal + "").textContent =
      pontuacaoSomada;
    if (jogadorPrincipal === 0) {
      jogadorPrincipal = 1;
      jogador0.classList.remove("jogadorAtivo");
      jogador1.classList.add("jogadorAtivo");
    } else {
      jogadorPrincipal = 0;
      jogador1.classList.remove("jogadorAtivo");
      jogador0.classList.add("jogadorAtivo");
    }
  }
});

//Botao se Segurar

document.querySelector(".btn--hold").addEventListener("click", function () {
  //Adicionar os pontos na pontuação total
  if (jogadorPrincipal === 0) {
    somaJogador0 += pontuacaoSomada;
    pontuacao0.textContent = somaJogador0;
    pontuacaoSomada = 0;

    console.log(somaJogador0);

    document.getElementById("current-" + jogadorPrincipal + "").textContent =
      pontuacaoSomada;

    //Verificando quem ganha
    if (somaJogador0 >= 100) {
      jogador0.classList.add("player-winner");
      pontuacao0.textContent = 100;
    }

    jogadorPrincipal = 1;
    jogador0.classList.remove("jogadorAtivo");
    jogador1.classList.add("jogadorAtivo");
  } else {
    somaJogador1 += pontuacaoSomada;
    pontuacao1.textContent = somaJogador1;
    pontuacaoSomada = 0;

    document.getElementById("current-" + jogadorPrincipal + "").textContent =
      pontuacaoSomada;

    //Verificando quem ganha
    if (somaJogador1 >= 100) {
      jogador1.classList.add("player-winner");
      pontuacao1.textContent = 100;
    }

    jogadorPrincipal = 0;
    jogador1.classList.remove("jogadorAtivo");
    jogador0.classList.add("jogadorAtivo");
  }
});

document.querySelector(".btn--new").addEventListener("click", function () {
  pontuacao0.textContent = 0;
  pontuacao1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  somaJogador0 = 0;
  somaJogador1 = 0;
  pontuacaoSomada = 0;
  dado.classList.add("hidden");
  if (jogadorPrincipal === 1) {
    jogadorPrincipal = 0;
    jogador1.classList.remove("jogadorAtivo");
    jogador0.classList.add("jogadorAtivo");
    jogador0.classList.remove("player-winner");
  } else {
    jogador1.classList.remove("player-winner");
  }
});
