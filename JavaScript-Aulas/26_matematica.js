//Classe Math

let novoValor = 0


console.log( Math.PI ) //Traz o PI em Matemática


//Arredonda o número pra cima ou pra baixo dependendo do valor passado na função
console.log( Math.round(6.76) ) //Arredonda para cima

console.log( Math.round(6.35)) //Arredonda pra baixo

//Forçar arredondamento para baixo

console.log(Math.floor(6.77)) 

//Forçar arredondamento para cima

console.log(Math.ceil(3.33))


//Saber número absoluto de algo
console.log(Math.abs(-9.93932)) //Número positivo

//Mínimo e Máximo

//Informa vários números para a função retornar o menor.
console.log(Math.min(7,10,3,56,94,53,22)) 

//Informar vários números para função retornar o maior.
console.log(Math.max(5,33,56,98,33,44))

//Função Random, retorna um número aleatório entre 0 e 1.
console.log(Math.random())

//Combinando Random com mais uma função, que permite que meu random fique em um intervalo maior

console.log( Math.floor(Math.random() * 100)) //Vai gerar um número aleatório entre 0 e 100 e arredondar pra baixo sempre.



