WT.SPA.on('/au/portal/quote/home.*', function () {
    try {
        WT.trackGA.dlPush('Test 155-PROD', 'Control');
         // Get the current URL
        var currentUrl = window.location.href;

        // Check if the URL contains '#/welcome'
        if (currentUrl.indexOf('#/welcome') !== -1 || currentUrl.indexOf('#/payment/now') !== -1) {
            return; // Exit the function without executing further
        }
        
    } catch (e) {
        window.dataLayer.push({
            event: 'webtrends error',
            eventAction: 'optimize test 155 - omni - Control',
            eventLabel: e,
        });
    }
});