try{
/* @wt.parse="vm" */
var map = {
    'clickedNext': '#form-button-next',
    'clickedCancel': '#form-button-cancel',
    'clickedLiveChat': '#LPMlabel-1710821496894-2'
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
        eventAction: 'webtrends optimize experiment 125 - omni events',
        eventLabel: error,
        nonInteraction: true,
    });
}