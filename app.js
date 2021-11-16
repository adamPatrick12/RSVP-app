const form = document.getElementById('registrar');     
const input = form.querySelector('input');
const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckBox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded";      //Creating filter section
filterCheckBox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div, ul);
filterCheckBox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children;
    if (isChecked){
    for(let i = 0; i < lis.length; i++){
        let li = lis[i];
        if(li.className === 'responded'){
            li.style.display = '';
        }else{
            li.style.display = 'none';
            }
        }
    } else {
        for(let i = 0; i < lis.length; i++){
            let li = lis[i];
            li.style.display = '';
        }
    }
});

    

function createList (text){
    const li = document.createElement('li');                   //Getting and placing user input into <span>
    const span = document.createElement('span');
    span.textContent = text;                            
    li.appendChild(span);
    ul.appendChild(li);
    const label = document.createElement('label');
    label.textContent = 'Confirmed'
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);                //Creating checkbox
    li.appendChild(label);
    const edit = document.createElement('button');    //Creating edit button
    edit.textContent = 'Edit';
    li.appendChild(edit);  
    const remove = document.createElement('button');    //Creating remove button
    remove.textContent = 'Remove';
    li.appendChild(remove);  
    return li; 

}

form.addEventListener('submit', (e)  => {
    e.preventDefault();  
    const text = input.value;
    input.value = ''; 
    const li = createList(text)
    ul.appendChild(li);
    
});

    ul.addEventListener('change', (e) => {
        const checkbox = e.target;                        //checking if checkbox is checked 
        const checked = checkbox.checked;
        const listItem = checkbox.parentNode.parentNode;

        if (checked){
          listItem.className = 'responded';
        }else{
            listItem.className = '';
        }

    });

    ul.addEventListener('click', (e) => {             
        if (e.target.tagName === 'BUTTON'){         //checking for button selection
            const button = e.target;
            const li = button.parentNode;
            const ul = li.parentNode;           
            if (button.textContent === 'Remove'){      //checking if user selected 'Remove' and deleting list child
            ul.removeChild(li);
        } else if (button.textContent === 'Edit'){      //checking if user selected 'Edit' and creating new input box/span
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'save';
        } else if (button.textContent === 'save'){      //checking if user selected 'Save' and appending new input
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'edit';
            


        }
        }
    

    });
