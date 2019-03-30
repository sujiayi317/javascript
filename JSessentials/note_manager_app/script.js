// Lecture: Project - Coding Task 3 - Solution

/*
//**********ADD ITEMS
let ul = document.querySelector('ul');

document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    let addInput = document.getElementById('add-input');
    
    if(addInput.value !== '') {
        let li = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input');

        firstIcon.className = "fa fa-pencil-square-o";
        secondIcon.className = "fa fa-times";

        input.className = "edit-note";
        input.setAttribute('type', 'text');

        firstPar.textContent = addInput.value;

        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);

        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);
        ul.appendChild(li);
        addInput.value = '';

        console.log(li);
    }
});
*/
let ul = document.querySelector('ul');
console.log(ul);
document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    var addInput = document.getElementById('add-input');
    if(addInput.value !== '') {
        
        var li = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input');

        firstIcon.className = 'fa fa-pencil-square-o';
        secondIcon.className = 'fa fa-times';
        input.className = 'edit-note';
        input.setAttribute('type', 'text');

        firstPar.textContent = addInput.value;
        
        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);
        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);

        ul.appendChild(li);
        addInput.value = '';
    }
});

 /// Edit and Delete
 ul.addEventListener('click', function(e){
    
   console.log(e.target.classList[0]);      
     
 });


// hide items and unhide items from note list------------------------------


let hideItem = document.getElementById('hide');

hideItem.addEventListener('click', function() {
    // console.log('checked');

    let label = document.querySelector('label');
    if(hideItem.checked) {
        label.textContent = 'Unhide notes';
        ul.style.display = 'none';
    } else {
        label.textContent = 'Hide notes';
        ul.style.display = 'block';
    }
});


// a search filter ---------------------------------------------------------

let searchInput = document.querySelector('#search-note input');

searchInput.addEventListener('keyup', function(e) {
    // console.log('Key is released');
    let searchChar = e.target.value.toUpperCase();
    // console.log(searchChar);
    let notes = ul.getElementsByTagName('li');       // returns a htmlcollection
    Array.from(notes).forEach(function(note) {
        let parText = note.firstElementChild.textContent;

        if(parText.toUpperCase().indexOf(searchChar) !== -1) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });
});



