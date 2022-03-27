/*
Formas de mostrar (OUTPUT)
*/

// 4 Principais formas de mostrar ao usuário final


// 2 São através do Documento

//Utiizando ID, por exemplo

document.getElementById("titulo").innerHTML = "Opa, tudo bem?" //Nome do ID titulo vinculado a tag h1 do index.html

//Através do document.write
document.write("Algum texto") 
/*
Ele cria o elemento e joga na tela, quando vinculado ao html ele inclui o texto abaixo dos outros elementos, mas se usado direto no console do navegador substitui toda a página pelo texto incluido no comando 
*/

//2 são através da Janela

//Comando window

window.alert("Mensagem de exemplo!") // A janela do navegador irá mostrar o alerta em uma caixa para usuário final interagir.

//Comando alert
alert("Mensagem de teste alert") //Mesma função do comando anterior.


//Uma outra forma é usando o console, por exemplo:

console.log("Esta mensagem aparecerá no console!") //Mostrará a mensagem somente no console.( Para devs )
