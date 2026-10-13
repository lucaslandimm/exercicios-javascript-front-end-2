const curtida = document.getElementById("quantidadeCurtidas");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("btnCurtir");
let curtidas = 50;
let curtiu = false;
function curtir() {
    if (curtiu == false) {
        curtidas = curtidas + 1;
        curtida.textContent = curtidas;
        mensagem.textContent = "Você curtiu a publicação!";
        botao.textContent = "Descurtir";
    } else {
        curtidas = curtidas - 1;
        curtida.textContent = curtidas;
        mensagem.textContent = "Você ainda não curtiu a publicação!";
        botao.textContent = "Curtir";
    }
    curtiu = !curtiu;
}

botao.addEventListener("click", curtir);