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

    <div class='texto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis, eius distinctio ipsam iure nesciunt ullam quia, id deserunt, explicabo eaque soluta aut. Earum nisi inventore, nihil odit vel nobis.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore corrupti pariatur nam iusto voluptatum laborum ipsam recusandae, mollitia consequatur dolores cum similique delectus velit eaque sunt provident quod quos. Incidunt.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt numquam velit nulla, consequuntur incidunt accusamus voluptatem! Cumque beatae incidunt, quia debitis cupiditate aut voluptates sapiente facere, quis saepe, eum aspernatur.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptas aliquid adipisci, explicabo quaerat nihil enim! Amet aut explicabo alias sunt modi. Atque reiciendis rerum necessitatibus quidem repellendus dolore culpa!
    </div>

    <div class='scrollbutton' onclick="subirTela()"></div>

    <script src="script.js"></script>
</body>
</html>

-- Termina aqui

-- Arquivo CSS

.texto{
    width: 200px;
    height: 1200px;
    overflow: auto;
    background-color: #ccc;
    padding: 20px;
    border: 2px solid red;
}


.scrollbutton{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: red;
    position: fixed;
    right: 10px;
    bottom: 20px;
    z-index: 999;
    cursor: pointer;
    display: none;
}

-- Termina aqui




*/






















document.querySelector('.texto').scrollTop //Identifica onde o topo da barra de rolagem está (em pixel (px)), aqui selecionei pela classe texto onde criei uma scrollbar, serve para barras verticais este comando (Cima para baixo)
document.querySelector('.texto').scrollLeft //Aqui usamos para barras horizontais (Direita para esquerda), mesma função do comando acima identificar onde o começo da barra está 


//Lembrando que os comandos acima são para barras de rolagem dentro da página, para validar a barra de rolagem principal, da janela toda o comando é:

window.scrollY //Para barras verticais
window.scrollX //Para barras horizontais

//Para mover a barra de rolagem para um ponto especifico,podemos fazer via comando:

//Selecionando uma barra dentro da página que não seja a principal

document.querySelector('.texto').scrollTo(0,0)
/*
scrollTo é uma função que podemos movimentar a barra de rolagem para onde queremos, os parametros que enviamos são x (Horizontal) e y (Vertical)
*/

//Para movimentar a barra principal, o comando é:
window.scrollTo(0,0)


/*
Função para subir a tela pro início através do botão:


Neste formato assim que clicar ele vai para a posição 0.

function subirTela(){
    window.scrollTo(0,0)
}

*/

//Função de scroll Suave

function subirTela(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

//Na função acima, ao invés da barra subir direto ao ponto zero, ela passa suavemente pela página até chegar no ponto zero. Graças ao parâmetro behavior, que smooth trabalha dessa forma.



//A função abaixo valida se a barra de rolagem está no inicio ou no final, oculta se estiver no início, e mostra se não estiver

function checkButton(){
    if(window.scrollY == 0){
        //Vamos ocultar o botão
        document.querySelector('.scrollbutton').style.display = 'none'
    }
    else{
        //Mostrar o botão
        document.querySelector('.scrollbutton').style.display = 'block'
    }
}

//Criando validador que executará a função quando o usuário mexer na barra de rolagem ou um timer que faça a checagem de tempos em tempos.



// 1 - Timer que checa de tempos e tempos

//setInterval(checkButton, 1000)
//Não recomendada
// Essa função vai checar de 1 em 1 segundo se a barra de rolagem está ou não no início, executando a função checkButton.

// 2 - Evento que vai monitorar o Scroll da tela
window.addEventListener('scroll', checkButton)
//Aciona quando movimento a barra de rolagem

