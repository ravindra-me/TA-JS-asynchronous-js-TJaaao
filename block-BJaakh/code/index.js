{
  /* <li class="list-element flex align-center justify-between ">
            <div class="check">
            </div>
            <input type="text" class="edit-text display-none">
            <p class="text ">lorem </p>
            <button class="delete-btn">❌</button>
</li> */
}

let input = document.querySelector('.input');
let todoList = document.querySelector('.todo-list');
let all = document.querySelector('.all');
let active = document.querySelector('.active');
let completed = document.querySelector('.completed');
let numberItem = document.querySelector('.no-item');
let clearCompletly = document.querySelector('.clear');

function createTodo(data) {
  todoList.innerHTML = '';
  data.forEach((element) => {
    console.log(element['_id']);
    let li = document.createElement('li');
    li.classList.add('list-element', 'flex', 'align-center', 'justify-between');
    let checkDiv = document.createElement('div');
    checkDiv.classList.add('check');
    let editInput = document.createElement('input');
    editInput.classList.add('edit-text', 'display-none');
    let p = document.createElement('p');
    p.setAttribute('data-id', element['_id']);
    p.innerText = `${element.title}`;
    p.classList.add('text');

    if (element.checked === true) {
      p.classList.add('line-through');
      checkDiv.classList.add('background-img');
    }

    let button = document.createElement('button');
    button.innerText = '❌';
    button.classList.add('delete-btn');
    button.addEventListener('click', (event) => {
      let id = event.target.dataset.id;
      fetch(`https://sleepy-falls-37563.herokuapp.com/api/todo/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.) // body data type must match "Content-Type" header
      })
        .then((res) => res.json())
        .then((data) => {
          addTodoes();
        });
    });

    button.setAttribute('data-id', element['_id']);
    li.append(checkDiv, editInput, p, button);
    todoList.append(li);

    //    number of item

    // numberItem.innerText = data.length;
    // button.addEventListener('click', deleteTodo);

    // text editing
    // p.addEventListener('dblclick', (event) => {
    //   let testId = event.target.dataset.id;
    //   console.log(testId);
    //   p.classList.add('display-none');
    //   editInput.classList.remove('display-none');
    //   editInput.addEventListener('keyup', (event) => {
    //     if (event.keyCode === 13) {
    //       console.log(testId);
    //       let data = {
    //         todo: {
    //           title: event.target.value,
    //         },
    //       };
    //       fetch(`https://sleepy-falls-37563.herokuapp.com/api/todo/${testId}`, {
    //         method: 'PUT',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data), // *GET, POST, PUT, DELETE, etc.) // body data type must match "Content-Type" header
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //           console.log(data);
    //         });
    //       //   todoArr[testId].title = event.target.value;
    //       //   createTodo(todoArr);
    //       //   localStorage.setItem('todos', JSON.stringify(todoArr));
    //       //   p.classList.remove('display-none');
    //       //   editInput.classList.add('display-none');
    //     }
    //   });
    // });
  });
}

function addTodoes() {
  fetch('https://sleepy-falls-37563.herokuapp.com/api/todo')
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      createTodo(data.todos);
    });
}
addTodoes();
input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    let data = {
      todo: {
        title: event.target.value,
        isCompleted: false,
      },
    };
    input.value = '';
    fetch(`https://sleepy-falls-37563.herokuapp.com/api/todo/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // *GET, POST, PUT, DELETE, etc.) // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((data) => {
        createTodo(data.todos);
      });
  }
});
