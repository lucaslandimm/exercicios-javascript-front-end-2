function classificarTemperatura(temperatura) {
    if (temperatura < 20) {
        console.log("Frio")
    } else if (temperatura >= 20 && temperatura <= 30) {
        console.log("Agradável")
    } else {
        console.log("Quente")
    }
};
classificarTemperatura(19);
classificarTemperatura(20);
classificarTemperatura(30);
classificarTemperatura(31);