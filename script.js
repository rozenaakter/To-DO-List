// DOM Elements
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item (li) for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button for each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    // Add delete functionality
    deleteBtn.onclick = function() {
        todoList.removeChild(li);
    };

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Add the list item to the unordered list
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = '';
}

// Event Listener for Add Button
addButton.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
 