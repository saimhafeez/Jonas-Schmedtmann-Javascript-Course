'use strict';

const modal_btns = document.querySelectorAll('.show-modal');

console.log(modal_btns);

const modal = document.querySelector('.modal');

const close_modal_btn = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal);

for (let i = 0; i < modal_btns.length; i++) {
  modal_btns[i].addEventListener('click', showModal);
}

close_modal_btn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
