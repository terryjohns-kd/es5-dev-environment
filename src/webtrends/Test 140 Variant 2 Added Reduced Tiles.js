function getCTPContent(region) {
    switch (region) {
        case 'New South Wales':
            return {
                heading: 'NSW CTP',
                link: 'https://greenslip.qbe.com/CTP_Internet_Quotes/Greenslips?BNDE=xt6lvGSAnWI'
            };
        case 'South Australia':
            return {
                heading: 'CTP Insurance SA',
                link: 'https://www.qbe.com/au/qbe4ctp'
            };
        case 'Queensland':
            return {
                heading: 'CTP Insurance QLD',
                link: 'https://www.qbe.com/au/green-slip-insurance/ctp-queensland'
            };
        default:
            return {
                heading: 'NSW CTP',
                link: 'https://greenslip.qbe.com/CTP_Internet_Quotes/Greenslips?BNDE=xt6lvGSAnWI'
            };
    }
}

try {

    var region = WT.optimizeModule.prototype.wtConfigObj.data._wm_regionName;

    var ctpContent = getCTPContent(region);

    var tabularElement = document.querySelector('#main-container > main > section > div.c-tabular.js-tabular');
  
    if (tabularElement) {
        tabularElement.style.display = 'none';
    }


    var newDiv = document.createElement('div');

    newDiv.innerHTML = '<h2 class="cro140-1">Select the product you want to get a quote on below...</h2>' +
    '<div class="c-columnContent container">' +
        '<div class="c-columnContent__column">' +
        '<div class="c-columnContent__content">' +
        '<div class="c-columnContent__text">' +
        '<div class="rich-text-editor">' +
        '<h2 class="qbe-sub-heading">' + ctpContent.heading + '</h2>' +
        '<p>We insure more than two million vehicles for CTP nationally.</p>' +
        '<br>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__buttonContent">' +
        '<a class="c-columnContent__button btn btn--primary" href="' + ctpContent.link + '" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
        'Get a quote' +
        '</a>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__content">' +
        '<div class="c-columnContent__text">' +
        '<div class="rich-text-editor">' +
        '<h2 class="qbe-sub-heading">Car</h2>' +
        '<p>Buy online and save $75 on new Comprehensive Car Insurance</p>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__buttonContent">' +
        '<a class="c-columnContent__button btn btn--primary" href="https://www.qbe.com/au/portal/quote/vehicle?promotionalCode=SAVE75" target="_blank" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
        'Get a quote' +
        '</a>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__content">' +
        '<div class="c-columnContent__text">' +
        '<div class="rich-text-editor">' +
        '<h2 class="qbe-sub-heading">Home</h2>' +
        '<p>Buy online and save 10% for a new home insurance policy</p>' +
        '<br>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__buttonContent">' +
        '<a class="c-columnContent__button btn btn--primary" href="https://www.qbe.com/au/portal/quote/home?promotionalCode=10HOME19" target="_blank" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
        'Get a quote' +
        '</a>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__content">' +
        '<div class="c-columnContent__text">' +
        '<div class="rich-text-editor">' +
        '<h2 class="qbe-sub-heading">Motorcycle</h2>' +
        '<p>Choose from three levels of cover to suit the way you ride.</p>' +
        '<br>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__buttonContent">' +
        '<a class="c-columnContent__button btn btn--primary" href="https://www.qbe.com/au/insurance/bike/bike" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
        'Get a quote' +
        '</a>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__content">' +
        '<div class="c-columnContent__text">' +
        '<div class="rich-text-editor">' +
        '<h2 class="qbe-sub-heading">Small Business</h2>' +
        '<p>Choose a flexible cover to protect your small business.</p>' +
        '<br>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__buttonContent">' +
        '<a class="c-columnContent__button btn btn--primary" href="https://www.qbe.com/au/quote/business/business-details" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
        'Get a quote' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="c-columnContent__footer">' +
        '<div class="c-columnContent__footer-text"></div>' +
        '<div class="c-columnContent__footer-buttons"></div>' +
        '</div>' +
        '</div>';

    var bannerElement = document.querySelector('div.c-banner');

    if (bannerElement && bannerElement.parentNode) {
        bannerElement.parentNode.insertBefore(newDiv, bannerElement.nextSibling);
    }


} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'Webtrends Optimize Test 140',
        eventLabel: error,
        nonInteraction: true,
    });
}
