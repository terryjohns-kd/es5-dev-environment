WT.SPA.run({
    vpv: '/au/insurance/bike/payment',
    test: 'Test 178',
    variant: 'Variant 1',
    callback: function () {

        var bodyObserver = new MutationObserver(function (mutations, observer) {
            var floating = document.querySelector('.floating-module.floating-save');
            var main = document.querySelector('.col.col--main');

            if (floating && main) {
                observer.disconnect();

                var adjustMargin = function () {
                    var mq = window.matchMedia('only screen and (max-width: 47.9375em)');
                    if (mq.matches) {
                        var h = floating.offsetHeight;
                        main.setAttribute('style', 'margin-top:' + h + 'px !important');
                    } else {
                        main.setAttribute('style', 'margin-top:0 !important');
                    }
                };

                setTimeout(adjustMargin, 50);

                window.addEventListener('resize', adjustMargin);

                var floatingObserver = new MutationObserver(function () {
                    adjustMargin();
                });
                floatingObserver.observe(floating, { attributes: true, childList: true, subtree: true });
            }
        });

        bodyObserver.observe(document.body, { childList: true, subtree: true });
    }
});
