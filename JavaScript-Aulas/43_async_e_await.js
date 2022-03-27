/*
Async e Await
*/

async function loadPosts(){ // só de colocar o async aqui, não mudará nada, o que realmente mudará a função será o await.

    document.getElementById('posts').innerHTML = 'Carregando...'

   

    let req = await fetch('https://jsonplaceholder.typicode.com/posts') ; //Aqui não rodará em segundo plano mais, o programa esperará até que o comando seja executado, assim como o comando abaixo.

    let json = await req.json();

    montarBlog(json)

}


function montarBlog(lista){
    let html = ''; 
    for(let i in lista){ 
        html += '<h3>'+lista[i].title+'</h3>'
        html += lista[i].body + '<br/>'
        html += '<hr/>'
    }
   
    document.getElementById('posts').innerHTML = html 
}
