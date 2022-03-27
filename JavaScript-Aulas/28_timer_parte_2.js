/*
Criando Timer usando setTimeout

Seta um tempo especifico, ele espera esse tempo, roda a função e para ela após a execução.
*/


//setTimeout(function() {
//    alert("Rodou a Função!")
//}, 2000)

//No exemplo acima executei o setTimeout, no primeiro parâmetro informamos o que queremos que ele rode, e no segundo depois de quanto tempo, vou carregar a tela e após 2 segundos ele emite o alerta.

let timer

function rodar(){ 

    timer =  setTimeout(function() {
        document.querySelector('.demo').innerHTML = 'Preeche o Bloco!'

        }, 3000)
}

function parar(){

    clearTimeout(timer);

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

    <h1 id="titulo">Seja bem-vindo</h1>

    <button onclick="rodar()">Começar</button>
    <button onclick="parar()">Parar</button>

    <div class="demo">

    </div>

    <script src="script.js"></script>
</body>
</html>



*/