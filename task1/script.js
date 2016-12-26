var textArea = document.getElementById('textArea');
var box = document.getElementById('box');

var button = document.getElementById('button');
button.addEventListener("click", function () {
    var elem = document.createElement('div');
    var text = document.createTextNode(textArea.value);
    elem.style.textAlign = 'center';
    elem.style.border = '1px solid black';
    elem.appendChild(text);   
    box.appendChild(elem);
    box.style.marginTop = '50px';
    textArea.value = '';   
  });

var del = document.createElement('');
    elem.appendChild(del);

//'<div id="item">' + text + '</div>'






//function relation (parent, child) {};
//
//
//function getRoot (id);
//
//function newElement (tag, attr, text);
