function getDataLayerValue(dataLayer, key) {
    if (!dataLayer || !Array.isArray(dataLayer)) return null;
    for (var i = dataLayer.length - 1; i >= 0; i--) {
        if (dataLayer[i] && dataLayer[i].data && Object.prototype.hasOwnProperty.call(dataLayer[i].data, key)) {
            return dataLayer[i].data[key];
        }
    }
    return null;
}

function replaceTargetDivContent() {
    var newHtml =
        '<a href="javascript:void(0);" data-track="cro|v1|helpContainer" class="cro155-10">' +
        '<div class="help-container" onclick="openModal()">' +
        '<div class="help-icon">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="19">' +
        '<path fill="#009AE4" transform="translate(0.362061 0.191162)" d="M3.5111802 1.4561106L2.0729556 2.3274083C1.8366549 2.4664657 1.6674521 2.6842902 1.5935473 2.9429567C1.2279135 4.2781038 1.3154322 7.2381816 6.0385265 11.962249C10.761621 16.685343 13.724616 16.774807 15.065598 16.402367C15.316485 16.331379 15.533337 16.163147 15.669477 15.932682L16.537857 14.484733L13.079895 12.180073L12.081209 13.474378C11.644588 14.044222 10.865671 14.202728 10.235537 13.855571L10.046885 13.752493C9.3525696 13.374217 8.4880791 12.902589 6.7941051 11.205698C5.0933242 9.5029716 4.6236405 8.6404266 4.2453651 7.9470835L4.1452045 7.7642665C3.7941573 7.1351042 3.9555807 6.3571596 4.52737 5.9166489L5.8207021 4.9101834L3.5111802 1.4561106ZM13.999814 17.999096C11.92562 17.999096 8.9460936 16.932341 5.0067778 12.993025C0.025017122 8.0102911 -0.36201018 4.563026 0.18935786 2.5491223C0.3702299 1.9219048 0.77281606 1.4006821 1.3271013 1.0729731L2.7701881 0.20751004C3.4324131 -0.19118643 4.2949591 0.00038236528 4.7247734 0.64704859L7.0333228 4.1108456C7.4524403 4.7390356 7.3133831 5.595747 6.7172832 6.0595961L5.4210334 7.0689788L5.5260558 7.2488785C5.8586268 7.8605371 6.2738547 8.6209774 7.8258538 10.174921C9.3710451 11.724003 10.133431 12.137286 10.744118 12.47083L10.944438 12.579741L11.939234 11.282519C12.405028 10.684475 13.263684 10.549307 13.888957 10.96648L17.352755 13.275029C17.998447 13.706789 18.191961 14.564472 17.792294 15.229614L16.923912 16.677563C16.599121 17.228931 16.077898 17.631517 15.457487 17.807528C15.035453 17.924219 14.549237 17.999096 13.999814 17.999096L13.999814 17.999096Z" fill-rule="evenodd"/>' +
        '</svg>' +
        '<span class="help-text">Help</span>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '<div id="helpModal" class="modal">' +
        '<div class="modal-content">' +
        '<span class="close" onclick="closeModal()">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18">' +
        '<path fill="#666" transform="translate(0.123047 0.119019)" d="M2.0350955 0.27717289L2.136337 0.36857703L8.4910002 6.7589998L14.847218 0.36857703L14.948459 0.27717289C15.438199 -0.11905348 16.1581 -0.090680473 16.614977 0.36366293C17.104488 0.8504594 17.106688 1.6419126 16.619892 2.131423L10.254 8.5319996L16.619892 14.932879C17.106688 15.42239 17.104488 16.213844 16.614977 16.70064C16.1581 17.154984 15.438199 17.183357 14.948459 16.78713L14.847218 16.695726L8.4910002 10.304L2.136337 16.695726L2.0350955 16.78713C1.5453556 17.183357 0.82545346 17.154984 0.36857703 16.70064C-0.12093345 16.213844 -0.12313357 15.42239 0.36366293 14.932879L6.7280002 8.5319996L0.36366293 2.131423C-0.12313357 1.6419126 -0.12093345 0.8504594 0.36857703 0.36366293C0.82545346 -0.090680473 1.5453556 -0.11905348 2.0350955 0.27717289Z" fill-rule="evenodd"/>' +
        '</svg>' +
        '</span>' +
        '<p style="margin: 0; font-size: 22px;"><strong>Need help with your quote?</strong></p>' +
        '<p style="font-family: Verdana; font-size: 16px; margin: 24px 0 0 0;">Call: <a class="T155-9" href="tel:1300 076 109" data-track="cro|v1|phoneNumber">1300 076 109</a></p>' +
        '<p style="font-family: Verdana; font-size: 14px; margin: 8px 0 0 0">Monday-Friday 8am-7pm, Saturday 8am-1.30pm (AET)</p>' +
        '</div>' +
        '</div>';


    var attemptCount = 0; // Track the number of attempts
    var maxAttempts = 5; // Limit the number of retries to prevent infinite loops

    function attemptReplacement() {
        var targetDiv = document.querySelector('header > div:nth-child(2)');

        if (targetDiv) {
            // Check if the new content is already applied
            if (targetDiv.innerHTML === newHtml) {
                clearInterval(interval); // Stop the interval if the content is already updated
                return;
            }

            // Apply the new content
            targetDiv.innerHTML = newHtml;

            // Verify the content has been updated
            if (targetDiv.innerHTML === newHtml) {
                clearInterval(interval); // Stop the interval after successful update
            }
        }

        attemptCount++;
        if (attemptCount >= maxAttempts) {
            clearInterval(interval); // Stop the interval after max attempts
        }
    }

    // Run the logic immediately before starting the interval
    attemptReplacement();

    // Start the interval for subsequent checks
    var interval = setInterval(attemptReplacement, 100);

}

WT.SPA.on('/au/portal/quote/home.*', function () {
    try {

        WT.trackGA.dlPush('Test 155-PROD', 'Variation 1');
        
        // Get the current URL
        var currentUrl = window.location.href;

        // Check if the URL contains '#/welcome'
        if (currentUrl.indexOf('#/welcome') !== -1 || currentUrl.indexOf('#/payment/now') !== -1) {
            return; // Exit the function without executing further
        }
        replaceTargetDivContent();
        var quoteCheckInterval = setInterval(function () {
            var quoteNumber = getDataLayerValue(window.dataLayer, 'quoteNumber');

            if (quoteNumber) {
                clearInterval(quoteCheckInterval); // Stop checking once we have the quoteNumber

                // Check if the quote number element already exists
                var existingQuoteDiv = document.querySelector('.quote-number');
                if (!existingQuoteDiv) {
                    // Check the current URL
                    var currentUrl = window.location.href;

                    // Default target div selector
                    var targetDivSelector = 'div[name="DetailViewController"]';

                    // Update the selector for the #/tailorCover page
                    if (currentUrl.indexOf('#/tailorCover') !== -1) {
                        targetDivSelector = 'div:nth-child(3) > div > div:nth-child(2) > div:nth-child(1)';
                    }

                    // Find the target div by its selector
                    var targetDiv = document.querySelector(targetDivSelector);
                    if (targetDiv) {
                        // Create a new div element with the quoteNumber
                        var quoteDiv = document.createElement('div');
                        quoteDiv.className = 'quote-number'; // Add a unique class to prevent duplication

                        // Create the content for the quote number
                        var quoteText = document.createElement('span');
                        quoteText.className = 'quote-text';
                        quoteText.textContent = 'Quote number: ';

                        var actualQuoteNumber = document.createElement('span');
                        actualQuoteNumber.className = 'actual-quote-number';
                        actualQuoteNumber.textContent = quoteNumber;

                        // Append the quoteText and actualQuoteNumber
                        quoteDiv.appendChild(quoteText);
                        quoteDiv.appendChild(actualQuoteNumber);

                        // Apply general styles
                        quoteDiv.style.fontSize = '14px';
                        quoteDiv.style.marginBottom = '16px'; // Adjust for spacing
                        quoteDiv.style.color = '#fff'; // White for the entire quote number section
                        quoteDiv.style.textAlign = 'left'; // Left-align the text
                        quoteDiv.style.fontFamily = '"Stag-Medium", sans-serif'; // Apply Stag-Medium to the quote number
                        quoteDiv.style.marginTop = '0'; // Prevent any gap above
                        quoteDiv.style.padding = '0'; // Reset padding
                        quoteDiv.style.lineHeight = 'normal'; // Ensure line height doesn't add extra space

                        // Add media query styles
                        var style = document.createElement('style');
                        style.type = 'text/css';
                        style.textContent =
                            '@media (max-width: 599.95px) {' +
                            '.quote-number {' +
                            'padding-left: 24px !important;' +
                            '}' +
                            '}';
                        document.head.appendChild(style);

                        // Insert the new div before the target div
                        targetDiv.parentNode.insertBefore(quoteDiv, targetDiv);
                    }
                }
            }
        }, 200); // Check every 200ms


        (function () {
            // Prevent adding CSS multiple times
            if (!document.getElementById('help-modal-styles')) {
                // CSS styles for the modal
                var css =
                    '.T155-9{' +
                    '  font-weight: 600;' +
                    '  color: #009AE4;' +
                    '  text-decoration: none !important;' +
                    '}' +
                    '.help-container {' +
                    '  display: flex;' +
                    '  align-items: center;' +
                    '  cursor: pointer;' +
                    '  transition: all 0.3s ease;' +
                    '  position: relative;' +
                    '  width: auto;' +
                    '  height: 100%;' +
                    '}' +
                    '.help-icon {' +
                    '  display: flex;' +
                    '  flex-direction: column;' +
                    '  align-items: center;' +
                    '  justify-content: center;' +
                    '  width: 76px;' +
                    '  height: 100%;' +
                    '}' +
                    '.help-icon:hover {' +
                    '  background-color: #FAFAFA;' +
                    '}' +
                    '.help-text {' +
                    '  margin-top: 5px;' +
                    '  font-size: 12px;' +
                    '  color: #000;' +
                    '  font-weight: bold;' +
                    '  font-family: Verdana, sans-serif;' +
                    '}' +
                    '.modal {' +
                    'display: none;' +
                    'position: fixed;' +
                    'z-index: 1000;' +
                    'left: 0;' +
                    'top: 0;' +
                    'width: 100%;' +
                    'height: 100%;' +
                    'overflow: auto;' +
                    'background-color: rgba(0, 0, 0, 0.5);' +
                    '}' +
                    '.modal-content {' +
                    'background-color: #fefefe;' +
                    'margin: 15% auto;' +
                    'padding: 48px;' +
                    'border: 1px solid #888;' +
                    'width: 555px;' +
                    'box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);' +
                    'text-align: left;' +
                    'animation: fadeIn 0.3s;' +
                    '}' +
                    '@media (max-width: 599.95px) {' +
                    '.modal-content {' +
                    'padding: 48px 24px;' +
                    'margin: 30% 16px 100% 16px;' +
                    'width: auto;' +
                    'z-index: 5000 !important;' +
                    'position: fixed;' +
                    '}' +
                    'h1#nav-tab-0 {' +
                    'z-index: 999;' +
                    '}' +
                    '}' +
                    '.close {' +
                    'color: #aaa;' +
                    'float: right;' +
                    'font-size: 28px;' +
                    'font-weight: bold;' +
                    'padding: 18px 18px 0 0;' +
                    '}' +
                    '.close:hover,' +
                    '.close:focus {' +
                    'color: black;' +
                    'text-decoration: none;' +
                    'cursor: pointer;' +
                    '}' +
                    '@keyframes fadeIn {' +
                    'from { opacity: 0; }' +
                    'to { opacity: 1; }' +
                    '}';


                // Add CSS to the page
                var styleTag = document.createElement('style');
                styleTag.id = 'help-modal-styles';
                if (styleTag.styleSheet) {
                    styleTag.styleSheet.cssText = css;
                } else {
                    styleTag.appendChild(document.createTextNode(css));
                }
                document.head.appendChild(styleTag);
            }

            // Add JavaScript to handle the modal
            window.openModal = function () {
                var modal = document.getElementById('helpModal');
                if (modal) modal.style.display = 'block';
            };

            window.closeModal = function () {
                var modal = document.getElementById('helpModal');
                if (modal) modal.style.display = 'none';
            };

            // Close the modal if the user clicks outside of it
            window.onclick = function (event) {
                var modal = document.getElementById('helpModal');
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        })();



    } catch (e) {
        window.dataLayer.push({
            event: 'webtrends error',
            eventAction: 'optimize test 155 - omni - variant 1',
            eventLabel: e,
        });
    }
});