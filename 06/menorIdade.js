function solucao(lista) {
    const temMenorIdade = lista.every((idade) => {
        return idade < 18
    });

    if (temMenorIdade) {
        console.log('CRESCA E APARECA');    
    } else {
        let menorIdade = Number.MAX_SAFE_INTEGER;
        for(const idade of lista) {
            if(idade >= 18 && idade < menorIdade) {
                menorIdade = idade;
            }
        }
        console.log(menorIdade)
    }       
}

solucao([12, 32,  27, 15, 19, 27])
