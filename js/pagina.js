let ingles = false;

function traducirPagina() {

    ingles = !ingles;

    if (ingles) {

        // MENÚ
        document.getElementById("menuInicio").textContent = "Home";
        document.getElementById("menuExperiencia").textContent = "Experience";
        document.getElementById("menuGaleria").textContent = "Gallery";
        document.getElementById("menuPalabras").textContent = "Keywords";
        document.getElementById("menuGlosario").textContent = "Glossary";
        document.getElementById("menuConclusion").textContent = "Conclusion";

        // HERO
        document.getElementById("tituloPrincipal").innerHTML =
        "Bring Color Back";

        document.getElementById("subtituloPrincipal").innerHTML =
        "ECCI Fashion and Design Event<br>May 27, 2026";

        // TÍTULOS
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

        document.getElementById("tituloModa").innerHTML =
        "👗 Fashion";

        document.getElementById("tituloColor").innerHTML =
        "🎨 Color Theory";

        // EXPERIENCIA
        document.getElementById("expe1").innerHTML =
        "Attending the international conference 'Bring Color Back' was a very interesting experience because it allowed me to discover a new perspective on fashion and design.";

        document.getElementById("expe2").innerHTML =
        "Sara Victoria's participation was inspiring because she shared real experiences and knowledge from the creative industry.";

        document.getElementById("expe3").innerHTML =
        "This event gave me valuable lessons and helped me better understand the importance of color in communication and design.";

        document.getElementById("expe4").innerHTML =
        "What impressed me most was discovering that colors can tell stories and express emotions without using words.";

        // PALABRAS CLAVE
        document.getElementById("card1").innerHTML = "Fashion";
        document.getElementById("card2").innerHTML = "Design";
        document.getElementById("card3").innerHTML = "Color";
        document.getElementById("card4").innerHTML = "Creativity";
        document.getElementById("card5").innerHTML = "Trends";
        document.getElementById("card6").innerHTML = "Innovation";

        // FRASE
        document.getElementById("fraseDestacada").innerHTML =
        `
        <span>❝</span>
        I understood that small details, such as the proper use of color,
        can make a huge difference in how we communicate our ideas.
        <span>❞</span>
        `;

        // CONCLUSIÓN
        document.getElementById("con1").innerHTML =
        "Participating in this event was a very enriching experience because it allowed me to learn things I had never considered before about fashion and design.";

        document.getElementById("con2").innerHTML =
        "I discovered that color is much more than decoration; it is a powerful communication tool.";

        document.getElementById("con3").innerHTML =
        "This experience motivated me to value creativity and innovation as tools for expressing ideas and generating change.";

        // POPUP
        document.getElementById("popupSubtitulo").innerHTML =
        "Bring Color Back";

        document.getElementById("popupTexto1").innerHTML =
        "Welcome to an experience inspired by fashion, design and creativity.";

        document.getElementById("popupTexto2").innerHTML =
        "Discover how color transforms emotions, trends and visual identities.";

        document.getElementById("popupBoton").innerHTML =
        "Explore Event 💖";

        document.querySelector(".btn-traducir").innerHTML =
        "🇪🇸 Español";

    } else {

        location.reload();

    }

}
