const lista = [1, 2, 3, 4];

function solucao(lista) {
    const valorTotal = lista.reduce((montante, valor) => {
        return montante + valor
    })

    console.log(valorTotal)
  
}
solucao(lista)