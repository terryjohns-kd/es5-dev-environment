function changeInnerText(selector, newText) {
    var element = document.querySelector(selector);
    if (element) {
        element.innerText = newText;
    }
}
    // Insert new content before the scrolling content
    function insertBefore(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode);
    }

try {
    // Change document title
    document.title = 'Save up to 20% off Home Insurance | QBE AU';
    // Update terms content
    var elementTerms = document.querySelector('#main-container > main > section > div:nth-child(6) > div > div');
    elementTerms.innerHTML = '<span class="qbe-terms">^10% saving for buying a Home Insurance, Contents Insurance or Landlord Insurance policy online instead of over the phone. Saving only applies to new policies for the first year and not for renewed policies. Saving is applied before GST and any applicable government charges. For more details, please read the full <a href="https://www.qbe.com/au/portal/quote/home?promotionalCode=10HOME19#/welcome">terms and conditions here</a>.<br><br>*20% saving for buying a new combined buildings and contents policy online for the same risk address. Saving is applied before GST and any applicable government charges. For more details, please read the full <a href="https://www.qbe.com/au/portal/quote/home?promotionalCode=10HOME19#/welcome">terms and conditions here</a>.</span>';
    // Change multiple inner texts

    var changes = [{
        selector: 'div.description',
        newText: 'Home Insurance'
    }, {
        selector: 'h1.c-banner__header',
        newText: 'Save up to 20% when you buy online'
    }, {
        selector: 'div.c-banner__description',
        newText: 'On a new combined buildings and contents insurance policy'
    }, {
        selector: 'div.row>div:nth-of-type(2)>p:nth-of-type(2)>span',
        newText: 'Our new customers saved up to 20%* when they bought online with QBE'
    }, {
        selector: 'div.row>div:nth-of-type(2)>p:nth-of-type(3)',
        newText: 'Buy a new combined buildings and contents insurance policy online today and you’ll save 20%*.'
    }, {
        selector: 'div.row>div:nth-of-type(2)>p:nth-of-type(4)',
        newText: 'Buy a new buildings only or contents only policy online today and you\'ll save 10%^.'
    }, ];
    changes.forEach(function(change) {
        changeInnerText(change.selector, change.newText);
    });
    // Create a DocumentFragment to hold the HTML content
    var fragment = document.createDocumentFragment();
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = '<div class="c-columnContent container cro2">' +
    '<div class="c-columnContent__header">' +
    '</div>' +
    '<div class="c-columnContent__column">' +
        '<div class="c-columnContent__content">' +
            '<div class="c-columnContent__text">' +
                '<div class="rich-text-editor">' +
                    '<h2 class="qbe-sub-heading">20% off</h2>' +
                    '<h3 class="qbe-section-heading">Combined buildings and contents</h3>' +
                    '<p>Combined buildings and contents insurance can cover your property and belongings in case of fire, storm damage, theft and more.</p>' +
                '</div>' +
            '</div>' +
           '<div class="c-columnContent__buttonContent">' +
                '<a target="_blank" class="c-columnContent__button btn btn--primary" href="/au/portal/quote/home?promotionalCode=10HOME19" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
                    'Get a quote' +
                '</a>' +
            '</div>' +
        '</div>' +
        '<div class="c-columnContent__content">' +
            '<div class="c-columnContent__text">' +
                '<div class="rich-text-editor">' +
                    '<h2 class="qbe-sub-heading">10% off</h2>' +
                    '<h3 class="qbe-section-heading">Buildings only</h3>' +
                    '<p>Buildings insurance can provide cover for your home and its permanent fixtures for damage caused by things like fire, flood, storm, theft and vandalism.</p>' +
                '</div>' +
            '</div>' +
            '<div class="c-columnContent__buttonContent">' +
                '<a target="_blank" class="c-columnContent__button btn btn--primary" href="/au/portal/quote/home?promotionalCode=10HOME19" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
                   ' Get a quote' +
                '</a>' +
            '</div>' +
        '</div>' +
        '<div class="c-columnContent__content">' +
            '<div class="c-columnContent__text">' +
                '<div class="rich-text-editor">' +
                    '<h2 class="qbe-sub-heading">10% off</h2>' +
                    '<h3 class="qbe-section-heading">Contents only</h3>' +
                    '<p>At QBE, we know not every household contains the same contents, which is why our contents insurance is flexible.</p>' +
                '</div>' +
            '</div>' +
            '<div class="c-columnContent__buttonContent">' +
                '<a target="_blank" class="c-columnContent__button btn btn--primary" href="/au/portal/quote/home?promotionalCode=10HOME19" role="button" data-position="columnt content" data-label="" data-cta="Get a quote">' +
                    'Get a quote' +
                '</a>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<div class="c-columnContent__footer">' +
        '<div class="c-columnContent__footer-text">' +
        '</div>' +
        '<div class="c-columnContent__footer-buttons">' +
        '</div>' +
    '</div>' +
'</div>';
    // Move the child nodes of the temporary div to the fragment
    while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
    }
    // Get the reference element (div.c-panel)
    var referenceNode = document.querySelector('div.c-panel');
    // Check if the referenceNode exists before inserting
    if (referenceNode) {
        // Insert the fragment before the reference element
        insertBefore(fragment, referenceNode);
    } else {
        console.error('div.c-panel not found in the document.');
    }
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'Google Optimize Test 99',
        eventLabel: error,
        nonInteraction: true,
    });
}
