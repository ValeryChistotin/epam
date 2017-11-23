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

var titles = document.querySelectorAll('.rights');
search.addEventListener('input', function(e){
  var booksCount = 0;

  Array.from(titles).forEach(function(item){
    var itemName = item.firstElementChild.textContent;
    if(~itemName.indexOf(e.target.value)){
      containerWidth = currentWidth();
      booksCount++;
      books.style.width = (216 * booksCount) <= containerWidth && 216 * booksCount + 'px';
      item.parentNode.parentNode.style.display = 'flex';
    } else item.parentNode.parentNode.style.display = 'none';
  })
})

// =============================
//   New Book
// =============================

var open = document.getElementById('open');
open.addEventListener('click', function(e){
  e.preventDefault();

  var modal = document.getElementById('modal');

  modal.parentNode.className += ' open';
  modal.parentNode.style.zIndex = 1;
  setTimeout(function(){
    modal.className += ' open';
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