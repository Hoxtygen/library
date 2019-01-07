/* eslint-disable no-multi-assign */
function getAllBooks() {
  fetch('http://localhost:5001/api/v1/books')
    .then(res => res.json())
    .then((parsedData) => {
      const bookContainer = document.getElementById('book-container').innerHTML = `
    ${parsedData.data.map(data => `
    <div class="col-3 mx">
            <figure class = 'single-book bg-conf'>
                <img src = ${data.image_url} class = 'img-fluid'>
                <figcaption>
                    <h6 class = "text-center book-title">${data.title}</h6>
                    <p class = "text-center author-name">${data.author_name}</p>
                </figcaption>
            </figure>
    </div>
        
        
        `).join('')}
`;
    });
}
getAllBooks();


function getAllCategories() {
  fetch('http://localhost:5001/api/v1/categories')
    .then(res => res.json())
    .then((parsedCategories) => {
      const myData = parsedCategories;
      const select = document.getElementById('categoryId');
      myData.data.map((data) => {
        const option = document.createElement('OPTION');
        option.value = data.category_id;
        option.text = data.category_name;
        select.insertBefore(option, select.lastChild);
      });
    });
}
getAllCategories();

function getAllAuthors() {
  fetch('http://localhost:5001/api/v1/authors')
    .then(res => res.json())
    .then((parsedAuthors) => {
      //  console.log(parsedAuthors);
      const myData = parsedAuthors;
      const select = document.getElementById('authorId');
      myData.data.map((data) => {
        const option = document.createElement('OPTION');
        option.value = data.author_id;
        option.text = data.author_name;
        select.insertBefore(option, select.lastChild);
      });
    });
}

getAllAuthors();
