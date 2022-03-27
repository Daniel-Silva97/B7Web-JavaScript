let lista = ['Ovo', 'Farinha','Corante', 'Massa'];

console.log(lista.toString()) //Converte o Array em uma String


console.log(lista.join(' ')) //Altera o que tenho no array em uma String usando o separador que eu informar no parâmetro, no exemplo acima usei espaço

console.log(lista.indexOf('Corante')) //Procura no array a posição em que existe Corante, se não achar retorna -1

console.log(lista.pop()) //Remove o último item do Array


console.log(lista.shift())//Remove o primeiro item do array

console.log(lista.push('Prato'))//Adiciona um item no Array


delete lista[1] //Remover um item do array, porém mantém a posição só que com vazio

lista.splice(1, 1) //Parâmetro1 = a partir da posição x, parametro2 - quantos itens quero remover, recomendado usar esse pra remover itens do array



let lista2= ['Prato', 'Liquidificador', 'Colher']


console.log(lista.concat(lista2) )// juntando 2 arrays

lista.sort()// coloca em ordem alfabética

lista.reverse() // tem que usar o sort primeiro depois esse para por em ordem do Z até o A

