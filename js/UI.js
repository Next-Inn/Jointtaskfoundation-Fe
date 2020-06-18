class UI {

    printMessage(message, className) {
            // create div containing message
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('alert', 'alertMessage, className');
        messageDiv.appendChild(document.createTextNode(message));

        
    }

}