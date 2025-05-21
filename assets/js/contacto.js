const michel = document.querySelector("#michel");
const valentina = document.querySelector("#valentina");
const ameAmorDeMiVida = document.querySelector("#ameAmorDeMiVida");
const d = document.querySelector("#d");

michel.addEventListener("click", (event) => {
    $('#profileImg').attr("src","assets/images/michel.jpeg");
    $('#textNameCard').text("Michel Vergara")
    $('#textBodyCard').text("Hola, yo soy Michel Vergara 🙌🙌, diseñadora de Qué Nadie Te lo Cuente. Aquí encontrarás consejos e información que me hubiera gustado que alguien me contara antes. Sin duda una de las cosas que más disfruto de Comunicación es que aprendí mucho sobre como hacer contenido multimedia, eso me ha dado muchas oportunidades a lo largo de la carrera.")
    $("#cardP").show()
});

ameAmorDeMiVida.addEventListener("click", (event) => {
    $('#profileImg').attr("src","assets/images/musaranitaHermosaBebe.jpeg");
    $('#textNameCard').text("Amélie Castillo")
    $('#textBodyCard').text("Hola, yo soy Amélie Castillo ✨, programadora de QNC. Esperamos que esta página sea un espacio bonito y entretenido para que te acerques a la vida universitaria que ofrece la FES Acatlán. Estudio Comunicación, y lo que más me gusta de la carrera es que muchas de las cosas que aprendo se han convertido en verdaderas herramientas de supervivencia. Saber comunicar o entender mensajes, ya sea en medio de un caos o en lo cotidiano, me ha ayudado a navegar mejor por la vida. 🤞✨")
    $("#cardP").show()
});

valentina.addEventListener("click", (event) => {
    $('#profileImg').attr("src","assets/images/valentina.jpeg");
    $('#textNameCard').text("Valentina Guerrero")
    $('#textBodyCard').text("Hola 👋🏻👋🏻 soy Valentina Guerrero y yo soy la Scrum máster del equipo de Que Nadie te lo Cuente, también formo parte del equipo de redacción. Como próxima exalumna espero que esta página les sea de ayuda y le ahorre unos cuantos dolores de cabeza. A mi me encanta la carrera porque me permite explorar todas mis pasiones, espero que para ustedes también sea un experiencia inolvidable y llena de aprendizaje.")
    $("#cardP").show()
});

d.addEventListener("click", (event) => {
    $('#profileImg').attr("src","assets/images/diego.jpeg");
    $('#textNameCard').text("Diego Gonzalez")
    $('#textBodyCard').text("Yo soy Diego 🤠, y soy estudiante de la FES Acatlán en la carrera de comunicación. Estoy apunto de terminar la carrera y con esta página web espero que puedas aprender e informarte un poco más sobre esta bonita experiencia que estás considerando vivir. Si esta página te ayuda en algo, mi objetivo está más que cumplido. :)")
    $("#cardP").show()
});