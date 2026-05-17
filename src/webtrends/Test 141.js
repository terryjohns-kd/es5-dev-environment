try {

    var newDiv = document.createElement('div');

    newDiv.innerHTML = '<div class="c-columnContent container">' +
        '<div class="c-columnContent__header "><h2>Compare our car insurance cover</h2></div>' +
        '<div class="c-columnContent__column">' +
        '<div class="c-columnContent__content">' +
        '<div class="c-columnContent__text">' +
        '<div class="rich-text-editor">' +
        '<h2 class="qbe-sub-heading cro141-1">Comprehensive</h2>' +
        '<h3 class="qbe-section-heading cro141-2">Our most popular car insurance</h3>' +
        '<p>Comprehensive car insurance is a popular choice for Australian drivers because it offers the highest level of protection.</p>' +
        '<br>' +
        '<ul>' +
        '<li style="display: block;"><span class="tick-list">Damage to someone else\'s vehicle or property</span></li>' +
        '<li style="display: block;"><span class="tick-list">Damage to your car</span></li>' +
        '<li style="display: block;"><span class="tick-list">Hire car when you\'re not at fault in a car accident</span></li>' +
        '<li style="display: block;"><span class="tick-list">New car replacement (conditions apply)</span></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__buttonContent">' +
        '<a class="c-columnContent__button btn btn--primary comp" href="https://www.qbe.com/au/portal/quote/vehicle?promotionalCode=SAVE75" target="_blank" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
        'Get a quote' +
        '</a>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__content">' +
        '<div class="c-columnContent__text">' +
        '<div class="rich-text-editor">' +
        '<h2 class="qbe-sub-heading cro141-1">Third Party Property Damage</h2>' +
        '<h3 class="qbe-section-heading cro141-2">Cover for damage to another person\'s vehicle</h3>' +
        '<p>Cover for damage caused to another person’s vehicle or property by your own car. It’s different to Compulsory Third Party (CTP) insurance.</p>' +
        '<br>' +
        '<ul>' +
        '<li style="display: block;"><span class="tick-list">Damage to someone else\'s vehicle or property</span></li>' +
        '<li style="display: block;"><span class="cross-list">Damage to your car</span></li>' +
        '<li style="display: block;"><span class="cross-list">Hire car when you\'re not at fault in a car accident</span></li>' +
        '<li style="display: block;"><span class="cross-list">New car replacement</span></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__buttonContent">' +
        '<a class="c-columnContent__button btn btn--primary tppd" href="https://www.qbe.com/au/portal/quote/vehicle?promotionalCode=SAVE75" target="_blank" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
        'Get a quote' +
        '</a>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__content">' +
        '<div class="c-columnContent__text">' +
        '<div class="rich-text-editor">' +
        '<h2 class="qbe-sub-heading cro141-1">Third Party Property Damage, Fire and Theft</h2>' +
        '<h3 class="qbe-section-heading cro141-2">Add Fire and Theft as an option</h3>' +
        '<p>Once added to your Third Party Property Damage policy, it covers loss or damage to your car caused by fire, theft or attempted theft.</p>' +
        '<br>' +
        '<ul>' +
        '<li style="display: block;"><span class="tick-list">Damage to someone else\'s vehicle or property</span></li>' +
        '<li style="display: block;"><span class="tick-list">Damage to your car by fire and theft</span></li>' +
        '<li style="display: block;"><span class="tick-list">Hire car after theft or attempted theft</span></li>' +
        '<li style="display: block;"><span class="cross-list">New car replacement</span></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__buttonContent">' +
        '<a class="c-columnContent__button btn btn--primary tppdft" href="https://www.qbe.com/au/portal/quote/vehicle?promotionalCode=SAVE75" target="_blank" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
        'Get a quote' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__footer">' +
        '<div class="c-columnContent__footer-text" style="margin-left: 30px; margin-right: 30px;">To get more details, go to our page on <a href="/au/car-insurance/comprehensive-car-insurance" target="_blank">Comprehensive Car Insurance</a> or <a href="/au/car-insurance/third-party-car-insurance" target="_blank">Third Party Property Damage</a>, or read the <a href="/au/car-insurance/car-insurance-policy-documents" target="">PDS and TMD</a>.</div>' +
        '<div class="c-columnContent__footer-buttons"></div>' +
        '</div>' +
        '</div>';


    var bannerDiv = document.querySelector('.c-banner');


    bannerDiv.parentNode.insertBefore(newDiv, bannerDiv.nextSibling);
} catch (e) {
    window.dataLayer.push({
        event: 'webtrends error',
        eventAction: 'optimize test 141 - sitecore - variant 1',
        eventLabel: e,
    });
}