const playGame = document.querySelector("#playGame");

playGame.addEventListener("click", (event) => {
    $('#memoramModal').modal('show')
});

console.profile()
var cartas = new Array(
    { nombre: 'val1', seleccion: false, src: 'assets/images/val1.png' }, { nombre: 'val8', seleccion: false, src: 'assets/images/pikachu.jpg' },
    { nombre: 'val2', seleccion: false, src: 'assets/images/val2.png' }, { nombre: 'val7', seleccion: false, src: 'assets/images/logo.png' },
    { nombre: 'val3', seleccion: false, src: 'assets/images/val3.png' }, { nombre: 'val6', seleccion: false, src: 'assets/images/piedroso.png' },
    { nombre: 'val4', seleccion: false, src: 'assets/images/val4.png' }, { nombre: 'val5', seleccion: false, src: 'assets/images/val5.png' },
    { nombre: 'val5', seleccion: false, src: 'assets/images/val5.png' }, { nombre: 'val4', seleccion: false, src: 'assets/images/val4.png' },
    { nombre: 'val6', seleccion: false, src: 'assets/images/piedroso.png' }, { nombre: 'val3', seleccion: false, src: 'assets/images/val3.png' },
    { nombre: 'val7', seleccion: false, src: 'assets/images/logo.png' }, { nombre: 'val2', seleccion: false, src: 'assets/images/val2.png' },
    { nombre: 'val8', seleccion: false, src: 'assets/images/pikachu.jpg' }, { nombre: 'val1', seleccion: false, src: 'assets/images/val1.png' });

var intentos = 0;
var jugada1 = "";
var jugada2 = "";
var identificadorJ1 = "";
var identificadorJ2 = "";

function iniciarJuego() {
    var dato = document.getElementById("juego");
    dato.style.opacity = 1;

    cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 16; i++) {
        var carta = cartas[i].nombre;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
        var idS = i + 100;
        $("#" + idS).attr("src", cartas[i].src);
    }
};

function resetearJuego() {
    cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 16; i++) {
        var carta = cartas[i].nombre;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
        colorCambio(i, 'black', '?');
        var idS = i + 100;
        switchImg(idS, 'none');
        $("#" + idS).attr("src", cartas[i].src);
    }
}

function girarCarta(id) {
    var evento = window.event;

    var dato = document.getElementById(id);
    jugada2 = dato.dataset.valor;
    identificadorJ2 = id;

    console.log(jugada1, jugada2, identificadorJ1, identificadorJ2);
    

    if (jugada1 !== "") {

        if (jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true && cartas[parseInt(identificadorJ1)].seleccion != true) {

            cartas[parseInt(identificadorJ1)].seleccion = true;
            cartas[parseInt(identificadorJ2)].seleccion = true;

            colorCambio(identificadorJ2, "linen", jugada2);
            switchImg(Number(identificadorJ2) + 100, 'initial');
            vaciar();
            comprobar();
        } else if (identificadorJ1 !== identificadorJ2) {
            var self = this;
            setTimeout(function () {
                colorCambio(self.identificadorJ1, "black", "?")
                colorCambio(self.identificadorJ2, "black", "?")
                switchImg(Number(self.identificadorJ1) + 100, 'none');
                switchImg(Number(self.identificadorJ2) + 100, 'none');
                vaciar()
            }, 200);

            colorCambio(identificadorJ2, "linen", jugada2);
            switchImg(Number(identificadorJ2) + 100, 'initial');
        }
    } else if (jugada2 !== "valor") {

        colorCambio(identificadorJ2, "linen", jugada2);
        switchImg(Number(identificadorJ2) + 100, 'initial');

        jugada1 = jugada2;
        identificadorJ1 = identificadorJ2;
    }
};

function vaciar() {
    jugada1 = "";
    jugada2 = "";

    identificadorJ1 = "";
    identificadorJ2 = "";
}

function colorCambio(posicion, color, contenido) {
    document.getElementById(posicion.toString()).style.backgroundColor = color;
    //document.getElementById(posicion.toString()).innerHTML = contenido;
}

function switchImg(posicion, display) {    
    var askId = Number(posicion) + 100;
    if (display == 'none') {
        $("#" + posicion).hide()
        $("#" + askId).show()
    } else {
        $("#" + posicion).show()
        $("#" + askId).hide()
    }
}

function comprobar() {
    var aciertos = 0;
    for (var i = 0; i < 16; i++) {
        if (cartas[i].seleccion == true) {
            aciertos++;
        }

    }

    if (aciertos == 16) {
        setTimeout(() => {
            resetearJuego();
        }, "5000");
    }
}

function resetearJuego() {
    cartas.sort(function () { return Math.random() - 0.5 });
    for (var i = 0; i < 16; i++) {
        var carta = cartas[i].nombre;
        var dato = document.getElementById(i.toString());
        dato.dataset.valor = carta;
        colorCambio(i, 'black', '?');
        var idS = i + 100;
        switchImg(idS, 'none');
        $("#" + idS).attr("src", cartas[i].src);
        console.profileEnd()
    }
};