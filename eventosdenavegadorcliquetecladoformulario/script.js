/*
  ATIVIDADE PRÁTICA — EVENTOS COM JAVASCRIPT

  Classes de eventos trabalhadas:
  1. Eventos de interface;
  2. Eventos de foco;
  3. Eventos de teclado;
  4. Eventos de formulário.

  Regras:
  1. Faça toda a implementação neste arquivo.
  2. Selecione os elementos com document.querySelector().
  3. Registre os eventos com addEventListener().
  4. Crie funções com nomes que indiquem claramente suas responsabilidades.
  5. Utilize textContent para alterar textos exibidos na página.
  6. Utilize value para ler o conteúdo dos campos.
*/

/*
  ============================================================
  PARTE 1 — EVENTOS DE INTERFACE
  ============================================================
*/

/*
  01. DOMContentLoaded

  Registre o evento DOMContentLoaded em document.

  Quando o evento ocorrer:
  - altere o conteúdo de #statusDom para "DOM pronto";
  - mostre em #larguraTela a largura atual da janela acompanhada de "px";
  - mostre em #modoTela "Tela compacta" quando a largura for menor que
    768 pixels;
  - caso contrário, mostre "Tela ampla".

  Crie uma função separada para atualizar a largura e o modo de visualização,
  pois essa função será reutilizada no evento resize.

  Teste: recarregue a página e observe o painel de interface.
*/

/*
  02. load

  Registre o evento load em window.

  Quando a página e seus recursos terminarem de carregar, altere o conteúdo
  de #statusLoad para "Página completamente carregada".

  Teste: recarregue a página e observe a diferença entre os indicadores
  de DOM e de carregamento completo.
*/

/*
  03. resize

  Registre o evento resize em window.

  Quando a janela mudar de tamanho, chame a mesma função criada na tarefa 01
  para atualizar #larguraTela e #modoTela.

  Teste: aumente e diminua a largura da janela. Verifique especialmente a
  mudança entre valores menores e maiores ou iguais a 768 pixels.
*/

/*
  04. scroll

  Registre o evento scroll em window.

  Se window.scrollY for maior ou igual a programacao.offsetTop, altere
  #statusRolagem para "Você chegou à programação".

  Caso contrário, mostre "Continue rolando".

  O elemento da programação possui o identificador #programacao.

  Teste: role a página até a programação e depois volte ao início.
*/

/*
  ============================================================
  PARTE 2 — EVENTOS DE FOCO
  ============================================================
*/

/*
  05. focus

  Registre o evento focus diretamente no campo #nomeFoco.

  Quando o campo receber o foco, altere #ajudaFoco para mostrar:
  "Digite seu nome completo.".

  Teste: acesse o campo nome com o mouse e depois utilizando a tecla Tab.
*/

/*
  06. blur

  Registre o evento blur diretamente no campo #nomeFoco.

  Quando o campo perder o foco:
  - leia seu value;
  - utilize trim() para retirar espaços das extremidades;
  - se o resultado estiver vazio, mostre em #ajudaFoco:
    "O campo nome ficou vazio.";
  - caso contrário, mostre:
    "Nome preenchido corretamente.".

  Teste: saia do campo vazio e depois saia com um nome preenchido.
*/

/*
  07. focusin

  Registre somente um evento focusin no formulário #formFoco.

  Utilize o parâmetro evento e evento.target.id para descobrir qual campo
  recebeu o foco. Mostre esse identificador em #campoAtual.

  Teste: navegue entre nome, e-mail e curso utilizando a tecla Tab.
*/

/*
  08. focusout

  Registre somente um evento focusout no formulário #formFoco.

  Utilize evento.target.id para descobrir qual campo acabou de perder o foco.
  Mostre esse identificador em #ultimoCampo.

  Teste: passe por todos os campos utilizando Tab e Shift + Tab.
*/

/*
  ============================================================
  PARTE 3 — EVENTOS DE TECLADO
  ============================================================
*/

/*
  09. Função para mostrar as propriedades da tecla

  Crie uma função que receba o parâmetro evento e atualize:
  - #tipoEventoTeclado com evento.type;
  - #valorTecla com evento.key;
  - #codigoTecla com evento.code;
  - #teclaRepetida com "Sim" ou "Não", conforme evento.repeat;
  - #ctrlPressionado com "Sim" ou "Não", conforme evento.ctrlKey;
  - #shiftPressionado com "Sim" ou "Não", conforme evento.shiftKey.

  Essa função deve ser reutilizada nas tarefas de keydown e keyup.
*/

/*
  10. keydown

  Registre o evento keydown no campo #campoTeclado.

  Quando uma tecla for pressionada:
  - chame a função criada na tarefa 09;
  - se evento.key for igual a "Enter", mostre em #mensagemTeclado:
    "Você pressionou Enter.";
  - se evento.key for igual a "Escape", limpe o value do campo e mostre:
    "O campo foi limpo com Escape.".

  Teste: pressione letras, Enter, Escape, Shift e Ctrl. Mantenha uma letra
  pressionada para observar a propriedade repeat.
*/

/*
  11. keyup

  Registre o evento keyup no campo #campoTeclado.

  Quando uma tecla for liberada:
  - chame a função criada na tarefa 09;
  - mostre em #mensagemTeclado:
    "A tecla [valor da tecla] foi liberada.".

  Utilize evento.key para incluir o valor da tecla na mensagem.

  Teste: pressione e solte diferentes teclas, observando a mudança entre
  keydown e keyup no painel.
*/

/*
  ============================================================
  PARTE 4 — EVENTOS DE FORMULÁRIO
  ============================================================
*/

/*
  12. input

  Implemente duas respostas ao evento input:

  A) No campo #nomeFormulario:
  - leia o value e utilize trim();
  - se estiver vazio, mostre "Não informado" em #previaNome;
  - caso contrário, mostre o nome digitado em #previaNome.

  B) No campo #apresentacaoFormulario:
  - conte os caracteres utilizando value.length;
  - mostre a quantidade em #contadorCaracteres.

  Teste: digite, apague e cole textos nos dois campos.
*/

/*
  13. change

  Registre o evento change no campo #oficinaFormulario.

  Quando uma nova opção for confirmada:
  - se o value estiver vazio, mostre "Não selecionada" em #previaOficina;
  - caso contrário, mostre o value selecionado em #previaOficina.

  Teste: selecione todas as oficinas e depois volte à primeira opção.
*/

/*
  14. submit e reset

  A) Registre submit no formulário #formInscricao.

  Quando o formulário válido for enviado:
  - receba o parâmetro evento;
  - utilize evento.preventDefault() para impedir o recarregamento;
  - mostre em #mensagemFormulario uma frase contendo o nome e a oficina;
  - aplique a classe "sucesso" à mensagem.

  B) Registre reset no mesmo formulário.

  Quando o formulário for limpo:
  - restaure #previaNome para "Não informado";
  - restaure #previaOficina para "Não selecionada";
  - restaure #contadorCaracteres para "0";
  - mostre "Formulário limpo." em #mensagemFormulario;
  - limpe #erroEmail.

  Não utilize preventDefault() no evento reset, pois o navegador deve limpar
  os campos normalmente.

  Teste: preencha, confirme e depois utilize o botão Limpar.
*/

/*
  15. invalid

  Registre o evento invalid diretamente no campo #emailFormulario.

  Quando o e-mail estiver vazio ou não atender ao formato esperado, mostre
  em #erroEmail: "Informe um endereço de e-mail válido.".

  Aplique a classe "erro" ao elemento #erroEmail.

  Registre também um evento input no mesmo campo para limpar essa mensagem
  quando o usuário voltar a editar o e-mail.

  Não utilize preventDefault() no evento invalid. Preserve a validação e o
  aviso nativo do navegador.

  Teste:
  - tente confirmar o formulário com o e-mail vazio;
  - tente novamente com "aluno@";
  - corrija para um endereço válido e confirme.

  Observe que submit não acontece enquanto algum campo obrigatório estiver
  inválido.
*/

/*
  CHECKLIST DE ENTREGA

  [ ] DOMContentLoaded altera o estado do DOM.
  [ ] load informa o carregamento completo.
  [ ] resize atualiza a largura e o modo de tela.
  [ ] scroll identifica a chegada à programação.
  [ ] focus e blur respondem no campo nome.
  [ ] focusin e focusout identificam os campos do formulário.
  [ ] keydown e keyup mostram as propriedades das teclas.
  [ ] input atualiza nome e contador em tempo real.
  [ ] change atualiza a oficina selecionada.
  [ ] submit confirma sem recarregar a página.
  [ ] reset restaura a interface.
  [ ] invalid informa o problema no e-mail.
  [ ] O console do navegador não apresenta erros.
*/
