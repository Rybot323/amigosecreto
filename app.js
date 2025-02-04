// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables

let listaDeAmigos = [];
let cantidaDeAmigosEnLista = 0;

valoresiniciales();

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    //validamos si el nombre esta en blanco, para poden agregarlo a la lista
    if( nombreAmigo == '' ){
        alert('No puedes ingresar un nombre en blanco');
    } else {
        document.getElementById('resultado').innerHTML = ''
        // agregamos el nombre a la lista de amigos
        listaDeAmigos.push(nombreAmigo);
        // agregamos el nombre a la lista en html
        var ul = document.getElementById('listaAmigos');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(nombreAmigo));
        ul.appendChild(li)
        // incrementamos la cantidad de amigos en la lista
        cantidaDeAmigosEnLista ++;
        // inicializamos el campo para el siguiente nombre
        document.getElementById('amigo').value = '';
    }
}

function sortearAmigo() {

    if ( cantidaDeAmigosEnLista == 0 ){
        alert('No hay amigos en la lista'); 
    } else {

        // generamos un número aleatorio entre 0 y la cantidad de amigos en la lista
        let numeroAleatorio = Math.floor(Math.random() * cantidaDeAmigosEnLista);
        let amigosSorteado = listaDeAmigos[numeroAleatorio];
        
        // inicializamos los valores
        valoresiniciales();

        // mostramos el nombre del amigo sorteado
        var ul = document.getElementById("resultado");
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(amigosSorteado));
        ul.appendChild(li)
    }
}

function valoresiniciales(){
    listaDeAmigos = [];
    cantidaDeAmigosEnLista = 0;
    document.getElementById('listaAmigos').innerHTML = '';
}