function verificar(){
    let n1 = document.getElementById("n1").innerHTML;
    let n2 = document.getElementById("n2").value;

    if(n2 > 100 || n2 == ""){
        alert("Digite um número APENAS entre 0 e 100!");
    } else if(n2 == n1){
        alert("VOCÊ ACERTOU! "+n1+" e "+n2+" são o mesmo número!");
    } else {
        alert("VOCÊ ERROU! "+n1+" e "+n2+" são diferentes!")
    }
    reset();
}

function reset(){
    document.getElementById("n2").value = null;

    let random = Math.floor(Math.random() * 100);

    document.getElementById("n1").innerHTML = random;
}