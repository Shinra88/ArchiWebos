
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
    
    
    
    
