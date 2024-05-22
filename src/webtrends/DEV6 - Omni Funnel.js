WT.SPA.on('/au/portal/quote/(vehicle|home|landlord)', function() {
    try {
        var el = document.querySelector('#WelcomeContent > div > div:nth-child(1) > div:nth-child(1) > div > section > h2');
        if (el) {
            el.innerText = 'DEV6 - OMNI FUNNEL';
            console.log('DEV6 - OMNI FUNNEL');
            WT.trackGA.dlPush('DEV6', 'VARIATION');
        }
    } catch (error) {
        // Logs any errors that occur to the 'dataLayer' object
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'optimize demo - Omni',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});