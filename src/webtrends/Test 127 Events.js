try{
    /* @wt.parse="vm" */
    var map = {
        'clickedSubmit': 'div > div.flex-item.j-postcode-validate > input.btn.btn--primary.button.button--primary.button.button--primary',
        'clickedVehicleClass': '#fxb_8dd7e57c-5339-4cbf-a016-daffefb2261e_Fields_54da6a8b-5015-48f3-9644-00d56caac6f8__Value'
    };
    document.addEventListener('click', function(e) {
        if (!e.target || !e.target.closest) return;
        for (var cp in map) {
            if (e.target.closest(map[cp])) {
                WT.trackEvent({
                    testAlias: '$testAlias',
                    conversionPoint: cp
                });
            }
        }
    });
    } catch (error) {
        // Logs any errors that occur to the 'dataLayer' object
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'webtrends optimize experiment 127 - omni events',
            eventLabel: error,
            nonInteraction: true,
        });
    }