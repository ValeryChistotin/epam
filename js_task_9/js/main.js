// =============================
//  Task 1
// =============================

var ul = document.getElementById('list');

var li = document.createElement('li'),
  a = document.createElement('a');

a.appendChild(document.createTextNode('DOM Is Awesome'));
li.appendChild(a);

function prepend(container, newElement){
  var first = container.firstElementChild;
  container.insertBefore(newElement, first);
}

prepend(ul, li);

// =============================
//  Task 2
// =============================

var sub = document.getElementById('sub-list');

function deleteTextNodes(element){
  if(sub.parentNode){
    sub.parentNode.removeChild(sub);
  }
}

// deleteTextNodes(sub);

// =============================
//  Task 3
// =============================

var li = document.querySelector('ul li:last-child');

function deleteTextNodes(element){
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
}

// deleteTextNodes(li);

// =============================
//  Task 4
// =============================

function scanDOM(nodes){
  while(nodes.firstChild){
    var tag = nodes.firstChild.nodeName.toLowerCase(),
      className = nodes.firstChild.className,
      id = nodes.firstChild.id;

    if(id){
      if(obj["elements with id " + id]) obj["elements with id " + id]++
      else obj["elements with id " + id] = 1
    }

    if(className){
      if(obj["elements with class " + className]) obj["elements with class " + className]++
      else obj["elements with class " + className] = 1
    }

    if(obj[tag]) obj[tag]++;
    else obj[tag] = 1;

    if(nodes.firstChild.firstChild){
      scanDOM(nodes.firstChild);
    }

    nodes.removeChild(nodes.firstChild);
  }

  return obj;
}

var body = document.body,
  bodyCloned = body.cloneNode(true),
  obj = {};


console.log(scanDOM(bodyCloned));