function verificarMeta(nota, frequencia) {
    if (nota >= 7 && frequencia >= 75) {
        console.log("A meta foi atendida!")
    } else {
        console.log("A meta não foi atingida!")
    }
};
verificarMeta(8, 80);
verificarMeta(8, 60);
verificarMeta(6, 90);
verificarMeta(7, 75);