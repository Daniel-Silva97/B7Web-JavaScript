/*
Conceito DOM (Document Object Model)

Basicamente o DOM é a referência de cada elemento/estrutura presente na página HTML, no qual podemos manipular toda a página.

*/

// 4 Principais formas de selecionar elementos

// 1 - Selecionando o Elemento através do atributo ID
document.getElementById('titulo').innerHTML = "Daniel" 
//Substituindo o conteúdo da tag com ID titulo para Daniel com innerHTML


// 2 - Selecionando através da classe
document.getElementsByClassName('conteudo')[0].innerHTML = "Item Alterado!"

/*
Sintaxe:

document.getElementsByClassName - Irá buscar pelo nome da classe dos elementos, no plural pois pode haver mais de um elemento com o mesmo nome de classe.

('') - Nome da classe vem aqui

[0] - Como a classe pode ter mais de um elemento vinculado, o retorno no console será em array, dividindo o elemento em posições, no exemplo acima selecionei o primeiro elemento do array, por isso o 0 entre colchetes.

innerHTML - Substituindo o conteúdo do HTML pelo informado no JS.
*/


// 3 - Selecionando o elemento pelo nome da tag
document.getElementsByTagName('button')
/*
Identifica todos as tags com o nome especificado acima e retorna em um ARRAY.
*/

//4 - Selecionando através do atributo name
document.getElementsByName('Telefone')

//Observar no index.html que em uma tag input, inclui o atributo "name" com o valor Telefone, quando rodo o comando acima ele me retornará um array também com todos os elementos com a tag vinculado ao name Telefone.




