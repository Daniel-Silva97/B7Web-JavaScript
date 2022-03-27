/*
--Arquivo HTML

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


    <script src="script.js"></script>
</body>
</html>

-- Termina aqui



-- Arquivo CSS
.texto{
    width: 200px;
    height: 200px;
    overflow: auto;
    background-color: #ccc;
    padding: 20px;
    border: 2px solid red;
}
-- Termina aqui

*/






document.querySelector('.texto').offsetWidth //Largura do bloco
document.querySelector('.texto').offsetHeight //Altura do bloco

/*
Os comandos acima não levam somente em conta as propriedades Widht e Height do CSS.

Quando executamos estes comandos eles validam também:

    * Se o bloco tem a propiedade padding
    * Se o bloco tem scrollbar (Depende do navegador)
    * Se o Bloco tem borda

Contendo um ou mais desses 3, o valores designados a eles são somados ao Width e Height quando rodamos ele no console.

No exemplo acima, foi setado widht e height de 200, mas quando rodei o comando retornou que ambos tinham 240, isso porque também setei um padding de 20px, totalizando 40px nas duas pontas.

logo 200 + 40 = 240.

*/


//Pegam o conteúdo do bloco(efetivamente)

document.querySelector('.texto').clientWidth // Largura do bloco também, porém não soma a barra de Rolagem, não considera borda 
document.querySelector('.texto').clientHeight //Altura do bloco, Não considera borda




document.querySelector('.texto').scrollWidth //Pega o conteúdo real sem border. scrollbar.
document.querySelector('.texto').scrollHeight //Pega o tamanho real do conteúdo, mesmo que tenha barra de rolagem, ele irá verificar o tamanho do início do texto até o fim do texto, mesmo que tenha que rolar a barra