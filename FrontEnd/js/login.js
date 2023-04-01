let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let buttonSubmit = document.querySelector("#submit");

let email = inputEmail;
let password = inputPassword;

var OPTIONS = {
    method: 'POST',
    body: JSON.stringify({
        email: email,
        password: password
        }),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }, 
    mode: 'cors',
    cache: 'default'
};    
      

function conexionUser(){ 
    fetch('http://localhost:5678/api/users/login', console.table(OPTIONS), OPTIONS)
    .then((reponse) => reponse.json())
    .then((data)=>{
        console.log(data)
    })
}

buttonSubmit.addEventListener("click", function (conexionUser) {
    conexionUser()
});
      
 

 