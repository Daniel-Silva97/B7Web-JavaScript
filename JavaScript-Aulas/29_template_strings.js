/*
Template Strings
*/

let nome = 'Daniel'
let idade = 24

let frase = 'Meu nome é ' + nome + ' e eu tenho ' + idade + ' anos.'

console.log(frase)

let fraseComTemplateStrings = `Meu nome é ${nome} e eu tenho ${idade} anos`
//uso ${} e coloco o nome da váriavel sem precisar concatenar. Obs.: usar `` (crase)
console.log(fraseComTemplateStrings)

 
