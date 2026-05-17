/* global qbeTrack */

function setButtonValue(buttonId, value) {
    var btn = document.getElementById(buttonId);
    if (btn && btn.tagName === 'INPUT' && btn.type === 'button') {
        btn.value = value;
    }
}

WT.SPA.on(/^\/au\/green-slip-insurance\/nsw\/ctp\/(renewal\/(landing|retrieve-policy|details-confirm|details-summary|payment|confirmation|details-email|details-email-confirm|demerit-points-status|email-receipt|email-receipt-confirmation)|generic\/(contact-us|help))$/, function () {
    if (qbeTrack && qbeTrack.meta && qbeTrack.meta.appPartner === '8122') {
        try {

            // Create and append viewport meta tag
            var head = document.getElementsByTagName('head')[0];
            if (head) {
                var metaTag = document.createElement('meta');
                metaTag.name = 'viewport';
                metaTag.content = 'width=device-width, initial-scale=1.0';
                head.appendChild(metaTag);
            }

            var buttons = [
                { id: 'form-button-cancel', value: 'Cancel' },
                { id: 'form-button-next', value: 'Next' },
                { id: 'form-button-back', value: 'Back' },
                { id: 'form-button-email-receipt', value: 'Email Receipt' },
                { id: 'form-button-print-receipt', value: 'Print Receipt' },
                { id: 'form-button-submit', value: 'Submit' },
                { id: 'form-button-close', value: 'Close' },
                { id: 'form-button-edit', value: 'Edit' },
                { id: 'form-button-email-us', value: 'Email Us' },
                { id: 'form-button-send', value: 'Send' },
                { id: 'form-button-ok', value: 'OK' }
            ];

            for (var i = 0; i < buttons.length; i++) {
                setButtonValue(buttons[i].id, buttons[i].value);
            }

            // Create a new style element
            var style = document.createElement('style');
            style.type = 'text/css';
            style.setAttribute('id', 'wt-page-level-css');

            // Prepare the CSS string
            var css = '' +
                'body, input, select { font-size: 16px !important; }' +
                '#page { margin-top: 0px !important; }' +
                '#page + div {width: auto !important;}' +
                '#form-center { width: 90%; margin-left: auto; margin-right: auto; }' +
                'p.form-label, p.form-label-mandatory, label { width: 97% !important; text-align: center !important; }' +
                '.form-row { text-align: left !important; }' +
                'br { display: none !important; }' +
                'img#creditCard_img { display: none !important; }' +
                'form[name="Renewal_TaxStatus"] .form-row, form[name="Policy_Retrieve"] .form-row, form[name="Purchase_Licence"] .form-row, form[name="Email_Page"] .form-row, c .form-row, #driverLicence.form-row { text-align: center !important; }' +
                'p.label-ren-summary { width: 99% !important; text-align: left !important; }' +
                '#content>form>div.form-layout>div:nth-child(9) { width: 100% !important; display: block !important; }' +
                'p.form-input, label, input:not([type="button"]):not([type="submit"]):not([type="reset"]), select { float: none !important; }' +
                'input:not([type="radio"]), select { height: 50px; }' +
                '#iframe { position: fixed !important; top: 50px !important; left: 50% !important; transform: translateX(-50%); }' +
                '.message { text-align: left !important; font-weight: normal !important; }' +
                '.label-ren-summary { float: none !important; width: 100% !important; }' +
                'div#page { padding-left: 3px !important; padding-right: 3px !important; }' +
                'div#content { min-height: auto !important; display: flex; }' +
                'div#footer, #renewal-summary-note { padding-top: 20px; margin-top: 20px; }' +
                'div.notebox { padding: 5px 0 !important; }' +
                '#renewal-summary-note { width: 100% !important; }' +
                '#header3, h2#header2 { font-size: 20px !important; padding-top: 20px; }' +
                'div#button-bar { margin-top: 30px !important; }' +
                'div#button-bar-confirmation { margin-left: 10px !important; }' +
                'div#button-bar-left { width: auto !important; }' +
                'h4#header4 { font-size: 16px !important; padding-bottom: 20px; }' +
                '#driverLicence { width: 95% !important; }' +
                'img#licence_img { margin-left: auto; margin-right: auto; }' +
                'div#form-ren-indent, div#form-indent { margin-left: 10px !important; margin-right: 10px !important; }' +
                'div#progress-center { padding-bottom: 20px; }' +
                'div#progress-bar { margin: 0 auto; float: none !important; display: block !important; padding-bottom: 20px; }' +
                '#form-indent>div:nth-child(8)>p>a { word-break: break-word; overflow-wrap: anywhere; white-space: normal; }' +
                'div#renewal-summary-left, #creditCard { width: 100% !important; }' +
                '#cross-sell-banner { width: 100% !important; padding-top: 20px; }' +
                '#cross-sell-banner img { width: 100%; height: auto; display: block; }' +
                'div.form-row { text-align: center; padding-top: 15px; }' +
                '.imageFrame { padding-bottom: 20px; margin-top: 20px !important; border: none !important; }' +
                '.form-licence-left { width: 100% !important; text-align: center !important; }' +
                '#paymentForm, form[name="Purchase_Licence"] { width: 95%; margin-left: auto; margin-right: auto; }' +
                '#renewal-img-over { display: none; }' +
                'p.form-label-instruct, .noteHead { padding: 15px 15px 0 15px; }' +
                'br+strong { padding-top: 30px; display: block; }' +
                'textarea[name="comments"] { width: 285px; }' +
                'button#finishRnwCon, input#form-button-cancel, input#form-button-back, input#form-button-next, input#form-button-submit,  input#form-button-send, input#form-button-ok, #button-bar-right input#form-button-email-receipt { width: auto !important; background-image: none !important; height: auto !important; font-size: 14px; font-family: Verdana; font-stretch: 100%; font-weight: 700; padding: 14px 40px; border: 2px solid #009ae4; border-radius: 25px; }' +
                'input#form-button-close, input#form-button-print-receipt, input#form-button-email-receipt, input#form-button-edit, input#form-button-email-us { background-image: none !important; width: auto !important; font-weight: bold; padding: 8px 0; font-size: 14px; color: #394792; margin-bottom: 15px; height: auto !important; }' +
                'input#form-button-cancel, input#form-button-back { background-color: #FFFFFF; color: #009ae4; }' +
                'button#finishRnwCon, input#form-button-send, input#form-button-next, input#form-button-submit, input#form-button-ok, #button-bar-right input#form-button-email-receipt { background-color: #009ae4; color: #FFFFFF; float: right !important; }' +
                'input#form-button-email-receipt { margin-bottom: 10px !important; display: block;}' +
                'input#form-button-next { float: right !important; }' +
                'p.form-display-details {width: 195px !important; }' +
                'input.image-replacement { text-indent: 0px !important; }' +
                'input#licenceNo1 {margin-bottom: 20px;}' +
                'div#validation-example {text-align: center !important; }' +
                '.consent-two-display {margin-top: 30px; }' +
                'div#radio-hide {width: 100%; float: none !important; text-align: center; margin: 20px 0; }' +
                'span.shadeField1-standard  {display: block; width: 100%; }' +
                'span.shadeField1-standard + span {display: block; width: 100%; text-align: center !important; float: left; margin-bottom: 20px; }' +
                '@media only screen and (max-width: 625px) { div#renewal-image { width: 100% !important; background-size: contain; background-position: center; height: 170px !important; } }' +
                '@media only screen and (max-width: 767px) { div#page { width: auto !important; } ul#simple-unnumbered-list { width: 90%; } .LPMContainer { inset: 40% 0 !important; } div#button-bar-right, div#button-bar-left { width: 100% !important; } input#form-button-send, input#form-button-cancel, input#form-button-next, input#form-button-back, input#form-button-submit, button#finishRnwCon, #button-bar-right input#form-button-email-receipt { float: none !important; width: 90% !important; margin-left: auto !important; margin-right: auto !important; margin-bottom: 15px !important; } #button-bar, #button-bar-right { display: flex; flex-direction: column-reverse; } }';


            // IE 8 and below compatibility
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            // Append the style element to the head
            document.getElementsByTagName('head')[0].appendChild(style);

            // Wrap the email input field in a span if it is not already wrapped
            var input = document.getElementById('emailAddress');

            if (input) {
                // check if we've *already* wrapped the following node
                var next = input.nextSibling;

                // case 1 – already wrapped → do nothing
                if (next && next.nodeType === 1 && (next.tagName === 'SPAN' || next.tagName === 'DIV')) {
                    // wrapper already exists, so bail
                    return;
                }

                // case 2 – raw text node → wrap it
                if (next && next.nodeType === 3) {
                    var text = next.nodeValue;
                    var span = document.createElement('span');
                    span.innerHTML = text;
                    input.parentNode.insertBefore(span, next);
                    next.nodeValue = '';
                    span.style.display = 'block';
                    span.style.marginTop = '4px';
                }
            }

            var formLeft = document.getElementById('form-left');
            var consentTwoDisplay = document.querySelector('.consent-two-display');

            if (formLeft && consentTwoDisplay && consentTwoDisplay.parentNode) {
                consentTwoDisplay.parentNode.insertBefore(formLeft, consentTwoDisplay);
            }

            WT.trackGA.dlPush('Test 176', 'Variation 1');
            
        } catch (error) {
            // Logs any errors that occur to the 'dataLayer' object
            window.dataLayer.push({
                event: 'standard',
                eventCategory: 'error',
                eventAction: 'webtrends optimize experiment 176 - ctp',
                eventLabel: error,
                nonInteraction: true,
            });
        }
    }
});