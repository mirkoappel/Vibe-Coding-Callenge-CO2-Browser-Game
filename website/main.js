document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const logoLink = document.querySelector('.container.mx-auto.px-6.py-3.flex.justify-between.items-center .flex.items-center a');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Optional: Close menu when a link is clicked
    // Exclude the GitHub button from auto-closing the menu, adjust selector if needed
    mobileMenu.querySelectorAll('a:not(.inline-block.bg-green-600)').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Close menu when the logo link is clicked
    if (logoLink) { // Check if the logo link exists
        logoLink.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }
});
