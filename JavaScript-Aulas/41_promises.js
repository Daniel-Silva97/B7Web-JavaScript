/*
Promisses

São "Promessas" de futuros retornos que poderão acontecer no código e serão tratados de acordo com o que for definido

Existem 3 possibilidades:

1 - Nenhuma alternativa acontecer
2 - Acontecer e então continuar o processo
3 - ter um erro durante a operação
*/

function pegarTemperatura(){// Criei a função para pegar a temperatura
    return new Promise(function(resolve, reject){ // e nela criei uma promessa com função resolve para quando dar certo ou reject para quando der errado.
        console.log("Pegando temperatura...");//Aqui eu criaria todas as requisições que eu precisaria para adquirir a temperatura, então passaria para o proximo passo

        setTimeout(function(){ //Aqui crio a função resolve que será retornada com a temperatura adquida na lógica acima(teoricamente)
            resolve('40 na sombra');
        }, 2000);
  });
}

//USANDO A PROMISSE
let temp = pegarTemperatura();

console.log(temp) //Aqui ele mostrará somente que é uma promisse e o status dela.

//Para usar de fato
temp.then(function(resultado){ //Criei um callback para pegar o resultado caso dê certo
    console.log("Temperatura: " + resultado)
})
.catch(function(error){ //Callback para quando deu erro!
    console.log("Deu erro!")
})