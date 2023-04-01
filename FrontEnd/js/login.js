let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let buttonSubmit = document.querySelector("#submit");

let email = inputEmail;
let password = inputPassword;



var OPTIONS = {
    method: 'POST',

    body: JSON.stringify({
        "email": "sophie.bluel@test.tld",
        "password": "S0phie"
        }),

    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }, 

    mode: 'cors',

    cache: 'default',

    permissions: [
        "storage",
        "*://localhost/*",
      ],
};    
console.table(OPTIONS)
      
buttonSubmit.addEventListener("click", (e) => {
e.preventDefault();
conexionUser();


});

function conexionUser(){ 
    fetch('http://localhost:5678/api/users/login', OPTIONS)
    .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error));
};

      
 

 