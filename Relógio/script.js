let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//Função que faz o relógio funcionar
function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; //Relógio Digital

    //Funcionameno do relógio análógico
    let sDeg = ((360 / 60) * second) - 90; //Calculo da posição do ponteiro de segundos
    let mDeg = ((360 / 60) * minute) - 90; //Calculo da posição do ponteiro de minutos
    let hDeg = ((360 / 12) * hour) - 90; //Calculo da posição do ponteiro de horas


    sElement.style.transform = `rotate(${sDeg}deg)`; //Ponteiro dos segundos
    mElement.style.transform = `rotate(${mDeg}deg)`; //Ponteiro dos minutos
    hElement.style.transform = `rotate(${hDeg}deg)`; //Ponteiro das horas
}

//Função que adiciona o número 0 na frente de números com 1 casa decímal
function fixZero(time){
    return time < 10 ? `0${time}` : time; //Se a hora for menor do que 10, vai contatena com 0 se não só mostra a hora do timer mesmo
}


//Função para criar um loop infinito do código de tanto em tanto tempo
setInterval(updateClock, 1000); //Vai executar a função updateClock() a cada 1 segundo
updateClock();