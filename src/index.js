import './styles.css';
import home from './modules/home';
import menu from './modules/menu';
import contact from './modules/contact';

// Set up the page
const nav = document.querySelector('header nav');
const buttons = nav.querySelectorAll('button');
// Function to set the initial active button
function setInitialActiveButton() {
    const homeButton = document.querySelector('header nav button');
    if (homeButton) {
        homeButton.classList.add('active');
    }
}

// Call this function after setting up event listeners
setInitialActiveButton();

// Function to handle button clicks
function handleNavigation(e) {
    const buttonText = e.target.textContent;
    const contentDiv = document.getElementById('content');

    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    e.target.classList.add('active');

    switch (buttonText) {
        case 'Home':
            contentDiv.innerHTML = ''; // Clear existing content
            contentDiv.appendChild(home());
            break;
        case 'Menu':
            contentDiv.innerHTML = ''; // Clear existing content
            contentDiv.appendChild(menu());
            break;
        case 'Contact':
            contentDiv.innerHTML = ''; // Clear existing content
            contentDiv.appendChild(contact());
            break;
        default:
            console.error('Unknown button text:', buttonText);
    }
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', handleNavigation);
});

// Initialize with default content (e.g., Home)
document.getElementById('content').appendChild(home());
