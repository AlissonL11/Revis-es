const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const data = "17 oct 2025" //data final da contagem regressiva

function countDown() {
    const dataFinal = new Date(data) // transforma a data final em uma constante.
    const hoje = new Date() //pega a data de "hoje" 

    const segTotal = (dataFinal-hoje)/1000; //calculando os segundos: de hoje até a data definida

    const diasTotal = Math.floor(segTotal /60 /60 /24); //pegando o número de dias (inteiro)
    const horaTotal = Math.floor(segTotal /60 /60) % 24; //pegando as horas, sem minutos e segundos
    const minTotal = Math.floor(segTotal /60) % 60; //pegando minutos totais
    const segundosTotal = Math.floor(segTotal) % 60; //pegando os segundos 

    dia.innerHTML = formatoTempo(diasTotal)                 //jogando a informação para a tela do site 
    hora.innerHTML =  formatoTempo(horaTotal)
    minuto.innerHTML = formatoTempo(minTotal)
    segundo.innerHTML = formatoTempo(segundosTotal)

}

function formatoTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo;
}

countDown()
setInterval(countDown, 1000)

