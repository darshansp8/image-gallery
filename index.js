'use strict';

// JS for keyboard navigation and focus starts

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;
    console.log(cards.length)

    const focusItem = (index) => {
        if (index >= 0 && index < cards.length) {
            cards[index].focus();
            currentIndex = index;
        }
    };

    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowRight':
                focusItem(currentIndex + 1);
                console.log(currentIndex)
                break;
            case 'ArrowLeft':
                focusItem(currentIndex - 1);
                break;
            case 'ArrowDown':
                if (currentIndex + 3 < galleryItems.length) {
                    focusItem(currentIndex + 3);
                }
                break;
            case 'ArrowUp':
                if (currentIndex - 3 > 0) {
                    focusItem(currentIndex - 3);
                }
                break;
        }
    });
    cards.forEach(item => {
        item.addEventListener('focus', () => {
            console.log("Focused", item)
            item.classList.add('focused');  // Add a class to style the focused item
        });
        item.addEventListener('blur', () => {
            item.classList.remove('focused');  // Remove the class when the focus is removed
        });
    });
})

// JS for keyboard navigation ends

// Logic to filter images starts

const filterButtons = document.querySelectorAll('.gallery-filter-item');
console.log(filterButtons);

const items = [...document.querySelector('.gallery-images').children]; // Convert HTMLCollection to array

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove "active" class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // Add "active" class to the clicked button
        button.classList.add("active");


        // Get the target attribute of the clicked button
        const target = button.getAttribute("data-target");

        // Filter gallery items based on the target
        items.forEach(item => {
            item.style.display = "none"; // Hide all items initially
            if (target === "all" || target === item.getAttribute("data-id")) {
                item.style.display = "block"; // Show matching items
            }
        });
    });
});

// Logic to filter images ends

// JS for lightbox starts
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const galleryItems = document.querySelectorAll(".gallery-item img");

    let currentIndex = 0;

    function openLightBox(index) {
        currentIndex = index;
        console.log(currentIndex)
        const image = galleryItems[index];
        console.log(image)
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt || "Enlarged View";
        lightbox.classList.remove('hidden');
    }

    // Close lightbox
    function closeLightboxHandler() {
        lightbox.classList.add("hidden");
    }

    // Navigate to next image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        openLightBox(currentIndex);
    }

    // Navigate to previous image
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openLightBox(currentIndex);
    }

    galleryItems.forEach((item, index) => {

        item.addEventListener('click', () => {
            console.log("Index", index)
            openLightBox(index)
        });
    });
    // Close lightbox on close button click
    closeLightbox.addEventListener("click", closeLightboxHandler);

    // Close lightbox on click outside the content
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightboxHandler();
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (lightbox.classList.contains("hidden")) return;

        if (e.key === "Escape") closeLightboxHandler();
        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "ArrowLeft") showPrevImage();
    });

    // Navigation button clicks
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
    // JS for lightbox ends
})