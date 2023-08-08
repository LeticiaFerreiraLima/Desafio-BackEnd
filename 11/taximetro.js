function solucao(min, km) {
    let precoViagem = 0;
    const distanciaBase = 10;
    const tempoBase = 20;
    const diferencaDistancia = km - distanciaBase;
    const diferencaTempo = min - tempoBase;
    
    if(km <= distanciaBase && min <= tempoBase) {
        precoViagem = Math.floor((min * 50) + (km * 70))

    } else if (km > distanciaBase && min <= tempoBase){
        precoViagem = Math.floor((distanciaBase * 70) + (diferencaDistancia * 50) + (min * 50))

    } else if ((km <= distanciaBase && min > tempoBase)) {
        precoViagem = Math.floor((km * 70) + ( tempoBase * 50) + (diferencaTempo * 30))

    } else {
        precoViagem = Math.floor((distanciaBase * 70) + (diferencaDistancia * 50) + (tempoBase * 50) + (diferencaTempo* 30))
    }

    console.log(precoViagem)
}

solucao(25, 11.5)
// criacao de uma funcao que faca o calculo a partir da diferenca de km e tempo