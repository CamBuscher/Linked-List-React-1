// // <h1 class="important-header">Dinosaurs are awesome.</h1>

// // <input class="new-text" value="Wow">

// // <button class="change-me">Change Me</button>



// // Grab the user input from two i.d's and append them to the list area section upon a button click


function listItem (){
  var userTitle = document.querySelector('#user-title').value;
  var userUrl = document.querySelector('#user-url').value;
  $('#list-area').append(`
    <article class="list-item">
      <h2>${userTitle}</h2>
      <hr>
      <p><a href="http://${userUrl}" class="link-list" target="_blank">
      ${userUrl}</a></p>
      <hr>
      <button class="read-button">Read</button>
      <button class="delete-button">Delete</button>
    </article>`);
};

$('#enter-button').on('click', function() {
  listItem();
  event.preventDefault();
});

$('#list-area').on('click', '.read-button', readButtonToggle);

function readButtonToggle() {
  $(this).closest('article').find('.read-button').toggleClass('read-button-read');
  $(this).closest('article').toggleClass('list-item-read');
  $(this).closest('article').find('.delete-button').toggleClass('delete-button-read');
  $(this).closest('article').find('.link-list').toggleClass('link-list-read');
};

$('#list-area').on('click', '.delete-button', removeArticle);

function removeArticle() {
  $(this).closest('article').remove('article');
}


