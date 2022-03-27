
/*
-- Arquivo HTML

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de JavaScript</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <h1 id="titulo">Seja bem-vindo</h1>
    
    <!-- Botões para alterar a classe do h1 -->
    <button onclick="changeBlue()">Azul</button>
    <button onclick="changeRed()">Vermelho</button>
    <button onclick="changeGreen()">Verde</button>

    <!-- DIV com o telefone -->
    <div id='telefone'>(11) 9 6382-6283</div>
    <!-- Botão para mostrar o telefone e esconder o botão -->
    <button onclick="showPhone(this)">Mostrar telefone</button>
    <!-- Enviei o "this" como parâmetro para identificarmos esse elemento e usar para ocultar o botão na função JS -->
    <script src="script.js"></script>
</body>
</html>

-- Termina aqui

-- Arquivo CSS

.azul{
    background-color: #00f;
    color: #fff;
}

.vermelho{
    background-color: #FF0000;
    color: #FFF;
}

.verde{
    background-color: #00FF00;
    color: #000;
}

#telefone{
    display: none;
    background-color: #ccc;
    border: 2px solid #000;
    width: 120px;
    height: 20px;
    padding: 10px;
}

-- Termina aqui

*/



//Método 1
/*
function changeBlue(){
    document.querySelector('#titulo').className = 'azul'
}

function changeRed(){
    document.querySelector('#titulo').className = 'vermelho'
}

function changeGreen(){
    document.querySelector('#titulo').className = 'verde'
}
*/

//Método 2

function cleanClass(){ //Removendo as classes
    document.querySelector('#titulo').classList.remove('azul');
    document.querySelector('#titulo').classList.remove('vermelho');
    document.querySelector('#titulo').classList.remove('verde');
}

//Funções para incluir uma classe de acordo com o botão
function changeBlue(){
    cleanClass();
    document.querySelector('#titulo').classList.add('azul')
}

function changeRed(){
    cleanClass();
    document.querySelector('#titulo').classList.add('vermelho')
}

function changeGreen(){
    cleanClass();
    document.querySelector('#titulo').classList.add('verde')
}

//Função para mostrar o telefone
function showPhone(element){ //Recebendo o elemento lá do HTML
    element.style.display = 'none'; // Ocultando o botão
    document.querySelector('#telefone').style.display =  'block'; //Mostrando o texto
}    