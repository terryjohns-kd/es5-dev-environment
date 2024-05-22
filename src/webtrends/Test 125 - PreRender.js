function processVirtualPageView(virtualPageViewData) {
    if (virtualPageViewData.virtualPagePath) {

        var conversionName = 'Virtual Page View - ' + virtualPageViewData.virtualPageTitle;

        WT.click({ conversionPoint: conversionName });
    }
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push = (function () {
    var originalPush = window.dataLayer.push;
    return function () {
        var pushArguments = [].slice.call(arguments, 0);
        originalPush.apply(window.dataLayer, pushArguments);

        pushArguments.forEach(function (data) {
            if (data.event && data.event === 'virtualPageView') {
                processVirtualPageView(data);
            }
        });
    };
})();