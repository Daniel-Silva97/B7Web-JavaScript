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


    <input type="text" name="numeroSemana" id="entradaDia" value="Digite um número" onclick="limpar()" onkeyup="dia = event.key" />
    <!-- 
        ao clicar limpa o campo com onclick chamando a função limpar
        ao digitar armazena a tecla em uma variavel
    -->
    <button id="verify" onclick="showDay(dia)">Verificar</button>
    <!-- Converte para dia da semana usando switch dentro da função -->
    <div id="dia"></div>
    <script src="script.js"></script>
</body>
</html>

-- Termina aqui
*/


function limpar(){
    document.getElementById('entradaDia').value = "";
}


function showDay(){
 
    switch(dia){

    case "1":
        diaNome = 'Segunda-Feira';
        break;
    case "2":
        diaNome = 'Terça-Feira';
        break;
    case "3":
        diaNome = 'Quarta-Feira';
        break;
    case "4":
        diaNome ='Quinta-feira';
        break;
    case "5":
        diaNome ='Sexta-Feira';
        break;
    case "6":
        diaNome ='Sabado';
        break;
    case "7":
        diaNome ='Domingo';
        break;

        default:
        diaNome = 'Valor inválido';
        break;

}
    if(dia == '1' || dia <= '7' ){
        document.getElementById('dia').innerHTML ='Hoje é ' + diaNome
    }else{
        document.getElementById('dia').innerHTML = diaNome
    }

    }
