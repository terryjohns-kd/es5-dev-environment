try {
    var elementToMove = document.querySelector('#main-container > main > section > div:nth-child(5)');
    var referenceElement = document.querySelector('#main-container > main > section > div.action-bar');
    // Ensure both elements exist
    if (elementToMove && referenceElement && referenceElement.parentNode) {
        referenceElement.parentNode.insertBefore(elementToMove, referenceElement.nextSibling);
    } else {
        console.error('One of the elements was not found.');
    }
    // Select the first element with the class 'qbe-body-text'
    var element = document.querySelector('.qbe-body-text');
    // Check if the element exists to avoid null reference errors
    if (element) {
        // Update the inner text of the element
        element.innerText = 'Here are some more great reasons to choose QBE Comprehensive Motorcycle Insurance.';
    } else {
        console.error('Element with class \'qbe-body-text\' not found.');
    }
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'webtrends optimize test 121',
        eventLabel: error,
        nonInteraction: true,
    });
}