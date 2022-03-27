/*
Callbacks

Callback é quando criamos uma função para determinada situação e criamos um  gatilho no JS dizendo:

"Quando acontecer X situação, rodar esta função aqui"

por exemplo:
*/

function alertar(){
    alert("Opa, tudo bem?")
} //Função Simples que executará um alerta na tela
setTimeout(alertar, 2000) //Chamada de callback que rodará a função após 2 segundos.

