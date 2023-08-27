const horas = document.querySelector(".hr");
const min = document.querySelector(".min");
const seg = document.querySelector(".seg");

const tempo = setInterval(function time (){
    let horario = new Date();
    let hora = horario.getHours();
    let minutos = horario.getMinutes();
    let segundos = horario.getSeconds();

    if(segundos < 10){
        segundos = '0' + segundos;
    }
    if(minutos < 10){
        minutos = '0' + minutos;
    }
    if(hora < 10){
        hora = '0' + hora;
    }
    
horas.textContent = hora;
min.textContent = minutos;
seg.textContent = segundos;
})