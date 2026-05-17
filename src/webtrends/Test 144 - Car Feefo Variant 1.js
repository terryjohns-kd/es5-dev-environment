WT.SPA.on('/au/portal/quote/vehicle.*#/welcome', function () {
    try {

        var img = document.querySelector('img[data-track="feefoLogo"]');
        var src = img.getAttribute('src');
        var newSrc = src.replace('Grey', 'White');
        img.setAttribute('src', newSrc);

        WT.trackGA.dlPush('Test 144', 'Variation 1');

    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'Webtrends Optimize Test 144',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});