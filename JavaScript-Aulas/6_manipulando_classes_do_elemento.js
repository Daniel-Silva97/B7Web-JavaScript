/*
Manipulando classes dos elementos
*/

/*
    * Criado div com class manipulandoClasse no index.html
    * Criado botões verde, vermelho e azul para manipularmos dentro da div
    * criado estilização no CSS para usarmos quando houver a ação do click
    * Funções serão criadas no JS para efetuar todo o processo

*/

//Criando função para cada botão
function verde(){
    document.querySelector('#manipulandoClasse').classList.remove('vermelho')
    document.querySelector('#manipulandoClasse').classList.remove('azul')
    /*
        Os dois comandos acima vão remover as outras classes em casos que o usuário já tenha clicado em algum botão antes, por exemplo:

        Clico no botão azul, será incluso a classe azul ao elemento, mas agora quero substituir pelo verde.
        Sem os comandos acima, o sistema incluirá as duas classes no elemento, ficando 'azul', 'verde' ao invés de somente 'verde', com ele, o programa removerá a classe 'azul' e deixará somente a 'verde'.
        
        O mesmo serve para o vermelho.
    */
    document.querySelector('#manipulandoClasse').classList.add('verde')
    /*
        Incluindo a classe no elemento.
    */
}

function vermelho(){
    document.querySelector('#manipulandoClasse').classList.remove('verde')
    document.querySelector('#manipulandoClasse').classList.remove('azul')
    document.querySelector('#manipulandoClasse').classList.add('vermelho')
}

function azul(){
    document.querySelector('#manipulandoClasse').classList.remove('vermelho')
    document.querySelector('#manipulandoClasse').classList.remove('verde')
    document.querySelector('#manipulandoClasse').classList.add('azul')
}
//Criando funções para trocar as cores do botão
function trocar(){
    //Condicional validando se no elemento button, na 5ª posição do array contém a classe 'preto'
   if (document.querySelectorAll('button')[4].classList.contains('preto')){
       //Se sim, remover preto e adicionar 'branco'
        document.querySelectorAll('button')[4].classList.remove('preto')
        document.querySelectorAll('button')[4].classList.add('branco')
   } else{
       //Senão remover branco e incluir preto
        document.querySelectorAll('button')[4].classList.remove('branco')
        document.querySelectorAll('button')[4].classList.add('preto')
   }
}