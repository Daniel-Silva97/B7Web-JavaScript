/* Manipulando Datas */

let d = new Date();

console.log(d)

console.log(d.toUTCString()) //Converte para o horário Europeu (Meridiano de Greenwich)

console.log(d.toString())


//Criando uma  data pela classe Date()

let dataCriada = new Date(2020, 0, 1, 12, 30, 32)

/*
Parâmetros

Ano 
Mês - de 0 a 11 sendo: Janeiro = 0, Fevereiro = 1 ....
Dia
Hora
Minuto
Segundos
*/

console.log(dataCriada)

//Podemos criar também dessa forma
let dataExemplo = new Date('2020-01-01 15:43:33')
console.log(dataExemplo)

let soAno = d.getFullYear(); //Pega só o ano da data
console.log(soAno)


let soMes = d.getMonth() //Pega o mês (de 0 a 11)
console.log(soMes)

let soDia = d.getDay() //pega o dia da semana (0 a 6) sendo: Domingo = 0, Segunda = 1...
console.log(soDia) 

let soDiaCerto = d.getDate() // Este mostra o dia esperado, por exemplo 07/07/2020, retorna 07
console.log(soDiaCerto)


let soHora = d.getHours() //Retorna só HH (hora)
console.log(soHora)


let soMinutos = d.getMinutes(); //Retorna só minuto
console.log(soMinutos)

let soSegundos = d.getSeconds()// pega o segundo do exato momento em que o usuario acesso a variável
console.log(soSegundos)

let soMilisegundos = d.getMilliseconds() // Mesma lógica de segundos só que em milissegundos
console.log(soMilisegundos)

let timeStamp = d.getTime(); //Pega quantos milisegundos a data atual tem desde 1970 (Marco 0)
console.log(timeStamp)

Date.now()  //Pega o timestamp atual e mostra no console sem precisar armazenar em variaveis ou memoria


let novoAno = d.setFullYear(2027) // aqui estamos definindo um novo Ano para variavel

let novoMes = d.setMonth(5) //Seta novo mes (de 0 a 11)

let novoDia = (d.getDate() + 5) //Pega o dia atual e soma 5

let novaHora = ( d.setHours() + 10)//Pega a hora atual e soma 10

let novoMinuto = (d.setMinutes() + 10)//Pega o minuto atual e soma 10

let novoSegundo = (d.setSeconds() + 90) // Pega o segundo atual e soma 90





 





