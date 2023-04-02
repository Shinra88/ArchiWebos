

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

    console.table(user)

    var OPTIONS = {
        method: 'POST',

        body: JSON.stringify(user),

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

    };

    console.table(OPTIONS);

    fetch('http://localhost:5678/api/users/login', OPTIONS)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error));
    console.table(OPTIONS);
};




