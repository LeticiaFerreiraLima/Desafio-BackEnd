function processData(input) {

    //!Essa parte do código tem relação com tratamento do input padrão do Hacker Rank
    const linhas = input.trim().split('\n'); //remove espacos e divide a string em linhas;
    const quantidadePontos = linhas[0] //quantidade de linhas (indicado na primeira linha);
    let coordenadas = [];
    
    //o i comeca em 1 porque descarta a primeira (quantidade)
    for(let i = 1; i < linhas.length; i++) {
        
        const coordenada = linhas[i].split(' ') // quebra cada par de pontos em 2 dados (x, y)
        coordenadas.push({
        x: Number(coordenada[0]),
        y: Number(coordenada[1])
        }) // adiciona cada parte gerada pelo split como valor de uma propriedade de um objeto 
        
    }
    
    let maiorDistancia = 0;
    for(let i = 0; i < coordenadas.length; i++) {
        for(let j = 0; j < coordenadas.length; j++) {
            if(i !== j) {
                const distancia = Math.sqrt(Math.pow(coordenadas[j].x - coordenadas[i].x, 2) + Math.pow(coordenadas[j].y - coordenadas[i].y, 2))
                
                if(distancia > maiorDistancia) {
                    maiorDistancia = distancia
                }
            }
        }
    }
    
    console.log(maiorDistancia)
        
} 

processData('3\n0 0\n0 3\n4 0\n')