//Array
let amigos = [];

//Funciones
function agregarAmigo() {
    const input = document.getElementById('amigo');
    //Elimina espacios innecesarios
    const nombre = input.value.trim();

    //Validacion campo vacio
    if (nombre === '') {
        alert('Debes ingresar el nombre de un amigo');
        return;
    }

    amigos.push(nombre);

    actualizarLista();

    //Limpia el campo
    input.value = '';
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    
    if (botonSortear.dataset.estado === "reiniciar") {
        reiniciarSorteo();
        return;
    }

    //Valida que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear, añade algunos');
        return;
    }

    //Indice
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //nombre del amigo secreto
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    //Cambia el texto del boton y actuliza su estado
    iconoSorteo.src = "assets/icono-reiniciar.png"
    botonSortear.innerHTML = "Reiniciar sorteo";
    botonSortear.dataset.estado = "reiniciar";
}

function reiniciarSorteo() {
    //Limpia el array de amigos
    amigos.length = 0;

    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    //Restaurar nombre y estado del boton 
    iconoSorteo.src = "assets/play_circle_outline.png"
    botonSortear.innerHTML = "Sortear amigo";
    botonSortear.dataset.estado = "sortear";
}

//Botones
const botonSortear = document.getElementById('sorteo');
const iconoSorteo = document.getElementById('iconoSorteo');