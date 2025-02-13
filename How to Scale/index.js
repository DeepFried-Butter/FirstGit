// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const user={username,email,phone};
    const mod=JSON.stringify(user);
    localStorage.setItem(email,mod);

    const ul=document.getElementsByTagName('ul');
    const li=document.createElement('li');
    li.textContent=username+'-'+email+'-'+phone;
    ul[0].appendChild(li);

}

module.exports = handleFormSubmit;