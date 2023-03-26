
const navBouton = document.querySelector(".boutons");
const boutonTous = document.createElement("button");
boutonTous.innerText = ("Tous");
const boutonObjets = document.createElement("button");
boutonObjets.innerText = ("Objets");
const boutonAppartements = document.createElement("button");
boutonAppartements.innerText = ("Appartements");
const boutonHotel = document.createElement("button");
boutonHotel.innerText = ("Hôtels & restaurants");

navBouton.appendChild(boutonTous);
navBouton.appendChild(boutonObjets);
navBouton.appendChild(boutonAppartements);
navBouton.appendChild(boutonHotel);

let works = []; //On déclare works en tableau en variable globale (mais pas en const sinon on n'a plus le droit de la modifier) >>
let filtre = ""; //On déclare le filtre en variable globale >>

genererWorks(filtre); //Insertion d'une variable dans la fonction (ne plus oublier la variable) >>

async function genererWorks(filtre) {

    const reponse = await fetch("http://localhost:5678/api/works/");
    works = await reponse.json();

    let worksFiltrees = []; //Initialisation de WorksFiltrees >>
    switch (filtre) { //La fonction switch permet de faire une action différente en fonction de la valeur de "filtre" >>
        case "Tous":
            worksFiltrees = works.filter(works => works.categoryId); //la fonction filter avec le double égal >>
            break;
        case "objets": //Si "filtre" = "objets" donc... >>
            worksFiltrees = works.filter(works => works.categoryId == 1); //la fonction filter avec le double égal >>
            break;
        case "Appartements":
            worksFiltrees = works.filter(works => works.categoryId == 2); //la fonction filter avec le double égal >>
            break;
        case "Hôtels & restaurants":
            worksFiltrees = works.filter(works => works.categoryId == 3); //la fonction filter avec le double égal >>
            break;
        default:
            worksFiltrees = works //Dans le cas default (donc dans tout autre cas que ceux mentionnés au dessus), je recupère works qui appelait toutes les cartes >>
    }


    for (let i = 0; i < worksFiltrees.length; i++) { 
        const figure = worksFiltrees[i]; 
        // Récupération de l'élément du DOM qui accueillera les fiches >>
        const divGallery = document.querySelector(".gallery");
        // Création d’une balise dédiée à aux figures >>
        const worksElement = document.createElement("figure");
        // Création des balises >>
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;

        const nomElement = document.createElement("p");
        nomElement.innerText = figure.title;

        // On rattache la balise figure a la div Gallery >>
        divGallery.appendChild(worksElement);
        worksElement.appendChild(imageElement);
        worksElement.appendChild(nomElement);

    }

}


const boutonObjet = document.querySelector("button");

boutonTous.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filtre = "Tous"; 
    genererWorks(filtre); 
});
boutonObjets.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filtre = "objets"; 
    genererWorks(filtre); 
});

boutonAppartements.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filtre = "Appartements"; 
    genererWorks(filtre); 
});

boutonHotel.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filtre = "Hôtels & restaurants"; 
    genererWorks(filtre); 
});