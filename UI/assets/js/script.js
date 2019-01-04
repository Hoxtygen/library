$(document).ready(() => {
  $('#bookForm').on('submit', (event) => {
    const title = $('#title');
    const author_id = $('#authorId');
    const pubyear = $('#pub_year');
    const category_id = $('#categoryId');
    const publisher = $('#publisher');
    const imageUrl = $('#imageUrl');
    // const bookData =
    event.preventDefault();
    $.ajax({
      url: 'http://localhost:5001/api/v1/books/',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        title: title.val(),
        author_id: author_id.val(),
        pubyear: pubyear.val(),
        category_id: category_id.val(),
        publisher: publisher.val(),
        imageUrl: imageUrl.val(),
      }),
      success: (response) => {
        console.log(response);
      },
      failure: (err) => {
        if (err) {
          console.log(err);
        }
      },
    });
  });
});
console.log('Holla at your man anytime');
