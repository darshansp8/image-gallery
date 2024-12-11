'use strict';

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