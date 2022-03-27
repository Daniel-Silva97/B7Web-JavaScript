/*
Funções
*/

 // Criando a função sem passar parâmetros

 function alterar(){
     document.getElementById('titulo').innerHTML = "Troco o título!";
     document.getElementsByClassName('conteudo')[0].innerHTML = "Trocou o conteúdo!";
 }

 //Executando a função
alterar();


//Executando uma função que precisa de parâmetros
alert("Funcionou!") //Parâmetro Funcionou! informado para função alert


//Criando função com parâmetro
function alterarComParametro(titulo){ //Parâmetro título
    document.getElementById('titulo').innerHTML = titulo; //Passando o parâmetro como conteudo a substituir o valor do HTML
    document.getElementsByClassName('conteudo')[0].innerHTML = titulo;
}

//Chamado a função passando parâmetro
alterarComParametro("Título de exemplo")

//Função que soma valores
function somar(x, y){
    let total;
    total = x + y;
    return total;
    
}


console.log(somar(10, 15));