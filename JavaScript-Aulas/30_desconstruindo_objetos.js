
let pessoa = {
    nome: 'Daniel',
    sobrenome: 'Silva',
    idade: 90,
    social:{
        facebook: 'Daniel Silva',
        instagram: {
            url: '@daniel',
            seguidores: 194,
        }
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

/*
Desconstruindo Objetos
*/

//Desconstruindo no formato antigo
//let nome = pessoa.nome
//let sobrenome = pessoa.sobrenome
//let idade = pessoa.idade

//Desconstruindo no método novo
let { nome, sobrenome, idade } = pessoa

/*
Neste novo formato consegui reduzir o que antes fazia em 3 linhas em somente uma.

Explicando o formato

let { nome, sobrenome, idade } = pessoa
        ↓       ↓         ↓         ↓
      Propriedades do Objeto      Objeto


      Neste formato ele usa os nomes das propriedades para declarar a variável, logo teremos as variaveis nome, sobrenome e idade.
      Caso eu não queira usar o nome da propriedade como nome da variável podemos definir isso também, da seguinte forma:

let { nome:nomePessoa } = pessoa
       ↓        ↓          
  Propriedade:Nome Variável


  Vamos ver no console:
*/

console.log(nome, sobrenome, idade)


//Pegando objetos dentro de objetos

 let { facebook } = pessoa.social;

// OU

// let { social: { facebook } } = pessoa

console.log(facebook)

//Agora vamos pegar a url do objeto Instagram e mudar o nome da variável de url para instagram

let { url:instagram } = pessoa.social.instagram

//OU

// let { social: { instagram: { url:instagram } } } = pessoa

console.log(instagram)


//Usando em uma função

//Metódos antigos

function nomeCompleto(obj) {
    return `${obj.nome} ${obj.sobrenome}`
}

function nomeCompleto2(obj) {
    let nome = obj.nome
    let sobrenome = obj.sobrenome
    return `${obj.nome} ${obj.sobrenome}`
}

//Metodo novo

function nomeCompleto3( { nome, sobrenome } ) {
    return `${nome} ${sobrenome}`
}

//Mostrando no console

console.log(nomeCompleto(pessoa))
console.log(nomeCompleto2(pessoa))
console.log(nomeCompleto3(pessoa))