const lista = [1, 2, 3, 4, 10];

function solucao(lista) {
    const valorTotal = lista.reduce((montante, valor) => {
        return montante + valor
    });

    const mediaDiaria = (valorTotal / lista.length)

    console.log(mediaDiaria)
  
}
solucao(lista)