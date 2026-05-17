WT.SPA.run({
    vpv: '/au/insurance/bike/quote',
    test: 'Test 196',
    variant: 'Variation 1',
    callback: function () {
        console.log('Test loaded');
        var attempts = 0;
        var maxAttempts = 20; // stop after 20 attempts (10s if interval is 500ms)

        var interval = setInterval(function () {
            console.log('Set interval running');

            var tertiaryButtons = document.querySelectorAll('a.button.button--tertiary');
            var primaryButtons = document.querySelectorAll('.button.button--primary');

            console.log('Tertiary buttons found:', tertiaryButtons.length);
            console.log('Primary buttons found:', primaryButtons.length);

            if (tertiaryButtons.length > 0 && primaryButtons.length > 0) {
                console.log('Buttons are available');

                // Update tertiary CTA text
                for (var i = 0; i < tertiaryButtons.length; i++) {
                    var button = tertiaryButtons[i];
                    button.textContent = 'Continue';
                    // If the site uses aria-labels for accessibility, keep in sync
                    button.setAttribute('aria-label', 'Continue');
                }

                // Update primary CTA text
                for (var j = 0; j < primaryButtons.length; j++) {
                    var pButton = primaryButtons[j];

                    // If it's a <button> or <a>, textContent is usually safe
                    pButton.textContent = 'Continue';
                    pButton.setAttribute('aria-label', 'Continue');

                    // If the element is an <input type="submit"> instead, this would be needed:
                    // if (pButton.tagName === 'INPUT') { pButton.value = 'Continue'; }
                }

                clearInterval(interval);
            }

            attempts++;
            if (attempts >= maxAttempts) {
                clearInterval(interval);
                console.warn('CTA text update script timed out.');
            }
        }, 500);
    }
});
