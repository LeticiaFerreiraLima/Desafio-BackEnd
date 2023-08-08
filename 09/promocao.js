    let menorPreco = Number.MAX_SAFE_INTEGER;
    let precoTotal = 0;
    let precoDesconto = 0;

    for(const preco of precos) {

        precoTotal += preco;
        
        if(preco < menorPreco) {
            menorPreco = preco 
        }

        if(precos.length >= 3) {
            
            precoDesconto = precoTotal - (menorPreco / 2)
        } else {
            precoDesconto = precoTotal
        }
    }
    
    console.log(precoDesconto)
  
}

solucao([200, 150, 50, 100])

