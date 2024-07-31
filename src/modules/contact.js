function createDiv(text, className) {
    const container = document.createElement("div")
    container.textContent = text;
    container.classList.add(className);
    return container;
}

function createLabel(text, className, inputName) {
    const label = document.createElement("label")
    label.textContent = text;
    label.classList.add(className);
    label.setAttribute("for", inputName)
    return label;
}

function createInput(name, id, type, className) {
    const input = document.createElement("input")
    input.classList.add(className);
    input.setAttribute("name", name)
    input.setAttribute("id", id)
    input.setAttribute("type", type)
    return input;
}

function getForm() {
    const formContainer = document.createElement("form")
    const fullNameLabel = createLabel("Full Name", "full-name", "full-name")
    const fullNameInput = createInput("full-name", "full-name", "text", "full-name")

    const emailLabel = createLabel("Email", "email", "email")
    const emailInput = createInput("email", "email", "email", "email")

    const messageLabel = createLabel("Message", "message", "message")
    const messageInput = document.createElement("textarea")
    messageInput.setAttribute("id", "message")
    messageInput.setAttribute("name", "message")
    messageInput.classList.add("message")

    const formSubmitBtn = document.createElement("button")
    formSubmitBtn.textContent = "Contact Us"

    formContainer.appendChild(fullNameLabel)
    formContainer.appendChild(fullNameInput)
    formContainer.appendChild(emailLabel)
    formContainer.appendChild(emailInput)
    formContainer.appendChild(messageLabel)
    formContainer.appendChild(messageInput)
    formContainer.appendChild(formSubmitBtn)


    return formContainer;
}

function getContact() {
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("info-container")
    const containerTop = document.createElement("div")
    const containerBottom = document.createElement("div")


    const emailText = document.createElement("p")
    const emailHeading = document.createElement("h3")

    emailHeading.textContent = "Contact"
    emailText.textContent = "foodtruck@contact"

    const locationText = document.createElement("p")
    const locationHeading = document.createElement("h3")

    locationHeading.textContent = "Based In"
    locationText.textContent = "Lorem Ipsum"

    containerTop.appendChild(emailHeading)
    containerTop.appendChild(emailText)
    containerBottom.appendChild(locationHeading)
    containerBottom.appendChild(locationText)
    contactContainer.appendChild(containerTop)
    contactContainer.appendChild(containerBottom)

    return contactContainer;
}

function contact() {
    const element = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add("contact-container")

    const form = getForm();
    const contactInfo = getContact()


    container.appendChild(form)
    container.appendChild(contactInfo)
    element.appendChild(container)
    return element
}

export default contact;