WT.SPA.on('/au/quote/business/business-details', function() {
    try {
        var el = document.querySelector('div[data-testid="overlay"] > div > h3');
        if (el) {
            el.innerText = 'DEV5 VARIATION';
            console.log('DEV5 VARIATION');
            WT.trackGA.dlPush('DEV5', 'VARIATION');
        }
    } catch (error) {
        // Logs any errors that occur to the 'dataLayer' object
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'optimize demo - digi sme',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});