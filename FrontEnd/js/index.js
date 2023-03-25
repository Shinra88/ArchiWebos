
async function asyncReturn() { 

    const reponse = await fetch("http://localhost:5678/api/works/"); 
    const works = await reponse.json(console.table);




    
        for (let i = 0; i < works.length; i++) {

        const figure = works[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const divGallery = document.querySelector(".gallery");
        // Création d’une balise dédiée à une pièce automobile
        const worksElement = document.createElement("figure");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;

        const nomElement = document.createElement("p");
        nomElement.innerText=figure.title;
        
        // On rattache la balise article a la section Fiches
        divGallery.appendChild(worksElement);
        worksElement.appendChild(imageElement);
        worksElement.appendChild(nomElement);

        }
    }   
    asyncReturn();   

    const boutonFiltre = document.createElement("button")
    const navBouton = document.querySelector(".filtre");
    const boutonTxt = document.createElement("p")
    txtElement.innerText=("Tous");

    navBouton.appendChild(button);

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});
    
    
    
    
