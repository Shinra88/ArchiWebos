async function asyncReturn() { 
    
    const reponse = await fetch('http://localhost:5678/api/works');
    const works = await reponse.json;


        
    const figure = works[0];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const divGallery = document.querySelector(".figure");
    // Création d’une balise dédiée à une pièce automobile
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = figure.imageUrl;

    const nomElement = document.createElement("h2");
    nomElement.innerText=figure.title;
    
    // On rattache la balise article a la section Fiches
    divGallery.appendChild(imageElement);
    divGallery.appendChild(nomElement);
}