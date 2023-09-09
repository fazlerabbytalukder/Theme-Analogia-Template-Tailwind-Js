/// navbar 
const nav = document.querySelector(".nav"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    overlay = document.getElementById("overlay");

navOpenBtn.addEventListener("click", () => {
    nav.classList.toggle("openNav");//toggle the button to open close navbar
    overlay.classList.toggle('shadow-bg');//toggle the shade when open and close the side nav
});

overlay.onclick = function (e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
        toggle.classList.remove('openNav');//when click the overlay close the navbar
        sidebar.classList.remove('openNav');//when click overlay close the sidebar
    }
    overlay.classList.remove("shadow-bg");//when click the overlay itself overlay removed
}


// dropdown menu
// Get all elements with the class "dropdown-menu"
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// Add event listeners for each dropdown menu
dropdownMenus.forEach((dropdownMenu) => {
    // Add a click event listener to toggle the class on click
    dropdownMenu.addEventListener('click', () => {
        // Find the mega-menu within this dropdown-menu
        const megaMenu = dropdownMenu.querySelector('.mega-menu');

        if (megaMenu) {
            // Check if mega-menu already has the class
            const isActive = megaMenu.classList.contains('dropdown-active');

            // Remove the class from all mega-menu elements
            document.querySelectorAll('.mega-menu').forEach((otherMegaMenu) => {
                otherMegaMenu.classList.remove('dropdown-active');
            });

            // Toggle the class on the clicked mega-menu
            if (!isActive) {
                megaMenu.classList.add('dropdown-active');
            }
        }
    });
});