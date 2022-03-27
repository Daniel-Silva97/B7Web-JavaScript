let nome = 'Daniel da Silva Pedro'


let resultado = nome.length // Conta quantos caracteres tem nessa variável
console.log(resultado)


console.log(nome.indexOf('Silva')) //Traz o número da posição em que começa a string informada no parâmetro.

console.log(nome.slice(0,10)) //Retorna o valor de acordo com posição inicial e final informada nos parâmetros, no exemplo aqui irá pegar as 10 primeiras posições. segundo parâmetro não é obrigatório
//Com slice podemos usar números negativos, ele irá começar de trás pra frente, por exemplo:
console.log(nome.slice(-5))


console.log(nome.substring(0,10)) // Mesma função do slice, porém não permite usar números negativos



console.log(nome.substr(7,9)) // Ele tem uma diferença dos outros dois, o segundo parâmetro não é mais a posição final, mas sim a quantidade de caracteres que você quer pegar após a posição incial, no exemplo acima, vou pegar a partir da posição 7 e quero que me traga mais 9 caracteres a frente dessa string, funciona com negativos.




console.log(nome.replace('da Silva', 'dos Santos')) //Parâmetro 1 o que quero subsitituir e parametro 2 o que quero por no lugar


console.log(nome.toUpperCase(nome)) //Deixa tudo maiúsculo

console.log(nome.toLowerCase(nome)) //Deixa tudo minúsculo



console.log(nome.concat(' de 24 anos'))// concatena com a variavel, inútil, tem outros métodos melhores


console.log('                       DANIEL                '.trim()) //Remove os espaços vazios do começo e do fim da string

console.log(nome.charAt(3)) // Me mostra qual caractere está na posição informada

//Outra forma de charAt
console.log(nome[2]) // Quando for string pega o caractere da posição dois

console.log(nome.split(' '))// quando encontrar o parâmetro informado na string ele usa ele como base para separar os valores dentro do Array.


