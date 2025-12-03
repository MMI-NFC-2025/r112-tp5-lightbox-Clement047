// *** LIGHTBOX ***
// Récupérer les éléments
const lightBox = document.querySelector("#lightbox");
const lightBoxImg = document.querySelector("#lightbox-img");
const thumbs = document.querySelectorAll(".thumb");

// 1) Clic sur une miniature => ouvrir la lightbox avec la bonne image
thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        const fullImgUrl = thumb.dataset.fullImg; // lit data-full-img
        lightBoxImg.src = fullImgUrl;
        lightBox.showModal(); // ouvre le <dialog> en modal
    });
});

// 2) Clic sur le dialogue => le fermer
lightBox.addEventListener("click", () => {
    lightBox.close();
});
lightBox.addEventListener("click", (event) => {
    // On ferme seulement si on clique sur le fond du dialog, pas sur l’image
    if (event.target === lightBox) {
        lightBox.close();
    }
});


