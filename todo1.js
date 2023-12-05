document.addEventListener('DOMContentLoaded', function () {
    const newTaskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTask');
    const todoList = document.getElementById('todoList');

    addTaskButton.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
        } else {
            createTaskElement(taskText);
            newTaskInput.value = '';
        }
    });

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="done">Done</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        todoList.appendChild(li);

        const doneButton = li.querySelector('.done');
        doneButton.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        const editButton = li.querySelector('.edit');
        editButton.addEventListener('click', function () {
            const span = li.querySelector('span');
            const newTaskText = prompt('Edit task:', span.textContent);
            if (newTaskText !== null) {
                span.textContent = newTaskText;
            }
        });

        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', function () {
            li.remove();
        });
    }
});
