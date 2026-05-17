WT.SPA.run({
    vpv: '/au/insurance/bike/riders',
    test: 'Test 193',
    variant: 'Variant 1',
    callback: function () {

        // Avoid adding the style more than once
        if (document.getElementById('hide-intersex-style')) {
            return;
        }

        var style = document.createElement('style');
        style.id = 'hide-intersex-style';

        style.innerHTML =
            'input[name="bikeForm_rider_agg_0_person_gender"][value="intersex"],' +
            'input[name="bikeForm_rider_agg_0_person_gender"][value="intersex"] + label {' +
            '  display: none !important;' +
            '}';

        (document.head || document.getElementsByTagName('head')[0]).appendChild(style);
    }
});