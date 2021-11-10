const listBox = document.querySelector('.list_box');
const textBox = document.querySelector('.add_txt');
const addBox = document.querySelector('.add_form');

addBox.addEventListener('submit', (event) => {
    event.preventDefault();
    addList();
    textBox.value = '';
});

listBox.addEventListener('click', (event) => {
    if (event.target.className == 'fa fa-close') {
        deleteList(event.target);
    }
    if (event.target.tagName == 'INPUT') {
        checkList(event.target);
    }
});

// 리스트 삭제
function deleteList(target) {
    target.parentElement.remove();
}

// 리스트 체크
function checkList(target) {
    if (target.checked) {
        target.nextSibling.style.textDecoration = 'line-through';
    } else {
        target.nextSibling.style.textDecoration = 'none';
    }
}

// 리스트 추가
function addList() {
    if (textBox.value) {
        const list = createList(textBox.value);
        listBox.appendChild(list);
    } else {
        alert('입력된 내용이 없어요😅');
    }
}

// 리스트 html형식 만들기
function createList(txt) {
    const todo = document.createElement('input');
    todo.setAttribute('type', 'checkbox');
    todo.setAttribute('id', `${Date.now()}`);

    const todolabel = document.createElement('label');
    todolabel.setAttribute('for', `${Date.now()}`);
    todolabel.textContent = txt;

    const todolist = document.createElement('div');
    todolist.setAttribute('class', 'list');

    const tododelete = document.createElement('i');
    tododelete.setAttribute('class', `fa fa-close`);

    todolist.appendChild(todo);
    todolist.appendChild(todolabel);
    todolist.appendChild(tododelete);

    return todolist;
}
