try {
    var exJs = document.createElement('script');
    exJs.setAttribute('type', 'text/javascript');
    exJs.setAttribute('src', 'https://api.feefo.com/api/javascript/qbe-insurance?tags=insurance%3DCTP Insurance');
    exJs.setAttribute('async', 'true'); // Add the async attribute
    document.head.appendChild(exJs);

    // Create a new div element Feefo, hidden on mobile
    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<div class="hidden-xs" style="width:452px;"><div id="feefo-service-review-carousel-widgetId" class="feefo-review-carousel-widget-service"></div></div>';

    // Find the target element
    var targetElement = document.querySelector('body > div.container > div.qbe-content > div:nth-child(3)');

    // Insert Feefo just before the target element
    targetElement.parentNode.insertBefore(newDiv.firstChild, targetElement);

    // Select the div with the image on mobile
    var elementToReplace = document.querySelector('body > div.container > div.qbe-content > div:nth-child(2) > div.col-sm-7 > div.visible-xs');

    // Check if the element exists before attempting to replace its content
    if (elementToReplace) {
        // Create a new div element with Feefo
        var newContent = document.createElement('div');
        newContent.innerHTML = '<div id="feefo-service-review-carousel-widgetId" class="feefo-review-carousel-widget-service"></div>';
        // Replace the existing content with the new content
        elementToReplace.innerHTML = ''; // Clear existing content
        elementToReplace.appendChild(newContent); // Append the new content
    }

    // Add CSS changes
    var style = document.createElement('style');
    style.innerHTML = '.service-carousel-container.mobile { padding: 0 !important; min-width: auto !important; }';
    document.head.appendChild(style);

} catch (error) {
    // Logs any errors that occur to the 'dataLayer' object
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'optimize test - 111',
        eventLabel: error,
        nonInteraction: true,
    });
}