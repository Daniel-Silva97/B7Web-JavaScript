const c = (e)=>document.querySelector(e);
const cs = (e)=>document.querySelectorAll(e);
//Atalhos para execução destes comandos durante a criação do projeto pizza.

let modalQT = 1
//Variável de controle para resetar o valor do campo quantidade quando usuário sair 

let cart = [] //Tudo que for adicinado ao carrinho será salvo nesse array

let modalKey = 0 //Para saber qual pizza está selecionada

//Listagem das pizzas
pizzaJson.map((item, index)=>{
        //Criando os modelos que vão apresentar as pizzas na tela
            let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true); 
    
        //Setando um atributo para sabermos em qual pizza o cliente clicou para abrir o modal
            pizzaItem.setAttribute('data-key', index) 


        //Preencer as informações em pizzaItem
            pizzaItem.querySelector('.pizza-item--img img').src = item.img //Atualizando imagem
            pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}` //Atualizando preço
            pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name //Atualizando nome
            pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description //Atualizando a descrição

    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
        //Este preventDefault remove a ação de recarregar a tela quando clicamos no botão, basicamente remove a ação padrão do elemento
            e.preventDefault(); 
               
        //ATribuindo a variavel key qual o data-key da pizza que cliquei.
            let key = e.target.closest('.pizza-item').getAttribute('data-key') 
        
        //Resetando o campo quantidade antes de abrir o Modal e carregar as informações
             modalQT = 1 
        //Aqui vamos armazenar qual pizza o cliente clicou para usar na função de adicionar ao carrinho se necessário.
             modalKey = key

            c('.pizzaInfo h1').innerHTML = pizzaJson[key].name //Alterando o nome da pizza no modal
            c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description //Descrição do modal
            c('.pizzaBig img').src = pizzaJson[key].img //Imagem do modal
            c('.pizzaInfo--actualPrice').innerHTML =`R$ ${ pizzaJson[key].price.toFixed(2)}` //Preço do modal
            c('.pizzaInfo--size.selected').classList.remove('selected') //removendo o selected do nome da classe referente aos tamanhos do modal - possivel ver no HTML


    cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
        
            if(sizeIndex == 2){
            //Adiciona o selected novamente a posição 2 do array que se refere ao botão tamanho GRANDE no HTML para sempre que abrir o modal ele venha selecionado.
                size.classList.add('selected') 
            }

            //Navega pelo JSON e distribui corretamente os pesos com base na posição do index, mostrará na tela os valores de peso da pizza selecionada nos botões de peso corretos.
                size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
    })

            c('.pizzaInfo--qt').innerHTML = modalQT


            c('.pizzaWindowArea').style.opacity = 0
            c('.pizzaWindowArea').style.display = 'flex'
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1
        }, 200) //Criando animação para apresentar um modal

})
    document.querySelector('.pizza-area').append(pizzaItem);
});

//Eventos do Modal

//Função para fechar o modal
function closeModal(){
    //Deixo a opacidade em 0
        c('.pizzaWindowArea').style.opacity = 0
    //Criou um timeout para esperar meio segundo e alterar no CSS o parâmetro display para 'none' que fechará o modal.
        setTimeout(()=>{
        c('.pizzaWindowArea').style.display ='none'
        }, 500)
}

    //Selecionando o botão 'Cancelar' do Desktop e o Botão 'Voltar' do mobile para ter a ação de fechar o modal    
        cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
            item.addEventListener('click', closeModal)
        })


//Alterar as quantidades com os botões + e -

//Botão menos
c('.pizzaInfo--qtmenos').addEventListener('click', () =>{
    if(modalQT > 1){   //Condicional para quando chegar no 1 para de diminuir
        modalQT--
        c('.pizzaInfo--qt').innerHTML = modalQT
    }
})

//Botão mais
c('.pizzaInfo--qtmais').addEventListener('click', () =>{
        modalQT++
        c('.pizzaInfo--qt').innerHTML = modalQT

})

//Selecionando o tamanho da pizza no modal
cs('.pizzaInfo--size').forEach((size, sizeIndex) => { 
            size.addEventListener('click', (e) => {
                c('.pizzaInfo--size.selected').classList.remove('selected') //Removendo a class selected antes de selecionar o que o cliente clicou
                size.classList.add('selected') //Adicionando ao botão a class selected para destaque do selecionado
            })
})

c('.pizzaInfo--addButton').addEventListener('click', () => {
    //Qual a pizza? Variável modalKey
    //Quantas pizzas? VAriável modalQT
    //Qual o tamanho?
    let size = c('.pizzaInfo--size.selected').getAttribute('data-key');
   
    let identifier =  pizzaJson[modalKey].id+'@'+size
    
    let key = cart.findIndex((item)=>{
        return item.identifier = identifier
    })

    if(key > -1){
        cart[key].qt += modalQT
    }
    else{
    //Adicionando ao Array id da pizza, tamanho e quantidade selecionada
    cart.push({
        identifier,
        id:pizzaJson[modalKey].id,
        size,
        qt: modalQT
    })
    }
    closeModal()
   
})