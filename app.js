const bottonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonigual = document.getElementsByName('data-igual')[0];
const botondelete = document.getElementsByName('data-delete');[0];

let result = document.getElementById('result');
let openActual = '';
let openAnterior = '';
let operacion = undefined;

bottonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarnumero(boton.innerText);
    });
});

botonOpera.forEach(function(boton){

});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizardisplay();
});
botonDelete.addEventListener('click', function(){
    clear();
    actualizardisplay();
});

function agregarnumero(num){
    openActual = openActual.toString() + num.toString();
    actualizardisplay();
}

function actualizardisplay(){
        result.value = openActual;


}

function selectOperacion(op){
   
}

function calcular(){
    let calculo;
    const anterior = parseFloat(openAnterior);
    const actual = parseFloat(openActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
        calculo = anterior - actual;    
            break;
        case 'x':
            calculo = anterior * actual
            break;
        case '/':
            calculo = anterior / actual;
            break;

        default:
                  return;

    }
    opeActual = calculo;
    operacion = undefined;
    operAnterior = '';
}

function clear(){
    openActual = '';
    openAnterior = '';
    operacion = undefined;
}

clear();
