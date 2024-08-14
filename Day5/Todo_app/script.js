document.getElementById('btn').addEventListener('click', function() {
    // Get the input value
    let todoText = document.getElementById('height').value;

    // Create a new list item
    let listItem = document.createElement('li');
    listItem.textContent = todoText;

    // Create a delete button for each todo item
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';

    // Append the delete button to the list item
    listItem.appendChild(deleteBtn);

    // Append the list item to the ul
    let ul = document.getElementById('todo-list');
    ul.appendChild(listItem);

    // Clear the input field
    document.getElementById('height').value = '';

    // Delete item on button click
    deleteBtn.addEventListener('click', function() {
        ul.removeChild(listItem);
    });
});
