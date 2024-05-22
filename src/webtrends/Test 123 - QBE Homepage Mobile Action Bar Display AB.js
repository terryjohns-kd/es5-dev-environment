WT.SPA.on('/au/portal/quote/vehicle.*#/payment/now', function() {
    try {
        WT.trackGA.dlPush('Test 123', 'Variation 1');
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'optimize test 123 - omni - variation 1',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});