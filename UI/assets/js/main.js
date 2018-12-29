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
      // console.log(parsedCategories);
      const myData = parsedCategories;
      // console.log(myData)
      const select = document.getElementById('select');

      myData.data.map((data) => {
        console.log(data);
        const option = document.createElement('OPTION');
        const text = document.createTextNode(data.category_name);
        option.appendChild(text);
        select.insertBefore(option, select.lastChild);
      });
    });
}
getAllCategories();


function getAllAuthors() {
  fetch('http://localhost:5001/api/v1/authors')
    .then(res => res.json())
    .then((authors) => {
      console.log(authors);
    });
}
getAllAuthors();
