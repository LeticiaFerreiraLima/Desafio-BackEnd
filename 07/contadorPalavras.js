function solucao(texto) {
    const textoSemEspaco = texto.trim()

    let arrayPalavras = textoSemEspaco.split(' ');

    const arrayFinal = arrayPalavras.filter((palavra) => {
    return palavra !== '';
    })


    console.log(arrayFinal.length)
}

solucao('Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem  querer ')