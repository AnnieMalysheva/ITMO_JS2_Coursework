var textArea = document.getElementById('textArea');
var box = document.getElementById('box');

var button = document.getElementById('button');
button.addEventListener("click", function () {
    var elem = document.createElement('div');
    var text = document.createTextNode(textArea.value);
    var del = document.createElement('div');
    elem.style.textAlign = 'left';
    elem.style.border = '1px solid black';
    elem.id = 'elem';
    del.id = 'del';
    
    elem.appendChild(text);   
    elem.appendChild(del);   
    box.appendChild(elem);
    
    box.style.marginTop = '50px';
    box.style.padding = '15px 0 0 0';
    
    textArea.value = '';
    
    del.innerHTML = '&#10006;';
    del.style.cursor = 'pointer';
    del.style.float = 'right';
    del.style.marginRight = '5px';
       
  });


box.addEventListener('click', function(event) {
    var currentObj = event.target;
	currentObj.parentNode.remove();
});






//function relation (parent, child) {};
//
//
//function getRoot (id);
//
//function newElement (tag, attr, text);
