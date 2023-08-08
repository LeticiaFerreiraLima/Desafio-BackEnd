function solucao(min, max, valores) {
    let valoresPermitidos = [];

    for(const valor of valores) {
        if(valor >= min && valor <= max) {
            valoresPermitidos.push(valor)
        }
    }
    console.log(valoresPermitidos)
}

solucao(2, 10, [0, 5, 6, 10, 11])