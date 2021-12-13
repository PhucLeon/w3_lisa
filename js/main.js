let modalButtons = document.getElementsByClassName('js-buy-ticket');
let modalOpen = document.querySelector('.js-modal');
let modalClose = document.querySelector('.js-modal-close');
let modalContainer = document.querySelector('.js-modal-container');

function showModalOpen() {
    modalOpen.classList.add('open');
}

function hideModalOpen() {
    modalOpen.classList.remove('open');
}

for(let modalButton of modalButtons) {
    modalButton.addEventListener('click', showModalOpen);
}

modalClose.addEventListener('click', hideModalOpen);
modalOpen.addEventListener('click', hideModalOpen);

// Remove bubbles in JS
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})
