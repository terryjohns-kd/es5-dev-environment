WT.SPA.run({
    vpv: '/au/portal/quote/vehicle.*(#)?/tailorCover',
    test: 'Test 192',
    variant: 'Variation 1',
    callback: function () {
        console.log('Test 192 - Variation 1 running');
        // Targets the 3 option containers
        var optionSelector = '#tailorCover [data-track^="tailorOption"]';

        // Targets the helper text span for Hire Car - Extra
        var hireCarSpanSelector =
            '[data-track="tailorOptionHireCarExtra"] div > div > div > label > div > span';

        var newText =
            'Extends hire car cover to all incidents, not just theft or not-at-fault accidents, for up to 14 days after an insurable event.';

        var mq = window.matchMedia('(max-width: 600px)');

        function applyOptionDivCss(div) {
            // Flex override for the three tiles
            div.style.setProperty('flex', '1 0 51%', 'important');
        }

        function apply() {
            // A) Style the three option divs (data-track starts with tailorOption)
            var optionDivs = document.querySelectorAll(optionSelector);
            for (var i = 0; i < optionDivs.length; i++) {
                applyOptionDivCss(optionDivs[i]);
            }

            // B) Update Hire Car - Extra helper text + keep visible on mobile + max-width
            var span = document.querySelector(hireCarSpanSelector);
            if (span) {
                if (span.textContent !== newText) {
                    span.textContent = newText;
                }

                span.style.setProperty('max-width', '90%', 'important');

                if (mq.matches) {
                    // Override @media display:none
                    span.style.setProperty('display', 'inline', 'important'); // switch to 'block' if you want it on a new line
                    span.style.setProperty('visibility', 'visible', 'important');
                } else {
                    // Optional: remove mobile-only overrides above 600px
                    span.style.removeProperty('display');
                    span.style.removeProperty('visibility');
                }
            }
        }

        // Initial run
        apply();

        // Re-apply on SPA re-renders
        var obs = new MutationObserver(function () { apply(); });
        obs.observe(document.documentElement, { childList: true, subtree: true });

        // Re-apply on breakpoint changes
        if (mq.addEventListener) mq.addEventListener('change', apply);
        else if (mq.addListener) mq.addListener(apply);
    }
});