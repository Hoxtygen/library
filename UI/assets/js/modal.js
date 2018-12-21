const closeBtn = document.getElementsByClassName('closeBtn')[0];
const formModal = document.getElementById('form-modal');
const bookForm = document.getElementById('addNew');

function openModal() {
  formModal.style.display = 'block';
}

function closeModal() {
  formModal.style.display = 'none';
}


bookForm.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
