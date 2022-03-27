/*
Intervalos ou Timers

Código que roda de acordo com intervalo pré-definido

*/

function showTime() {
    let d = new Date()

    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()

    let txt = h + ':' + m + ':' + s

    document.querySelector('.demo').innerHTML = txt
}



let timer


function comecar(){
    timer = setInterval(showTime, 1000) //Aqui estou criando o Timer para executar a função acima a cada 1 segundo, informei 1000 pois está em milissegundos na função. obs: não colocar parenteses no parâmetro, somente o nome da função.
}

function parar(){
   clearInterval(timer) //Limpa o intervalo parando de executar
}