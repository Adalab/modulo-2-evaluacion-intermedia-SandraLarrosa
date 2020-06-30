console.log('Hola caracola');

//Selectores
const inputNumber = document.querySelector('.js-inputNumber');
const button = document.querySelector('.js-button');
const textTrack = document.querySelector('.js-textTrack');
const tryNumber = document.querySelector('.js-tryNumber');

//Función que genera un número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randonNumber = getRandomNumber(100);

console.log(`El número aleatorio generado es: ${randonNumber}`);



function checkNumber(ev) {
    ev.preventDefault();
    console.log('Has pulsado la tecla')
}


button.addEventListener('click', checkNumber);