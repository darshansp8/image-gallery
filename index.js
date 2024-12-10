'use strict';

// const galleryItems = document.querySelectorAll('.gallery-filter-item');

// galleryItems.forEach(item => {
//     item.addEventListener('click', () => {
//         const clickedItem = event.currentTarget;
//         if (clickedItem.classList.contains('btn-outline-dark')) {
//             console.log("Hello")
//             clickedItem.classList.add('btn-secondary');
//             clickedItem.classList.remove('btn-outline-secondary');
//         }
//         else {
//             clickedItem.classList.remove('btn-secondary');
//             clickedItem.classList.add('btn-outline-dark');
//         }
//     })
// })

// const filterButtons = document.querySelectorAll('.gallery-filter-item');
// console.log(filterButtons)

// const items = document.querySelector('.gallery-images').children;

// for (let i = 0; i < filterButtons.length; i++) {
//     filterButtons[i].addEventListener("click", function () {
//         for (let j = 0; j < filterButtons.length; j++) {
//             filterButtons[j].classList.remove("active")
//         }
//         this.classList.add("active");
//         const target = this.getAttribute("data-target");

//         for (let k = 0; k < items.length; k++) {
//             items[k].style.display = "none"
//             if (target == items[k].getAttribute("data-id")) {
//                 items[k].style.display = "block";
//             }
//             if (target == "all") {
//                 items[k].style.display = "block"
//             }
//         }
//     })
// }

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