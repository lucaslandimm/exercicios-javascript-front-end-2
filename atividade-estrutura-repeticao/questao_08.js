function calcular(numero1, numero2, operacao) {
    if (operacao === "+") {
        console.log(numero1 + numero2)
    } else if (operacao === "-") {
        console.log(numero1 - numero2)
    } else if (operacao === "*") {
        console.log(numero1 * numero2)
    } else if (operacao === "/" && numero2 === 0) {
        console.log("Não é possível dividir um número por 0!")
        if (operacao === "/" && numero2 !== 0) {
            console.log(numero1 / numero2)
        }
    } else if (operacao === "%") {
        console.log(numero1 % numero2)
    }
};
calcular(10, 5, "+");
calcular(10, 5, "-");
calcular(10, 5, "*");
calcular(10, 5, "/");
calcular(10, 0, "/");
calcular(10, 5, "%");