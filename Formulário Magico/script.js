function formarFrase() {
let nome = document.getElementById("nome").value;
let idade = document.getElementById("idade").value;
let email = document.getElementById("email").value;
if(email.indexOf('@gmail.com') < 0){
    alert('Coloque um email válido!')
} else {
let sobrenome = document.getElementById("sobrenome").value;
let comfav = document.getElementById("comidafavorita").value;
let cor = document.getElementById("cor").value;
let pai = document.getElementById("nomedopai").value;
let mae = document.getElementById("nomedamae").value;

let frase = "Seu nome é "+nome+" "+sobrenome+" você tem "+idade+" anos de idade, seu email é "+email+" sua comida favorita é "+comfav+", a sua pele é da cor "+cor+" e o nome dos seus pais é "+pai+" e "+mae+".";
alert(frase);
}