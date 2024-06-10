import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function construyeCard(titulo,descripcion,url,imagen){
    const video = document.createElement("li");
    video.className="videos__item";
    
    video.innerHTML=`<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; geolocation"
    allowfullscreen></iframe>
<div class="descripcion-video">
    <img src="${imagen}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
</div>`

    return video;
}


//********************************/ Funcion que crea cards donde se mostraran los videos  *******************************
    async function listaVideos(){
        const listaAPI = await conexionAPI.listarVideos();
    //* realizar el recorrido

        listaAPI.forEach(video => lista.appendChild(construyeCard(video.titulo,video.descripcion,video.url,video.imagen)));
    }
    
    listaVideos();