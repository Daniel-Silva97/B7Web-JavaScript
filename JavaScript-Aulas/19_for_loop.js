//FOR LOOP
//for(i = 0; i <= 50; i++ ){
//    console.log(i)
//}

//FOR LOOP ARRAY

let carros = ['Ferrari', 'Aston Martin', 'Lamborguini', 'Maverick']
let html = '<ul>'

for(let i in carros){

    html += '<li>' + carros[i] + '</li>'

}



html += '</ul>'

document.getElementById('carros').innerHTML = html