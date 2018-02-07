var bookmarkCount = 0;
var unreadCount = 0; 
var readCount = 0;

function addBookmark() {
  bookmarkCount++;
  unreadCount++;
  $('#bookmark-count').text(bookmarkCount);
  $('#unread-count').text(unreadCount);
};

function removeBookmark() {
  bookmarkCount--;
  $('#bookmark-count').text(bookmarkCount);
};

function addUnread() {
  unreadCount++;
  $('#unread-count').text(unreadCount);
};

function removeUnread() {
  unreadCount--;
  $('#unread-count').text(unreadCount);
};

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

function readButtonToggle() {
  $(this).closest('article').find('.read-button').toggleClass('read-button-read');
  $(this).closest('article').toggleClass('list-item-read');
  $(this).closest('article').find('.delete-button').toggleClass('delete-button-read');
  $(this).closest('article').find('.link-list').toggleClass('link-list-read');
};

function removeArticle() {
  $(this).closest('article').remove('article');
}

function checkFields() {
  $('#enter-button').prop('disabled', false);
  $('#item-input input:text').each(function()  {
    if($(this).val() == '') {
        $('#enter-button').prop('disabled', true);
    }
  });
}

$('#enter-button').on('click', function() {
  listItem();
  addBookmark();
  event.preventDefault();
  $('#item-input').find('input:text, textarea').val('');
  checkFields();
});

$('#list-area').on('click', '.read-button', readButtonToggle);

$('#list-area').on('click', '.delete-button', removeArticle);
$('#list-area').on('click', '.delete-button', removeBookmark);
$('#list-area').on('click', '.delete-button', removeUnread);

$('input:text').keyup(function() {
  $('#enter-button').prop('disabled', checkFields());
});
