console.log('WTO: Test 160 - experiment starting..');

// Helpers
function getDataLayerValue(dataLayer, key) {
    if (!dataLayer || !Array.isArray(dataLayer)) return null;
    for (var i = dataLayer.length - 1; i >= 0; i--) {
        if (dataLayer[i] && (Object.prototype.hasOwnProperty.call(dataLayer[i], key) ||
            (dataLayer[i].data && Object.prototype.hasOwnProperty.call(dataLayer[i].data, key)))) {
            return dataLayer[i][key] || dataLayer[i].data[key];
        }
    }
    return null;
}

function hideTextNodeByXPath(xpath) {
    var result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < result.snapshotLength; i++) {
        var node = result.snapshotItem(i);
        if (node.nodeType === Node.TEXT_NODE) {
            var span = document.createElement('span');
            span.className = 'hidden';
            node.parentNode.insertBefore(span, node);
            span.appendChild(node);
        }
    }
}

function setPlaceholderText(fieldId, placeholderText) {
    var field = document.getElementById(fieldId);
    if (field) {
        field.setAttribute('placeholder', placeholderText);
    }
}

WT.SPA.on(/^\/au\/green-slip-insurance\/nsw\/ctp\/renewal\/(landing|retrieve-policy)$/, function () {
    console.log('WTO: Test 160 - SPA.on() match ^\/au\/green-slip-insurance\/nsw\/ctp\/renewal\/(landing|retrieve-policy)$');

    // Add CSS to hide the content
	var style = document.createElement('style');
	style.innerHTML = '.hidden { display: none; }';
	document.head.appendChild(style);

    try {
        // Create the meta tag
        var metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1.0';

        // Append the meta tag to the head
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(metaTag);

        // Get the button element by its ID
        var backButton = document.getElementById('form-button-cancel');

        // Set the value attribute
        backButton.setAttribute('value', '< Cancel');

        // Get the button element by its ID
        var nextButton = document.getElementById('form-button-next');

        // Set the value attribute
        nextButton.setAttribute('value', 'Next');

        (function () {
            // Select the second <p class="form-label-instruct">
            var allInstructElements = document.querySelectorAll('.form-label-instruct');
            var startElement = allInstructElements[1]; // The second occurrence (index 1)

            // Select the <ul> with id="simple-unnumbered-list"
            var endElement = document.querySelector('#simple-unnumbered-list');

            // Select the outer <div id="form-indent">
            var outerDiv = document.querySelector('#form-indent');

            if (startElement && endElement && outerDiv) {
                // Create the new wrapper div
                var wrapperDiv = document.createElement('div');
                wrapperDiv.id = 'cro160-3';

                // Get the parent of the start element
                var parent = startElement.parentNode;

                // Insert the wrapperDiv before the start element
                parent.insertBefore(wrapperDiv, startElement);

                // Move elements into the wrapperDiv until we reach the end element
                var currentElement = startElement;
                while (currentElement && currentElement !== endElement.nextElementSibling) {
                    var nextElement = currentElement.nextSibling;
                    wrapperDiv.appendChild(currentElement);
                    currentElement = nextElement;
                }

                // Move the outer closing </div> just before the new wrapperDiv
                if (outerDiv.parentNode) {
                    outerDiv.parentNode.insertBefore(outerDiv.lastChild, wrapperDiv.nextSibling);
                }
            }
        })();

        setPlaceholderText('ctpNumber', 'CTP Certificate Number');
        setPlaceholderText('regoNumber', 'Registration Plate Number');



        // Create a new style element
        var style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute('id', 'wt-page-level-css');

        // Prepare the CSS string
        var css = 'body { font-size: 16px !important; height: 100%;}' +
            'input {padding: 7px 4px;}' +
            '#page {background-color: #f1f2f4 !important; display: flex; flex-direction: column; min-height: 100vh;}' +
            '.form-label-instruct {font-weight: bold; color: #000;}' +
            '#cro160-2 {padding: 24px 48px !important; background-color: #fff;}' +
            '#cro160-1 {border: 1px solid rgb(225, 228, 232); !important;}' +
            '#form-indent {background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 24px 48px !important; width: 600px; margin: auto !important;}' +
            '#cro160-3 {background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 24px 48px !important; width: 600px; margin: 20px auto auto !important; font-size: 12px;}' +
            'div#button-bar {flex: 1; width: 600px; margin: auto !important;}' +
            '#footer {padding: 24px 60px; display: flex; color: #fff !important; background-color: rgb(0, 32, 91);}' +
            '#header2 {margin-bottom: 0px !important; background-color: rgb(0, 154, 228); padding: 32px 48px 28px 48px; color: #fff !important; font-family: Stag, Arial, sans-serif !important; font-size: 2.2rem !important; font-weight: 500;}' +
            'div#content {padding: 4rem 2rem 2rem !important; width: 600px !important; display: flex !important; margin: auto !important; justify-content: center !important;}' +
            'img#company-name {background-image: url(https://www.qbe.com/-/media/2D74F65DD44C49F9A53CB258D9F6DE31.ashx) !important; height: 32px !important; !important; width: 108.562px !important;}' +
            '#header { padding: 24px 32px !important; position: relative !important; min-height: 64px !important; background-color: rgb(0, 32, 91) !important; margin: 0 !important;}' +
            '#quick-nav, #font-tools {display: none !important;}' +
            'div#footer { margin-top: 20px; margin-bottom: 0px !important;}' +
            'div#content { min-height: auto !important; }' +
            'input#form-button-cancel { color: #003da5; width: auto !important; background-image: none !important; height: auto !important; font-size: 14px; font-family: Verdana;}' +
            'input#form-button-next { width: auto !important; background-image: none !important; height: auto !important; background-color: #003da5; color: #FFFFFF; font-size: 14px; font-family: Verdana; font-stretch: 100%; font-weight: 700; padding: 16px 40px; border: 2px solid #003da5; border-radius: 24.5px; }' +
            'input.image-replacement { text-indent: 0px !important; }' +
            'div#form-indent { margin-left: 0px !important; margin-right: 0px !important; }' +
            'div#button-bar-left { width: auto !important; }' +
            '@media only screen and (max-width: 767px) { div#page { width: auto !important; } ul#simple-unnumbered-list { width: 90%; } .LPMContainer { inset: 40% 0 !important; } }';


        // Retrieve the virtualPagePath from the dataLayer using the function
        var virtualPagePath = getDataLayerValue(window.dataLayer, 'virtualPagePath');


        if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/retrieve-policy') {
            css += '#progress-bar { display: none !important; }' +
                '#content > form > div.form-layout > div:nth-child(3) > label, #content > form > div.form-layout > div:nth-child(1), #label, #content > form > div.form-layout > div:nth-child(2) > p > input.mini {display: none;}' +
                '.imageFrame {border: none  !important;}' +
                '#renewal-image { width: 600px !important; background-size: 90% auto; background-position: center; background-repeat: no-repeat; background-color: white;}' +
                '#form-center {margin-top: 48px;}' +
                '.form-row {padding: 0 48px;}' +
                '.cro160-4 {font-size: 14px; padding: 5px;}' +
                '#content > form > div.form-layout > div:nth-child(3) > p {float: none !important; }' +
                '#ctpNumber, #regoNumber {padding: 7px 4px; height: 58px; background-color: rgb(241, 242, 244); border-bottom: 1px solid rgb(25, 25, 25); border-left: 0; border-right: 0; border-top: 0; width: 100%;}' +
                '#renewal-img-over {display: none;}' +
                '.form-layout {max-width: 600px; background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 24px 48px !important;}' +
                'div#progress-center {width: 600px !important;}';
        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/landing') {
            css += 'div#form-indent {margin-left: auto !important; margin-right: auto !important;}';
        }

        // IE 8 and below compatibility
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        // Append the style element to the head
        document.getElementsByTagName('head')[0].appendChild(style);

        // Select the target <h2> element
        var header2 = document.getElementById('header2');

        // Check if the <h2> element exists
        if (header2) {
            // Create a new wrapper div and set its id
            var wrapperDiv = document.createElement('div');
            wrapperDiv.id = 'cro160-1';

            // Wrap the <h2> in the wrapper div
            header2.parentNode.insertBefore(wrapperDiv, header2);
            wrapperDiv.appendChild(header2);

            // Create a new div to add after the <h2> and set its id
            var newDiv = document.createElement('div');
            newDiv.id = 'cro160-2';
            if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/retrieve-policy') {
                newDiv.textContent = 'Your CTP Certificate Number can be found at the top right hand corner of your renewal Green Slip.'; // Add content to the new div
                // Get the paragraph element by its ID or another selector
                var paragraph = document.querySelector('#form-center p');

                // Set the new inner HTML
                paragraph.innerHTML = 'If you cannot find your CTP Certificate Number, please <a href="javascript:_openContactLink(\'Contact?BNDE=xt6lvGSAnWI%3D&amp;NHM=Y&amp;CSRFTOKEN=B955639560B9EDCE44A9668D18594AED-1385294473\');" title="Our contact details">contact us</a>.';

                // Get the input element by its ID
                var inputElement = document.getElementById('ctpNumber');

                // Create the new paragraph element
                var newParagraph = document.createElement('p');
                newParagraph.className = 'cro160-4';
                newParagraph.innerHTML = 'Enter the 11 digits after the \'36\'';

                // Insert the new paragraph after the input element
                inputElement.parentNode.insertBefore(newParagraph, inputElement.nextSibling);

            } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/landing') {
                newDiv.textContent = 'Thanks for renewing your CTP Green Slip Insurance with us.'; // Add content to the new div
            }
            // Add the new div after the <h2>
            wrapperDiv.appendChild(newDiv);
        }



        // Hide the text node specified by the XPath
        hideTextNodeByXPath('//*[@id="content"]/form/text()');


        WT.trackGA.dlPush('Test 160', 'Variation 1');

    } catch (e) {
        // Logs any errors that occur to the 'dataLayer' object
        window.dataLayer.push({
            event: 'webtrends_error',
            eventAction: 'webtrends optimize experiment 160 - CTP Renewals',
            eventLabel: e,
        });
    }

});