try {
    // Inject CSS dynamically
    var style = document.createElement('style');
    style.innerHTML =
        '@media (max-width: 767px) {' +
        '    #feefo-service-review-carousel-widgetId {' +
        '        margin-left: -35px;' +
        '    }' +
        '}' +
        '.T157-3 {' +
        '    display: flex;' +
        '    justify-content: space-between;' +
        '    gap: 20px;' +
        '}' +
        '.T157-4 {' +
        '    flex: 1;' +
        '    text-align: center;' +
        '    padding: 20px 20px 15px 20px;' +
        '    background-color: #f8f8f8;' +
        '    border-top: 10px solid #0099e6;' +
        '}' +
        '.T157-2 {' +
        '    text-align: center;' +
        '    padding-bottom: 20px;' +
        '}' +
        '.T157-2 > h2 {' +
        '    color: #000;' +
        '    font-family: Stag Medium !important;' +
        '    letter-spacing: 0em;' +
        '}' +
        '@media (max-width: 765px) {' +
        '    .T157-3 {' +
        '        flex-direction: column;' +
        '        gap: 0px;' +
        '        margin-bottom: 20px;' +
        '    }' +
        '    .T157-4 {' +
        '        flex: none;' +
        '        width: 100%;' +
        '    }' +
        '}';
    document.head.appendChild(style);
    // Select the element
    var elementM = document.querySelector('body > div.container > div.qbe-content > div:nth-child(2) > div.col-sm-7 > div.visible-xs');
    var elementD = document.querySelector('body > div.container > div.qbe-content > div:nth-child(2) > div.col-sm-7 > div.hidden-xs');

    // Change the inner HTML
    elementM.innerHTML = '<div class="visible-xs" style="width:100%;"><div id="feefo-service-review-carousel-widgetId" class="feefo-review-carousel-widget-service"></div></div>';
    elementD.innerHTML = '<div class="hidden-xs"><div id="feefo-service-review-carousel-widgetId" class="feefo-review-carousel-widget-service"></div></div>';


    var exJs = document.createElement('script');
    exJs.setAttribute('type', 'text/javascript');
    exJs.setAttribute('src', 'https://api.feefo.com/api/javascript/qbe-insurance?tags=insurance%3DCTP Insurance');
    exJs.setAttribute('async', 'true'); // Add the async attribute
    document.head.appendChild(exJs);

    var targetElement = document.querySelector('body > div > div.qbe-content > div:nth-child(2)');

    if (targetElement) {
        var newHtml = '<div class="panel-body">' +
            '<div class="T157-1">' +
            '<div class="T157-2">' +
            '<h2>Why New South Wales drivers should choose QBE</h2>' +
            '</div>' +
            '<div class="T157-3">' +
            '<div class="T157-4">' +
            '<div class="T157-5">' +
            '<div class="T157-6">' +
            '<p>We insure more than two million vehicles for CTP nationally.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="T157-4">' +
            '<div class="T157-5">' +
            '<div class="T157-6">' +
            '<p>Our NSW claims team are committed to excellence.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="T157-4">' +
            '<div class="T157-5">' +
            '<div class="T157-6">' +
            '<p>We’ve been a proud principal partner of the Sydney Swans since 1986 and the Sydney Swifts since 2018.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        targetElement.insertAdjacentHTML('afterend', newHtml);
    }


} catch (error) {
    // Logs any errors that occur to the 'dataLayer' object
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'optimize Test 157 V1',
        eventLabel: error,
        nonInteraction: true,
    });
}