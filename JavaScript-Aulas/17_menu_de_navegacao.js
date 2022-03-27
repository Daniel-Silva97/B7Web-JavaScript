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
    
    <aside>
        <div id="menu-opener" onclick="menuToggle()">
            <img src="menu.png" alt="Botão do menu">
        </div>
        <div id="menu-area" style="width: 0px;">
            <ul>
                <li>Nome</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </div>
    </aside>


    <script src="script.js"></script>
</body>
</html>

--Termina aqui

-- Arquivo CSS

body {
    background:#EEE;
}
aside {
    position:fixed;
    top:0;
    right:0;
    z-index:999;
    display:flex;
}
#menu-opener {
    width:40px;
    height:40px;
    cursor:pointer;
    margin-top:10px;
    margin-right:10px;
}
#menu-area {
    width:0px;
    height:100vh;
    background:#ccc;
    overflow-x:hidden;
    overflow-y:auto;
    transition: all ease .5s;
}
#menu-area ul, #menu-area li {
    padding:0;
    list-style:none;
}
#menu-area li {
    display:block;
    padding:10px;
    color:#555;
    cursor:pointer;
}
#menu-area li:hover {
    background:#DDD;
}

.menu-opened{
    width: 200px !important;
}

--Termina aqui

*/





// Metodo 1

/*if(document.getElementById('menu-area').style.width == '0px' ){
        function menuToggle() {
        document.getElementById('menu-area').style.width = '200px';
        document.getElementById('menu-area').style.behavior = 'smooth'
    }else{
        document.getElementById('menu-area').style.width = '0px';
        document.getElementById('menu-area').style.behavior = 'smooth'
    }
}
*/

//Metodo 2

//function menuToggle(){
//    let menuArea = document.getElementById('menu-area');
//    if(menuArea.style.width == '0px'){
//        menuArea.style.width = '200px'
//    }else {
//        menuArea.style.width = '0px'
//    }
//}

//Método 3
function menuToggle() {
    let menuArea = document.getElementById('menu-area');
    if(menuArea.classList.contains('menu-opened') == true){
        menuArea.classList.remove('menu-opened');
    } else{
        menuArea.classList.add('menu-opened');
    }
}