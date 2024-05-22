    // Change multiple inner texts
    function changeInnerText(selector, newText) {
        var element = document.querySelector(selector);
        if (element) {
            element.innerText = newText;
        }
    }
    function insertHTMLAfterSelector(htmlContent, selector) {
        var targetElement = document.querySelector(selector);
        if (targetElement) {
            targetElement.insertAdjacentHTML('afterend', htmlContent);
        } else {
            console.error('Element not found with the provided selector:', selector);
        }
    }
try {
    // Change img src
    var imgElement = document.querySelector('#main-container > main > section > div.additional-info.additional-info_row.additional-info_bg_grey > div > div > div:nth-child(1) > div > img');
    if (imgElement) {
        imgElement.src = 'https://www.qbe.com/au/-/media/australia/images/home-insurance/homeinsurance_landlordinsurance_1000x547.jpg?w=1200&hash=28C95C0F225969127FF8F20555DB9150';
    } else {
        console.error('Image element not found.');
    }

    var changes = [{
        selector: 'h1',
        newText: 'Save 20% when you buy online'
    }, {
        selector: '#main-container>main>section>div.c-columnContent.container>div.c-columnContent__column>div:nth-child(1)>div.c-columnContent__text>div>p',
        newText: 'Combined buildings and contents insurance can cover your property and belongings in case of fire, storm damage, theft and more.'
    }, {
        selector: '#main-container>main>section>div.c-columnContent.container>div.c-columnContent__column>div:nth-child(1)>div.c-columnContent__text>div>h3',
        newText: 'Combined buildings and contents'
    }, {
        selector: '#main-container>main>section>div.c-columnContent.container>div.c-columnContent__column>div:nth-child(2)>div.c-columnContent__text>div>h3',
        newText: 'Buildings only'
    }, {
        selector: '#main-container>main>section>div.c-columnContent.container>div.c-columnContent__column>div:nth-child(1)>div.c-columnContent__text>div>h2',
        newText: '20% off *'
    }, {
        selector: '#main-container>main>section>div.c-columnContent.container>div.c-columnContent__column>div:nth-child(2)>div.c-columnContent__text>div>h2',
        newText: '10% off ^'
    }, {
        selector: '#main-container>main>section>div.c-columnContent.container>div.c-columnContent__column>div:nth-child(3)>div.c-columnContent__text>div>h2',
        newText: '10% off ^'
    }, {
        selector: 'div.c-banner__description.hidden-xs',
        newText: 'On a new combined buildings and contents insurance policy.'
    }, {
        selector: 'div.row>div:nth-of-type(2)>p:nth-of-type(2)>span',
        newText: 'Are you a landlord looking for insurance on one of your rental properties?'
    }, {
        selector: 'div.row>div:nth-of-type(2)>p:nth-of-type(3)',
        newText: 'Cover for your rental property and, if it’s furnished, choose cover for your contents too.'
    }, {
        selector: 'div.row>div:nth-of-type(2)>p:nth-of-type(4)',
        newText: 'We’ve been awarded Canstar’s 2023 Outstanding Value Award for Landlord Insurance.'
    }, ];
    changes.forEach(function(change) {
        changeInnerText(change.selector, change.newText);
    });
    // Create the new HTML content as a string
    var newContent = '<div class="container l-article-listing-v2-module l-article-listing-v2-module_top_gap">' + '<h2 class="l-article-listing-v2-module__title">Home insurance and lifestyle articles</h2>' + '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">' + '<div class="l-article-listing-v2-module_tile">' + '<div class="c-columnContent__image image--landing-list">' + '<a href="/au/news/bushfire-season-checklist-for-your-home">' + '<img src="/au/-/media/australia/images/covered-images/catastrophe/bushfire prep/bushfire checklist  banner 1550 x 550.png?h=550&w=1550&hash=D355FD4F15EDE622501BE10ECF7BC22E">' + '</a>' + '</div>' + '<div class="l-article-listing-v2-module_content">' + '<h4>How to help protect your property from a bushfire</h4>' + '<div class="l-article-listing-v2-module_date">31 Aug 2023</div>' + '<p>Being prepared, and having a bushfire management plan in place can help manage the impact a bushfire may have on you and your property.</p>' + '<a class="l-article-listing-v2-module_link" href="/au/news/bushfire-season-checklist-for-your-home">Read more</a>' + '</div>' + '</div>' + '</div>' + '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">' + '<div class="l-article-listing-v2-module_tile">' + '<div class="c-columnContent__image image--landing-list">' + '<a href="/au/news/making-a-claim">' + '<img src="/au/-/media/australia/images/covered-images/business/price explained/what to do when you make a claim 1500x500.jpg?h=550&w=1500&hash=E3779684C672C3D6A11B42C3460B89C6">' + '</a>' + '</div>' + '<div class="l-article-listing-v2-module_content">' + '<h4>The insurance claim process</h4>' + '<div class="l-article-listing-v2-module_date">22 Sep 2023</div>' + '<p>Most people don’t ever expect they’ll need to make an insurance claim, so it’s no surprise many of us aren’t sure how exactly we make a claim.</p>' + '<a class="l-article-listing-v2-module_link" href="/au/news/making-a-claim">Read more</a>' + '</div>' + '</div>' + '</div>' + '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">' + '<div class="l-article-listing-v2-module_tile">' + '<div class="c-columnContent__image image--landing-list">' + '<a href="/au/news/going-above-and-beyond-for-customer-hit-by-lismore-floods">' + '<img src="/au/-/media/australia/images/covered-images/home/lismore-customer-story-article-banner-1500x550.jpg?h=550&w=1550&hash=D2F40B65B5B65BE56C7D9BB54870CDBD"/>' + '</a>' + '<div class="l-article-listing-v2-module_video">' + '<img src="../../../../images/Video_label.png"/>' + '</div>' + '</div>' + '<div class="l-article-listing-v2-module_content">' + '<h4>Going above and beyond for a customer hit by the Lismore floods</h4>' + '<div class="l-article-listing-v2-module_date">14 Jun 2023</div>' + '<p>A year on from the Lismore floods 2022, our on-the-ground team went above and beyond to help a customer going through a tough time. Read their touching story.</p>' + '<a class="l-article-listing-v2-module_link" href="/au/news/going-above-and-beyond-for-customer-hit-by-lismore-floods">Read more</a>' + '</div>' + '</div>' + '</div>' + '</div>';
    // Create a temporary container element
    var tempContainer = document.createElement('div');
    tempContainer.innerHTML = newContent;
    // Get the reference node to insert before
    var referenceNode = document.querySelector('#main-container > main > section > div:nth-child(7)');
    // Check if the referenceNode exists before inserting
    if (referenceNode) {
        // Insert the new content before the reference node
        referenceNode.parentNode.insertBefore(tempContainer.firstChild, referenceNode);
    } else {
        console.error('Reference node not found.');
    }
    // Update link URL
    var linkElement = document.querySelector('#main-container > main > section > div.additional-info.additional-info_row.additional-info_bg_grey > div > div > div:nth-child(2) > p:nth-child(6) > a');
    if (linkElement) {
        linkElement.href = 'https://www.qbe.com/au/portal/quote/landlord?promotionalCode=10HOME19';
    } else {
        console.error('Link element not found.');
    }
    var paragraphToChange = document.querySelector('#main-container > main > section > div.c-columnContent.container > div.c-columnContent__column > div:nth-child(2) > div.c-columnContent__text > div > p');
    if (paragraphToChange) {
        // Change the inner text of the paragraph
        paragraphToChange.innerText = 'Buildings insurance can provide cover for your home and its permanent fixtures for damage caused by things like fire and flood.';
    } else {
        console.error('Paragraph element not found.');
    }


    // HTML content for the first set of items
    var htmlContent1 = '<ul class="cro1">' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-tick-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-tick-benefits" xlink:href="#qbe-tick"></use>' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Building repair or replacement' +
                '</h4>' +
            '</div>' +
        '</li>' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-tick-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-tick-benefits" xlink:href="#qbe-tick"></use>' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Contents repair or replacement' +
                '</h4>' +
            '</div>' +
        '</li>' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-tick-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-tick-benefits" xlink:href="#qbe-tick"></use>' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Temporary Accommodation' +
                '</h4>' +
            '</div>' +
        '</li>' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-tick-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-tick-benefits" xlink:href="#qbe-tick"></use>' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Flood cover comes as standard' +
                '</h4>' +
            '</div>' +
        '</li>' +
    '</ul>';
    // Selector for the first element to insert content after
    var selector1 = '#main-container > main > section > div.c-columnContent.container > div.c-columnContent__column > div:nth-child(1) > div.c-columnContent__text > div > p';
    // Insert HTML content after the first element
    insertHTMLAfterSelector(htmlContent1, selector1);
    // HTML content for the second set of items
    var htmlContent2 = '<ul class="cro1">' +
        '<li>' +
           ' <div class="benefits__section">' +
                '<svg class="qbe-tick-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-tick-benefits" xlink:href="#qbe-tick"></use>' +
                '</svg>' +
           ' </div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Building repair or replacement' +
                '</h4>' +
            '</div>' +
        '</li>' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-cross--md-benefits" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-cross--ash" xlink:href="#qbe-cross">' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Contents repair or replacement' +
               ' </h4>' +
           '</div>' +
       ' </li>' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-tick-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-tick-benefits" xlink:href="#qbe-tick"></use>' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
               ' <h4>' +
                    'Temporary Accommodation' +
                '</h4>' +
            '</div>' +
        '</li>' +
        '<li>' +
           ' <div class="benefits__section">' +
                '<svg class="qbe-tick-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-tick-benefits" xlink:href="#qbe-tick"></use>' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Flood cover comes as standard' +
                '</h4>' +
            '</div>' +
        '</li>' +
    '</ul>';
    // Selector for the third element to insert content after
    var selector2 = '#main-container > main > section > div.c-columnContent.container > div.c-columnContent__column > div:nth-child(2) > div.c-columnContent__text > div > p';
    // Insert HTML content after the second element
    insertHTMLAfterSelector(htmlContent2, selector2); // HTML content for the second set of items
    var htmlContent3 = '<ul class="cro1">' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-cross--md-benefits" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-cross--ash" xlink:href="#qbe-cross">' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Building repair or replacement' +
                '</h4>' +
            '</div>' +
        '</li>' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-tick-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-tick-benefits" xlink:href="#qbe-tick"></use>' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Contents repair or replacement' +
                '</h4>' +
            '</div>' +
        '</li>' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-cross--md-benefits" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-cross--ash" xlink:href="#qbe-cross">' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Temporary Accommodation' +
                '</h4>' +
            '</div>' +
        '</li>' +
        '<li>' +
            '<div class="benefits__section">' +
                '<svg class="qbe-tick-small" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    '<use class="qbe-tick-benefits" xlink:href="#qbe-tick"></use>' +
                '</svg>' +
            '</div>' +
            '<div class="benefits__section">' +
                '<h4>' +
                    'Flood cover comes as standard' +
                '</h4>' +
            '</div>' +
        '</li>' +
    '</ul>';
    // Selector for the third element to insert content after
    var selector3 = '#main-container > main > section > div.c-columnContent.container > div.c-columnContent__column > div:nth-child(3) > div.c-columnContent__text > div > p';
    // Insert HTML content after the third element
    insertHTMLAfterSelector(htmlContent3, selector3);
    // Update first terms
    var firstTargetElement = document.querySelector('#main-container > main > section > div:nth-child(8) > div > div > p:nth-child(1) > span');
    // Check if the element exists to avoid null reference errors
    if (firstTargetElement) {
        // Update the innerHTML of the first terms
        firstTargetElement.innerHTML = '<sup>^</sup>10% saving for buying a QBE Home Insurance, QBE Contents Insurance or QBE Landlord Insurance policy online instead of over the phone. Saving only applies to new policies for the first year and not for renewed policies. Saving is applied before GST and other applicable government fees, duties and charges. Read the relevant Product Disclosure Statement (PDS) and Target Market Determination (TMD) for details including limits, exclusions and conditions that apply to combined buildings and contents, buildings only, and contents only polices. For more details, please read the full <a href="https://www.qbe.com/au/portal/quote/home?promotionalCode=10HOME19#/welcome" target="_blank" rel="noopener noreferrer">terms and conditions here</a>.';
    }
    // Update seconds
    var secondTargetElement = document.querySelector('#main-container > main > section > div:nth-child(8) > div > div > p:nth-child(2) > span');
    // Check if the element exists to avoid null reference errors
    if (secondTargetElement) {
        // Update the innerHTML of the second terms
        secondTargetElement.innerHTML = '<sup>*</sup>20% saving for buying a new combined buildings and contents policy online for the same risk address. Saving is applied before GST and other applicable government fees, duties and charges. Read the relevant Product Disclosure Statement (PDS) and Target Market Determination (TMD) for details including limits, exclusions and conditions that apply to combined buildings and contents polices. For more details, please read the full <a href="https://www.qbe.com/au/portal/quote/home?promotionalCode=10HOME19#/welcome" target="_blank" rel="noopener noreferrer">terms and conditions here</a>.';
    }
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'Webtrends Optimize Test 115',
        eventLabel: error,
        nonInteraction: true,
    });
}