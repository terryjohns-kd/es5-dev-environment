WT.SPA.run({
    vpv: '/au/comprehensive-car-insurance-save75',
    test: 'Test 207',
    variant: 'Variant 1',
    callback: function () {
        var heroParagraph = document.querySelector('div.q-blueboxHeroBanner__content > p');

        if (heroParagraph && !document.querySelector('[data-track="feefoLogo"]')) {
            var feefoBadge = document.createElement('img');

            feefoBadge.style.width = 'auto';
            feefoBadge.style.marginTop = '20px';
            feefoBadge.style.aspectRatio = 'auto';
            feefoBadge.alt = 'Our customer Feefo rating';
            feefoBadge.title = 'Our customer Feefo rating';
            feefoBadge.setAttribute('data-track', 'feefoLogo');
            feefoBadge.src = 'https://api.feefo.com/api/logo?merchantidentifier=qbe-insurance&template=Service-Stars-White-200x51.png';

            heroParagraph.parentNode.insertBefore(feefoBadge, heroParagraph.nextSibling);
        }
    }
});


