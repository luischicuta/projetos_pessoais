const c = (el)=>document.querySelector(el);
const frase = document.querySelector('.frase');

let start = ()=>{
    let AA = "123453435"
    let BB = "335665897"
    let CC = "751235942"
    let DD = "897656384"
    let EE = "108636523"
    let FF = "247854300"
    let GG = "234567650"
    let HH = "234637439"
    let II = "56l634878"

    setInterval(()=>{
        setTimeout(()=>{
            frase.innerHTML = AA;
        }, 1000);
        setTimeout(()=>{
            frase.innerHTML = BB;
        }, 1060);
        setTimeout(()=>{
            frase.innerHTML = CC;
        }, 1100);
        setTimeout(()=>{
            frase.innerHTML = DD;
        }, 1130);
        setTimeout(()=>{
            frase.innerHTML = EE;
        }, 1180);
        setTimeout(()=>{
            frase.innerHTML = FF;
        }, 1200);
        setTimeout(()=>{
            frase.innerHTML = GG;
        }, 1210);
        setTimeout(()=>{
            frase.innerHTML = HH;
        }, 1230);
        setTimeout(()=>{
            frase.innerHTML = II;
        }, 1240);
    }, 100);
}