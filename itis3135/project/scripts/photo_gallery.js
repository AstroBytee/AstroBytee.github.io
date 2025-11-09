const galleryImages = document.querySelectorAll('.gallery-image');
const lightboxElement = document.getElementById('lightbox-popup');
const popupImageElement = document.getElementById('popup-image');
const popupCaptionElement = document.getElementById('popup-caption');
const closeButton = document.getElementById('close-button');

// Open lightbox when a gallery image is clicked
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        lightboxElement.style.visibility = 'visible';
        lightboxElement.style.opacity = '1';
        popupImageElement.setAttribute("src", image.getAttribute("src"));
        popupCaptionElement.textContent = image.getAttribute("alt");
    });
});

// Close lightbox when close button is clicked
closeButton.addEventListener('click', () => {
    console.log('Close button clicked');
    lightboxElement.style.visibility = 'hidden';
    lightboxElement.style.opacity = '0';
});