function calcularCompra(valorCompra) {
        if (valorCompra > 200) {
            valorDesconto = valorCompra * 0.1
            valorFinal = valorCompra - valorDesconto
            console.log(`Compra no valor de: ${valorCompra}`)
            console.log(`Valor do desconto: ${valorDesconto}`)
            console.log(`Valor final: ${valorFinal}`)
            console.log("-----------------------------")
        } else if (valorCompra <= 200) {
            console.log(`Compra no valor de: ${valorCompra}`)
            console.log("A compra não possui desconto!")
            console.log("-----------------------------")
        } else if (valorCompra <= 0) {
            console.log(`Valor da compra inválido: ${valorCompra} `)
            console.log("-----------------------------")
        }
}
calcularCompra(150);
calcularCompra(200);
calcularCompra(250);
calcularCompra(-10);