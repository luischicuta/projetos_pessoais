function addBola(){
    let bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 400);

    bola.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(elemento){
    document.body.removeChild(elemento);
}

function iniciar(){
    setInterval(addBola, 500);
}