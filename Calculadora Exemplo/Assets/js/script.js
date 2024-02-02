const c = (el)=>document.querySelector(el);
const d = (el)=>document.getElementById(el);
const visor = c('.screen');
const calc = c('.calc');

let botao = (num)=>{
    let calc = c('.calc');
    let visor = c('.screen');
    let salvo = calc.visor.value;

    calc.visor.value = salvo+num;
}

let reset = ()=>{
    visor = '';
}

let calcule = ()=>{
    let calc = c('.calc');
    let visor = c('.screen');
    let calcu = calc.visor.value;
    let resultado = eval(calcu);
    
    calc.visor.value = resultado;
}