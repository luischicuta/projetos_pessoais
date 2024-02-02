function piscar(){
    let background = document.getElementById("background");

    if(background.classList.contains("background-white") == true){
        background.classList.remove("background-white");
        background.classList.add("background-black");
    } else {
        background.classList.add("background-white");
    }
    setInterval(piscar, 1000);
}