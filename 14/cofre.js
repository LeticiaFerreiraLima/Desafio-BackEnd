function processData(senha, tentativa) {

    //!Essa parte do código tem relação com tratamento do input padrão do Hacker Rank
    // const linhas = input.trim().split('\n');
    // const senha = linhas[0];
    // const tentativa = linhas[1];

    const letrasSenha = senha.split('');
    let indexSenha = 0;

    for (let i = 0; i < tentativa.length; i++) {
        if (tentativa[i] === letrasSenha[indexSenha]) {
            indexSenha++;

        }
    }


    if (indexSenha === senha.length) {
        console.log('SIM')
    } else {
        console.log('NAO')
    }
}


processData('cubbos', 'cubos')