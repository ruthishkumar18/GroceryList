document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemInput = document.getElementById('item');
    const item = itemInput.value;
    addItemToList(item);
    itemInput.value = '';
});

function addItemToList(item) {
    const list = document.getElementById('list');
    const listItem = document.createElement('li');
    listItem.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}
