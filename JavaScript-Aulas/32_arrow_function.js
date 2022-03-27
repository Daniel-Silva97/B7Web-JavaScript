/* Arrow functions */

//Metodos de criar função
//Método 1

//function somar(x,y){
//
//    return x + y;
//}

//Método 2
//let somar = function(x,y){
//    return x + y;
//}

//Método 3 - Arrow function

//let somar = (x,y) => {
//    return x + y;
//}

//OU

let somar = (x,y) => x + y 
 
//Quando temos somente uma ação que é o return 'resultado' não precisamos das chaves {} para informar a expressão, subentende-se que há o return ali.

console.log(somar(10,5))

//Outra opção de Arrow function

let letrasNome = nome => nome.length

//Quando tenho um parâmetro na função o parênteses é opcional, o nome ali por exemplo, é o parâmetro da minha função informado sem parênteses.


/*
Em arrow functions não temos o objeto this.

se precisar do objeto this, usar método 1 e 2.
*/
