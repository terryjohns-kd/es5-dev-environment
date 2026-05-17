
function getCTPContent(region) {
    switch (region) {
        case 'New South Wales':
            return {
                heading: 'NSW CTP',
                paragraph: 'CTP insurance protects you, or anyone driving your car, if you cause an accident in which someone else is injured. New South Wales CTP insurance, also known as a Green Slip, is mandatory and must be purchased before you register your vehicle.',
                link: 'https://greenslip.qbe.com/CTP_Internet_Quotes/GetQuote?BNDE=xt6lvGSAnWI='
            };
        case 'South Australia':
            return {
                heading: 'CTP Insurance SA',
                paragraph: 'In South Australia, CTP insurance protects you if you cause an accident in which someone else is injured. South Australia CTP insurance is mandatory and must be purchased before you register your vehicle.',
                link: 'https://www.qbe.com/au/qbe4ctp'
            };
        case 'Queensland':
            return {
                heading: 'CTP Insurance QLD',
                paragraph: 'In Queensland, CTP insurance protects you if you cause an accident in which someone else is injured. Queensland CTP insurance is mandatory and must be purchased before you register your vehicle.',
                link: 'https://www.qbe.com/au/green-slip-insurance/ctp-queensland'
            };
        default:
            return {
                heading: 'NSW CTP',
                paragraph: 'CTP insurance protects you, or anyone driving your car, if you cause an accident in which someone else is injured. New South Wales CTP insurance, also known as a Green Slip, is mandatory and must be purchased before you register your vehicle.',
                link: 'https://greenslip.qbe.com/CTP_Internet_Quotes/GetQuote?BNDE=xt6lvGSAnWI='
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
        '<h3 class="qbe-section-heading">We insure more than two million vehicles for CTP nationally.</h3>' +
        '<p>' + ctpContent.paragraph + '</p>' +
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
        '<h3 class="qbe-section-heading">Buy online and save $75 on new Comprehensive Car Insurance</h3>' +
        '<p>We reward great driving and claims history by simply offering our best price. When you choose QBE for your car insurance, you\'ll get an up-front, fair premium that takes into account the information you provide us.</p>' +
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
        '<h3 class="qbe-section-heading">Buy online and save 10% for a new home insurance policy</h3>' +
        '<p>Homeowner, renter or landlord, your home and belongings are some of your most precious investments, so it makes sense to protect them. Cover the cost of replacing or repairing your rental property, home and/or your belongings if something goes wrong.</p>' +
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
        '<h3 class="qbe-section-heading">Choose from three levels of cover to suit the way you ride.</h3>' +
        '<p>Depending on the type of cover you choose, our insurance can help cover the cost of damage to your bike and property, as well as injury to other people, if you’re ever in an accident. Our motorcycle insurance is delivered by experts.</p>' +
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
        '<h3 class="qbe-section-heading">Choose a flexible cover to protect your small business.</h3>' +
        '<p>When you’re busy running a business, it can be hard to find time to sort out your insurance. That’s why we’ve made QBE Small Business Insurance flexible and available in multiple ways, so you have the confidence to choose the cover you need to protect what you’ve worked so hard to create.</p>' +
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