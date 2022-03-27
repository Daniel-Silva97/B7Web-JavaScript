let info = [ 'Daniel Silva', 'Daniel', 'Silva', '@daniel'];

/*
Desconstruindo Array
*/

let [ nomeCompleto, nome, sobrenome, instagram ] = info
/*
Para desconstruir o Array, PRECISA ser na ordem em que ele foi criado, não podemos pegar o último item somente por exemplo sem passar por todos os anteriores a ele, o que podemos fazer é "pular" o index que não queremos, da seguinte forma:

let [ nomeCompleto, , ,instagram ]

Separo por virgula mas não coloco nome a variavel.
*/

console.log(nomeCompleto,instagram)


//Podemos desconstruir já na criação do Array

let [teste1, teste2] = ['Testando...', 'Deu Certo!']

console.log(teste1, teste2)

//Usando desconstrução com função

function criar() {
    let a = [1,2,3,4]
    return a
}

//desconstruindo ...

let [ a,b,c,d ] = criar()

console.log(a,b,c,d)