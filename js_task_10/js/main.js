// =============================
//   Task 1
// =============================

var accordion = document.getElementById('accordion');
accordion.addEventListener('click', function(e){
  if(e.target.classList.contains('accordion-control')){
    var panel = e.target.nextElementSibling;

    panel.classList.toggle('active');
  }
})

// =============================
//   Task 2
// =============================

function random(min, max){
  return Math.round(Math.random() * (max + 1 - min) + min);
}

function generateColor(){
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

var start = document.getElementById('start');

start.addEventListener('click', function(){
  var el = document.createElement('div'),
    style = {
      "width": random(100, 200) + "px",
      "height": random(50, 100) + "px",
      "background-color": generateColor(),
      "margin": random(5, 100) + "px",
      "border-radius": "5px"
    }

  el.className = 'draggable';
  el.style.cursor = 'move';
  for(var prop in style) el.style[prop] = style[prop];

  document.body.appendChild(el);
})

// ===================
//   Drag & Drop
// ===================

var dragObject = {};

document.addEventListener('mousedown', function(e){
  if(e.which != 1) return;

  var el = e.target.closest('.draggable');
  if(!el) return;

  dragObject.element = el;
  dragObject.downX = e.pageX;
  dragObject.downY = e.pageY;
})

document.addEventListener('mousemove', function(e){
  if(!dragObject.element) return;
  if(!dragObject.avatar){
    var moveX = e.pageX - dragObject.downX,
      moveY = e.pageY - dragObject.downY;
    if(Math.abs(moveX) < 3 && Math.abs(moveY) < 3) return;

    dragObject.avatar = createAvatar(e);
    if(!dragObject.avatar){
      dragObject = {};
      return;
    }

    var coords = getCoords(dragObject.avatar);
    dragObject.shiftX = dragObject.downX - coords.left;
    dragObject.shiftY = dragObject.downY - coords.top;

    startDrag(e);
  }

  dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
  dragObject.avatar.style.top = e.pageY > start.offsetTop && e.pageY - dragObject.shiftY + 'px';

  return false;
})

function createAvatar(e){
  var avatar = dragObject.element,
    old = {
      parent: avatar.parentNode,
      nextSibling: avatar.nextSibling,
      position: avatar.position || '',
      left: avatar.left || '',
      top: avatar.top || '',
      zIndex: avatar.zIndex || ''
    }

  avatar.rollback = function(){
    old.parent.insertBefore(avatar, old.nextSibling);
    avatar.style.position = old.position;
    avatar.style.left = old.left;
    avatar.style.top =  old.top;
    avatar.style.zIndex = old.zIndex;
  }

  return avatar;
}

function startDrag(e){
  var avatar = dragObject.avatar;

  document.body.appendChild(avatar);
  avatar.style.zIndex = 1;
  avatar.style.position = 'absolute';
}

document.addEventListener('mouseup', function(e){
  if(dragObject.avatar) finishDrag(e);
  dragObject = {};
})

function finishDrag(e){
  var dropElem = findDroppable(e);

  if (!dropElem) onDragCancel(dragObject);
  else onDragEnd(dragObject, dropElem);
}

onDragEnd = function(dragObject, dropElem){};
onDragCancel = function(dragObject){};

function findDroppable(event){
  dragObject.avatar.hidden = true;
  var el = document.elementFromPoint(event.clientX, event.clientY);
  dragObject.avatar.hidden = false;
  if(el == null) return null;
  return el.closest('.droppable');
}

function getCoords(element){
  var box = element.getBoundingClientRect();

  return{
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}