const email = document.getElementById("email").value;
console.log(email)

const password = document.getElementById("password").value;
console.log(password)

const buttonSubmit = document.querySelector("#submit");


const user = {

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

console.table(OPTIONS)

function conexionUser(){ 
    fetch('http://localhost:5678/api/users/login', OPTIONS)
    .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error));
};      

buttonSubmit.addEventListener("click", (e) => {
e.preventDefault();
conexionUser();


});



      
 

 