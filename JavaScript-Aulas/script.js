/*
Thumbnail com JS
*/

function mostrar(){
    let imagem = document.getElementById("imagem").files[0]; //Pegando a imagem que importei através do input no HTMl

    let img = document.createElement('img'); // Criando o uma variável com o Elemento img para inserir no html posteriormente
    img.src = URL.createObjectURL(imagem)// alterando o elemento src do img criando um link do arquiuvo que importei usando o createObjectURL

    document.getElementById("area").appendChild (img); //Input do resultado da variável img dentro da div para mostrar a imagem para o usuário.
}


/*
Arquivo HTML

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

    <input type="file" id='imagem'/>

    <button onclick="mostrar()">Mostrar</button>

    <div id="area"></div>

    

    <script src="script.js"></script>
</body>
</html>


FIM
 */


/*
Thumbnail com FileReader
*/

function mostrar2() {
    let reader = new FileReader();//Criando o FileReader
    let imagem = document.getElementById('imagem').files[0];//Capturando a imagem

    reader.onloadend = function (){ //Criando um callback para o reader.readAsDataURL
        let img = document.createElement('img');//Cria o elemento img
        img.src = reader.result; //Resultado do reader vem através deste reader.result (Trará a imagem para gente)
        img.width = 200; //Alterando o tamanho

        document.getElementById('area').appendChild(img); //Jogando na div para exibir em tela
}    
    reader.readAsDataURL(imagem); //Extraindo a img do objeto.


}


/*
Arquivo HTML


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

    <input type="file" accept="image/" id='imagem'/>

    <button onclick="mostrar2()">Mostrar</button>

    <div id="area"></div>

    

    <script src="script.js"></script>
</body>
</html>


FIM

*/