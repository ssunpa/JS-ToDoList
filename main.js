const listBox = document.querySelector('.list_box');
const textBox = document.querySelector('.add_txt');
const addBox = document.querySelector('#add_form');

let cnt = 0;

addBox.addEventListener('submit', (event) => {
    if (textBox.value) {
        const todo = document.createElement('input');
        todo.setAttribute('type', 'checkbox');
        todo.setAttribute('id', `ch${cnt}`);
        todo.onclick = function () {
            if (this.checked) {
                todolabel.style.textDecoration = 'line-through';
            } else {
                todolabel.style.textDecoration = 'none';
            }
        };

        const todolabel = document.createElement('label');
        todolabel.setAttribute('for', `ch${cnt}`);
        todolabel.textContent = textBox.value;

        const todolist = document.createElement('div');
        todolist.setAttribute('class', 'list');

        const tododelete = document.createElement('i');
        tododelete.setAttribute('class', `fa fa-close`);
        tododelete.onclick = function () {
            this.parentElement.remove();
        };

        listBox.appendChild(todolist);
        todolist.appendChild(todo);
        todolist.appendChild(todolabel);
        todolist.appendChild(tododelete);

        cnt++;
        textBox.value = '';
    } else {
        alert('입력된 내용이 없어요😅');
    }
    event.preventDefault();
});
