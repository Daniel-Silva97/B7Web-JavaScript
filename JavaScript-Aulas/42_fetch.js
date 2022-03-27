/*
Fetch


*/

function loadPosts(){ //Função que vamos tratar as requisições

    document.getElementById('posts').innerHTML = 'Carregando...' //Enquanto não finalizar a requisição ele mostrará essa mensagem após o clique

   
    fetch('https://jsonplaceholder.typicode.com/posts') //Fetch para fazer a requisição, função que podemos passar dois parâmetros (URL da requisição, Dados como credenciais para autenticar com a API ), aqui neste caso só passarei a URL
    .then(function(resultado){ //Caso de certo, primeiro converto o retorno para json
        return resultado.json();
    })
    .then(function(json){ //Depois uso o JSON para apresentar na div criada lá no HTML
        document.getElementById('posts').innerHTML = json.length + ' posts'

        montarBlog(json) //Função para carregar os posts na tela
    })
    .catch(function(error){//Caso dê erro
        console.log("Deu problema!")
    })
}


function montarBlog(lista){
    let html = ''; //Crio a variável para receber minhas modificações
    for(let i in lista){ //Loop para passar por todo o array recebido
        html += '<h3>'+lista[i].title+'</h3>' //ncluido o titulo do post
        html += lista[i].body + '<br/>' //Corpo do post
        html += '<hr/>' //Linha horizontal no html
    }
   
    document.getElementById('posts').innerHTML = html //Mostrando na DIV do html
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

    <button onclick="loadPosts()">Carregar Posts</button> <!-- Aqui chamarei a função para efetuar uma requisição na API -->

    <div id="posts">
        

    </div>
    

    <script src="script.js"></script>
</body>
</html>
*/