try {
    var map = {
        'clickedGoToDTMR': 'a.btn--primary.btn[href="https://www.service.transport.qld.gov.au/tmrauthentication/public/TermsAndConditions.xhtml?serviceName=Level1ServiceForChangeCtpInsurance&entryPage=/application/EnterMyRegistration.xhtml?action=entermyregistration&executionContext=qt&dswid=7739"]',
        'clickedSwitchNowInput': 'input[type="submit"][value="Switch now"].btn--primary.button--primary'
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
        eventAction: 'webtrends optimize experiment 136 - QLD CTP events',
        eventLabel: error.toString(),
        nonInteraction: true,
    });
}
