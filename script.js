// TAMANHO DA FONTE

let tamanhoFonte = 16;

function aumentarFonte(){

    tamanhoFonte += 2;

    document.documentElement.style.setProperty(
        "--fonte",
        tamanhoFonte + "px"
    );

}

function diminuirFonte(){

    if(tamanhoFonte > 12){

        tamanhoFonte -= 2;

        document.documentElement.style.setProperty(
            "--fonte",
            tamanhoFonte + "px"
        );

    }

}

// MODO CONTRASTE

function alternarContraste(){

    document.body.classList.toggle(
        "contraste"
    );

}

// LEITOR DE TEXTO

function lerPagina(){

    const texto = document.body.innerText;

    const fala = new SpeechSynthesisUtterance(
        texto
    );

    fala.lang = "pt-BR";

    speechSynthesis.speak(
        fala
    );

}

// CURIOSIDADES

function mostrarCuriosidade(){

    const curiosidades = [

        "💧 Sistemas de irrigação modernos reduzem significativamente o desperdício de água.",

        "🌱 A conservação do solo ajuda a manter a produtividade agrícola por muitos anos.",

        "🚜 Drones permitem monitorar lavouras com maior precisão e eficiência.",

        "🌳 Áreas de preservação ajudam a proteger rios, nascentes e a biodiversidade.",

        "♻️ Produzir alimentos de forma sustentável beneficia tanto o meio ambiente quanto a sociedade.",

        "🌾 A agricultura sustentável busca equilibrar produção, economia e preservação ambiental.",

        "☀️ Energias renováveis estão cada vez mais presentes no campo brasileiro."

    ];

    const sorteio =
    curiosidades[
        Math.floor(
            Math.random() *
            curiosidades.length
        )
    ];

    document.getElementById(
        "curiosidade"
    ).innerText = sorteio;

}

// ANIMAÇÃO AO ROLAR

const secoes =
document.querySelectorAll(
    ".secao,.card,.galeria,.curiosidades"
);

window.addEventListener("scroll", () => {

    secoes.forEach(secao => {

        const topo =
        secao.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            secao.style.opacity = "1";

            secao.style.transform =
            "translateY(0)";

        }

    });

});

// PREPARA ANIMAÇÃO

secoes.forEach(secao => {

    secao.style.opacity = "0";

    secao.style.transform =
    "translateY(40px)";

    secao.style.transition =
    "all 0.8s ease";

});
