/* eslint-disable no-undef */
/* eslint-disable camelcase */
function validateForm() {
  console.log('you clikce me');
  const title = document.getElementById('title');
  const pubYear = document.getElementById('pub_year');
  const publisher = document.getElementById('publisher');
  const image_Url = document.getElementById('imageUrl');
  let valid = true;

  if (!title || title.value.length <= 5) {
    title.className = 'wrong-input';
    title.nextElementSibling.innerHTML = 'title can neither be blank nor less than six characters';
    valid = false;
  }

  if (!pubYear || pubYear.value.length < 4 || typeof pubYear.value !== 'number') {
    title.className = 'wrong-input';
    title.nextElementSibling.innerHTML = 'Invalid publication year.Example 1987';
    valid = false;
  }

  if (!publisher) {
    publisher.className = 'wrong-input';
    publisher.nextElementSibling.innerHTML = 'Publisher cannot be blank';
    valid = false;
  }

  if (!image_Url) {
    image_Url.className = 'wrong-input';
    image_Url.nextElementSibling.innerHTML = 'image_Url cannot be empty';
    valid = false;
  }
  return valid;
}


function removeMessage() {
  const errorInput = document.querySelectorAll('.wrong-input');
  [].forEach.call(errorInput, (el) => {
    el.classList.remove('.wrong-input');
  });

  const errorParagraph = document.querySelectorAll('.error');
  [].forEach.call(errorInput, (el) => {
    el.innerHTML = '';
  });
}
