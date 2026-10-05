function verificarBeneficio(emprestimos, oficinas) {
    if (emprestimos >= 10 || oficinas >= 3) {
        console.log("Você tem direito ao benefício!")
    } else {
        console.log("Você não tem o benefício!")
    }
};
verificarBeneficio(10, 3);
verificarBeneficio(9, 2);
verificarBeneficio(9, 3);
verificarBeneficio(5, 2);