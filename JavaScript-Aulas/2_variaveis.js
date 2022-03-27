/*
Conceito de Variáveis
*/

//Criando uma variável

var idade = 90;
//sintaxe: var nome_variavel = valor_variavel

var nome = "Daniel"

alert(`Meu nome é ${nome} e tenho ${idade} anos.`) //Mostrando na tela


//Fazendo calculos
var x = 10;
var y = 15;
var total = x + y;

alert(total)

//Juntando nomes

var sobrenome = "Silva" //String
var nomeCompleto = nome + " " + sobrenome //Cpncatenando Strings

alert(nomeCompleto)


//Outros modos de como criar váriáveis
var nome_variavel_var 
/*
Quando criamos com var, ocorre o hoisting, que permite com que a gente use essa variável
em qualquer escopo do nosso código, sendo ruim em casos que por exemplo queremos criar uma variavel com mesmo nome 
mas teremos problemas pelo fato de a var criada em um escopo diferente, poder ser lida dentro da função
*/

let nome_variavel_let
/*
Com let, diferente de var, ela ficará disponível somente no escopo onde foi criada, não podendo ser utilizada por exemplo dentro de 
uma função, na qual gera um novo escopo onde ela não pode ser utilizada.
 */
const nome_variavel_const

/*
Assim como let, não pode ser usada fora do seu escopo, mas também não pode ser manipulada, assim que definida um valor
essa variável não pode ser alterada.
Exceção: Arrays e Objetos
*/

//Não usar var, e sim let e const.