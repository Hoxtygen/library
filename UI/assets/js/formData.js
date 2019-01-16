function getAllCategories() {
  fetch('/api/v1/categories')
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
  fetch('/api/v1/authors')
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
