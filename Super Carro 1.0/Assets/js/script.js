const on = document.querySelector('.ligar');
const off = document.querySelector('.desligar');
const acelerar = document.querySelector('.acelerar');
const freiar = document.querySelector('.freiar');
const painel = document.querySelector('.painel');
const c = (el)=>document.querySelector(el);
const soundLigar = document.querySelector('.sound-ligar');
const soundAcelerar = document.querySelector('.sound-acelerar');
const soundFreiar = document.querySelector('.sound-freiar');

const carro = {
    nome:'X23',
    modelo:'Sport',
    cavalos:'12 cavalos',
    ligado:false,
    andando:false,
    parado:true,
    ligar:function(){
        if(this.ligado == false){
            carro.ligado = true;
            alert(`O carro ${this.nome} ${this.modelo} foi ligado com uma potência de ${this.cavalos}.`);
            painel.innerHTML = `${carro.nome} ${carro.modelo} está ligado e parado.`;
            soundAcelerar.style.display = 'none';
            soundFreiar.style.display = 'none';
            soundLigar.style.display = 'block';
        } else if (this.ligado == true){
            alert(`O carro ${carro.nome} ${carro.modelo} já esta ligado`);
        }
    },
    acelerar:function(){
        if(carro.ligado == true){
            if(carro.andando == false){
            this.parado = false;
            this.andando = true;
            alert(`O ${this.nome} ${this.modelo} está andando! Vrrruuum...`);
            painel.innerHTML = `${carro.nome} ${carro.modelo} está ligado e andando.`;
            Audio.muted = true;
            soundAcelerar.style.display = 'block';
            soundFreiar.style.display = 'none';
            soundLigar.style.display = 'none';
            } else {
                alert(`O carro já está andando!`);
            }
        } else{
            alert(`O carro está desligado.`)
        }
    },
    freiar:function(){
        if(carro.ligado == true){
            if(carro.andando == true){
                this.andando = false;
                this.parado = true;
                alert(`${carro.nome} ${carro.modelo} freiou e parou! Iiirrrggg!`);
                painel.innerHTML = `${carro.nome} ${carro.modelo} está ligado e parado.`;
            soundAcelerar.style.display = 'none';
            soundFreiar.style.display = 'block';
            soundLigar.style.display = 'none';
            } else {
                alert(`${carro.nome} ${carro.modelo} já está parado.`)
            }
        } else {
            alert(`${carro.nome} ${carro.modelo} está desligado.`)
        }
    },
    desligar:function(){
        if(carro.ligado == true){
            if(carro.andando == false){
                carro.parado = true;
                carro.ligado = false;
                alert(`${carro.nome} ${carro.modelo} foi desligado!`);
                painel.innerHTML = `${carro.nome} ${carro.modelo} está desligado.`;
            soundAcelerar.style.display = 'none';
            soundFreiar.style.display = 'none';
            soundLigar.style.display = 'none';
            } else {
                alert(`${carro.nome} ${carro.modelo} ainda está andando!`)
            }
        } else {
            alert(`${carro.nome} ${carro.modelo} já está desligado.`);
        }
    }
}