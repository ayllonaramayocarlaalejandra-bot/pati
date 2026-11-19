let diapositivas = document.getElementsByClassName("diapositiva");
let posicion = 0;
let botonAnterior = document.getElementById("anterior");
let botonSiguiente = document.getElementById("siguiente");
let contador = document.getElementById("contador");

function mostrarDiapositiva() {
    for (let i = 0; i < diapositivas.length; i++) {
        diapositivas[i].classList.remove("activa");
    }
    diapositivas[posicion].classList.add("activa");
    contador.textContent = (posicion + 1) + " / " + diapositivas.length;

    if (posicion == 0) {
        botonAnterior.classList.add("inactivo");
    } else {
        botonAnterior.classList.remove("inactivo");
    }

    if (posicion == diapositivas.length - 1) {
        botonSiguiente.classList.add("inactivo");
    } else {
        botonSiguiente.classList.remove("inactivo");
    }
}

function avanzar() {
    if (posicion < diapositivas.length - 1) {
        posicion++;
        mostrarDiapositiva();
    }
}

function retroceder() {
    if (posicion > 0) {
        posicion--;
        mostrarDiapositiva();
    }
}

mostrarDiapositiva();
