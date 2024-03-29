document.addEventListener('DOMContentLoaded', function () {
    const packingForm = document.getElementById('packingForm');
    const newItemInput = document.getElementById('newItem');
    const packingList = document.getElementById('packingList');

    const addButton = document.querySelector('button');
    const listItemTemplate = document.createElement('li');

    addButton.addEventListener('mouseover', function () {
        addButton.style.backgroundColor = '#4CAF50';
    });

    addButton.addEventListener('mouseout', function () {
        addButton.style.backgroundColor = '#45a049';
    });

    packingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addItem();
    });

    function addItem() {
        const newItemText = newItemInput.value.trim();
        if (!newItemText) {
            alert('Please enter a valid item');
            return;
        }

        const listItem = listItemTemplate.cloneNode(true);
        const checkbox = listItem.querySelector('input[type="checkbox"]');
        const label = listItem.querySelector('label');

        checkbox.id = `item-${newItemText}`;
        label.htmlFor = `item-${newItemText}`;
        label.textContent = newItemText;

        packingList.appendChild(listItem);
        newItemInput.value = ''; // Clear the input field
    }

    packingList.addEventListener('click', function (event) {
        const clickedElement = event.target;

        if (clickedElement.type === 'checkbox') {
            toggleChecked(clickedElement.id.replace('item-', ''));
        }
    });

    function toggleChecked(itemText) {
        const label = document.querySelector(`label[for="item-${itemText}"]`);

        if (label.style.textDecoration === 'line-through') {
            label.style.textDecoration = 'none';
        } else {
            label.style.textDecoration = 'line-through';
        }
    }

    // BOM Properties/Methods
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    console.log(`Viewport Width: ${viewportWidth}`);
    console.log(`Viewport Height: ${viewportHeight}`);