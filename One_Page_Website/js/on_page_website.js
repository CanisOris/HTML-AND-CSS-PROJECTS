const lightbox = document.getElementById("myLightbox");
const lightboxImg = document.getElementById("lightboxImage");
const lightboxTrigger = document.querySelector(".lightbox-trigger");
const lightboxClose = lightbox.querySelector(".close-btn");
let previousFocus;
let previousOverflow;

function openLightbox(imageSrc) {
    if (lightbox.style.display === "flex") return;
    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    // Use the same seeded photo for the thumbnail and larger image.
    lightboxImg.src = imageSrc.replace("/300/200", "/900/600");
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
}

function closeLightbox(event) {
    // Keep the preview open when the image itself is clicked.
    if (event && event.target === lightboxImg) return;
    lightbox.style.display = "none";
    document.body.style.overflow = previousOverflow;
    lightboxImg.removeAttribute("src");
    if (previousFocus) previousFocus.focus();
}

lightboxTrigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(lightboxTrigger.src);
    }
});

document.addEventListener("keydown", (event) => {
    if (lightbox.style.display !== "flex") return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "Tab") {
        event.preventDefault();
        lightboxClose.focus();
    }
});
