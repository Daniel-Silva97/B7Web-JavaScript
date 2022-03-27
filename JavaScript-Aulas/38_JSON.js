/*
Requisições
 */


/*
O que são requisições?

    Toda vez que chamamos uma informação externa podemos tratar como requisição.

*/


//O que é JSON - JavaScript Object Notation

/*
JSON é o objeto com nomes e valor que utilizamos como padrão para enviar e receber informações num padrão para todos os sistemas.
*/



/*
JSON.parse

JSON efetivo não tem aspas no nome da propriedade, JSON string que possuirá apenas.
*/

/*
Para converter o JSON String em JSON usamos a função JSON.parse(), que fará a conversão, por exemplo:
*/

let pessoa = JSON.parse('{"nome":"Daniel", "idade":24}') //Fazendo o parse de String para JSON

console.log(pessoa)


/*
JSON.stringify

Inverso da função JSON.parse, logo transforma JSON em JSON String, por exemplo:
*/

let pessoa2 = {nome:'Daniel', idade: 24}

let pessoaString = JSON.stringify(pessoa2)

console.log(pessoa2)
console.log(pessoaString)


/*
Em um exemplo real, a pesquisa no Google por exemplo, vamos buscar por "Daniel" por exemplo:
*/
let busca = {input:'Daniel'} //Criando JSON com info digitada pelo usuário

//Antes de envia a busca temos que converter a requisição para String
JSON.stringify(busca)

let resultado =JSON.stringify({
    Lista:[
        'Daniel Silva',
        'Daniel',
        'Daniel Cantor'
    ]
 })
 //Google irá retornar o resultado acima em String


 //Após guardarmos a String na variável como fizemos

 //Convertemos para JSON para ler os dados.

 let resultadoJSON = JSON.parse(resultado) 

 console.log(resultado)
 console.log(resultadoJSON)
