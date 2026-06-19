let ingles = false;

function traducirPagina() {

    ingles = !ingles;

    if (ingles) {

        // MENÚ
        document.getElementById("menuInicio").innerHTML = "Home";
        document.getElementById("menuExperiencia").innerHTML = "Experience";
        document.getElementById("menuGaleria").innerHTML = "Gallery";
        document.getElementById("menuPalabras").innerHTML = "Keywords";
        document.getElementById("menuGlosario").innerHTML = "Glossary";
        document.getElementById("menuConclusion").innerHTML = "Conclusion";

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
        "Attending the international conference 'Bring Color Back' was a very interesting experience because it allowed me to discover a new perspective on fashion and design. Before, I thought colors were only used to make things look beautiful, but during the conference I learned that they also communicate emotions, personality and influence how people perceive a brand or product.";

        document.getElementById("expe2").innerHTML =
        "Sara Victoria's participation was inspiring because she shared real experiences and knowledge from the creative industry. I learned that color is a fundamental tool for communicating ideas and creating visual impact. The conference also made me reflect on the importance of creativity and innovation in fashion, design and visual communication.";

        document.getElementById("expe3").innerHTML =
        "Overall, this event left me with valuable lessons. I expanded my knowledge, developed a more critical view of color usage and understood how small details can make a big difference in any creative project.";

        document.getElementById("expe4").innerHTML =
        "What impressed me most was discovering that colors can tell stories and express emotions without using words. It was a unique experience that motivated me to see design and fashion from a more creative perspective.";

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
        "Participating in this event was a very enriching experience because it allowed me to learn things I had never considered before about fashion and design. Thanks to Sara Victoria's presentation, I understood that color is not simply decorative, but a tool capable of transmitting emotions, ideas and messages.";

        document.getElementById("con2").innerHTML =
        "One of the things that caught my attention the most was discovering how something as simple as choosing a color can have such a significant impact on a brand's identity, a garment or even the emotions of those who observe it.";

        document.getElementById("con3").innerHTML =
        "In addition to expanding my knowledge, this experience motivated me to value creativity and innovation as tools for expressing ideas and generating change. Activities like this are important because they allow students to gain real experiences and discover new areas of interest.";

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

