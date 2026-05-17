try {
    var feefo = document.getElementById('feefo');
    var target = document.querySelector('#main-container > main > section > div.c-columnContent.container');

    if (feefo && target) {
        target.parentNode.insertBefore(feefo, target.nextSibling);
    }
    (function () {
        var css = '@media only screen and (max-width: 1199px) { .hidden-ipad { display: block !important; } }';
        var style = document.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
            // For IE8 and earlier
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName('head')[0].appendChild(style);
    })();
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'optimize test 152 - sitecore - Variant 1',
        eventLabel: error,
        nonInteraction: true,
    });
}
