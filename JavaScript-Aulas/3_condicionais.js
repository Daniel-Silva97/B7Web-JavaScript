/*
Condicionais
*/

//Dar Bom dia, Boa tarde e Boa noite de acordo com a hora

var hora = 30; //Criando a variável de controle

//Criando a condicional
if ( hora < 12 ){ 
    //Se for antes de meio-dia, então mostrar bom dia. 
    console.log("Bom dia!")
} else if(hora > 12 && hora <= 18){
    console.log("Boa tarde!")
}else if(hora > 18 && hora <= 24){
    console.log("Boa noite!")
}else{
    console.log("Horário inválido!")
}

