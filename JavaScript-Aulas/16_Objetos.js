/*
Objetos
 */

 // Criando Objetos

 let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado:  false,
    ligar: function () {
        this.ligado = true
        console.log('VRUM VRUM!')// Criando função dentro do objeto
    },
    acelerar: function () {
        if(this.ligado == true){
            console.log('tanananannananan')
        }else {
            console.log('O '+ this.nome + this.modelo + ' não está ligado!')
        }
    }
 }

 carro.ligar();
 carro.acelerar();

 //Criando objetos dentro de Array
 let carros = [
     {nome:'Ferrari', modelo:'Berlinetta'},
     {nome:'Lamborghini', modelo:'Aventador'},
     {nome:'Dodge', modelo: 'Viper'},
     {nome: 'Nissan', modelo: 'Skyline R34'}
 ]

 //Acessando o Array
 console.log(carros);

 //Acessando uma linha do array
 console.log(carros[0]);

 //Acessando uma propriedade do objeto
 console.log(carros[3].modelo)