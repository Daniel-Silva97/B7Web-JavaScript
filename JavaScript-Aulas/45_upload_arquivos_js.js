/*
Upload de arquivos com JS
*/


async function enviar(){

    let arquivo = document.getElementById("arquivo").files[0]; //Capturei o arquivo e gravei na variável

    let body = new FormData(); //Criei uma variável com uma nova classe para receber o arquivo
    body.append('title', 'Teste') //Atribui um titulo e o arquivo pra ela
    body.append('Arquivo', arquivo)

   let req = await fetch("https://www.meusite.com.br/upload", {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type':  'multipart/form-data'
        }
//fiz arequisição enviando a img para um servidor interno
    })
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

    <input type="file" id='arquivo'/>

    <button onclick="enviar()">Enviar</button>

    

    <script src="script.js"></script>
</body>
</html>
*/