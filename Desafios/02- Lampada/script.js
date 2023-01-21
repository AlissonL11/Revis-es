var lamp = window.document.getElementById('desligada')

function estaQuebrado (){
    return lamp.src.indexOf('quebrada') > -1 //faz procurar a palavra 'quebrada' no script
}

function ligar(){
    if(!estaQuebrado()){
        lamp.src = 'img/acesa.png'
    }
}

function desligar(){
    if(!estaQuebrado()){
        lamp.src = 'img/apagada.png'
    }
}

lamp.addEventListener('click', quebrar)
function quebrar(){
    lamp.src = 'img/quebrada.png'
}