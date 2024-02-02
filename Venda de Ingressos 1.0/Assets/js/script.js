const c = (el)=>document.querySelector(el);
const d = (el)=>document.getElementById(el);
let timer;


let start = ()=>{
   let loadBg = d("aside");
   let loadBox = c('.loading-box');
   let mainModal = c('.main-modal');

   loadBg.style.display = 'block';
   loadBox.style.display = 'block';
   mainModal.style.opacity = 0.1;

    setTimeout(()=>{
        loadBg.style.opacity = '0';
        loadBox.style.opacity = '0';
        loadBg.style.display = 'none';
        loadBox.style.display = 'none';
        mainModal.style.display = 'block';
    }, 4000);

    mainModal.style.opacity = 1;
    clockOn();
}

let clock = ()=>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if(h < 10 || m < 10 || s < 10){
    let squareh = document.getElementById("hora").innerHTML = `0${h}`;
    let squarem = document.getElementById("min").innerHTML = `0${m}`;
    let squares = document.getElementById("seg").innerHTML = `0${s}`;
    } else if(h >= 10 || m >= 10 || s >= 10) {
    let squareh = document.getElementById("hora").innerHTML = `${h}`;
    let squarem = document.getElementById("min").innerHTML = `${m}`;
    let squares = document.getElementById("seg").innerHTML = `${s}`;
    }
}

let clockOn = ()=>{
    timer = setInterval(clock, 0);
}

let filmModal = ()=>{
    let filmModal = c('.film-modal');
    let mainModal = c('.main-modal');

    mainModal.style.opacity = 0.5;
    filmModal.style.opacity = 0.1;
    setTimeout(()=>{
        mainModal.style.opacity = 0;
        mainModal.style.display = 'none';
        filmModal.style.opacity = 1;
    }, 200);

    filmModal.style.display = 'block';
}

let mainMenu = ()=>{
    let filmModal = c('.film-modal');
    let mainModal = c('.main-modal');

    filmModal.style.opacity = 0.5;
    setTimeout(()=>{
        filmModal.style.opacity = 0;
        filmModal.style.display = 'none';
    }, 200);
    mainModal.style.opacity = 1;
    mainModal.style.display = 'block';
}

let mainMenuFinish = ()=>{
    window.location.reload(true);
}

let exit = ()=>{
    let exitMenu = c('.exit');

    exitMenu.style.display = 'block';
    exitMenu.style.opacity = 0;
    setTimeout(()=>{
        exitMenu.style.opacity = 1;
    }, 200);
}

let cancel = ()=>{
    let exitMenu = c('.exit');

    exitMenu.style.opacity = 0.5;
    setTimeout(()=>{
        exitMenu.style.opacity = 0;
        exitMenu.style.display = 'none';
    }, 500);
}

let buy = ()=>{
    let filmModal = c('.film-modal');
    let buyModal = c('.buy-modal');
    
    filmModal.style.opacity = 0.5;
    buyModal.style.display = 'block';
    buyModal.style.opacity = 0;
    setTimeout(()=>{
        filmModal.style.opacity = 0;
        filmModal.style.display = 'none';
        buyModal.style.opacity = 1;
    }, 200);
}

let buyBack = ()=>{
    let buyModal = c('.buy-modal');
    let filmModal = c('.film-modal');

    buyModal.style.opacity = 0.5;
    filmModal.style.opacity = 0;
    filmModal.style.display = 'block';
    setTimeout(()=>{
        buyModal.style.opacity = 0;
        buyModal.style.display = 'none';
        filmModal.style.opacity = 1;
    }, 200);
}

let full = ()=>{
    let fullModal = c('.full');
    fullModal.style.opacity = 0;
    fullModal.style.display = 'block';
    setTimeout(()=>{
        fullModal.style.opacity = 1;
    }, 200);
}

let fullExit = ()=>{
    let fullModal = c('.full');
    fullModal.style.opacity = 0.5;
    setTimeout(()=>{
        fullModal.style.opacity = 0;
        fullModal.style.display = 'none';
    }, 200);
}

let buyConfirm = ()=>{
    let cpf = c('.form-quest-cpf');
    let cpf2 = c('.cpf2');
    let inteira = c('.form-quest-inteira');
    let meia = c('.form-quest-meia');
    let ingresso = c('.ingresso');
    let finishModal = c('.finish-modal');
    let buyModal = c('.buy-modal');

    if(cpf.value != '' && cpf2.value != ''){
        ingresso.style.opacity = 0.5;
        ingresso.style.display = 'block';
        setTimeout(()=>{
            ingresso.style.opacity = 1;
            ingsInt.innerHTML = `Interas: ${inteira.value}`;
            ingsMei.innerHTML = `Meias: ${meia.value}`;
        }, 200);
    } else if (cpf.value == '' && cpf2.value == '') {
        buyModal.style.opacity = 0.5;
        finishModal.style.opacity = 0.5;
        finishModal.style.display = 'block';
        setTimeout(()=>{
            buyModal.style.opacity = 0;
            buyModal.style.display = 'none';
            finishModal.style.opacity = 1;
            finishModal.style.display = 'block';
        }, 200);
    }
}

let finishBack = ()=>{
    let finishModal = c('.finish-modal');
    let buyModal = c('.buy-modal');
    let payModal = c('.pay');

    payModal.style.opacity = 0.5;
    finishModal.style.opacity = 0.5;
    buyModal.style.opacity = 0;
    setTimeout(()=>{
        payModal.style.opacity = 0;
        payModal.style.display = 'none';
        finishModal.style.opacity = 0;
        finishModal.style.display = 'none';
        buyModal.style.opacity = 1;
        buyModal.style.display = 'block';
    }, 200);
}

let finish = ()=>{
    let payModal = c('.pay');
    payModal.style.opacity = 0.5;
    setTimeout(()=>{
        payModal.style.opacity = 1;
        payModal.style.display = 'block';
    }, 200);
}

let end = ()=>{
    let payModal = c('.pay');
    let finishModal = c('.finish-modal');
    let ingresso = c('.ingresso');
    let buyModal = c('.buy-modal');

    payModal.style.opacity = 0.5;
    setInterval(()=>{
        payModal.style.opacity = 0;
        payModal.style.display = 'none';
        finishModal.style.display = 'none';
        buyModal.style.opacity = 1;
        buyModal.style.display = 'block';
        ingresso.style.display = 'block';
        ingresso.style.opacity = 1;
    }, 200);
}
