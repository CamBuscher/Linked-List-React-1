var bookmarkCount = 0;

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

var unreadCount = 0; 

function addUnread() {
  unreadCount++;
  $('#unread-count').text(unreadCount);
};

function removeUnread() {
  unreadCount--;
  $('#unread-count').text(unreadCount);
};

var readCount = 0;

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
  addBookmark();
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
$('#list-area').on('click', '.delete-button', removeBookmark);
$('#list-area').on('click', '.delete-button', removeUnread);

function removeArticle() {
  $(this).closest('article').remove('article');
}

$('input:text').keyup(function() {
  $('#enter-button').prop('disabled', checkFields());
});

function checkFields() {
  var allFilled = true;
  $('#enter-button').prop('disabled', false);
  $('#item-input input:text').each(function()  {
    if($(this).val() == '') {
        allFilled = false; 
        $('#enter-button').prop('disabled', true);
    }
  });
  console.log (allFilled);
}
