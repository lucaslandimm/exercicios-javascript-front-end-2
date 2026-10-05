function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        let numero = parseFloat(prompt(`Digite a ${i + 1}ª nota!`));
        soma += numero;
    }
    let media = soma / 4;
    return `A sua média é igual a ${media}`
};

alert(calcularMedia())