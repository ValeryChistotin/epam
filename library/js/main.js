// =============================
//   Load Books
// =============================

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var response = JSON.parse(xhttp.responseText),
      booksFetch = response.books;

    booksFetch.forEach(function(item){
      var img = document.createElement('img'),
        title = document.createElement('h4'),
        author = document.createElement('p');

      title.className = 'title';

      img.src = item.cover;
      title.textContent = item.title;
      author.textContent = item.author;

      var bookWrapper = document.createElement('div'),
        bookAboutWrapper = document.createElement('div'),
        rightsWrapper = document.createElement('div');

      bookWrapper.className = 'book';
      bookAboutWrapper.className = 'book-about';
      rightsWrapper.className = 'rights';

      // ===============
      //   Rate
      // ===============
      var rateWrapper = document.createElement('div'),
        rateWrapperWrapper = document.createElement('div');

      rateWrapper.className = 'rate';
      rateWrapperWrapper.className = 'rate-wrapper';

      for(var i = 5; i--;){
        var input = document.createElement('input'),
          label = document.createElement('label');

        input.type = 'radio';
        input.className = 'rate-input';
        input.id = 'star-rating-' + (i + 1);
        label.htmlFor = 'stat-rating-' + (i + 1);
        label.className = 'rate-label fa fa-star-o';

        rateWrapperWrapper.appendChild(input);
        rateWrapperWrapper.appendChild(label);
        rateWrapper.appendChild(rateWrapperWrapper);
      }

      rightsWrapper.appendChild(title);
      rightsWrapper.appendChild(author);
      bookAboutWrapper.appendChild(rightsWrapper);
      bookAboutWrapper.appendChild(rateWrapper);
      bookWrapper.appendChild(img);
      bookWrapper.appendChild(bookAboutWrapper);

      books.appendChild(bookWrapper);
    })
  }
};

xhttp.open("GET", "./models/books.json", true);
xhttp.send();

// =============================
//   Search
// =============================

function currentWidth(){
  window.addEventListener('resize', function(){
    containerWidth = container.getBoundingClientRect().width;
  })
  return containerWidth;
}

var books = document.getElementById('books'),
  search = document.getElementById('search'),
  container = document.querySelector('.container'),
  containerWidth = container.getBoundingClientRect().width;

var titles = document.getElementsByClassName('rights');
search.addEventListener('input', function(e){
  newNotification('Search');

  var booksCount = 0;
  Array.from(titles).forEach(function(item){
    var itemName = item.firstElementChild.textContent,
      bookWidth = 216;
    if(~itemName.indexOf(e.target.value)){
      containerWidth = currentWidth();
      booksCount++;
      books.style.width = (bookWidth * booksCount) <= containerWidth && bookWidth * booksCount + 'px';
      item.parentNode.parentNode.style.display = 'flex';
    } else item.parentNode.parentNode.style.display = 'none';
  })
})

// =============================
//   New Book
// =============================

var open = document.getElementById('open');
open.addEventListener('click', function(e){
  newNotification('New Book');
  e.preventDefault();

  var modal = document.getElementById('modal'),
    scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight);

  modal.style.height = scrollHeight + 'px';

  modal.parentNode.classList.add('open');
  modal.parentNode.style.zIndex = 1;
  setTimeout(function(){
    modal.classList.add('open');
  }, 350);

  document.body.addEventListener('click', function(e){
    var target = e.target;
    if(target.classList.contains('open')){
      modal.classList.remove('open');
      modal.parentNode.classList.remove('open');
      setTimeout(function(){
        modal.parentNode.style.zIndex = -1;
      }, 400);
    }
  })
})

var close = document.getElementById('close');
close.addEventListener('click', function(e){
  e.preventDefault();

  var modal = document.getElementById('modal');

  modal.classList.remove('open');
  modal.parentNode.classList.remove('open');
  setTimeout(function(){
    modal.parentNode.style.zIndex = -1;
  }, 400);
})

// =============================
//   Notifications
// =============================

function newNotification(action){
  var notifications = document.getElementById('notifications'),
    notificationWrapper = document.createElement('div'),
    actionWrapper = document.createElement('span'),
    noteWrapper = document.createElement('div'),
    icon = document.createElement('i'),
    note = document.createElement('p'),
    time = document.createElement('p'),
    date = new Date().getTime(),
    interval,
    timePassed,
    minutes = 0;

  notificationWrapper.className = 'notification';
  noteWrapper.className = 'note';
  time.className = 'time';
  icon.className = 'fa fa-clock-o';
  actionWrapper.textContent = action;

  note.appendChild(actionWrapper);
  note.appendChild(document.createTextNode(' Action'));
  interval = setInterval(function(){
    timePassed = Math.round((new Date().getTime() - date) / 1000);
    if(timePassed >= 60){
      time.textContent = ++minutes + ' minutes ago';
      date = new Date().getTime();
    } else if(!minutes) time.textContent = timePassed + ' seconds ago';
  }, 1000);

  noteWrapper.appendChild(note);
  noteWrapper.appendChild(time);
  notificationWrapper.appendChild(icon);
  notificationWrapper.appendChild(noteWrapper);

  notifications.appendChild(notificationWrapper);
}