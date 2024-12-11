'use strict';

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