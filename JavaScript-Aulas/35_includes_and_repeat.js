/*
Includes e Repeat
*/

//Include
/*
Retorna TRUE / FALSE.

No includes, conseguimos verificar se dentro de um array existe o valor que informarmos como parâmetro, por exemplo:
*/
let lista = ['ovo', 'café', 'arroz', 'feijão', 'macarrão']; 

console.log(lista.includes('ovo')) //Usando a função includes para checar se dentro deste array existe a palavra 'ovo', neste caso existe, logo irá retornar TRUE

console.log(lista.includes('carne')) //Um exemplo de quando não há o dado no Array e ele retorna FALSE.

//Includes em STRINGS


let nome = 'Daniel'

console.log(nome.includes('o')) //Quero saber se na variável nome existe a letra 'o', retornará FALSE

console.log(nome.includes('a')) //Retornará TRUE 

/*
Includes é case sensitive, diferencia maiúscula de minúscula 
*/


//REPEAT
/*
Pode ser utilizado para repetir o dado de uma string quantas vezes for necessário, por exemplo:
*/

console.log('D'.repeat(20)) //Repetindo a letra D 20 vezes

//Usando com variável

console.log(nome.repeat(5))