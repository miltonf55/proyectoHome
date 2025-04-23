
const foto = document.querySelector("#foto");
const radio = document.querySelector("#radio");
const multimedia = document.querySelector("#multimedia");
const television = document.querySelector("#television");
const audio = document.querySelector("#audio");
const video = document.querySelector("#video");

television.addEventListener("click", (event) => {
    var titleSJ = "TALLER DE TELEVISIÓN"
    var bodySJ = "Aquí te vas a sentir como parte de una producción profesional. Desde la conducción hasta el manejo de cámaras y el uso de switchers, aprenderás lo que implica grabar un programa de tele desde cero."
        + "\n\n#b#Numeralia#cb#: El Taller de Televisión 2 está súper bien equipado y también cuenta con certificaciones nacionales. Muchos estudiantes salen de aquí con experiencia real para el mundo laboral."
    $('#talleresTitleTxt').text(titleSJ)
    const test = $('#talleresBodyTxt').text(bodySJ)
    test.html(test.html().replace(/\n/g, '<br/>'));
    test.html(test.html().replace('#b#', '<b>'));
    test.html(test.html().replace('#cb#', '</b>'));

    $('#talleresModal').modal('show')
});

radio.addEventListener("click", (event) => {
    var titleSJ = "TALLER DE RADIO"
    var bodySJ = "En este taller aprenderás todo lo necesario para producir contenido sonoro: desde escribir un guiones para radio hasta grabar, editar, hacer locución y transmitir programas en vivo. ¿Te gusta hacer podcast o escucharlos? ¿O siempre soñaste con estar frente al micrófono? Este es tú lugar."
        + "\n\n#b#Numeralia#cb#: El Taller de Radio 3 tiene reconocimiento a nivel nacional por su calidad y equipamiento."
    $('#talleresTitleTxt').text(titleSJ)
    const test = $('#talleresBodyTxt').text(bodySJ)
    test.html(test.html().replace(/\n/g, '<br/>'));
    test.html(test.html().replace('#b#', '<b>'));
    test.html(test.html().replace('#cb#', '</b>'));

    $('#talleresModal').modal('show')
});

foto.addEventListener("click", (event) => {
    var titleSJ = "TALLER DE FOTOGRAFÍA"
    var bodySJ = "¿Te gusta capturar momentos o contar historias con imágenes? En este taller aprenderás sobre composición, iluminación, técnica y edición de fotos. Ideal si te interesa el fotoperiodismo, la publicidad o simplemente quieres mejorar tus habilidades detrás de la cámara."
    $('#talleresTitleTxt').text(titleSJ)
    const test = $('#talleresBodyTxt').text(bodySJ)
    test.html(test.html().replace(/\n/g, '<br/>'));
    test.html(test.html().replace('#b#', '<b>'));
    test.html(test.html().replace('#cb#', '</b>'));

    $('#talleresModal').modal('show')
});

video.addEventListener("click", (event) => {
    var titleSJ = "TALLER DE EDICIÓN DE VIDEO"
    var bodySJ = "Aquí todo cobra vida. Aprenderás a usar software de Adobe para editar clips, contar historias visuales, añadir efectos, música y mucho más. Es un espacio ideal para quienes aman el cine, los videos para redes o el contenido creativo."
    $('#talleresTitleTxt').text(titleSJ)
    const test = $('#talleresBodyTxt').text(bodySJ)
    test.html(test.html().replace(/\n/g, '<br/>'));
    test.html(test.html().replace('#b#', '<b>'));
    test.html(test.html().replace('#cb#', '</b>'));

    $('#talleresModal').modal('show')
});

audio.addEventListener("click", (event) => {
    var titleSJ = "TALLER DE EDICIÓN DE AUDIO"
    var bodySJ = "Si te interesa el diseño sonoro, aquí vas a aprender cómo mezclar música, voces, efectos y ambiente para lograr productos de calidad. Es clave para quienes quieran dedicarse a la producción musical, el doblaje o el audio para medios digitales."
    $('#talleresTitleTxt').text(titleSJ)
    const test = $('#talleresBodyTxt').text(bodySJ)
    test.html(test.html().replace(/\n/g, '<br/>'));
    test.html(test.html().replace('#b#', '<b>'));
    test.html(test.html().replace('#cb#', '</b>'));

    $('#talleresModal').modal('show')
});

multimedia.addEventListener("click", (event) => {
    var titleSJ = "TALLER DE PROYECTOS MULTIMEDIA"
    var bodySJ = "Este taller es más interdisciplinario: mezcla texto, imagen, audio, vídeo e interactividad. Si te gustan los sitios web, las narrativas transmedia o las experiencias digitales, aquí vas a experimentar con todo eso. Es el lugar para armar proyectos creativos y complejos."
        + "\n\nCada taller tiene su propio encanto y nivel de profundidad, y la idea es que puedas pasar por varios para encontrar qué te gusta más o qué se te da mejor. Además, trabajarás en equipo, harás entregas como en la vida real y te llevarás una carpeta de trabajos que podrás presumir en entrevistas o prácticas."
    $('#talleresTitleTxt').text(titleSJ)
    const test = $('#talleresBodyTxt').text(bodySJ)
    test.html(test.html().replace(/\n/g, '<br/>'));
    test.html(test.html().replace('#b#', '<b>'));
    test.html(test.html().replace('#cb#', '</b>'));

    $('#talleresModal').modal('show')
});