let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let buttonSubmit = document.querySelector("#submit");
let erreur = document.querySelector("#erreur")

buttonSubmit.addEventListener("click", function() {
    if (inputEmail.Value.lenght<1 || inputPassword.Value.lenght<1 ) {
        
    }

    let email = inputEmail.value;
    let password = inputPassword.value;
    let objets = { "email": email, "password": password }
    let user = [];

    const retour = fetch("http://localhost:5678/api/users/login", post);
    user = retour.json();

        for (const d of user) {
            if(objets.email === d.email && user.password === d.password ){
                console.log("bonjour")
                erreur.innerTexte = "Connecté"
                erreur.style.backgroundColor = "lightgreen";
                erreur.style.display = "block"
                setTimeout(() => {
                    erreur.style.display = "none"
                }, 5000);
                return
            } 
        }
    erreur.innerTexte = "email ou mot de passe incorrects"
    erreur.style.backgroundColor = "red";
    erreur.style.display = "block";
        setTimeout(() => {
            erreur.style.display = "none";
        }, 5000);
}) 


 