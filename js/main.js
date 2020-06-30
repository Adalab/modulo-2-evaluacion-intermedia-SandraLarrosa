console.log('Hola caracola');

//Selectores
const inputNumber = document.querySelector('.js-inputNumber');
const button = document.querySelector('.js-button');
const textTrack = document.querySelector('.js-textTrack');
const tryNumber = document.querySelector('.js-tryNumber');
const textWinner = document.querySelector('.js-textWinner');
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
  tryNumber.innerHTML = attemps;

  const numberValue = parseInt(inputNumber.value);
  console.log(
    `La usuaria ha introducido el número ${numberValue} en el intento ${attemps}`
  );

  if (randonNumber === numberValue) {
    textWinner.innerHTML = '¡Has ganado Campeona!';
    textWinner.classList.add('textWinner');
  } else {
    if (numberValue > 100 || numberValue < 0) {
      textTrack.innerHTML = 'El número debe estar entre el 1 y el 100';
    } else if (numberValue < randonNumber) {
      textTrack.innerHTML = 'Demasiado Bajo';
    } else if (numberValue > randonNumber) {
      textTrack.innerHTML = 'Demasiado Alto';
    }
  }
}

button.addEventListener('click', checkNumber);
