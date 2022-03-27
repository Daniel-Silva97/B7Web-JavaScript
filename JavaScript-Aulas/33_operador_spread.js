/*
Operador SPREAD
*/

let numeros = [1,2,3,4];

let outros = [...numeros,5,6,7,8] 
//Informando os 3 pontinhos "..." + array, o JS vai complementar este array com as informações do array anterior.

console.log(outros)


//SPREAD com OBJETOS

let info = {
    nome: 'Daniel',
    sobrenome: 'Silva',
    idade: 24
}

let novasInfo = {
    ...info, //Pega todas as propriedades do objeto anterior e complementa este.
    cidade: 'Jundiaí',
    estado:'São Paulo'
}

console.log(novasInfo)


//Usando operador SPREAD em função

function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status: 0,
        token: 'asjaslkfaslfjaslk',
        data_cadastro: '2021-05-20'
    };
    return novasInfo;
}

console.log(adicionarInfo({ nome: 'Daniel', sobrenome: 'Silva' }))