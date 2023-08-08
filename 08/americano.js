function solucao(numeros) {
    const somaNumeros = numeros.reduce((acumulador, elementoAtual) => {
        return acumulador + elementoAtual;
    })

    if(somaNumeros % numeros.length === 0) {
        console.log(numeros.length)
    } else {
        console.log(somaNumeros % numeros.length)
    }
}

solucao([1, 0])