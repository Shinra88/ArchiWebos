

const buttonSubmit = document.querySelector("#submit");

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    conexionUser();


});

function conexionUser() {
    let email = document.getElementById("email").value;
    console.log("email=" + email)

    let password = document.getElementById("password").value;
    console.log("password=" + password)

    var user = {

        "email": email,
        "password": password,
    };

    var OPTIONS = {
        method: 'POST',

        body: JSON.stringify(user),

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

    };

    fetch('http://localhost:5678/api/users/login', OPTIONS)
        .then(response => {
            if (response.ok) {
              // Faire un message authentification réussi / return response.json(), * ;//
            } else {
              // Faire un message erreur authentification / return Promise.reject(response.status);//
            }
        })
        // Faire une redirection / .then(token => sessionStorage.setItem("token", token.token))
        .catch(err => console.log(`Erreur avec le message : ${err}`));
    }

