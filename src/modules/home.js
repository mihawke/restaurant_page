import image from '../assets/image.png';

// Function to create and return an image element
function createImage(src, width) {
    const img = new Image();
    img.src = src;
    img.width = width;
    return img;
}

// Function to create and return a button element
function createButton(text, className) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add(className);
    return button;
}

// Function to create and return a text container with title and description
function createTextContainer() {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Enjoy Healthy Life & Testy Food.';

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue';

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    textContainer.appendChild(title);
    textContainer.appendChild(description);

    return textContainer;
}

// Function to create and return the button container
function createButtonContainer() {
    const showMore = createButton('Show More', 'btn-show-more');
    const placeOrder = createButton('Place Order', 'btn-place-order');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    btnContainer.appendChild(showMore);
    btnContainer.appendChild(placeOrder);

    return btnContainer;
}

// Main function to assemble the component
function home() {
    const element = document.querySelector('#content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add("home-container")

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('left-container');

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right-container');
    rightContainer.appendChild(createImage(image, 400));

    const textContainer = createTextContainer();
    const btnContainer = createButtonContainer();

    leftContainer.appendChild(textContainer);
    leftContainer.appendChild(btnContainer);

    homeContainer.appendChild(leftContainer);
    homeContainer.appendChild(rightContainer);
    element.appendChild(homeContainer)

    return element;
}


export default home;
