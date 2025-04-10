const piedroso = document.querySelector("#piedrosoBtn");

var frases =[
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
