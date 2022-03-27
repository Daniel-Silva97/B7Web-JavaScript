/*
Object
    * Key
    * Values
    * Entries  
*/

let lista = [ 'Arroz', 'Macarrão', 'Feijão', 'Ovo' ]

console.log( Object.keys(lista)); //Retornará os números dos indexes do array

console.log(Object.values(lista)) //Retorna todos os valores dentro do Array


console.log(Object.entries(lista)) 
/*
Ele vai retornar vários "mini-arrays" no console separando os valores dentro do array principal, ficando assim:

[
    ['index', value]
    ['index', value]
    ['index', value]
    ['index', value]
]

*/