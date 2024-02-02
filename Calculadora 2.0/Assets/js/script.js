//=========================================
//////////////////////////////
/////Definindo Constantes/////
//////////////////////////////
const c = (el)=>document.querySelector(el);
const d = (el)=>document.getElementById(el);
const visor = c('.screen');
const calc = c('.calc');
//=========================================
//////////////////////////////
////////Modal e Título////////
//////////////////////////////
let start = ()=>{
    let title = c('.title');
    let modal = c('.container');
    title.style.opacity = 0;
    title.style.display = 'block';
    setTimeout(()=>{
        title.style.opacity = 1;
    }, 300);
    modal.style.opacity = 0;
    modal.style.display = 'block';
    setTimeout(()=>{
        modal.style.opacity = 0.8;
    }, 500);

}
//=========================================
//////////////////////////////
///////////Botões/////////////
//////////////////////////////
let botao = (num)=>{
    let calc = c('.calc');
    let visor = c('.screen');
    let salvo = calc.visor.value;

    calc.visor.value = salvo+num;
}
//=========================================
//////////////////////////////
/////////Botão Reset//////////
//////////////////////////////
let reset = ()=>{
    visor = '';
}
//=========================================
//////////////////////////////
//////////Calcular////////////
//////////////////////////////
let calcule = ()=>{
    let calc = c('.calc');
    let visor = c('.screen');
    let calcu = calc.visor.value;
    let resultado = eval(calcu);
    /////////////////////////////
    /////////Loading////////////
    ///////////////////////////
    let loading = c('.loading-off');
    setTimeout(()=>{
        loading.style.display = 'block';
    }, 100);
    setTimeout(()=>{
        calc.visor.value = resultado;
        loading.style.display = 'none';
    }, 3700);
}
//=========================================