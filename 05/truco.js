function solucao(carta) {
    const cartas = ['Q', 'J', 'K', 'A', '2', '3'];
    let manilha = '';

    for(i = 0; i < cartas.length; i++) {
        if(cartas[cartas.length - 1] === carta) {
            manilha = cartas[0]
        } else 
        if(cartas[i] === carta) {
            manilha = cartas[i + 1];
             
        }
    }

    console.log(manilha)
}

solucao('3')