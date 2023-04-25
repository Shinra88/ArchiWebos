

const buttonSubmit = document.querySelector("#submit");
const error = document.querySelector(".error");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
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
                return response.json()
            } else {
                modal.style.display = "block"
                error.innerText = ("Identifiant ou mot de passe incorrect");
            }
        })
        .then((data) => {
            sessionStorage.setItem("token", data.token)
            sessionStorage.setItem("id", data.userId)
            window.location.assign("http://127.0.0.1:5500/FrontEnd/index.html");

        })
        .catch((error) => {
            modal.style.display = "block"
            error.innerText = ("Erreur réseau");
        });

}

