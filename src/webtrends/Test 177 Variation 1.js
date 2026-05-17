WT.SPA.run({
    vpv: '/au/insurance/bike/contact',
    test: 'Test 177',
    variant: 'Variation 1',
    callback: function () {

        var selector = 'a.button.button--tertiary[ng-click="vm.purchaseNow()"]';

        var observer = new MutationObserver(function () {
            var el = document.querySelector(selector);
            if (el && el.style.display !== 'none') {
                el.style.display = 'none';
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Optional: stop checking after 30 seconds
        setTimeout(function () {
            observer.disconnect();
        }, 30000);
    }
});