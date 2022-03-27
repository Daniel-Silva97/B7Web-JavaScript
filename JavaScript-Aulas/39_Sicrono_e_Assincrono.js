/*
Código Síncrono e Código Assíncrono

Código Síncrono

Executa linha a linha, ou seja, só passará para a próxima linha quando a linha atual execute com sucesso, por exemplo:
*/

let nome = 'Daniel'
let sobrenome = 'Silva'
let completo = nome + ' ' + sobrenome
//A variável completo NUNCA poderá ser executada antes das linhas anteriores.


//Código Assíncrono
let nome = 'Daniel' //Executo, terminou? próxima
let sobrenome = 'Silva' //Executo, terminou? próxima
let temperatura = Maquininha.pegarTemperatura() //ASSINCRONA - Executa, terminou? Não, passa para próxima e quando pegarmos o resultado voltamos aqui
let completo = nome + ' ' + sobrenome

/*
Código assincrono

Roda em segundo plano e não impede o programa de executar as próximas linhas, quando chamamos uma função, por exemplo, ele executa a função mas não pausa aplicação até que a função termine a execução, ele roda os comandos seguintes e quando a função termina, ele exibe o resultado. 
*/