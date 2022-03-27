/*
String padStart e padEnd
*/

// padEnd

let telefone = '5'

console.log(telefone.padEnd(9, '*'))

/*
padEnd nos diz que a string deve ter no mínimo x caractares caso não tenha ele complementará com o valor passado na função
    
    telefone.padEnd(9 ,        '*')
        ↓           ↓           ↓
      Variável  Valor Min.      Se não tiver substituirá por


      Preenche sempre para direita da String
*/


//padStart

/*
MESMA coisa do padEnd, porém sempre preencherá a ESQUERDA do item.
*/



//Utilidade prática

let cartão = '1234567812345678'

let numeroFinal = cartão.slice(-4)

let cartaoMascarado = numeroFinal.padStart(16, '*')

console.log('Este é o seu cartão? ' + cartaoMascarado)


