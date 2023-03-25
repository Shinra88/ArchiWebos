
const navBouton = document.querySelector(".boutons");
const boutonTous = document.createElement("button");
boutonTous.innerText = ("Tous")
const boutonObjets = document.createElement("button");
boutonObjets.innerText = ("Objets")
const boutonAppartements = document.createElement("button");
boutonAppartements.innerText = ("Appartements")
const boutonHotel = document.createElement("button");
boutonHotel.innerText = ("Hôtels & restaurants")

navBouton.appendChild(boutonTous);
navBouton.appendChild(boutonObjets);
navBouton.appendChild(boutonAppartements);
navBouton.appendChild(boutonHotel);

let works = []; //On déclare works en tableau en variable globale (mais pas en const sinon on n'a plus le droit de la modifier) >> SP 25/03/2023
let filtre = ""; //On déclare le filtre en variable globale >> SP 25/03/2023

genererWorks(filtre); //Insertion d'une variable dans la fonction (la première fois elle est vide) >> SP 25/03/2023

async function genererWorks(filtre) {

    const reponse = await fetch("http://localhost:5678/api/works/");
    works = await reponse.json(); //Là j'ai viré le "const =" puisqu'on vient chercher notre variable globale >> SP 25/03/2023

    let worksFiltrees = []; //Initialisation de WorksFiltrees >> SP 25/03/2023
    switch (filtre) { //La fonction switch permet de faire une action différente en fonction de la valeur de "filtre" >> SP 25/03/2023
        case "objets": //Si "filtre" = "objets" donc... >> SP 25/03/2023
            worksFiltrees = works.filter(works => works.categoryId == 1); //la fonction filter avec le double égal >> SP 25/03/2023
            break;
        case "Appartements":
            worksFiltrees = works.filter(works => works.categoryId == 2); //la fonction filter avec le double égal >> SP 25/03/2023
            break;
        default:
            worksFiltrees = works //Dans le cas default (donc dans tout autre cas que ceux mentionnés au dessus), je recupère works qui appelait toutes les cartes >> SP 25/03/2023
    }
    console.table(worksFiltrees); //console.table pour voir ce qui ressort >> SP 25/03/2023


    for (let i = 0; i < worksFiltrees.length; i++) { // >> SP 25/03/2023
        const figure = worksFiltrees[i]; //  >> SP 25/03/2023
        // Récupération de l'élément du DOM qui accueillera les fiches
        const divGallery = document.querySelector(".gallery");
        // Création d’une balise dédiée à une pièce automobile
        const worksElement = document.createElement("figure");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;

        const nomElement = document.createElement("p");
        nomElement.innerText = figure.title;

        // On rattache la balise article a la section Fiches
        divGallery.appendChild(worksElement);
        worksElement.appendChild(imageElement);
        worksElement.appendChild(nomElement);

    }

}


const boutonObjet = document.querySelector("button");

boutonObjets.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filtre = "objets"; // >> SP 25/03/2023
    genererWorks(filtre); // >> SP 25/03/2023
});

boutonAppartements.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    filtre = "Appartements"; // >> SP 25/03/2023
    genererWorks(filtre); // >> SP 25/03/2023
});
