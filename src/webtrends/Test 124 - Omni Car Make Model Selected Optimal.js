WT.SPA.on('/au/portal/quote/vehicle.*#/my-vehicle', function() {
    try {
        var inputElement = document.querySelector('#findVehicle > div > div:nth-child(1) > div > div > div > div > label:nth-child(2) > span > span > input');
        if (!inputElement) {
            throw new Error('Input element not found');
        }
        var clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        inputElement.dispatchEvent(clickEvent);
        WT.trackGA.dlPush('Test 124', 'Variation 1');
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'optimize test 124 - omni - variant 1',
            eventLabel: error.toString(),
            nonInteraction: true,
        });
    }
});
