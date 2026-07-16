const logIn = document.getElementById('logIn');
const signUp = document.getElementById('signUp');
const logInBtn = document.getElementById('logInBtn')
const signUpBtn = document.getElementById('signUpBtn')

const URL = "http://localhost:3000"

async function getUsers() {
    const response = await fetch(`${URL}/users/`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error.message);
    }
}

async function getLoggedIn() {
    const response = await fetch(`${URL}/content/`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error.message);
    }
}

logIn.addEventListener('click', async (e) => {
    e.preventDefault()
    if (e.target == logInBtn) {
        const inputs = logIn.getElementsByTagName('input')
        const user = inputs.username.value.toLowerCase();
        const password = inputs.password.value;
        const users = await getUsers();
        const loggedInUser = await getLoggedIn();

        if (loggedInUser.length > 1) {
            loggedInUser.pop();
        }
        for (let i = 0; i < users.length; i++) {
            console.log(users[i])
            if (users[i].username === user && users[i].password === password) {
                fetch(`${URL}/content/`, {
                    method: 'PUT',
                    body: JSON.stringify({ signedIn: true, id: users[i].id }),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                window.location.href
                break;
            } else if (users[i].username == user && users[i].password != password) {
                throw new Error("Incorrect password.")
            } else if (i == users.length-1 && users[i].username != user) {
                throw new Error("User does not exist.")
            }
        }
    }
});

signUp.addEventListener('click', async (e) => {
    e.preventDefault()
    if (e.target == signUpBtn) {
        const inputs = signUp.getElementsByTagName('input')
        const n = inputs.name.value.toLowerCase()
        const user = inputs.username.value.toLowerCase();
        const pass = inputs.password.value;
        const re_pass = inputs.re_password.value;
        const users = await getUsers();

        if (pass === re_pass) {
            fetch(`${URL}/users/`, {
                method: 'POST',
                body: JSON.stringify({ id: users.length+1, name: n, username: user, password: pass }),
                headers: {
                    'content-type': 'application/json'
                }
            })
        } else {
            throw new Error("Password does not match.")
        }
    }
});

