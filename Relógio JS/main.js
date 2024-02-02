let timer;
let timermil;

function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let squareh = document.getElementById("hora").innerHTML = h;
    let squarem = document.getElementById("min").innerHTML = m;
    let squares = document.getElementById("seg").innerHTML = s;
}

function showMil(){
    let d2 = new Date();
    let mil = d2.getMilliseconds();

    let squaremil = document.getElementById("mil").innerHTML = mil;
}

function comecar(){
    timer = setInterval(showTime, 0);
    timermil = setInterval(showMil, 0);
}

function parar(){
    clearInterval(timer);
    clearInterval(timermil);
}

function zerar(){
    parar();
    let d3 = new Date();
    let h2 = '00';
    let m2 = '00';
    let s2 = '00';
    let mil2 = '00';

    let squareh = document.getElementById("hora").innerHTML = h2;
    let squarem = document.getElementById("min").innerHTML = m2;
    let squares = document.getElementById("seg").innerHTML = s2;
    let squaremil = document.getElementById("mil").innerHTML = mil2;
}

