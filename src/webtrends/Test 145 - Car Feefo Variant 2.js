WT.SPA.on('/au/portal/quote/vehicle.*#/welcome', function () {
    try {

        var img = document.querySelector('img[data-track="feefoLogo"]');
        img.setAttribute('src', 'https://www.qbe.com/au/-/media/79C97DC9570A4126B85B656A8DF913C5.webp');

        WT.trackGA.dlPush('Test 144', 'Variation 2');

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