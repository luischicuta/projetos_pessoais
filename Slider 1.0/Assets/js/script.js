    
    
    let slide1 = ()=>{
        document.querySelector('.banner').src = "assets/images/sl1.jpg";
        setTimeout(slide2, 2000);
    }
    

    let slide2 = ()=>{
        document.querySelector('.banner').src = "assets/images/sl2.jpg";
        setTimeout(slide3, 2000);
    }
    

    let slide3 = ()=>{
        document.querySelector('.banner').src = "assets/images/sl3.jpg";
        setTimeout(slide1, 2000);
    }


