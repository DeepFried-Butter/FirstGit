function loadDataFromLocalStorage() {
    const ul = document.getElementsByTagName('ul')[0];
    ul.innerHTML = ''; // Clear the list before loading

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const userData = JSON.parse(localStorage.getItem(key));

        const li = document.createElement('li');
        li.textContent = userData.expenseAmount + '-' + userData.description + '-' + userData.category;

        const deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = 'Delete';
        deleteButton.className="btn btn-danger";
        deleteButton.onclick = function (event) {
            event.preventDefault();
            ul.removeChild(li);
            localStorage.removeItem(userData.description);
        }

        const editButton = document.createElement('input');
        editButton.type = 'button';
        editButton.value = 'Edit';
        editButton.className="btn btn-secondary";
        editButton.onclick = function (event) {
            event.preventDefault();
            ul.removeChild(li);
            localStorage.removeItem(userData.description);
            document.getElementById('expenseAmount').value = userData.expenseAmount;
            document.getElementById('description').value = userData.description;
            document.getElementById('category').value = userData.category;
        }

        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);
    }
}

// Load data from local storage when the page loads
window.onload = function() {
    loadDataFromLocalStorage();
};


function handleFormSubmit(event) {
    event.preventDefault();
    const expenseAmount = event.target.expenseAmount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const user = { expenseAmount, description, category };
    const mod = JSON.stringify(user);
    localStorage.setItem(description, mod);

    const ul = document.getElementsByTagName('ul');
    const li = document.createElement('li');
    li.textContent = expenseAmount + '-' + description + '-' + category;

    const button = document.createElement('input');
    button.type = 'button';
    button.value = 'Delete';
    button.className="btn btn-danger";
    button.onclick = function (event) {
        event.preventDefault();
        const parent = event.target.parentNode.parentNode;
        parent.removeChild(li);
        localStorage.removeItem(description);
    }

    const edt = document.createElement('input');
    edt.type = 'button';
    edt.value = 'Edit';
    edt.className="btn btn-secondary";
    edt.onclick = function (event) {
        event.preventDefault();
        const par = event.target.parentNode.parentNode;
        par.removeChild(li);
        localStorage.removeItem(description);
        document.getElementById('expenseAmount').value = user.expenseAmount;
        document.getElementById('description').value = user.description;
        document.getElementById('category').value = user.category;
    }
    li.appendChild(button);
    li.appendChild(edt);
    ul[0].appendChild(li);

}

