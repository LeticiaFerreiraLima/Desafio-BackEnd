const jogadores = [
	{
	  "nome": "Herman",
	  "jogada": 0
	},
	{
	  "nome": "Rhodes",
	  "jogada": 0
	},
	{
	  "nome": "Beach",
	  "jogada": 0
	},
	{
	  "nome": "Laurel",
	  "jogada": 0
	},
	{
	  "nome": "Beatrice",
	  "jogada": 0
	},
	{
	  "nome": "Alison",
	  "jogada": 0
	},
	{
	  "nome": "Saundra",
	  "jogada": 0
	},
	{
	  "nome": "Klein",
	  "jogada": 0
	}
  ]

function solucao(jogadores) {
	let vencedor = 'NINGUEM'
	// percorrer o array de jogadores
	for(i = 0; i < jogadores.length; i++) {
		
		//Para cada jogada, filtrar o numero de jogadas que seja igual a jogada na posicao i. O metodo retorna um array com as jogadas que sao iguais

		// const jogadaAtual = jogadores[i].jogada;
		const numeroJogadas = jogadores.filter
		((jogador) => jogador.jogada === jogadores[i].jogada)

		// se o tamanho do array for 1, o vencedor recebe o nome do jogador daquela jogada
		if(numeroJogadas.length === 1) {
			vencedor = jogadores[i].nome
		}
	} 
	console.log(vencedor)
}


solucao(jogadores)