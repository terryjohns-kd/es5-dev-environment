try {
    // Select the target element where new content will be inserted after
    var targetElement = document.querySelector('#main-container > main > section > div.c-panel.container');

    // Create the new content as a div element
    var newContent = document.createElement('div');
    newContent.classList.add('card-container-external', 'container');
    newContent.id = 'feefo';
    newContent.dataset.producttag = '';

    // Use string concatenation instead of template literals
    newContent.innerHTML =
        '<div class="card-external-wrapper">' +
        '<div>' +
        '<!-- Header -->' +
        '<div class="c-columnContent__header">' +
        '<h2></h2>' +
        '</div>' +
        '<!-- Sub header -->' +
        '<div class="c-columnContent__subHeader">' +
        '<span class="qbe-body-text"></span>' +
        '</div>' +
        '</div>' +
        '<!-- Feefo Content Review -->' +
        '<div class="cro150-2"></div>' +
        '</div>';

    // Insert the new content after the target element
    targetElement.parentNode.insertBefore(newContent, targetElement.nextSibling);

    // Replace the inner HTML of the div with class 'cro150-2'
    var feefoReviewDiv = newContent.querySelector('.cro150-2');
    feefoReviewDiv.innerHTML =
        '<div class="cro150-1" style="width:100%;">' +
        '<div id="feefo-service-review-carousel-widgetId" class="feefo-review-carousel-widget-service"></div>' +
        '</div>';

    // Find the target element with id 'cro150-1'
    var targetDiv = document.getElementById('feefo');

    // Create the new content block as a string
    var newContent2 = '<div class="rich-text-wrapper">' +
        '<div class="container">' +
        '<div class="rich-text-editor">' +
        '<h2 class="qbe-title" style="margin-bottom: 30px;">Award-winning insurance</h2>' +
        '<img style="float: left; margin: 0 30px 30px 0;" src="/au/-/media/australia/images/awards/mozo-eca-exceptional-quality-home-contents-insurance-1200x1200.png?h=60&amp;w=60&amp;hash=0C3506D4F1B5F5C7303C984406BA6302" alt="2023 Mozo Experts Choice Award for Exceptional Quality Home &amp; Contents Insurance">' +
        '<p>Mozo awarded us its <a href="https://mozo.com.au/expertschoice/home-insurance" target="_blank" title="Mozo Experts Choice Awards for Home Insurance webpage" rel="noopener noreferrer">2023 Mozo Experts Choice Award</a> for Exceptional Quality Home &amp; Contents Insurance.</p>' +
        '<div class="clearfix">&nbsp;</div>' +
        '<figure><a href="https://www.finder.com.au/finder-awards/green#insurance-awards" target="_blank" rel="noopener noreferrer"><img alt="Finder Green Awards - Green Insurer of the Year" src="/au/-/media/australia/images/awards/finder - green winner 2020-24_450px.png?h=60&amp;w=60&amp;hash=E9A90188D0A22FFDF8FE66AC94F4A76F" style="float: left; margin: 0 30px 30px 0;"></a></figure>' +
        '<p>For the fifth year running, we’ve been named <a href="https://www.finder.com.au/finder-awards/green#insurance-awards" target="_blank" rel="noopener noreferrer">Finder’s</a> Green Insurer of the Year in 2024. We’re honoured to receive this recognition. A big thank you to our customers, people and partners for helping us enable a more resilient planet.</p>' +
        '<div class="clearfix">&nbsp;</div>' +
        '<img src="/au/-/media/australia/images/awards/mansfield-silver-personal-lines-2022_70.png?h=60&amp;w=60&amp;hash=DD3B2360FA6C9706746BEE52523A49DD" style="float: left; margin: 0px 30px 30px 0px; width: 60px; height: 60px;" alt="Mansfield Awards 2022 - Personal Lines">' +
        '<p>We\'ve been awarded the <a href="https://mansfieldawards.com.au/previous-winners/" target="_blank" rel="noopener noreferrer">2022 Personal Lines Mansfield Award</a> recognising claims excellence in the Australian insurance industry. The Awards highlight the vital role that claims professionals play in the insurance industry and recognises those achieving excellence in this field. </p>' +
        '</div>' +
        '</div>' +
        '</div>';

    // Insert the new content after the target div
    if (targetDiv) {
        targetDiv.insertAdjacentHTML('afterend', newContent2);
    }



    // Add external script
    var exJs = document.createElement('script');
    exJs.setAttribute('type', 'text/javascript');
    exJs.setAttribute('src', 'https://api.feefo.com/api/javascript/qbe-insurance');
    exJs.setAttribute('async', 'true'); // Add the async attribute
    document.head.appendChild(exJs);

} catch (error) {
    // Logs any errors that occur to the 'dataLayer' object
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'optimize optimal - 150 Variant 1',
        eventLabel: error,
        nonInteraction: true,
    });
}