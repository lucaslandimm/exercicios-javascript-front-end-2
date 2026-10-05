function verificarParticipacao(idade) {
    if (idade >= 16) {
        console.log("Participação permitida");
    } else if (idade < 16 && idade >= 0) {
        console.log("Participação não permitida")
    } else {
        console.log("Idade inválida")
    }
};
verificarParticipacao(15);
verificarParticipacao(16);
verificarParticipacao(-1);