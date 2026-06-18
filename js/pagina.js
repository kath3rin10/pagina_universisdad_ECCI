function mostrarMensaje() {
    document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}

// =====================
// POPUP
// =====================

function mostrarMensaje() {
    document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}


// =====================
// GALERÍA MODA
// =====================

const imagenesModa = [

    "/img/uni_moda0.png",
    "/img/uni_moda1.png",
    "/img/uni_moda2.png",
    "/img/uni_moda3.png"

];

let indiceModa = 0;

function cambiarModa(direccion){

    const img =
    document.getElementById("imgModa");

    img.style.opacity = "0";

    setTimeout(() => {

        indiceModa += direccion;

        if(indiceModa < 0){
            indiceModa = imagenesModa.length - 1;
        }

        if(indiceModa >= imagenesModa.length){
            indiceModa = 0;
        }

        img.src = imagenesModa[indiceModa];

        img.style.opacity = "1";

    }, 300);

}


// =====================
// GALERÍA COLOR
// =====================

const imagenesColor = [

    "/img/uni_color0.png",
    "/img/uni_color1.png",
    "/img/uni_color3.png",
    "/img/uni_color4.png",
    "/img/uni_color5.png",
    "/img/uni_color6.png",
    "/img/uni_color7.png",
    "/img/uni_color8.png",
    "/img/uni_color9.png",
    "/img/uni_color10.png"
];

let indiceColor = 0;

function cambiarColor(direccion){

    const img =
    document.getElementById("imgColor");

    img.style.opacity = "0";

    setTimeout(() => {

        indiceColor += direccion;

        if(indiceColor < 0){
            indiceColor = imagenesColor.length - 1;
        }

        if(indiceColor >= imagenesColor.length){
            indiceColor = 0;
        }

        img.src = imagenesColor[indiceColor];

        img.style.opacity = "1";

    }, 300);

}

let ingles = false;

function traducirPagina(){

    ingles = !ingles;

    if(ingles){

        document.getElementById("tituloPrincipal").innerHTML =
        "Bring Color Back";

        document.getElementById("subtituloPrincipal").innerHTML =
        "ECCI Fashion and Design Event<br>May 27, 2026";

        document.getElementById("tituloExperiencia").innerHTML =
        "My Experience";

        document.getElementById("tituloGaleria").innerHTML =
        "Gallery";

        document.getElementById("tituloPalabras").innerHTML =
        "Keywords";

        document.getElementById("tituloGlosario").innerHTML =
        "Glossary";

        document.getElementById("tituloConclusion").innerHTML =
        "Conclusion";

        document.getElementById("menuInicio").innerHTML =
        "Home";

        document.getElementById("menuExperiencia").innerHTML =
        "Experience";

        document.getElementById("menuGaleria").innerHTML =
        "Gallery";

        document.getElementById("menuPalabras").innerHTML =
        "Keywords";

        document.getElementById("menuGlosario").innerHTML =
        "Glossary";

        document.getElementById("menuConclusion").innerHTML =
        "Conclusion";

        document.querySelector(".btn-traducir").innerHTML =
        "🇪🇸 Español";

    }else{

        document.getElementById("tituloPrincipal").innerHTML =
        "Traigamos el Color de Vuelta";

        document.getElementById("subtituloPrincipal").innerHTML =
        "Evento de Moda y Diseño ECCI<br>27 de Mayo de 2026";

        document.getElementById("tituloExperiencia").innerHTML =
        "Mi Experiencia";

        document.getElementById("tituloGaleria").innerHTML =
        "Galería";

        document.getElementById("tituloPalabras").innerHTML =
        "Palabras Claves";

        document.getElementById("tituloGlosario").innerHTML =
        "Glosario";

        document.getElementById("tituloConclusion").innerHTML =
        "Conclusión";

        document.getElementById("menuInicio").innerHTML =
        "Inicio";

        document.getElementById("menuExperiencia").innerHTML =
        "Experiencia";

        document.getElementById("menuGaleria").innerHTML =
        "Galería";

        document.getElementById("menuPalabras").innerHTML =
        "Palabras Claves";

        document.getElementById("menuGlosario").innerHTML =
        "Glosario";

        document.getElementById("menuConclusion").innerHTML =
        "Conclusión";

        document.querySelector(".btn-traducir").innerHTML =
        "🇺🇸 English";
    }

}

