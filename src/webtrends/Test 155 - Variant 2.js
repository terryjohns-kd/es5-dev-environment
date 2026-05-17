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
        '<a href="javascript:void(0);" data-track="cro|v2|helpContainer" class="cro155-10" onclick="toggleHelp()">' +
        '<div class="help-container">' +
        '<div class="help-icon">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="19">' +
        '<path fill="#009AE4" transform="translate(0.362061 0.191162)" d="M3.5111802 1.4561106L2.0729556 2.3274083C1.8366549 2.4664657 1.6674521 2.6842902 1.5935473 2.9429567C1.2279135 4.2781038 1.3154322 7.2381816 6.0385265 11.962249C10.761621 16.685343 13.724616 16.774807 15.065598 16.402367C15.316485 16.331379 15.533337 16.163147 15.669477 15.932682L16.537857 14.484733L13.079895 12.180073L12.081209 13.474378C11.644588 14.044222 10.865671 14.202728 10.235537 13.855571L10.046885 13.752493C9.3525696 13.374217 8.4880791 12.902589 6.7941051 11.205698C5.0933242 9.5029716 4.6236405 8.6404266 4.2453651 7.9470835L4.1452045 7.7642665C3.7941573 7.1351042 3.9555807 6.3571596 4.52737 5.9166489L5.8207021 4.9101834L3.5111802 1.4561106ZM13.999814 17.999096C11.92562 17.999096 8.9460936 16.932341 5.0067778 12.993025C0.025017122 8.0102911 -0.36201018 4.563026 0.18935786 2.5491223C0.3702299 1.9219048 0.77281606 1.4006821 1.3271013 1.0729731L2.7701881 0.20751004C3.4324131 -0.19118643 4.2949591 0.00038236528 4.7247734 0.64704859L7.0333228 4.1108456C7.4524403 4.7390356 7.3133831 5.595747 6.7172832 6.0595961L5.4210334 7.0689788L5.5260558 7.2488785C5.8586268 7.8605371 6.2738547 8.6209774 7.8258538 10.174921C9.3710451 11.724003 10.133431 12.137286 10.744118 12.47083L10.944438 12.579741L11.939234 11.282519C12.405028 10.684475 13.263684 10.549307 13.888957 10.96648L17.352755 13.275029C17.998447 13.706789 18.191961 14.564472 17.792294 15.229614L16.923912 16.677563C16.599121 17.228931 16.077898 17.631517 15.457487 17.807528C15.035453 17.924219 14.549237 17.999096 13.999814 17.999096L13.999814 17.999096Z" fill-rule="evenodd"/>' +
        '</svg>' +
        '<span class="help-text">Help</span>' +
        '</div>' +
        '</a>' +
        '<div class="help-details hidden" onclick="toggleHelp()">' +
        '<span class="phone"><a href="tel:1300 076 109" data-track="cro|v2|phoneNumber">1300 076 109</a></span>' +
        '<span class="hours">Mon-Fri 8am-7pm<br>Sat 8am-1.30pm (AET)</span>' +
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

        WT.trackGA.dlPush('Test 155-PROD', 'Variation 2');

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
                        console.log('This is TYC');
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
                    } else {
                        console.log('Target div not found');
                    }
                }
            }
        }, 100); // Check every 200ms



        (function () {
            // Prevent adding CSS multiple times
            if (!document.getElementById('help-container-styles')) {
                // CSS styles
                var css = [
                    '.help-container {',
                    '  display: flex;',
                    '  align-items: center;',
                    '  cursor: pointer;',
                    '  transition: all 0.3s ease;',
                    '  position: relative;',
                    '  width: auto;',
                    '  height: 100%;' +
                    '}',
                    '.help-icon {',
                    '  display: flex;',
                    '  flex-direction: column;',
                    '  align-items: center;',
                    '  justify-content: center;',
                    '  transition: transform 0.3s ease, margin-right 0.3s ease;',
                    '  width: 76px;',
                    '  height: 100%;' +
                    '  border-right: 2px solid rgb(240, 240, 240);' +
                    '}',
                    '.help-icon:hover {',
                    '  background-color: #FAFAFA;',
                    '}',
                    '.help-text {',
                    '  margin-top: 5px;',
                    '  font-size: 12px;',
                    '  color: #000;',
                    '  font-weight: bold;',
                    '  font-family: Verdana, sans-serif;',
                    '}',
                    '.help-details {',
                    '  opacity: 0;',
                    '  max-width: 0;',
                    '  padding: 0;',
                    '  overflow: hidden;',
                    '  height: 0;',
                    '  flex-direction: column;',
                    '  transition: opacity 0.3s ease, max-width 0.3s ease, height 0.3s ease;',
                    '  white-space: nowrap;',
                    '  text-align: left;',
                    '  display: flex;',
                    '  max-width: 200px;',
                    '}',
                    '.help-details span {',
                    '  font-size: 12px;',
                    '  margin: 2px 0;',
                    '}',
                    '.help-details.hidden {',
                    '  opacity: 0;',
                    '  max-width: 0;',
                    '  height: 0;',
                    '  padding: 0;',
                    '}',
                    '.help-details.visible {',
                    '  opacity: 1;',
                    '  max-width: 200px;',
                    '  display: flex;',
                    '  height: auto;',
                    '  padding: 0 16px 0 6px;',
                    '}',
                    '.hours {',
                    '  font-family: Verdana, sans-serif;',
                    '  line-height: 1.5;',
                    '}',
                    '.phone a {',
                    '  text-decoration: none;',
                    '  color: rgb(0, 154, 228);',
                    '  font-size: 18px;',
                    '}',
                    '.help-details.visible {',
                    '  opacity: 1;',
                    '  max-width: 200px;',
                    '}'
                ].join('\n');

                // Add CSS to the page
                var styleTag = document.createElement('style');
                styleTag.id = 'help-container-styles'; // Set an ID for the style tag to prevent duplicates
                if (styleTag.styleSheet) {
                    styleTag.styleSheet.cssText = css;
                } else {
                    styleTag.appendChild(document.createTextNode(css));
                }
                document.head.appendChild(styleTag);
            }



            // Add JavaScript to handle the toggle
            window.toggleHelp = function () {
                var details = document.querySelector('.help-details');
                var icon = document.querySelector('.help-icon');
                var container = document.querySelector('.help-container');

                if (details && icon && container) {
                    var isVisible = details.classList.contains('visible');
                    if (isVisible) {
                        details.classList.remove('visible');
                        details.classList.add('hidden');
                        icon.style.marginRight = '0';
                        container.style.backgroundColor = ''; // Reset background color
                    } else {
                        details.classList.remove('hidden');
                        details.classList.add('visible');
                        icon.style.marginRight = '10px';
                        container.style.backgroundColor = '#FAFAFA'; // Set background color
                    }
                }
            };


        })();

    } catch (e) {
        window.dataLayer.push({
            event: 'webtrends error',
            eventAction: 'optimize test 155 - omni - variant 2',
            eventLabel: e,
        });
    }
});