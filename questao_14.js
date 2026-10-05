function somarCincoValores()  {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º valor:`));
        soma += numero
    }
    return soma
};

alert(somarCincoValores())