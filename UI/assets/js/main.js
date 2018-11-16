function getAllBooks() {
  fetch('http://localhost:5001/api/data/books')
    .then(res => res.json())
    .then((parsedData) => {
      const container = document.getElementById('container').innerHTML = `
    ${parsedData.Books.map(book => `
    <div class = 'book-item'>
        <img src = ${book.image}>
        <p><a href = "#">${book.title}</p>
        <p>${book.author}</p>
    </div>
        
        `).join('')}
`;
    });
}
getAllBooks();
