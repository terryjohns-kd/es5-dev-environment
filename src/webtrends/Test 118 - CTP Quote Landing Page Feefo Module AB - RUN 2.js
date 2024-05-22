try {

    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<div class="hidden-xs" style="width:100%;"><div id="feefo-service-review-carousel-widgetId" class="feefo-review-carousel-widget-service"></div></div>';

    // Find the target element
    var targetElement = document.querySelector('body > div.container > div.qbe-content > div:nth-child(3)');

    // Insert Feefo just before the target element
    targetElement.parentNode.insertBefore(newDiv.firstChild, targetElement);

    // Add CSS changes
    var style = document.createElement('style');
    style.innerHTML = '.service-carousel-container.mobile { padding: 0 !important; min-width: auto !important; }';
    document.head.appendChild(style);

    var exJs = document.createElement('script');
    exJs.setAttribute('type', 'text/javascript');
    exJs.setAttribute('src', 'https://api.feefo.com/api/javascript/qbe-insurance?tags=insurance%3DCTP Insurance');
    exJs.setAttribute('async', 'true'); // Add the async attribute
    document.head.appendChild(exJs);
    
} catch (error) {
    // Logs any errors that occur to the 'dataLayer' object
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'optimize test - 118 Variant 1',
        eventLabel: error,
        nonInteraction: true,
    });
}