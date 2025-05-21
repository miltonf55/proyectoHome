const proOn = document.querySelector("#proOn");
const proOnAc = document.querySelector("#proOnAc");
const a50 = document.querySelector("#a50");
const a50Ac = document.querySelector("#a50Ac");
const muestraSonora = document.querySelector("#muestraSonora");
const muestraSonoraAc = document.querySelector("#muestraSonoraAc");
const encontrartePerderte = document.querySelector("#encontrartePerderte");
const encontrartePerderteAc = document.querySelector("#encontrartePerderteAc");
const comeComu = document.querySelector("#comeComu");
const comeComuAc = document.querySelector("#comeComuAc");
const substack = document.querySelector("#substack");
const substackAc = document.querySelector("#substack");

proOn.addEventListener("click", (event) => {
    $('#a50').removeClass("active")
    $('#muestraSonora').removeClass("active")
    $('#a50Ac').removeClass("show")
    $('#a50Ac').addClass("hide")
    $('#muestraSonoraAc').removeClass("show")
    $('#muestraSonoraAc').addClass("hide")
    $('#proOnAc').addClass("show")
    $('#encontrartePerderte').removeClass("active")
    $('#encontrartePerderteAc').removeClass("show")
    $('#encontrartePerderteAc').addClass("hide")
    $('#comeComu').removeClass("active")
    $('#comeComuAc').removeClass("show")
    $('#comeComuAc').addClass("hide")
    $('#substack').removeClass("active")
    $('#substackAc').removeClass("show")
    $('#substackAc').addClass("hide")
});

a50.addEventListener("click", (event) => {
    $('#a50').addClass("active")
    $('#muestraSonora').removeClass("active")
    $('#a50Ac').addClass("show")
    $('#muestraSonoraAc').removeClass("show")
    $('#muestraSonoraAc').addClass("hide")
    $('#proOnAc').removeClass("show")
    $('#proOnAc').addClass("hide")
    $('#encontrartePerderte').removeClass("active")
    $('#encontrartePerderteAc').removeClass("show")
    $('#encontrartePerderteAc').addClass("hide")
    $('#comeComu').removeClass("active")
    $('#comeComuAc').removeClass("show")
    $('#comeComuAc').addClass("hide")
    $('#substack').removeClass("active")
    $('#substackAc').removeClass("show")
    $('#substackAc').addClass("hide")
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
    $('#encontrartePerderte').removeClass("active")
    $('#encontrartePerderteAc').removeClass("show")
    $('#encontrartePerderteAc').addClass("hide")
    $('#comeComu').removeClass("active")
    $('#comeComuAc').removeClass("show")
    $('#comeComuAc').addClass("hide")
    $('#substack').removeClass("active")
    $('#substackAc').removeClass("show")
    $('#substackAc').addClass("hide")
});
encontrartePerderte.addEventListener("click", (event) => {
    $('#a50').removeClass("active")
    $('#a50Ac').removeClass("show")
    $('#a50Ac').addClass("hide")
    $('#muestraSonora').removeClass("active")
    $('#muestraSonoraAc').addClass("hide")
    $('#muestraSonoraAc').removeClass("show")
    $('#proOnAc').removeClass("show")
    $('#proOnAc').addClass("hide")
    $('#encontrartePerderte').addClass("active")
    $('#encontrartePerderteAc').removeClass("hide")
    $('#encontrartePerderteAc').addClass("show")

    $('#comeComu').removeClass("active")
    $('#comeComuAc').removeClass("show")
    $('#comeComuAc').addClass("hide")
    $('#substack').removeClass("active")
    $('#substackAc').removeClass("show")
    $('#substackAc').addClass("hide")
});

comeComu.addEventListener("click", (event) => {
    $('#a50').removeClass("active")
    $('#a50Ac').removeClass("show")
    $('#a50Ac').addClass("hide")
    $('#muestraSonora').removeClass("active")
    $('#muestraSonoraAc').addClass("hide")
    $('#muestraSonoraAc').removeClass("show")
    $('#proOnAc').removeClass("show")
    $('#proOnAc').addClass("hide")
    $('#encontrartePerderte').removeClass("active")
    $('#encontrartePerderteAc').addClass("hide")
    $('#encontrartePerderteAc').removeClass("show")

    $('#comeComu').addClass("active")
    $('#comeComuAc').addClass("show")
    $('#comeComuAc').removeClass("hide")
    $('#substack').removeClass("active")
    $('#substackAc').removeClass("show")
    $('#substackAc').addClass("hide")
});

substack.addEventListener("click", (event) => {
    $('#a50').removeClass("active")
    $('#a50Ac').removeClass("show")
    $('#a50Ac').addClass("hide")
    $('#muestraSonora').removeClass("active")
    $('#muestraSonoraAc').addClass("hide")
    $('#muestraSonoraAc').removeClass("show")
    $('#proOnAc').removeClass("show")
    $('#proOnAc').addClass("hide")
    $('#encontrartePerderte').removeClass("active")
    $('#encontrartePerderteAc').removeClass("show")
    $('#encontrartePerderteAc').addClass("hide")

    $('#comeComu').removeClass("active")
    $('#comeComuAc').removeClass("show")
    $('#comeComuAc').addClass("hide")
    $('#substack').addClass("active")
    $('#substackAc').addClass("show")
    $('#substackAc').removeClass("hide")
});