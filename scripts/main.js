import { data } from "../modules/data.js";

function ponerImagen(){
    let changeImage = document.getElementById("placeImage");
    let contador = 1;
    carrusel(contador, changeImage);
    info();
}

function carrusel(contador,srcCambio){
    let next = document.querySelector("#next");
    let back = document.querySelector("#back");

    next.addEventListener('click', () => {
        if( contador != 11 ){
            contador++;
            const found = data.find( Element => Element.id == contador );
            srcCambio.src = found.ubicacion;
            nombres(contador);
            back.setAttribute('class','back');
        }else{
            next.setAttribute('class','bloqueado');
        }
    })

    back.addEventListener('click', () => {
        if( contador != 1 ){
            contador--;
            const found = data.find( Element => Element.id == contador );
            srcCambio.src = found.ubicacion;
            nombres(contador);
            next.setAttribute('class','next');
        }

        if ( contador == 1 ){
            back.setAttribute('class','bloqueado');
        }
    })
}

function nombres(contador){
    let contenedorNombre = document.querySelector("#info");
    const found = data.find(element => element.id == contador);
    contenedorNombre.innerHTML = found.nombre;
}

function info(){
    let contenedorNombre = document.querySelector("#info");

    contenedorNombre.addEventListener('click', ({ target }) => {
        let valor = target.textContent;
        let character = data.find( element => element.nombre == valor );
        localStorage.setItem('personaje', JSON.stringify(character));
        location.href = "./pages/info.html";
    })
}

ponerImagen();