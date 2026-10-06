"use strict";

/*
  ATIVIDADE PRÁTICA — LEITURA E ALTERAÇÃO DO DOM

  Regras:
  1. Não altere o arquivo atividade21.html.
  2. Faça todas as mudanças neste arquivo.
  3. Utilize document.querySelector() em todas as seleções.
  4. Utilize textContent para textos comuns e dados informados pelo usuário.
  5. Utilize innerText somente nas tarefas indicadas.
  6. Utilize innerHTML somente com conteúdos definidos no próprio código.
  7. Nunca insira dados do usuário com innerHTML ou outerHTML.
  8. Utilize outerHTML somente na tarefa indicada.
  9. Confira cada alteração no navegador e no Console.
*/

// 01. Solicite o nome do estudante e altere a mensagem de
// boas-vindas utilizando textContent.
let nomeEstudande = prompt("Digite seu nome:")
const doc = document.querySelector("#mensagem-boas-vindas");
doc.textContent = "Seja bem-vindo(a) " + nomeEstudande;

// 02. Mostre no Console o texto atual do nome da loja usando
// textContent. Depois, altere o nome da loja com textContent.

const nomeLoja = document.querySelector("#nome-loja");
console.log(nomeLoja.textContent);
nomeLoja.textContent = "Loja do Lucão";
console.log(nomeLoja.textContent)

// 03. Altere o título principal da página utilizando textContent.
const tituloPrincipal = document.querySelector("#titulo-principal");
tituloPrincipal.textContent = "Catálogo de produtos do Lucão"

// 04. Mostre no Console o texto visível do subtítulo utilizando
// innerText. Depois, altere o subtítulo com innerText.
const subtitulo = document.querySelector("#subtitulo-principal");
console.log(subtitulo.innerText);

// 05. Insira o aviso de promoção utilizando innerHTML.
// O aviso deve possuir pelo menos uma tag <strong> e uma tag <span>.
const aviso = document.querySelector("#aviso-promocao");
aviso.innerHTML = "<strong>Mouse básico</strong> Mouse óptico para navegação, estudos e desenvolvimento. <span>R$ 49,90</span>"

// 06. Altere a categoria do produto em destaque utilizando
// textContent.
const categoria = document.querySelector("#categoria-destaque");
categoria.textContent = "Informática";

// 07. Altere o nome do produto em destaque utilizando innerText.
const nomeProdutoDestaque = document.querySelector("#nome-produto-destaque");
nomeProdutoDestaque.innerText = "Monitor 4k";

// 08. Mostre no Console o textContent e o innerText da descrição
// do produto. Depois, altere a descrição utilizando innerText.
const descrição = document.querySelector("#descricao-produto-destaque");
console.log(descrição.textContent);
console.log(descrição.innerText);
descrição.innerText = "Monitor indicado para estudos, programação e produtividade.";

// 09. Altere o preço do produto em destaque utilizando textContent.
const precoprodutoDestaque = document.querySelector("#preco-produto-destaque");
precoprodutoDestaque.textContent = "899,99"

// 10. Altere a situação do estoque utilizando innerHTML.
// Destaque a situação com uma tag <strong>.
// Utilize somente um texto definido no próprio código.
const situacaoProdutoEstoque = document.querySelector("#status-estoque");
situacaoProdutoEstoque.innerHTML = "<strong>Estoque Disponível</strong>"

// 11. Atualize as três estatísticas do catálogo.
// Utilize textContent na primeira, innerText na segunda e
// innerHTML com uma tag <strong> na terceira.
const totalProdutos = document.querySelector("#total-produtos");
totalProdutos.textContent = "20";

const totalCategorias = document.querySelector("#total-categorias");
totalCategorias.innerText = "50";

const totalOfertas = document.querySelector("#total-ofertas");
totalOfertas.innerHTML = "<strong> 100</strong>";

// 12. Altere os nomes dos três produtos secundários.
// Utilize textContent para impedir que possíveis tags sejam
// interpretadas pelo navegador.

const nomeProduto1 = document.querySelector("#nome-produto-01");
nomeProduto1.textContent = "headset Gamer Azul";

const nomeProduto2 = document.querySelector("#nome-produto-02");
nomeProduto2.textContent = "Teclado Mecânico";

const nomeProduto3 = document.querySelector("#nome-produto-03");
nomeProduto3.textContent = "Gabinete";

// 13. Atualize a lista de benefícios utilizando innerHTML.
// Crie pelo menos três elementos <li> dentro da lista.
const listabeneficios = document.querySelector("#lista-beneficios");
listabeneficios.innerHTML = "<li>Fretes Grátis.</li> <li>20% OFF.</li> <li>Brindes</li>";


// 14. Atualize automaticamente o ano do rodapé utilizando
// new Date().getFullYear() e textContent.
const anoAtual =document.querySelector("#ano-atual")
anoAtual.textContent = new Date().getFullYear();

// 15. Mostre no Console o outerHTML do texto final do rodapé.
// Depois, utilize outerHTML para substituir completamente esse
// elemento por uma nova tag <p> com classe e conteúdo diferentes.
// Após a substituição, selecione novamente o novo elemento e
// mostre seu outerHTML no Console.

const textoRodape = document.querySelector(".rodape .container");
console.log(textoRodape.outerHTML);
textoRodape.outerHTML = '<p class="rodape-texto">Loja de informática</p>'
console.log(textoRodape.outerHTML);