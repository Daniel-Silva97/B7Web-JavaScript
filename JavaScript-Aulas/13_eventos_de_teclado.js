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

    <input id="campo" type="text" name="usuario" value="Nome do usuário" onkeyup="console.log('Você digitou!')" onkeydown="console.log('Digitando!')"/> <!--Campo para inserir texto -->

    <input id="campo2" type="text" name="confimarusuario" value="Confirme seu usuário" onkeyup="digitouUsuario(event)"> <!-- Chamando função para quando usuário teclar ENTER, efetuar algumas ações -->
 
    <script src="script.js"></script>
</body>
</html>

-- Termina aqui
*/


function digitouUsuario(e){
    if(e.keyCode == 13 && e.ctrlKey == true ){ //Quando teclar CTRL + ENTER
        alert("Você teclou CTRL + ENTER!") // Emite um alerta
        let texto = document.getElementById('campo2').value; // Armazena o valor que o usuário digitou na variável
        console.log(texto); // Mostra o valor no console
    }

}

/*
Para visualizar os eventos de teclado ocorrendo e as propriedades do objeto que ele gera, use o comando dentro da tag que deseja monitorar no HTML:

onkeyup="console.log(event)"

Quando o usuário soltar a tecla, apresentará qual tecla foi apertada e todas a propiedades do evento em um objeto, podemos usar isso para executar ações quando cliente aperta uma tecla específica, por exemplo:

Quando usuário teclar ENTER ou CTRL + ENTER teremos que olhar no objeto as propriedades:

keyCode: Código da tecla, SEMPRE será o mesmo código para as teclas em qualquer situação, por exemplo, a tecla ENTER é 13.
ctrlKey: true / false para sabermos se a tecla CTRL estava pressionada
altKey: true / false para sabermos se a tecla ALT estava pressionada
shiftKey: true / false para sabermos se o SHIFT estava pressionado.
*/

