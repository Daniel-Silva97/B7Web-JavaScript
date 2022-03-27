/*
AULA MANIPULANDO ATRIBUTOS

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
    
    <img src="tigre.jfif" data-tipo ="Tigre" alt="Foto do tigre" class="imagem"></br>

    <button onclick="trocarImagem('tigre.jfif', 'Tigre')">Tigre</button>
    <button onclick="trocarImagem('praia.jpg', 'Praia')">Praia</button>

    <button onclick="qualFoto()">Qual é a foto?</button>


    <script src="script.js"></script>
</body>
</html>

--Termina aqui



-- Arquivo CSS
.imagem {
    height: 400px;
}

-- Termina aqui

*/








function trocarImagem(filename, pictureType){
    document.querySelector('.imagem').setAttribute('src', filename) //Selecionando a imagem pela classe e trocando o nome do arquivo com setAttribute
    document.querySelector('.imagem').setAttribute('data-tipo', pictureType) //Selecionando a imagem pela classe e alterando o atributo data-tipo
}

function qualFoto(){
    let foto = document.querySelector('.imagem').getAttribute('data-tipo') //Pegando o valor do Atributo data-tipo e jogando em uma variável
    alert("A foto é: "+foto) //Mostrando o resultado na tela
}