const juegos = [
    {
        nombre: "Geometry Dash",
        descripcion: "Juego rítmico de plataformas por RobTop.",
        link: "https://www.mediafire.com/file/zj60g00igntlyje/Geometry_Dash.zip/file"
    },
    {
        nombre: "Craftsman PC PORT",
        descripcion: "Inspirado en Minecraft, ahora en PC.",
        link: "https://www.mediafire.com/file/vfmcihtbi018ykx/Craftsman_1.18.7z/file"
    },
    {
        nombre: "Sonic Adventure DX",
        descripcion: "Versión mejorada del juego original de Dreamcast.",
        link: "https://www.mediafire.com/file/fid8brqdsyy1v1e/Sonic_Adventure_DX.7z/file"
    },
    {
        nombre: "Sonic Heroes PC PORT",
        descripcion: "Juego de plataformas 3D con múltiples personajes.",
        link: "https://www.mediafire.com/file/lddtbf3utvmvay9/sonic-heroes-win-files-en.zip/file"
    },
    {
        nombre: "Ben 10 HERO TIME",
        descripcion: "Fan game de acción basado en la serie original.",
        link: "https://www.mediafire.com/file/qbx22v24jxshud5/HERO_TIME.rar/file"
    },
    {
        nombre: "Sonic Riders",
        descripcion: "Sonic Riders es un juego de carreras futuristicas con los personajes de sonic",
        link: "https://www.mediafire.com/file/z7stlnmsrk2tu0x/SRD_iss95.rar/file"
    },

    {   nombre: "Office 2021",
        descripcion: "Descripción del programa 3.",
        link: "https://qiwi.gg/file/igF18276-Office2019v"
    },

    {
        nombre: "PhotoShop CS6",
        descripcion: "Photoshop es un programa de edición de imágenes y diseño gráfico",
        link: "https://www.mediafire.com/file/m771o0rmiszryq3/Photoshop_cs6.rar/file"
    
    },

    {
        nombre: "Sony Vegas 17",
        descripcion: "Sony Vegas, ahora conocido como Vegas Pro, es un programa de edición de video y audio para PC.",
        link: "https://www.mediafire.com/file/an10mnu65daxmgi/VEGAS_PRO_17.0.0.284.rar/file"

    },

];

const buscador = document.getElementById("buscador");
const resultados = document.getElementById("resultados");

buscador.addEventListener("input", function () {
    const texto = buscador.value.toLowerCase();
    resultados.innerHTML = "";

    const encontrados = juegos.filter(juego =>
        juego.nombre.toLowerCase().includes(texto) ||
        juego.descripcion.toLowerCase().includes(texto)
    );

    if (encontrados.length === 0 && texto !== "") {
        resultados.innerHTML = "<p>No se encontraron resultados.</p>";
    } else {
        encontrados.forEach(juego => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h3 id="item_titulo">${juego.nombre}</h3>
                <p id="item_titulo">${juego.descripcion}</p>
                <a href="${juego.link}" style="color:lightblue;" target="_blank">Descargar</a>
                <hr style="border-color:white;">
            `;
            resultados.appendChild(div);
        });
    }
});

const titulo = document.getElementsByClassName("item_titulo")

titulo.style.color = "white"

// CopyRight: D4rk1MRX