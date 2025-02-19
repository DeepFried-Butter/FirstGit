// Write your code below:
// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const user = { username, email, phone };
    const mod = JSON.stringify(user);
    localStorage.setItem(email, mod);

    const ul = document.getElementsByTagName('ul');
    const li = document.createElement('li');
    li.textContent = username + '-' + email + '-' + phone;

    const button = document.createElement('input');
    button.type = 'button';
    button.value = 'Delete';
    button.onclick = function (event) {
        event.preventDefault();
        const parent = event.target.parentNode.parentNode;
        parent.removeChild(li);
        localStorage.removeItem(email);
    }

    const edt = document.createElement('input');
    edt.type = 'button';
    edt.value = 'Edit';
    edt.onclick = function (event) {
        event.preventDefault();
        const par = event.target.parentNode.parentNode;
        par.removeChild(li);
        localStorage.removeItem(email);
        document.getElementById('username').value = user.username;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone;
    }
    li.appendChild(button);
    li.appendChild(edt);
    ul[0].appendChild(li);

}

module.exports = handleFormSubmit;
