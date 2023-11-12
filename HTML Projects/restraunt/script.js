// Get all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add event listeners to open the corresponding modal when a menu item is clicked
menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        const modalId = menuItem.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.style.display = 'block';
        }
    });
});

// Add event listeners to close modals when clicking the close button
const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        const iframe=modal.querySelector('iframe')
        if(iframe){
            iframe.src='';
        }
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Add event listeners to close modals when clicking outside the modal
const modals = document.querySelectorAll('.modal');
modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        const iframe=modal.querySelector('iframe')
        if(iframe){
            iframe.src='';
        }

    });
});