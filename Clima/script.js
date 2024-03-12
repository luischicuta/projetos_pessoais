document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault(); //Função que previne o comportamento padrão que o formulário teria
    let input = document.querySelector('#searchInput').value; //Pegar e salvar o que o usuário digitou no input

    if(input !== ''){
        clearInfo();
        showWarning('Carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=1b9231f7599da38c77df4c801fb3e761&units=metric&lang=pt_br`; //encodeURI transforma a frase com espaço em uma frase que pode ser usada em links
        let results = await fetch(url); //Vai fazer a requisição e só vai executar a próxima linha do código quando receber a API
        let json = await results.json(); //Ao receber, vai transformar em json

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg,
            })
        } else {
            clearInfo();
            showWarning('Localização não foi encontrada.')
        }
    }

})

//Função para mostrar as informações requisitadas no Input
function showInfo(json){
    clearInfo();
    showWarning('');
    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;

}

//Função de limpar a tela
function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}

//Função do loading enquanto aguarda a requisição
function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg //Vai exibir o aviso na tela 
}
