const body = document.querySelector("body");
const header = document.querySelector("header");
const parentHeader = header.parentNode;
const introduction = document.querySelector("#introduction");

//Creation de la bannière et bouton édition
let editingBanner;
let editingButton;

const createBannner = () => {
  editingBanner = document.createElement("div");
  editingBanner.classList.add("editingbanner");
  editingBanner.innerHTML = `<i class="fa-regular fa-pen-to-square modal_trigger"></i>
  <p>Mode édition</p>
  <button class="changes_publication_button">publier les changements</button>`;
};

const createEditingButton = (id) => {
  editingButton = document.createElement("btn");
  editingButton.classList.add("edit_button");
  editingButton.setAttribute("id", id);
  editingButton.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>
  <p>modifier</p>`;
};

// Session admin //
if (sessionStorage.token) {
  createBannner();
  body.insertBefore(editingBanner, parentHeader);
  createEditingButton("change_button_photo");
  const introductionFigure = introduction.querySelector("figure");
  introductionFigure.append(editingButton);
  createEditingButton("change_button_intro");
  const introductionArticle = introduction.querySelector("article");
  introductionArticle.append(editingButton);
  createEditingButton("change_button_project");
  const filters = document.querySelector("#portfolio>h2");
  filters.append(editingButton);
  navBouton.style.display = "none";
}

// Modales //
const modalAdding = document.querySelector("#modaladding");
const modalDelete = document.querySelector("#modaldelete");
const overlay = document.querySelector(".overlaymodal");
const modalTriggers = document.querySelector("#change_button_project");
const modalContainer = document.querySelector(".modalcontainer");
const modalDeleteContent = modalDelete.querySelector(".modal_content");
const closeTriggers = document.querySelector(".fa-solid.fa-xmark.modal_closing_icon")
const modalAddingTriggers = document.querySelector("#modaldelete>input")
const returnTriggers = document.querySelector(".fa-solid.fa-arrow-left-long.previous_icon")
const closeTriggers2 = document.querySelector("#fa>.fa-solid.fa-xmark.modal_closing_icon")

// Modales ouverture-fermeture //
modalTriggers.addEventListener("click", OpenModal);

function OpenModal() {
  createModalCard()
  modalContainer.classList.add("active")
  modalDelete.classList.toggle("active")
};

overlay.addEventListener("click", CloseModalOverlay);
closeTriggers.addEventListener("click", CloseModalOverlay);

function CloseModalOverlay() {
  removeGalleryPreview();
  modalContainer.classList.remove("active")
  modalDelete.classList.remove("active")
  modalAdding.classList.remove("active")
};

modalAddingTriggers.addEventListener("click", OpenModalAdding);

function OpenModalAdding() {
  modalDelete.classList.remove("active")
  modalContainer.classList.add("active")
  modalAdding.classList.toggle("active")
  removeGalleryPreview();
}

returnTriggers.addEventListener("click", returnModalDelete);

function returnModalDelete() {
  createModalCard()
  modalAdding.classList.remove("active")
  modalContainer.classList.add("active")
  modalDelete.classList.toggle("active")
}

closeTriggers2.addEventListener("click", CloseModalOverlay);

function createModalCard() {
  fetch("http://localhost:5678/api/works/")
    .then((reponse) => {
      if (reponse.ok) {
        return reponse.json();
      } else {
        throw new Error("echec lors de l'appel API.");
      }
    })
    .then((data) => {
      data.forEach((element) => {
        const editCard = document.createElement("div");
        editCard.className = "edit_Card";
        modalDeleteContent.append(editCard);

        const image = document.createElement("img");
        image.src = element.imageUrl;
        editCard.appendChild(image);

        const moovButton = document.createElement("button");
        moovButton.setAttribute("id", "moovBtn");
        moovButton.innerHTML = `<i class="fa-solid fa-arrows-up-down-left-right" style="color: #ffffff;"></i>`;
        editCard.appendChild(moovButton);

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "deleteBtn");
        deleteButton.innerHTML = `<i class="fa-solid fa-trash-can" style="color: #ffffff;"></i>`;
        editCard.appendChild(deleteButton);

        const editButton = document.createElement("p", "afterend");
        editButton.setAttribute("id", "editBtn");
        editButton.innerText = `éditer`;
        editCard.appendChild(editButton);

        // Affiché moov au survol //
        image.addEventListener('mouseover', () => {
          moovButton.style.display = "inline-block";
        })
        image.addEventListener('mouseout', () => {
          moovButton.style.display = "none";
        })

        // Supprimer un projet ciblé //
        deleteButton.addEventListener('click', (e) => {
          console.log("salut toto");
          fetch(`http://localhost:5678/api/works/${element.id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${sessionStorage.token}`,
            },
          })
            .then(response => {
              if (response.ok) {
                editCard.remove();
                alert('Projet supprimé avec succès !');
              }
            });
        });
      });
    });
}

// Supprimer galleryPreview
function removeGalleryPreview() {
  const galleryPreviewList = modalDeleteContent.querySelectorAll(".edit_Card");
  galleryPreviewList.forEach(function (editCard) {
    editCard.remove();
  });
}

// Modification du style du submit quand formulaire remplit 
const submitBtn = document.getElementById("modal_form_validation");
const FormModalAdding = modalAdding.querySelector("form");
FormModalAdding.addEventListener("input", function () {
  submitBtn.setAttribute("class", "active_button");
});

// Ajout de l'image chargée dans l'AddingModal 
const imageUpload = document.getElementById("image_upload");
const uploadContainer = document.querySelector(".uploadcontainer");
const previewImage = document.querySelector(".image_preview");
const LabelUpload = uploadContainer.querySelector("label");

imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    previewImage.style.display = "block";

    reader.addEventListener("load", function () {
      LabelUpload.style.visibility = "hidden";
      previewImage.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
  }
});

// Ajout works dans l'api
const inputFile = document.getElementById("image_upload");
const titre = document.getElementById("Titleinput");
const select = document.getElementById("category_input");
const formModale = document.querySelector(".formModale");


formModale.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("image", inputFile.files[0]);
  formData.append("title", titre.value);
  formData.append("category", select.value);

  fetch("http://localhost:5678/api/works", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${sessionStorage.token}`,
    },
  }).then((reponse) => {
    if (reponse.ok) {
      alert("Projet ajouté avec succès !");

    } else {
      alert("Le formulaire est incomplet!");
    }
  });
});