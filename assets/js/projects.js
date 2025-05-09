const proOn = document.querySelector("#proOn");
const proOnAc = document.querySelector("#proOnAc");
const a50 = document.querySelector("#a50");
const a50Ac = document.querySelector("#a50Ac");
const muestraSonora = document.querySelector("#muestraSonora");
const muestraSonoraAc = document.querySelector("#muestraSonoraAc");

proOn.addEventListener("click", (event) => {
    $('#a50').removeClass("active")
    $('#muestraSonora').removeClass("active")
    $('#a50Ac').removeClass("show")
    $('#a50Ac').addClass("hide")
    $('#muestraSonoraAc').removeClass("show")
    $('#muestraSonoraAc').addClass("hide")
    $('#proOnAc').addClass("show")
});

a50.addEventListener("click", (event) => {
    $('#a50').addClass("active")
    $('#muestraSonora').removeClass("active")
    $('#a50Ac').addClass("show")
    $('#muestraSonoraAc').removeClass("show")
    $('#muestraSonoraAc').addClass("hide")
    $('#proOnAc').removeClass("show")
    $('#proOnAc').addClass("hide")
});

muestraSonora.addEventListener("click", (event) => {
    $('#a50').removeClass("active")
    $('#muestraSonora').addClass("active")
    $('#a50Ac').removeClass("show")
    $('#a50Ac').addClass("hide")
    $('#muestraSonoraAc').removeClass("hide")
    $('#muestraSonoraAc').addClass("show")
    $('#proOnAc').removeClass("show")
    $('#proOnAc').addClass("hide")
});