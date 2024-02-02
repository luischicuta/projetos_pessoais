function verificar(){
    let n1 = document.getElementById("n1").innerHTML;
    let n2 = document.getElementById("n2").value;

    if(n1 == n2){
        alert("Você acertou! "+n1+" e "+n2+" são iguais!");
    } else {
        alert("Você errou "+n1+" e "+n2+" são diferentes!")
    }

    reset();
}



function reset(){
    document.getElementById("n2").value = null;

    let random = Math.floor(Math.random() * 100);

    document.getElementById("n1").innerHTML = random;
}