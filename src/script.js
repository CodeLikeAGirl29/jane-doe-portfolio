// Get all open buttons, close buttons, and modals
const openButtons = document.querySelectorAll(".open-window");
const closeButtons = document.querySelectorAll(".close-window");
const modals = document.querySelectorAll(".window");

// Open the relevant modal based on the button clicked
openButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");
        const modal = document.getElementById(target);
        modal.style.display = "flex";
    });
});

// Close the modal when the close button is clicked
closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.closest(".window").style.display = "none";
    });
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);
