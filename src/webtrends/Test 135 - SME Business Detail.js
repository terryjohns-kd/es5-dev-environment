WT.SPA.on('/au/quote/business/business-details', function () {
    try {

        var titleElement = document.querySelector('div.TitleContainer > div > h1');
        if (titleElement) {
            titleElement.innerText = 'Let\'s start your quote';
        } else {
            console.log('Title element not found');
        }
        var contentElement = document.querySelector('div.ContentContainer > div > p');
        if (contentElement) {
            contentElement.innerText = 'It just takes a few minutes to get a quote for small business insurance.';
        } else {
            console.log('Content element not found');
        }
        WT.trackGA.dlPush('Test 135', 'Variation 1');
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'optimize test 135 - sme - variant 1',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});