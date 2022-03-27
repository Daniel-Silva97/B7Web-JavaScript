let lista = [45, 4, 9, 16, 25]

let lista2 = []


lista2 = lista.map(function(item){
    return item * 2
}) //map ele passa item a item dentro do array executando a função que eu passar como parâmetro

console.log(lista2)


lista.filter(function(item){
    if(item < 20){
        return true;
    }
    else{ 
        return false;
    }
}    
) //Roda uma função que retorna true / false, criar a função e uma condição para que o filter retorne de acordo com essa condicional se deve ou não aproveitar a posição do Array que ele passar. se aproveitado retorna o valor da posição.

lista.every(function(item){
    if(item > 20){
        return true;
    } else{
        return false
    }
}) //Neste caso, semelhante ao filter porém a função irá retornar somente true ou false para o usuário, true só retornará quando TODAS as posições do Array atendem a condicional criada, caso contrário, FALSE.

lista.some(function(item){
    if(item > 20){
        return true;
    } else{
        return false
    }
})// Nesta função, se ALGUM item corresponder a condicional criada, retornará TRUE, somente FALSE quando nenhum corresponder.

lista.find(function(item){
    return (item == 16) ? true : false
})
//Nessa opção o primeiro item que satisfizer a função será o retorno exibido ao usuário, posso ter o Index que o item está usando:

lista.findIndex(function(item){
    return (item == 16) ? true : false
})





