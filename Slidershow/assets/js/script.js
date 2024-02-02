
//Para não deixar todos sliders aparecendo de uma vez: 
let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`

//Para colocar os controles no meio:
document.querySelector('.slider--controls').style.height =
 `${document.querySelector('.slider').clientHeight}px`;

//Botões

let goPrev = ()=> {
    currentSlide--;  //Diminuir o slide atual
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

let goNext = ()=>{
    currentSlide++; //Aumentar o slide atual
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }
    updateMargin();
}

let updateMargin = ()=>{
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth); //Slide atual * largura da tela
    document.querySelector('.slider--width').style.marginLeft =
     `-${newMargin}px`;
}

setInterval(goNext, 5000);