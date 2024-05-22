WT.SPA.on('/au/green-slip-insurance/nsw/ctp/renewal/landing', function () {
    try {
        // Create the meta tag
        var metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1.0';

        // Append the meta tag to the head
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(metaTag);


        // Create a new style element
        var style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute('id', 'wt-page-level-css');

        // Prepare the CSS string
        var css = 'body {' +
            'font-size: 16px !important;' +
            '}' +
            'div#footer {' +
            'margin-top: 20px;' +
            '}' +
            'div#content {' +
            'min-height: auto !important;' +
            '}' +
            'input#form-button-cancel {' +
            'width: auto !important;' +
            'background-image: none !important;' +
            'height: auto !important;' +
            'background-color: #FFFFFF;' +
            'color: #009ae4;' +
            'font-size: 14px;' +
            'font-family: Verdana;' +
            'font-stretch: 100%;' +
            'font-weight: 700;' +
            'padding: 16px 40px;' +
            'border: 2px solid #009ae4;' +
            'border-radius: 24.5px;' +
            '}' +
            'input#form-button-next {' +
            'width: auto !important;' +
            'background-image: none !important;' +
            'height: auto !important;' +
            'background-color: #009ae4;' +
            'color: #FFFFFF;' +
            'font-size: 14px;' +
            'font-family: Verdana;' +
            'font-stretch: 100%;' +
            'font-weight: 700;' +
            'padding: 16px 40px;' +
            'border: 2px solid #009ae4;' +
            'border-radius: 24.5px;' +
            '}' +
            'input.image-replacement {' +
            'text-indent: 0px !important;' +
            '}' +
            'div#button-bar {' +
            'margin-top: 30px !important;' +
            '}' +
            'div#form-indent {' +
            'margin-left: 10px !important;' +
            'margin-right: 10px !important;' +
            '}' +
            'div#button-bar-left {' +
            'width: auto !important;' +
            '}' +
            '@media only screen and (max-width: 767px) {' +
            'div#page {' +
            'width: auto !important;' +
            '}' +
            'ul#simple-unnumbered-list {' +
            'width: 90%;' +
            '}' +
            '.LPMContainer {' +
            'inset: 40% 0 !important;' +
            '}' +
            '}';

        // IE 8 and below compatibility
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        // Append the style element to the head
        document.getElementsByTagName('head')[0].appendChild(style);
        WT.trackGA.dlPush('Test 125', 'Variation 1');
    } catch (error) {
        // Logs any errors that occur to the 'dataLayer' object
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'webtrends optimize experiment 125 - omni',
            eventLabel: error,
            nonInteraction: true,
        });
    }

});