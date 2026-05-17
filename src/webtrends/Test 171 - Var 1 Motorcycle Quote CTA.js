WT.SPA.run({
    vpv: '/au/insurance/bike/quote',
    test: 'Test 171',
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

                for (var i = 0; i < tertiaryButtons.length; i++) {
                    var button = tertiaryButtons[i];
                    button.style.backgroundColor = '#E87722';
                    button.style.fontWeight = 'bold';
                    button.style.fontSize = '18px';
                }

                for (var j = 0; j < primaryButtons.length; j++) {
                    var pButton = primaryButtons[j];
                    pButton.style.backgroundColor = '#E87722';
                    pButton.style.backgroundImage = 'none';
                    pButton.style.fontWeight = 'bold';
                    // fontSize unchanged
                }

                clearInterval(interval);
            }

            attempts++;
            if (attempts >= maxAttempts) {
                clearInterval(interval);
                console.warn('Button styling script timed out.');
            }
        }, 500);
    }
});