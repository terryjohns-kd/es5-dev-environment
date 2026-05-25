function hasBlockedPromoCode() {
    var query = window.location.search || '';
    // Check for the specific promo code you supplied
    return query.indexOf('promotionalCode=VFFLAUNCHPOINTS') !== -1;
}


WT.SPA.on('/au/portal/quote/vehicle.*(#)?/tailorCover', function () {

    // --- STOP if the specific blocked promo code is present ---
    if (hasBlockedPromoCode()) {
        return;
    }

    window.dataLayer = window.dataLayer || [];

    function getDataLayerValue(dataLayer, key) {
        if (!dataLayer) return false;
        for (var i = dataLayer.length - 1; i >= 0; i--) {
            if (dataLayer[i] && dataLayer[i].data && dataLayer[i].data[key]) {
                return dataLayer[i].data[key];
            }
        }
    }

    try {
        var expCoverType = getDataLayerValue(window.dataLayer, 'coverType');
        var campaignCode = getDataLayerValue(window.dataLayer, 'campaignCode');

        if (expCoverType === 'comprehensive' &&
            campaignCode === 'SAVE75' &&
            document.querySelectorAll('.cro1').length === 0) {

            var elementToHide =
                document.querySelector('#tailorCover > div > div:nth-child(1) > div > div > ul > li:nth-child(1)');
            elementToHide.style.display = 'none';

            var newElement = document.createElement('div');
            newElement.className = 'cro1';
            newElement.innerHTML =
                '<div class="cro2"><p class="cro3">A $75 discount has been applied</p><p class="cro4">New Comprehensive Car Insurance policies purchased online receive a $75 discount.</p></div>';

            var targetElement =
                document.querySelector('#Comprehensive > div > div:nth-child(2) > div > div > div:nth-child(2)');
            targetElement.parentNode.insertBefore(newElement, targetElement);
        } 
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'webtrends optimize optimal 101',
            eventLabel: error,
            nonInteraction: true
        });
    }
});


WT.SPA.on('/au/portal/quote/vehicle.*#/summary', function () {

    // --- STOP if the specific blocked promo code is present ---
    if (hasBlockedPromoCode()) {
        return;
    }

    window.dataLayer = window.dataLayer || [];

    function getDataLayerValue(dataLayer, key) {
        if (!dataLayer) return false;
        for (var i = dataLayer.length - 1; i >= 0; i--) {
            if (dataLayer[i] && dataLayer[i].data && dataLayer[i].data[key]) {
                return dataLayer[i].data[key];
            }
        }
    }

    try {
        var expCoverType = getDataLayerValue(window.dataLayer, 'coverType');
        var campaignCode = getDataLayerValue(window.dataLayer, 'campaignCode');

        if (expCoverType === 'comprehensive' &&
            campaignCode === 'SAVE75' &&
            document.querySelectorAll('.cro11').length === 0) {

            var newElement = document.createElement('div');
            newElement.className = 'cro11';
            newElement.innerHTML =
                '<div class="cro2"><p class="cro3">A $75 discount has been applied</p><p class="cro4">New Comprehensive Car Insurance policies purchased online receive a $75 discount.</p></div>';

            var targetElement =
                document.querySelector('#QuoteSummaryPanelList > div > fieldset > div > div:nth-child(6)');
            targetElement.parentNode.insertBefore(newElement, targetElement);
        }
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'webtrends optimize optimal 101',
            eventLabel: error,
            nonInteraction: true
        });
    }
});
