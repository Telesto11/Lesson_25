// Строгий режим
"use strict"



const search = document.querySelector('.domashka');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.domashka__icon')) {
		search.classList.toggle('_active');
	}
	if (!event.target.closest('.domashka')) {
		search.classList.remove('_active');
	}
}



document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		search.classList.remove('_active');
	}
});


const txtItem = document.querySelector('.domashka__input');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.text__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}