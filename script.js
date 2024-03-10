// Function to toggle the mobile menu
function toggleMobileMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Add event listeners to the menu icon and close icon
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('bar');
    const closeIcon = document.getElementById('close');

    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMobileMenu);
    }

    if (closeIcon) {
        closeIcon.addEventListener('click', toggleMobileMenu);
    }
});
