const piedroso = document.querySelector("#piedrosoBtn");
const sorJuanaGG = document.querySelector("#sorJuana");
const alasGG = document.querySelector("#alas");
const autonomia = document.querySelector("#autonomia");
const florida = document.querySelector("#florida");
const almaMater = document.querySelector("#almaMater");
const piedra = document.querySelector("#piedra");

var frases = [
    "El 17 de marzo de 1975 abrió por primera vez sus puertas la Fes Acatlán, por eso andamos de fiesta 🎂🥳. ¡¡Felices 50 años!!",
    "Soy la escultura más representativa de la FES Acatlán mi nombre  es \"La Humanidad Hoy\", pero mis amigos me dicen \"La Piedra\"🥹❤️. Fui creada en 1984 por mi padre y artista Roberto Roque🎨",
    "No estuve exenta de controversias 😳. En su momento, estudiantes organizaron marchas con la consigna \"Copias sí, piedras no\", en protesta por el aumento en el costo de las fotocopias para solventar la obra😯😅.",
    "Acatlán significa “lugar entre cañas” en náhuatl. El nombre es un homenaje al pasado prehispánico de la región💚✨."
]

piedroso.addEventListener("click", (event) => {

    //var i = Math.floor(Math.random()*10000)%frases.length;
    var finalFrase = frases.shift();
    frases.push(finalFrase);

    $('#piedratext').text(finalFrase)

    $('#piedrosoModal').modal('show')
});



sorJuanaGG.addEventListener("click", (event) => {
    var titleSJ = "SOR JUANA"
    var bodySJ = "Frente al Centro de Información y Documentación, se encuentra  la icónica estatua a Sor Juana Inés de la Cruz, o simplemente conocida como “La Sor Juana” y apodada por algunos alumnos como “La virgencita” "
        + "La imponente estatua rodeada de frondosos arbustos, embellece el camino de los universitarios que se dirigen a sus salones, y como no, a los alumnos que saliendo de sus clases tienen que caminar a la entrada para tomar el FES directo. "
        + "Pero, ¿de dónde viene ésta estatua? "
        + "La realidad es que fue un regalo entregado a la facultad en el año de 1994 por parte del ayuntamiento de Tlalnepantla, Estado de México, con motivo de celebración cuando la UNAM elevó el rango a la escuela, pasando de ser una Escuela Nacional de Estudios Profesionales a ser una Facultad de Estudios Superiores hecha y derecha. "
    $('#monumentoTitleTxt').text(titleSJ)
    $('#monumentoBodyTxt').text(bodySJ)

    $('#monumentosModal').modal('show')
});

alasGG.addEventListener("click", (event) => {
    var titleAA = "ALAS DE LIBERTAD"
    var bodyAA = "Las Alas de Libertad es otra de las obras más representativas de la facultad, y aunque está un poco escondida, no deja de ser impresionante. Llena de formas curvas, fluidas y orgánicas, ésta obra hecha de acero inoxidable y con un acabado en espejo, está situada al lado de uno de los recintos culturales más importantes de la facultad. "
        + "Las Alas de Libertad fueron donadas en el año 2009 por el escultor y pintor Leonardo Nierman. "
        + "Su acabado reflejante contrasta con las áreas verdes que la rodean, dotando de una tranquilidad peculiar en esta zona de la facultad y los estudiantes lo saben, si pasas por ahí, siempre podrás ver alumnos recostados en el pasto, platicando, carcajeando, comiendo o simplemente durmiendo. "
    $('#monumentoTitleTxt').text(titleAA)
    $('#monumentoBodyTxt').text(bodyAA)

    $('#monumentosModal').modal('show')
});

piedra.addEventListener("click", (event) => {
    
    var title = "PIEDRA"
    var body = "Una de las esculturas más representativas de la FES Acatlán es \"La Humanidad Hoy\", también conocida como \"La Piedra\". Creada en 1984 por el artista Roberto Roque, esta obra de 6 metros de altura y 67 toneladas de peso tiene 4 caras que representan el pasado de México, el hombre en la naturaleza, la depredación ambiental y las consecuencias de un posible holocausto nuclear.\n "
        + "La escultura, tallada en andesita del volcán Xitle, simboliza la relación entre la humanidad y su entorno, con representaciones de la música, el arte y el pueblo, pero también de la contaminación y la guerra. \n"
        + "\"La Piedra\" no estuvo exenta de controversia. En su momento, estudiantes organizaron marchas con la consigna \"Copias sí, piedras no\", en protesta por el aumento en el costo de las fotocopias para solventar la obra. Con el tiempo, la escultura se deterioró debido a su exposición a la intemperie, por lo que en 2018, Roberto Roque lideró su restauración integral, devolviéndo su esplendor original. "
    $('#monumentoTitleTxt').text(title)
    $('#monumentoBodyTxt').text(body)

    $('#monumentosModal').modal('show')
});

autonomia.addEventListener("click", (event) => {
    var title = "MONUMENTO A LA AUTONOMÍA"
    var body = "Creado por el artista y profesor Gelsen Gas en 1979, este monumento es un símbolo de la libertad y la independencia universitaria. "
        + "Conocido cariñosamente por los estudiantes como \"El Pikachu\" debido a su color amarillo tan característico y su forma peculiar, es un punto de referencia clave en la FES Acatlán, recordando a las generaciones de universitarios la importancia de la autonomía educativa. "
        + "El Monumento a la Autonomía Universitaria es la escultura más antigua en la FES Acatlán, perteneciendo al campus desde el año 1979 hasta el día de hoy, lo que significa que ha estado 45 años acompañando a los universitarios. "
    $('#monumentoTitleTxt').text(title)
    $('#monumentoBodyTxt').text(body)

    $('#monumentosModal').modal('show')
});

florida.addEventListener("click", (event) => {
    var title = "GUERRA FLORIDA"
    var body = "La siguiente escultura tiene una forma peculiar y está ubicada frente al centro de enseñanza de idiomas ¿Sabes cuál es? ¡Exacto! La Guerra Florida, o también conocida localmente como “La chinche” "
        + "La Guerra Florida creada por Federico Silva, es una de esas esculturas abstractas que te deja pensando simplemente al verla, incluso si es de reojo. "
        + "Te preguntarás ¿Por qué se llama así?, en realidad La Guerra Florida era una práctica de guerra ritual realizada por los mexicas y otros pueblos mesoamericanos, desarrolladas entre los siglos XV y XVI, con el objetivo de capturar prisioneros para los sacrificios a los dioses en especial a huitzilopochtli y Tláloc. "
        + "La Guerra Florida está situada en lo que alguna vez fue una fuente y su diseño evoca a un sol mexica, el cual era un sustento para la vida de las culturas prehispánicas, ya que no era solo una fuente de luz, sino una deidad central dentro de su cosmovisión, asociada con la guerra, el sacrificio y el destino del universo. "
    $('#monumentoTitleTxt').text(title)
    $('#monumentoBodyTxt').text(body)

    $('#monumentosModal').modal('show')
});

almaMater.addEventListener("click", (event) => {
    var title = "MONUMENTO AL ALMA MATER"
    var body = "Y por último pero no menos importante, en el Paseo de los Eucaliptos, el pasillo más amplio de la escuela, se encuentra el \"Monumento al Alma Mater\", esta obra consiste en una piedra tallada con el escudo de la UNAM. "
        + "La piedra en la que está tallada fue extraída del  Parque de los Remedios, un área natural protegida. El Monumento al Alma Mater fue inaugurado en el quinto aniversario de la facultad y representa el orgullo y la identidad universitaria."
    $('#monumentoTitleTxt').text(title)
    $('#monumentoBodyTxt').text(body)

    $('#monumentosModal').modal('show')
});
