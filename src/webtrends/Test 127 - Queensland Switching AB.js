try {
    if (window.matchMedia('(max-width: 991px)').matches) {
        var div = document.querySelector('div[data-sc-field-key="4B498C19E6DA431BA818A2275FC1A653"]');
        if (div) {
            var htmlContent = '<p class="cro127-1">Switch and get up to a $50 eGift Card<sup>^</sup></p><p class="cro127-2">See if you are eligible for an eGift Card using the form below.</p>';
            div.insertAdjacentHTML('beforebegin', htmlContent);
        }
    }
    var h2Element = document.querySelector('div.flex-item.j-postcode-validate > h2');
    if (h2Element) {
        if (typeof h2Element.textContent !== 'undefined') {
            h2Element.textContent = 'Check your reward';
        } else {
            h2Element.innerText = 'Check your reward';
        }
    }
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'webtrends optimize test - 127',
        eventLabel: error,
        nonInteraction: true,
    });
}
