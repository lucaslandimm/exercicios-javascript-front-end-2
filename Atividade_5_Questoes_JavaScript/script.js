"use strict";

// Elementos da página. Use estas variáveis nas cinco funções.
const modoTela = document.querySelector("#modo-tela");
const nomeReserva = document.querySelector("#nome-reserva");
const dicaReserva = document.querySelector("#dica-reserva");
const precoCalculo = document.querySelector("#preco-calculo");
const descontoCalculo = document.querySelector("#desconto-calculo");
const resultadoCalculo = document.querySelector("#resultado-calculo");
const campoBusca = document.querySelector("#busca-produtos");
const resultadosBusca = document.querySelector("#resultados-busca");
const formCadastro = document.querySelector("#form-cadastro");
const nomeCadastro = document.querySelector("#nome-cadastro");
const precoCadastro = document.querySelector("#preco-cadastro");
const retornoCadastro = document.querySelector("#retorno-cadastro");
const listaCadastro = document.querySelector("#lista-cadastro");

const produtosBusca = [
  { nome: "Caderno" },
  { nome: "Caneta azul" },
  { nome: "Mochila" },
  { nome: "Estojo" }
];

const cadastrados = [];

// Complete apenas estas funções.

function atualizarModoTela() {
  const larguraTela = window.innerWidth;

  if (larguraTela >= 768) {
    modoTela.textContent = "Tela ampla "
  } else {
    modoTela.textContent = "Tela compacta"
  }
}

function alternarDica(evento) {
  dicaReserva.focus();

  if(evento.type === 'focus') {
    dicaReserva.classList.remove('oculto')
  } else if (evento.type === 'blur') {
    dicaReserva.classList.add('oculto');
  }
}

function mostrarPrecoFinal() {
  const valorDesconto = Number(precoCalculo.value) * (Number(descontoCalculo.value / 100));
  const precoFinal = Number(precoCalculo.value) - valorDesconto;
  resultadoCalculo.textContent = formatarMoeda(precoFinal);
}

function buscarProdutos(evento) {
  if (evento.key !== 'Enter') {
    return;
  }

  const termoBusca = evento.target.value.trim().toLowerCase();

  const itensEncontrados = produtosBusca.filter(function(produto) {
    return produto.nome.toLowerCase().includes(termoBusca);
  });

  mostrarResultados(itensEncontrados);
}


function cadastrarProduto(evento) {
  evento.preventDefault();

  const nome = nomeCadastro.value.trim();
  const precoTexto = precoCadastro.value.trim();
  const preco = Number(precoTexto);

  const nomeValido = nome.length >= 2;
  const precoValido = precoTexto !== "" && !Number.isNaN(preco) && preco >= 0;

  if (!nomeValido || !precoValido) {
    retornoCadastro.textContent = "Confira o nome e o preço.";
    return;
  }

  cadastrados.push({ nome, preco });
  mostrarCadastro();

  retornoCadastro.textContent = "";
  formCadastro.reset();
}


// Funções auxiliares prontas.

const moedaBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

function formatarMoeda(valor) {
  return moedaBRL.format(valor);
}

function mostrarResultados(itens) {
  resultadosBusca.textContent = "";

  if (itens.length === 0) {
    const aviso = document.createElement("li");
    aviso.textContent = "Nenhum produto encontrado.";
    resultadosBusca.append(aviso);
    return;
  }

  for (const produto of itens) {
    const linha = document.createElement("li");
    linha.textContent = produto.nome;
    resultadosBusca.append(linha);
  }
}

function mostrarCadastro() {
  listaCadastro.textContent = "";

  if (cadastrados.length === 0) {
    const aviso = document.createElement("li");
    aviso.textContent = "Nenhum produto cadastrado.";
    listaCadastro.append(aviso);
    return;
  }

  for (const produto of cadastrados) {
    const linha = document.createElement("li");
    linha.textContent = produto.nome + " — " + formatarMoeda(produto.preco);
    listaCadastro.append(linha);
  }
}

// Eventos e estado inicial já configurados.
document.addEventListener("DOMContentLoaded", atualizarModoTela);
window.addEventListener("resize", atualizarModoTela);
nomeReserva.addEventListener("focus", alternarDica);
nomeReserva.addEventListener("blur", alternarDica);
document.querySelector("#calcular").addEventListener("click", mostrarPrecoFinal);
campoBusca.addEventListener("keydown", buscarProdutos);
formCadastro.addEventListener("submit", cadastrarProduto);

mostrarResultados(produtosBusca);
mostrarCadastro();
