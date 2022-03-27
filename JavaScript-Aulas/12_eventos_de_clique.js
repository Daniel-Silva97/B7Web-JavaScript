
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

    <h1 id="titulo" onmouseover="console.log('Passou o mouse!')" onmouseout="console.log('Tirou o mouse!')" onclick="console.log('Clicou!')">Seja bem-vindo</h1> <!-- Quando eu passar o mouse sobre ele me mostrará no console com o evento onmouseover, quando tirei com o onmouseout e quando cliquei com o onclick -->

    <input id="campo" type="text" name="usuario" value="Nome do usuário" /> <!--Campo para inserir texto -->

    <button onclick="clickedOnButton()">Primeiro botão</button> <!-- Usando onclick para chamar uma função no JS -->

    <button onclick="document.getElementById('titulo').innerHTML = 'Você clicou no segundo botão'">Segundo botão</button> <!-- Usando onclick para rodar um comando JS dentro do HTML -->


    <script src="script.js"></script>
</body>
</html>

-- Termina aqui

*/


//Função para alterar texto do H1 quando clicarmos no botão
function clickedOnButton(){
    document.getElementById("titulo").innerHTML = "Você clicou no botão!"
}