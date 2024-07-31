const menuItems = [
    { name: 'Margherita Pizza', description: 'Classic pizza with tomato, mozzarella, and basil.', price: '$10' },
    { name: 'Pepperoni Pizza', description: 'Pizza topped with spicy pepperoni and cheese.', price: '$12' },
    { name: 'Veggie Burger', description: 'Burger with a veggie patty, lettuce, tomato, and special sauce.', price: '$9' },
    { name: 'Cheeseburger', description: 'Juicy beef patty with cheddar cheese, pickles, and onions.', price: '$11' },
    { name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.', price: '$8' },
    { name: 'Greek Salad', description: 'Fresh salad with olives, feta cheese, cucumbers, and tomatoes.', price: '$9' },
    { name: 'Chicken Alfredo Pasta', description: 'Creamy Alfredo sauce with grilled chicken over pasta.', price: '$13' },
    { name: 'Spaghetti Bolognese', description: 'Classic spaghetti with a rich meat sauce.', price: '$12' },
    { name: 'Garlic Bread', description: 'Toasted bread with garlic butter and herbs.', price: '$5' },
    { name: 'Chocolate Cake', description: 'Rich and moist chocolate cake with a gooey center.', price: '$6' }
];

const menuCard = (name, description, price) => {
    const menuCardContainer = document.createElement("div")
    menuCardContainer.classList.add("menu-card")

    const nameContainer = document.createElement("h4")
    const descriptionContainer = document.createElement("p")
    const priceContainer = document.createElement("p")
    const underline = document.createElement("hr")

    nameContainer.textContent = name;
    descriptionContainer.textContent = description;
    priceContainer.textContent = price;
    menuCardContainer.appendChild(nameContainer)
    menuCardContainer.appendChild(descriptionContainer)
    menuCardContainer.appendChild(priceContainer)
    menuCardContainer.appendChild(underline)

    return menuCardContainer;
}

function menu() {
    const element = document.querySelector('#content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menu-container")


    menuItems.forEach(item => {
        menuContainer.appendChild(
            menuCard(item.name, item.description, item.price)
        )
    })
    element.innerHTML = "<h1>Our Menu</h1>"
    element.appendChild(menuContainer)
    return element
}

export default menu;