$(document).ready(() => {
  $('#submit').on('click', (event) => {
    console.log('hello, i am clicked');
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
        image_url: imageUrl.val(),
      }),
      success: (response) => {
        console.log(response);
        document.getElementById('bookForm').reset();
      },
      error: (err) => {
        if (err) {
          // console.log(err.responseJSON.message);
          const bookError = err.responseJSON.message;
          console.log(bookError);
          bookError.map((data) => {
            console.log(data.msg);
            const ul = $('#error-message')
            const li = $('<li></li>');
            li.text(data.msg);
            ul.append(li);
          });
        }
      },
    });
  });
});
console.log('Holla at your man anytime');
