//////////////////////////
/*EVENTOS:*/
//////////////////////////

//Evento de olho no body, sempre que executar a ação de apertar determinada tecla, vai acionar uma função que como parâmetro recebe o próprio evento:

document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase()); //Pega o nome da tecla e deixa em letra minuscula
});

//Evento de pressionar o botão e tocar a sequencia
//Selecionar o botão através da classe composer do css e tag button do html:
document.querySelector('.composer button').addEventListener('click', ()=>{
    //Salvar o que está escrito no input em uma variável:
    let song = document.querySelector('#input').value;

    //Só vai executar se o compo input "song" estiver com algo escrito:
    if(song !== '') {
        //Vai separar cada letra da composição em um array:
        let songArray = song.split('');
        //Função para tocar as teclas do Array:
        playComposition(songArray);
    }
});

//////////////////////////
/*FUNÇÕES:*/
//////////////////////////

//Função para tocar o som:

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); //salva em uma variável a tecla pressionada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`) //salva todas as divs que possuem "data-key"

    //Se estiver pressionando uma tecla:
    if(audioElement){
        audioElement.currentTime = 0; //Reinicia o audio toda vez que apertar a tecla
        audioElement.play(); //A função play basicamente faz a tag audio do HTML ser acionada
    }

    //Se estiver pressionando uma das teclas de som (Q, W, E, A, S, D, Z, X, C):
    if(keyElement){
        //Vai adicionar a classe "active" do css no elemento:
        keyElement.classList.add('active');

        //Vai remover a classe "active" do css do elemento após alguns segundos:
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

//Função para tocar a composição do input:

function playComposition(songArray){
    let wait = 0;

    //Para cada tecla do Array:
    for(let songItem of songArray){

        setTimeout(()=>{
            playSound(`key${songItem}`);
    }, wait)

    wait += 250; //Cada vez que executar um item do Array, vai aumentar o intervalo em 250 milesegundos
        
    }
}