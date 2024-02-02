const c = (el)=>document.querySelector(el);
const frase = document.querySelector('.frase');


//////////////////////////////
///////////Modal/////////////
////////////////////////////
let modalStart = ()=>{
   let modal = c('.modal');

   modal.style.display = 'block';
   modal.style.opacity = 0;
   setTimeout(()=>{
    modal.style.opacity = 0.5;
    modal.style.opacity = 1;
   }, 800);
}
///////////////////////////////////
//////////Fim-Modal///////////////
/////////////////////////////////


////////////////////////////////
///////////Frases//////////////
//////////////////////////////
let frases = ()=>{
    let one = "Gayzin";
    let two = "Maravilhoso(a)";
    let three = "Corno(a)";
    let four = "Zé Pouvinho";
    let five = "Gostoso(a)";
    let six = "Raspa Canela";
    let seven = "Um amorzinho";
    let eight = "Broxa";
    let nine = "Trouxa";
    let ten = "Bocó";
    let load = c('.load');
    let random = Math.floor(Math.random() * 11);

    setTimeout(()=>{
        load.style.display = 'block';
        
        for(let i=0; i <= 10; i++){
            setTimeout(()=>{
                frase.innerHTML = one;
            }, 100);
            setTimeout(()=>{
                frase.innerHTML = two;
            }, 150);
            setTimeout(()=>{
                frase.innerHTML = three;
            }, 200);
            setTimeout(()=>{
                frase.innerHTML = four;
            }, 250);
            setTimeout(()=>{
                frase.innerHTML = five;
            }, 300);
            setTimeout(()=>{
                frase.innerHTML = six;
            }, 350);
            setTimeout(()=>{
                frase.innerHTML = seven;
            }, 400);
            setTimeout(()=>{
                frase.innerHTML = eight;
            }, 450);
            setTimeout(()=>{
                frase.innerHTML = nine;
            }, 500);
            setTimeout(()=>{
                frase.innerHTML = ten;
            }, 550);
            setTimeout(()=>{
                frase.innerHTML = '';
            }, 660);
        }
    }, 250);

    setTimeout(()=>{
        load.style.display = 'none';
        switch(random) {
            case 1:
                frase.innerHTML = one;
                break;
            case 2:
                frase.innerHTML = two;
                break;
            case 3:
                frase.innerHTML = three;
                break;
            case 4:
                frase.innerHTML = four;
                break;
            case 5:
                frase.innerHTML = five;
                break;
            case 6:
                frase.innerHTML = six;
                break;
            case 7:
                frase.innerHTML = seven;
                break;
            case 8:
                frase.innerHTML = eight;
                break;
            case 9:
                frase.innerHTML = nine;
                break;
            case 10:
                frase.innerHTML = ten;
                break;
        }
    }, 3000);
}
/////////////////////////////
////////Fim-Frases//////////
///////////////////////////
