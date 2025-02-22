const API_URL = "https://crudcrud.com/api/82cdc6e4e8ec4b3ebe1a9ff47f8e4271/passwords";

document.addEventListener("DOMContentLoaded", fetchPasswords);
document.getElementById("search").addEventListener("input", searchPasswords);

// Fetch stored passwords using Axios
async function fetchPasswords() {
    try{
        const response = await axios.get(API_URL);
        displayPasswords(response.data);
    }catch(error) {
        alert("Failed to fetch passwords");
    }
}

// delete password
async function deletePassword(id) {
    try{
        await axios.delete(`${API_URL}/${id}`);
        fetchPasswords();
    } catch(error) {
        alert("Failed to delete password");
    }
}

// edit password
async function editPassword(id, oldTitle, oldPassword) {
    const newPassword = prompt("Enter new password", oldPassword);
    if(!newPassword) return;
    const passwordObj = {
        title: oldTitle,
        password: newPassword
    };
    try{
        await axios.put(`${API_URL}/${id}`, passwordObj);
        fetchPasswords();
    } catch(error) {
        alert("Failed to edit password:",error);
    }
}


// add new password
async function addPassword() {
    const title = document.getElementById("title").value;
    const password = document.getElementById("password").value;
    if(!title || !password) {
        alert("Please fill all the fields");
        return;
    }
    const passwordObj = {
        title,
        password
    };
    try{
        await axios.post(API_URL, passwordObj);
        fetchPasswords();
        document.getElementById("title").value = "";
        document.getElementById("password").value = "";
    } catch(error) {
        alert("Failed to add password");
    }
}

// display passwords
function displayPasswords(passwords) {
    const passwordList = document.getElementById("passwordList");
    passwordList.innerHTML = "";

    passwords.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("password-item");
        div.innerHTML = `
        <span><strong>${item.title}</strong>: ${item.password}</span>
        <div>
            <button onclick="editPassword('${item._id}', '${item.title}', '${item.password}')">Edit</button>
            <button onclick="deletePassword('${item._id}')">Delete</button>
        </div>
        `;
        passwordList.appendChild(div);
    })
    document.getElementById("passwordCount").textContent = passwords.length;
}

// search passwords
function searchPasswords() {
    const query = this.value.toLowerCase();
    document.querySelectorAll(".password-item").forEach(item => {
        const title = item.innerText.toLowerCase();
        item.style.display = title.includes(query) ? "flex" : "none";
    });
}