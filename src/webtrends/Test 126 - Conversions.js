/* @wt.parse="vm" */
var map = {
    'clicked_Annually': 'input[value="annual_Ext"]',
    'clicked_Monthly': 'input[value="monthly"]',
    'clicked_PayPalExt': 'input[value="paypal_ext"]',
    'clicked_Credit_Card': 'input[value="creditcard"]',
    'clicked_BankAccount': 'input[value="ach"]',
    'clicked_BPay': 'input[value="responsive"]'
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