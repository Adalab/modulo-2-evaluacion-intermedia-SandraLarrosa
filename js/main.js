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

let attemps = 0;

function checkNumber(ev) {
  ev.preventDefault();

  attemps++;

  const numberValue = parseInt(inputNumber.value);
  console.log(
    `La usuaria ha introducido el número ${numberValue} en el intento ${attemps}`
  );
}

button.addEventListener('click', checkNumber);
