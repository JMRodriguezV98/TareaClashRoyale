let img = document.getElementById('imag');
let info = document.getElementById('information');
let regresar = document.querySelector('#regresar');
let personaje = JSON.parse(localStorage.getItem('personaje'));
img.src = personaje.ubicacion;
info.innerHTML = personaje.descripcion;
regresar.addEventListener('click', () => {
    localStorage.removeItem('personaje');
    location.href = "/index.html";
})

