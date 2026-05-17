WT.SPA.run({
    vpv: '/au/car-insurance/third-party-car-insurance',
    test: 'Test 143',
    variant: 'Variant 1',
    callback: function () {
        var target = document.querySelector('.q-floating-navigation');

        if (!target || !target.parentNode) {
            return;
        }

        if (document.getElementById('covercheck')) {
            return;
        }

        var html = ''
            + '<div class="ComponentContainer_container__843MN ComponentContainer_container--bg-grey__NQC71 ComponentContainer_container--richtext-padding__sKol1">'
            + '    <div class="q-richtext">'
            + '        <h2 class="qbe-heading" id="covercheck">Quick check: which cover are you looking for?</h2>'
            + '        <ul>'
            + '            <li class="tick-list"><strong>CTP (Green Slip)</strong> covers injuries to other people in an accident</li>'
            + '            <li class="tick-list"><strong>Third Party Property Damage</strong> covers damage you cause to someone else’s car or property.</li>'
            + '        </ul>'
            + '        <p><a href="#accordion-section-2" class="js-covercheck-link">See the full CTP vs Third Party explanation</a></p>'
            + '    </div>'
            + '</div>';

        target.insertAdjacentHTML('afterend', html);

        var faqLink = document.querySelector('.js-covercheck-link');

        if (!faqLink) {
            return;
        }

        faqLink.onclick = function (e) {
            var faqButton = document.getElementById('accordion-section-2');

            if (!faqButton) {
                return;
            }

            if (e && e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }

            if (faqButton.getAttribute('aria-expanded') !== 'true') {
                faqButton.click();
            }

            faqButton.scrollIntoView();

            if (window.location.hash !== '#accordion-section-2') {
                window.location.hash = 'accordion-section-2';
            }
        };
    }
});