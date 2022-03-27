/*
Conceito DOM (Document Object Model)

Basicamente o DOM é a referência de cada elemento/estrutura presente na página HTML, no qual podemos manipular toda a página.

*/

//Selecionando com QuerySelector
document.querySelector('button').innerHTML = 'Inscreva-se'
/*
Este comando substitui tudo o que vimos na aula anterior, com ele podemos selecionar elementos por classe, id, tagName e por Name usando o formato semelhante ao CSS, por exemplo

'#ID'
'.CLASSE'
'Elemento'

O retorno dele sempre será o primeiro elemento do Array quando houver mais de um, para trazer todos, modificar o comando para:

document.querySelectorAll('')

*/

//Exemplo alterando uma posição de um array
document.querySelectorAll('.conteudo')[1].innerHTML = "Bebidas"