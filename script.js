"use strict";

let nextButton = document.createElement('button');
nextButton.classList.add('next-button');  
nextButton.innerHTML = 'Next';
document.body.append(nextButton);

let setupButton = document.createElement('button');
setupButton.classList.add('setup-button');
setupButton.innerHTML = 'Setup';
document.body.append(setupButton);

let gameAreal = document.createElement('div');
gameAreal.classList.add('black');
gameAreal.classList.add('game-areal')
document.body.append(gameAreal);

let cube = document.createElement('div');
gameAreal.append(cube);
cube.classList.add('cube');

let score = document.createElement('div');
score.classList.add('score');
gameAreal.append(score);

let result = document.createElement('div');
result.classList.add('result');
gameAreal.append(result);

let setupWindow = document.createElement('div');
setupWindow.classList.add('hidden');
document.body.append(setupWindow);

let closeButton = document.createElement('div');
closeButton.classList.add('close-button');
setupWindow.append(closeButton);
closeButton.innerHTML = 'X' ;

setupButton.addEventListener('click', function() {
    setupWindow.classList.remove('hidden');
    setupWindow.classList.add('setup-window');
});

closeButton.addEventListener('click', function() {
    setupWindow.classList.remove('setup-window');
    setupWindow.classList.add('hidden');
});

let sum = 0;

nextButton.addEventListener('click', function() {
    let x = Math.ceil(Math.random()*6);
    cube.innerHTML = x;
    score.innerHTML +=  '<em class="x-em">' + x + '</em>';
    sum = sum + Number(x);
    result.innerHTML = 'Sum = ' + sum + ' ;' ;
});