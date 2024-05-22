/* @wt.parse="vm" */
var map = {
    'WhyChoose_Car': '#main-container > main > section > div:nth-child(3) > div.c-columnContent__column > div:nth-child(1) > div.c-columnContent__buttonContent > a',
    'WhyChoose_Home': '#main-container > main > section > div:nth-child(3) > div.c-columnContent__column > div:nth-child(2) > div.c-columnContent__buttonContent > a',
    'WhyChoose_Motorcycle': '#main-container > main > section > div:nth-child(3) > div.c-columnContent__column > div:nth-child(3) > div.c-columnContent__buttonContent > a',
    'ActionBar_CTP': '#actionbar > li:nth-child(2) > a',
    'ActionBar_Car': '#actionbar > li:nth-child(3) > a',
    'ActionBar_Motorcycle': '#actionbar > li:nth-child(4) > a',
    'ActioBar_Home': '#actionbar > li:nth-child(5) > a',
    'Hero_GetQuote': '#main-container > main > section > div.c-banner > div.c-banner__carousel > div > div > div > div > div.c-banner__buttonContainer > a.c-banner__button.btn.btn--hero'
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