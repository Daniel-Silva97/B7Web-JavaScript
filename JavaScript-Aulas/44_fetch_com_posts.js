async function inserirPost() {

    document.getElementById('posts').innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Título de testes',
            body: 'Corpo de testes',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let json = await req.json();

    console.log(json)

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

    <button onclick="inserirPost()">Inserir Post</button> <!-- Função POST da API -->

    <div id="posts">
        

    </div>
    

    <script src="script.js"></script>
</body>
</html>

*/