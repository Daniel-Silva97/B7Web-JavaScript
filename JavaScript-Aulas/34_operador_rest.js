/*
Operador REST
*/

function adicionar(...numeros){
    console.log(numeros);
}

adicionar(1,2,3,4,5,6,7,8);

/*
O operador REST vai aplicar o seguinte FLUXO:

No caso da função acima, informei somente um parâmetro 'numeros', porém quando chamei a função informei vários números para um único parâmetro, sem o operador REST, a função usaria somente o primeiro valor e ignoraria o resto, mas com o operador REST (...) ela cria um array com todos os valores informados.
*/