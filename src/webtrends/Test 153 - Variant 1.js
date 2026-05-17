WT.SPA.on('/au/quote/business/business-details', function () {
    try {
        var triggerButton = document.querySelector('#what-to-insure > div > div > div > button > span.MuiTypography-root.MuiTypography-label2.css-21mfld');

        if (triggerButton) {
            triggerButton.addEventListener('click', function () {
                var attempts = 0;

                function simulateClickOnQuickSearch() {
                    var quickSearchRadio = document.getElementById('quick-search-icon');

                    if (quickSearchRadio) {
                        console.log('Quick search found=' + attempts);
                        quickSearchRadio.click();
                    } else if (attempts < 5) {
                        attempts++;
                        console.log('Quick search not found=' + attempts);
                        setTimeout(simulateClickOnQuickSearch, 100);
                    }
                }

                simulateClickOnQuickSearch();
            });
        }
        WT.trackGA.dlPush('Test 153', 'Variation 1');
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'webtrends optimize test 153',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});
