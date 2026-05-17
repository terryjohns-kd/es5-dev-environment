try {

    var quoteButton = document.querySelector('#main-container > main > section > div.c-banner > div.c-banner__carousel > div > div > div > div > div.c-banner__buttonContainer > a');

    if (quoteButton) {

        for (var i = 0; i < quoteButton.childNodes.length; i++) {
            if (quoteButton.childNodes[i].nodeType === Node.TEXT_NODE) {
                quoteButton.childNodes[i].nodeValue = 'Buy online now ';
                break;
            }
        }
    }

} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'optimize test 147 - sitecore - Variant 1',
        eventLabel: error,
        nonInteraction: true,
    });
}