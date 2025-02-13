// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const user = {
        username,email,phone
    }
    const mod = JSON.stringify(user);
    localStorage.setItem("User Details", mod);
}

module.exports = handleFormSubmit;
