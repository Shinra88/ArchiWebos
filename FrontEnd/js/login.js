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

    const options = {
        method: 'POST',
      
        headers: {
          // Nous n'accepterons que le JSON en résultat.
          'Accept': 'application/json',
          // Dans le cas d'une requête contenant un body,
          // par exemple une POST ou PUT, on définit le format du body.
          'Content-Type': 'application/json',
        },
      
        body: JSON.stringify({
          title: 'Un post',
          content: 'Contenu de mon post'
        })
      }
      
      fetch('http://localhost:5678/api/users/login/posts', options)
        .then((response) => response.json())
        .then((createdPost) => { /* ... */ })
      

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


 