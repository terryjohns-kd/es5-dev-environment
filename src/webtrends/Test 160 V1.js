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

function removeFullStop(li) {
    var text = li.innerHTML;
    if (text.charAt(text.length - 1) === '.') {
        li.innerHTML = text.slice(0, -1);
    }
}


function rearrangeFooterNav() {
    var footerNav = document.getElementById('footer-nav');
    if (footerNav && window.innerWidth < 760) {
        var firstItem = footerNav.getElementsByTagName('li')[0];
        if (firstItem) {
            footerNav.appendChild(firstItem);
        }
    }
}

function positionPopup(popupBox) {
    var formIframeDiv = document.querySelector('.form-layout');
    if (formIframeDiv) {
        var rect = formIframeDiv.getBoundingClientRect();
        var viewportHeight = window.innerHeight;
        var popupHeight = popupBox.offsetHeight;

        // Calculate the top position to center the popup vertically in the viewport
        var topPosition = window.scrollY + (viewportHeight - popupHeight) / 2.3;

        // Ensure the popup doesn't go above the viewport
        if (topPosition < window.scrollY) {
            topPosition = window.scrollY;
        }

        popupBox.style.top = topPosition + 'px';

        // Check if the screen width is less than 760px
        if (window.innerWidth < 760) {
            // Center the popup horizontally
            popupBox.style.left = '50%';
            popupBox.style.transform = 'translateX(-50%)';
        } else {
            // Position the popup to the right of the form-layout div
            popupBox.style.left = (rect.right + 20) + 'px';
            popupBox.style.transform = 'none';
        }
    }
}



function insertQuoteButtons() {
    var helpDivH = document.querySelector('.helpDiv');

    if (helpDivH && !(helpDivH.nextElementSibling && helpDivH.nextElementSibling.classList.contains('cro160-44'))) {
        var newDivH = document.createElement('div');
        newDivH.className = 'cro160-44';

        var button1 = document.createElement('button');
        button1.className = 'cro160-bb';
        button1.textContent = 'Get a quote';
        button1.onclick = function () {
            window.open('/CTP_Internet_Quotes/GetQuote', '_blank');
        };

        var button2 = document.createElement('button');
        button2.className = 'cro160-bw';
        button2.textContent = 'Renew your Green Slip';
        button2.onclick = function () {
            window.open('/CTP_Internet_Quotes/CTPRenewals?BNDE=xt6lvGSAnWI', '_blank');
        };

        newDivH.appendChild(button1);
        newDivH.appendChild(button2);

        helpDivH.parentNode.insertBefore(newDivH, helpDivH.nextSibling);
    }
}

function updateHelpLinksAndRemoveBold() {
    var helpWrappers = document.querySelectorAll('.help-wrapper');

    var helpLinkTexts = [
        '1-Hide',
        'What is Compulsory Third Party Insurance in NSW?',
        'Period of insurance',
        'Vehicle Details',
        'Drivers',
        'Vehicle Identification (new quote)',
        'Why is my email required?',
        'Why has my premium changed?',
        'Vehicle Identification (renewal)',
        'Are you entitled to an input tax credit?',
        '11-Hide'
    ];

    for (var iHelpL = 0; iHelpL < helpWrappers.length; iHelpL++) {
        var helpLink = helpWrappers[iHelpL].querySelector('a[id="help-link"]');
        if (helpLink) {
            // Update the text of each help link based on its occurrence, using the array of custom texts
            helpLink.textContent = helpLinkTexts[iHelpL] || 'Help Section ' + (iHelpL + 1);
        }


    }
}





function applyStyles(elements, si, currentPageIndex, isMobile) {
    for (var k = 0; k < elements.length; k++) {
        if (si <= currentPageIndex) {
            elements[k].style.color = '#00C457';

            // If the element is a div, set top border color
            if (elements[k].tagName.toLowerCase() === 'div') {
                elements[k].style.borderTop = '1px dashed #00C457';
            }

            // Special background color for mobile
            if (isMobile) {
                elements[k].style.backgroundColor = '#00C457';
            }
        }
    }
}

function applySvgStyles(svgs, si, currentPageIndex) {
    for (var l = 0; l < svgs.length; l++) {
        if (si <= currentPageIndex) {
            svgs[l].style.border = '1.6px solid #00C457';
        } else {
            svgs[l].style.border = '1.6px solid #FFFFFF';
        }

        if (si < currentPageIndex) {
            // Replace the existing SVG
            var newSvgHtml =
                '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv passed-in focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckIcon" icon="1">' +
                // Circle with solid fill and border
                '<circle cx="12" cy="12" r="12.2" stroke="rgb(0, 196, 87)" stroke-width="1.6" fill="#fff"></circle>' +
                // Tick inside the circle
                '<path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="rgb(0, 196, 87)"></path>' +
                '</svg>';

            svgs[l].outerHTML = newSvgHtml;
            svgs[l].style.fill = '#FFFFFF';
        } else if (si === currentPageIndex) {
            svgs[l].style.fill = '#00C457';
        }

        // Set the color for <text> inside the SVG
        var textElements = svgs[l].getElementsByTagName('text');
        for (var m = 0; m < textElements.length; m++) {
            if (si < currentPageIndex) {
                textElements[m].style.fill = '#00C457';
            } else if (si === currentPageIndex) {
                textElements[m].style.fill = '#FFFFFF';
            }
        }
    }
}















function createDivAroundElement(selector, newTextContent) {
    var input = document.querySelector(selector);
    if (input) {
        var form = input.form;
        var isSelect = input.tagName.toLowerCase() === 'select';
        var isTextarea = input.tagName.toLowerCase() === 'textarea';

        // Create the new div element
        var wrapperDiv = document.createElement('div');
        wrapperDiv.style.position = 'relative';
        wrapperDiv.style.display = 'inline-block';
        wrapperDiv.style.width = '100%';

        // Add specific class for textarea if needed
        if (isTextarea) {
            wrapperDiv.classList.add('textarea-wrapper');
        }

        // Insert the new elements into the DOM
        input.parentNode.insertBefore(wrapperDiv, input);
        wrapperDiv.appendChild(input);

        // Create the hidden input field
        if (!isSelect) {
            // Create the hidden input for non-select elements only
            var hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = input.name || selector;
            form.appendChild(hiddenInput);
        }

        var newDivX = document.createElement('div');
        newDivX.className = 'placeholder';
        newDivX.textContent = newTextContent;

        // Insert after the input
        input.parentNode.insertBefore(newDivX, input.nextSibling);

        // Add event listeners
        input.addEventListener('focus', function () {
            if (selector === '#ctpNumber') {
                prefixSpan.style.display = 'flex';
                prefixSpan.style.backgroundColor = '#FFF';
                input.style.paddingLeft = '42px';
            }
            newDivX.style.top = '22px';
            newDivX.style.left = '16px';
            newDivX.style.transform = 'translateY(-100%)';
            newDivX.style.fontSize = '12px';
            newDivX.style.color = '#003DA5';
            if (input.value === '') {
                input.value = '';
            }
        });

        input.addEventListener('input', function () {
            if (hiddenInput) {
                hiddenInput.value = input.value;
            }
            if (input.value !== '' || (selector === '#ctpNumber' && prefixSpan.style.display === 'flex')) {
                newDivX.style.top = '22px';
                newDivX.style.transform = 'translateY(-100%)';
                newDivX.style.fontSize = '12px';
                newDivX.style.color = '#003DA5';
            } else {
                newDivX.style.top = '50%';
                newDivX.style.transform = 'translateY(-50%)';
                newDivX.style.fontSize = '16px';
            }
        });

        input.addEventListener('blur', function () {
            if (input.value === '') {
                if (selector === '#ctpNumber') {
                    prefixSpan.style.display = 'none';
                    input.style.paddingLeft = '16px';
                }
                newDivX.style.top = '50%';
                newDivX.style.transform = 'translateY(-50%)';
                newDivX.style.fontSize = '16px';
                newDivX.style.color = '#191919';
            }
            newDivX.style.left = '16px';
            if (selector === '#ctpNumber') {
                prefixSpan.style.backgroundColor = '#f1f2f4';
            }
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && input.value === '') {
                e.preventDefault();
            }
        });

        form.addEventListener('submit', function () {
            hiddenInput.value = input.value;
        });

        if (isSelect) {
            newDivX.style.top = '6px';
            newDivX.style.left = '16px';
            newDivX.style.fontSize = '12px';
            newDivX.style.color = '#003DA5';
        }

        // Create and handle the prefixSpan only for '#ctpNumber'
        if (selector === '#ctpNumber') {
            var prefixSpan = document.createElement('span');
            prefixSpan.id = 'ctpPrefix';
            prefixSpan.textContent = '36-';
            wrapperDiv.insertBefore(prefixSpan, input);
        }

        // Check if there is already text in the input box when the page loads
        if (input.value !== '') {
            // Simulate focus to move the placeholder
            var eventFocus = new Event('focus');
            input.dispatchEvent(eventFocus);

            // Simulate input to update the placeholder position
            var eventInput = new Event('input');
            input.dispatchEvent(eventInput);

            // Simulate blur to ensure correct placeholder position
            var eventBlur = new Event('blur');
            input.dispatchEvent(eventBlur);
        }
    }
}



// Function to position the iframe
function positionIframe() {
    var iframePos = document.getElementById('iframe');
    if (iframePos) {
        var formIframeDiv = document.querySelector('.form-layout');
        if (formIframeDiv) {
            var rect = formIframeDiv.getBoundingClientRect();
            var viewportHeight = window.innerHeight;
            var iframeHeight = iframePos.offsetHeight;

            // Calculate the top position to center the iframe vertically in the viewport
            var topPosition = window.scrollY + (viewportHeight - iframeHeight) / 2;

            // Ensure the iframe doesn't go above the viewport
            if (topPosition < window.scrollY) {
                topPosition = window.scrollY;
            }

            iframePos.style.position = 'absolute';
            iframePos.style.setProperty('top', topPosition + 'px', 'important');

            // Check if the screen width is less than 760px
            if (window.innerWidth < 760) {
                // Center the iframe horizontally
                iframePos.style.setProperty('left', '50%', 'important');
                iframePos.style.setProperty('transform', 'translateX(-50%)', 'important');
            } else {
                // Position the iframe to the right of the form-layout div
                iframePos.style.setProperty('left', (rect.right + 20) + 'px', 'important');
                iframePos.style.removeProperty('transform');
            }
        }
    }
}


// Hides a text node found using an XPath expression by wrapping it in a <span> with a 'hidden' class.
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

// Sets the value attribute for a button if it exists
function setButtonValue(buttonId, value) {
    var button = document.getElementById(buttonId);
    if (button) {
        button.setAttribute('value', value);
    }
}

function moveAndReplaceImage(selector) {
    var elements = document.querySelectorAll(selector);

    for (var c = 0; c < elements.length; c++) {
        var el = elements[c];
        var img = el.querySelector('img');

        if (img) {
            // Create a new SVG element
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('class', img.className + ' MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiIcon--svg css-xl38ea iframe-trigger');
            svg.setAttribute('focusable', 'false');
            svg.setAttribute('aria-hidden', 'true');
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.setAttribute('data-testid', 'InfoIcon');
            svg.setAttribute('data-ads', 'Icon');
            svg.setAttribute('style', 'color: rgb(167, 174, 187); fill: currentColor; position: relative; top: -1px; vertical-align: middle; border: none;');

            // Create the <path> element
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z');

            // Append path to SVG
            svg.appendChild(path);

            // Copy attributes from <img> to <svg>
            if (img.getAttribute('onclick')) {
                svg.setAttribute('onclick', img.getAttribute('onclick'));
            }
            if (img.getAttribute('alt')) {
                svg.setAttribute('alt', img.getAttribute('alt'));
            }

            // Replace img with the new svg
            img.parentNode.replaceChild(svg, img);

            // Move the SVG to the end of the element
            el.appendChild(svg);


        }
    }
}

// Handle the specific case for the new selector
function moveAndReplaceSpecificImage() {
    var formRowsCYD = document.querySelectorAll('.form-row');
    var totalRows = formRowsCYD.length;

    if (totalRows >= 6) {
        var sixthFormRow = formRowsCYD[totalRows - 1]; // Always the last row
        var fifthFormRow = formRowsCYD[totalRows - 2]; // Second last row
    }

    // Find the image inside the 6th form-row
    var img = sixthFormRow.querySelector('img');
    // Find the label inside the 5th form-row
    var label = fifthFormRow.querySelector('label');

    if (img && label) {
        // Create a new SVG element
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', img.className + ' MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiIcon--svg css-xl38ea');
        svg.setAttribute('focusable', 'false');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('data-testid', 'InfoIcon');
        svg.setAttribute('data-ads', 'Icon');
        svg.setAttribute('style', 'color: rgb(167, 174, 187); fill: currentColor; position: relative; top: -1px; vertical-align: middle;');

        // Create the <path> element
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z');

        // Append path to SVG
        svg.appendChild(path);

        // Copy attributes from <img> to <svg>
        if (img.getAttribute('onclick')) {
            svg.setAttribute('onclick', img.getAttribute('onclick'));
        }
        if (img.getAttribute('alt')) {
            svg.setAttribute('alt', img.getAttribute('alt'));
        }

        // Replace img with the new svg
        img.parentNode.replaceChild(svg, img);

        // Move the SVG to after the label
        label.parentNode.insertBefore(svg, label.nextSibling);
    }
}





function insertParagraphAfterInput(inputElementId, message) {
    // Get the input element by its ID
    var inputElement = document.getElementById(inputElementId);

    // Proceed only if the element exists
    if (inputElement) {
        // Create the new paragraph element
        var newParagraph = document.createElement('p');
        newParagraph.className = 'cro160-4';
        newParagraph.innerHTML = message;

        // Insert the new paragraph after the input element
        inputElement.parentNode.insertBefore(newParagraph, inputElement.nextSibling);
    }
}

function removeVisibleColons(tagName) {
    var elements = document.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
        var node = elements[i].firstChild;
        while (node) {
            if (node.nodeType === 3) { // Text node
                node.nodeValue = node.nodeValue.replace(/:/g, '');
            }
            node = node.nextSibling;
        }
    }
}




WT.SPA.on(/^\/au\/green-slip-insurance\/nsw\/ctp\/(renewal\/(landing|retrieve-policy|details-confirm|details-summary|payment|confirmation|details-email|details-email-confirm|demerit-points-status|email-receipt|email-receipt-confirmation)|generic\/(contact-us|help))$/, function () {

    var virtualPagePath = getDataLayerValue(window.dataLayer, 'virtualPagePath');
    console.log('Virtual Page Path:', virtualPagePath);

    try {
        // Create and append the meta tag
        var metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1.0';
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(metaTag);


        // Update button values
        setButtonValue('form-button-cancel', 'Cancel');
        setButtonValue('form-button-back', '< Back');
        setButtonValue('form-button-send', 'Send email');
        setButtonValue('form-button-next', 'Next');
        setButtonValue('form-button-ok', 'Close this window');
        setButtonValue('form-button-email-receipt', 'Email receipt');
        setButtonValue('form-button-print-receipt', 'Print receipt');
        setButtonValue('form-button-close', 'Close');
        setButtonValue('finishRnwCon', 'Submit');








        var iframePos = document.getElementById('iframe');
        if (iframePos) {

            // Check screen width
            if (window.innerWidth < 760 && !iframePos.parentElement.classList.contains('cro160-110')) {
                // Create wrapper div
                var iframeWrapper = document.createElement('div');
                iframeWrapper.className = 'cro160-110';

                // Wrap the iframe inside the new div
                iframePos.parentNode.insertBefore(iframeWrapper, iframePos);
                iframeWrapper.appendChild(iframePos);
            }




            iframePos.addEventListener('load', function () {
                if (iframePos.contentDocument) {
                    var iframeDoc = iframePos.contentDocument;
                    var head = iframeDoc.head || iframeDoc.getElementsByTagName('head')[0];

                    if (head && !iframeDoc.getElementById('custom-style')) {
                        var style = iframeDoc.createElement('style');
                        style.id = 'custom-style';
                        style.type = 'text/css';
                        style.appendChild(iframeDoc.createTextNode(
                            'body { background-color: #F7F8F9 !important; overflow-y: auto !important;}' +
                            'ul {word-break: break-word;}' +
                            'div#titleBar { background-color: #F7F8F9 !important; border: none !important; margin-bottom: 10px;}' +
                            'a {word-break: break-word;}' +
                            'span.error, .error {color: #191919 !important;}' +
                            '.helpDiv { font-size: 14px; color: #191919; padding: 0 24px 20px 24px; background-color: rgb(247, 248, 249) !important; }'
                        ));
                        head.appendChild(style);
                    }

                    // Find the div with class 'helpDiv'
                    var helpDiv = iframeDoc.querySelector('.helpDiv');
                    if (helpDiv) {
                        var firstB = helpDiv.querySelector('b');
                        if (firstB) {
                            firstB.textContent = firstB.textContent.charAt(0).toUpperCase() + firstB.textContent.slice(1).toLowerCase();
                        }


                        var boldElement = helpDiv.querySelector('b');

                        if (boldElement && boldElement.textContent.trim() === 'Short term policy registration') {
                            // Create the <strong> element
                            var strong = document.createElement('strong');
                            strong.textContent = 'You chose a 6 month policy';

                            // Replace the <b> tag with the new <strong> tag
                            boldElement.parentNode.replaceChild(strong, boldElement);

                            // Create the SVG element
                            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                            svg.setAttribute('width', '24');
                            svg.setAttribute('height', '24');
                            svg.setAttribute('viewBox', '0 0 24 24');
                            svg.style.display = 'block'; // Ensures it takes full width
                            svg.style.margin = '0 auto'; // Centers it
                            svg.style.paddingBottom = '20px'; // Adds space below

                            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            path.setAttribute('fill', '#D43900');
                            path.setAttribute('transform', 'translate(1 2.5)');
                            path.setAttribute('d', 'M0 19L22 19L11 0L0 19ZM12 16L10 16L10 14L12 14L12 16ZM12 12L10 12L10 8L12 8L12 12Z');
                            path.setAttribute('fill-rule', 'evenodd');

                            svg.appendChild(path);

                            // Create a wrapper div to ensure vertical alignment
                            var wrapper = document.createElement('div');
                            wrapper.style.textAlign = 'center'; // Centers both SVG and text
                            wrapper.appendChild(svg);
                            wrapper.appendChild(strong);

                            // Insert wrapper into helpDiv
                            helpDiv.insertBefore(wrapper, helpDiv.firstChild);
                        }

                        var helpCloseImg = iframeDoc.getElementById('help-close');

                        if (helpCloseImg) {
                            var svgData =
                                '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19">' +
                                '<path fill="#A7AEBB" transform="translate(3.95833 3.95833)" ' +
                                'd="M11.083333 1.11625L9.967083 0L5.5416665 4.4254165L1.11625 0L0 1.11625L4.4254165 5.5416665L0 9.967083L1.11625 11.083333L5.5416665 6.6579165L9.967083 11.083333L11.083333 9.967083L6.6579165 5.5416665L11.083333 1.11625Z" fill-rule="evenodd"/>' +
                                '</svg>';

                            var encodedSvg = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgData);

                            helpCloseImg.style.backgroundImage = 'url("' + encodedSvg + '")';
                        } else {
                            console.error('Help close button not found');
                        }

                    }

                    // Set the height, width, and position before making it visible
                    iframePos.style.width = '250px';
                    iframePos.style.height = '500px';
                    iframePos.style.zIndex = '9999';
                    positionIframe();

                    // Delay adding 'loaded' class to avoid flicker
                    setTimeout(function () {
                        iframePos.style.opacity = '1';
                    }, 50);
                }
            });

            // Check if the iframe is already loaded
            if (iframePos.contentDocument && iframePos.contentDocument.readyState === 'complete') {
                iframePos.dispatchEvent(new Event('load'));
            }

            // Handle click event for SVG with class "help"
            document.addEventListener('click', function (event) {
                var clickedElement = event.target.closest('.help'); // Check if clicked element or parent has class 'help'
                if (clickedElement) {
                    positionIframe();
                }
            });

            // Set initial styles
            iframePos.style.border = 'none';
            iframePos.style.boxShadow = '1px 1px 4px 0px rgba(20, 40, 75, 0.12)';
        }
















        // Select the div with id 'message-errors'
        var messageErrorsDiv = document.getElementById('message-errors');

        // Select the div with id 'progress-bar' (if exists)
        var formLayoutDiv = document.getElementById('progress-bar');

        // Select the div with class 'cro160-1' (for fallback if 'progress-bar' does not exist)
        var fallbackDiv = document.querySelector('.cro160-1');

        // Check if the 'message-errors' div exists
        if (messageErrorsDiv) {
            // If 'progress-bar' exists, insert after it
            if (formLayoutDiv) {
                formLayoutDiv.insertAdjacentElement('afterend', messageErrorsDiv);
            }
            // If 'progress-bar' does not exist, insert after 'cro160-1'
            else if (fallbackDiv) {
                fallbackDiv.insertAdjacentElement('afterend', messageErrorsDiv);
            }

            // Select the first <b> element inside the 'message-errors' div
            var firstBoldElement = messageErrorsDiv.querySelector('b');

            // Check if the first <b> element exists
            if (firstBoldElement) {
                // Check if the SVG already exists
                var existingSvg = messageErrorsDiv.querySelector('svg');
                if (!existingSvg) {
                    // Create the SVG element
                    var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                    svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
                    svgElement.setAttribute('width', '20');
                    svgElement.setAttribute('height', '21');
                    svgElement.setAttribute('class', 'cro-160-99'); // Add the class

                    // Create the path element
                    var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    pathElement.setAttribute('fill', '#A50000');
                    pathElement.setAttribute('transform', 'translate(1.66667 1.66667)');
                    pathElement.setAttribute('d', 'M7.5 10.833333L9.166667 10.833333L9.166667 12.5L7.5 12.5L7.5 10.833333ZM7.5 4.1666665L9.166667 4.1666665L9.166667 9.166667L7.5 9.166667L7.5 4.1666665ZM8.3249998 0C3.7249999 0 0 3.7333333 0 8.333333C0 12.933333 3.7249999 16.666666 8.3249998 16.666666C12.933333 16.666666 16.666666 12.933333 16.666666 8.333333C16.666666 3.7333333 12.933333 0 8.3249998 0ZM8.333333 15C4.6500001 15 1.6666666 12.016666 1.6666666 8.333333C1.6666666 4.6500001 4.6500001 1.6666666 8.333333 1.6666666C12.016666 1.6666666 15 4.6500001 15 8.333333C15 12.016666 12.016666 15 8.333333 15Z');
                    pathElement.setAttribute('fill-rule', 'evenodd');

                    // Append the path element to the SVG element
                    svgElement.appendChild(pathElement);

                    // Create a new div to hold the SVG and apply styles
                    var svgContainer = document.createElement('div');
                    svgContainer.style.position = 'absolute';
                    svgContainer.style.left = '12.5px';
                    svgContainer.style.top = '11px';

                    // Append the SVG to the new div
                    svgContainer.appendChild(svgElement);

                    // Insert the new div before the first <b> element
                    firstBoldElement.parentNode.insertBefore(svgContainer, firstBoldElement);
                }
            }
        }


















        // Move header li elements to footer
        (function () {
            var quickNav = document.getElementById('quick-nav');
            var footerNav = document.getElementById('footer-nav');

            if (quickNav && footerNav) {
                var quickItems = quickNav.getElementsByTagName('li');
                var footerItems = footerNav.getElementsByTagName('li');
                var lastFooterItem = footerItems.length ? footerItems[footerItems.length - 1] : null;
                var lastMovedItem = null;
                while (quickItems.length) {
                    var item = quickItems[0];
                    if (lastFooterItem) {
                        lastFooterItem.parentNode.insertBefore(item, lastFooterItem.nextSibling);
                    } else {
                        footerNav.appendChild(item);
                    }
                    lastMovedItem = item;
                    lastFooterItem = item;
                }
                if (lastMovedItem) {
                    lastMovedItem.style.display = 'none';
                }
            }
        })();


        rearrangeFooterNav();

        // Remove the copyright symbol from the first <li> with class 'first'
        var firstLi = document.querySelector('#footer-nav .first');
        if (firstLi) {
            firstLi.innerHTML = firstLi.innerHTML.replace('©', '').trim();
        }

        // Get all subsequent <li> elements and remove "QBE" from their text
        var liItems = document.querySelectorAll('#footer-nav li:not(.first)');
        liItems.forEach(function (li) {
            li.innerHTML = li.innerHTML.replace('QBE', '').trim();
        });


        // Only run the script if the screen width is 759px or more
        if (window.matchMedia('(min-width: 759px)').matches) {
            // Lift the position for the chat symbol
            var maxAttempts = 5;
            var attempts = 0;

            var checkIframe = setInterval(function () {
                var iframe = document.getElementById('genesys-mxg-frame');

                if (iframe) {

                    // Inject a new style rule to override existing styles
                    var style = document.createElement('style');
                    style.innerHTML = '#genesys-mxg-frame {bottom: 92px !important;}';
                    document.head.appendChild(style);

                    clearInterval(checkIframe);
                }

                attempts++;
                if (attempts >= maxAttempts) {
                    clearInterval(checkIframe);
                }
            }, 500);
        }


        // Get the footer navigation element
        var footerNav = document.getElementById('footer-nav');

        // Get all the <a> tags within the footer navigation
        var links = footerNav.getElementsByTagName('a');

        // Loop through each link and update the href and target attributes
        for (var iFoot = 0; iFoot < links.length; iFoot++) {
            var linkF = links[iFoot];
            var href = linkF.getAttribute('href');
            if (href.indexOf('Help') !== -1) {
                linkF.href = href.replace('javascript:_openHelpLink(\'', '/CTP_Internet_Quotes/').replace(/'\);$/, '');
            } else if (href.indexOf('Contact') !== -1) {
                linkF.href = href.replace('javascript:_openContactLink(\'', '/CTP_Internet_Quotes/').replace(/'\);$/, '');
            }
            linkF.target = '_blank';
        }



        var excludedPaths = [
            '/au/green-slip-insurance/nsw/ctp/renewal/landing',
            '/au/green-slip-insurance/nsw/ctp/renewal/confirmation',
            '/au/green-slip-insurance/nsw/ctp/renewal/details-email-confirm',
            '/au/green-slip-insurance/nsw/ctp/renewal/details-email',
            '/au/green-slip-insurance/nsw/ctp/renewal/demerit-points-status',
            '/au/green-slip-insurance/nsw/ctp/renewal/email-receipt',
            '/au/green-slip-insurance/nsw/ctp/renewal/email-receipt-confirmation',
            '/au/green-slip-insurance/nsw/ctp/generic/contact-us',
            '/au/green-slip-insurance/nsw/ctp/generic/help'
        ];

        if (excludedPaths.indexOf(virtualPagePath) === -1) {

            // Adding the code for the breadcrumb in the header
            var targetElementBC = document.querySelector('#header > tbody > tr:nth-child(1) > td:nth-child(1)');
            var targetTdBCM = document.querySelector('#header > tbody > tr:nth-child(2) > td[colspan="2"]');

            if (!document.querySelector('[data-ads="Stepper"]')) {
                // Create a new div element and set its inner HTML
                var newDivBC = document.createElement('td');
                newDivBC.innerHTML =
                    '<div class="app-bar__stepper-section" data-testid="stepper-section-test">' +
                    '<div data-ads="Stepper" class="css-vziql4 AdsStepper AdsStepper--ondark snipcss-25sQF">' +
                    '<div class="MuiStepper-root MuiStepper-horizontal MuiStepper-alternativeLabel css-yn1apx" columns="5">' +
                    '<div class="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel css-166ciyp">' +
                    '<button class="MuiButtonBase-root MuiStepButton-root MuiStepButton-horizontal css-1771dpj style-pQdif" tabindex="0" type="button" aria-current="step" id="style-pQdif">' +
                    '<span class="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel css-1abj2s5">' +
                    '<span class="MuiStepLabel-iconContainer Mui-active MuiStepLabel-alternativeLabel css-a5nipc">' +
                    '<svg class="retrieve-policy MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root Mui-active css-4ff9q7" focusable="false" aria-hidden="true" viewBox="0 0 24 24">' +
                    '<circle cx="12" cy="12" r="12"></circle>' +
                    '<text class="retrieve-policy MuiStepIcon-text css-10psl7k" x="12" y="12" text-anchor="middle" dominant-baseline="central">1</text>' +
                    '</svg>' +
                    '</span>' +
                    '<span class="MuiStepLabel-labelContainer MuiStepLabel-alternativeLabel css-h2cmlr">' +
                    '<span class="retrieve-policy MuiStepLabel-label Mui-active MuiStepLabel-alternativeLabel css-1f8y8n7">CTP Certificate Number</span>' +
                    '</span>' +
                    '</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel css-166ciyp">' +
                    '<div class="details-confirm MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel css-15oeqyl">' +
                    '<span class="MuiStepConnector-line MuiStepConnector-lineHorizontal css-95m0ql"></span>' +
                    '</div>' +
                    '<button class="MuiButtonBase-root MuiStepButton-root MuiStepButton-horizontal css-g1q3qx" tabindex="0" type="button">' +
                    '<span class="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel css-1abj2s5">' +
                    '<span class="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel css-a5nipc">' +
                    '<svg class="details-confirm MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root css-4ff9q7" focusable="false" aria-hidden="true" viewBox="0 0 24 24">' +
                    '<circle cx="12" cy="12" r="12"></circle>' +
                    '<text class="details-confirm MuiStepIcon-text css-10psl7k" x="12" y="12" text-anchor="middle" dominant-baseline="central">2</text>' +
                    '</svg>' +
                    '</span>' +
                    '<span class="MuiStepLabel-labelContainer MuiStepLabel-alternativeLabel css-h2cmlr">' +
                    '<span class="details-confirm MuiStepLabel-label MuiStepLabel-alternativeLabel css-1f8y8n7">Confirm details</span>' +
                    '</span>' +
                    '</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel css-166ciyp">' +
                    '<div class="details-summary MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel css-15oeqyl">' +
                    '<span class="MuiStepConnector-line MuiStepConnector-lineHorizontal css-95m0ql"></span>' +
                    '</div>' +
                    '<button class="MuiButtonBase-root MuiStepButton-root MuiStepButton-horizontal css-g1q3qx" tabindex="0" type="button">' +
                    '<span class="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel css-1abj2s5">' +
                    '<span class="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel css-a5nipc">' +
                    '<svg class="details-summary MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root css-4ff9q7" focusable="false" aria-hidden="true" viewBox="0 0 24 24">' +
                    '<circle cx="12" cy="12" r="12"></circle>' +
                    '<text class="details-summary MuiStepIcon-text css-10psl7k" x="12" y="12" text-anchor="middle" dominant-baseline="central">3</text>' +
                    '</svg>' +
                    '</span>' +
                    '<span class="MuiStepLabel-labelContainer MuiStepLabel-alternativeLabel css-h2cmlr">' +
                    '<span class="details-summary MuiStepLabel-label MuiStepLabel-alternativeLabel css-1f8y8n7">Summary</span>' +
                    '</span>' +
                    '</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="MuiStep-root MuiStep-horizontal MuiStep-alternativeLabel css-166ciyp">' +
                    '<div class="payment MuiStepConnector-root MuiStepConnector-horizontal MuiStepConnector-alternativeLabel css-15oeqyl">' +
                    '<span class="MuiStepConnector-line MuiStepConnector-lineHorizontal css-95m0ql"></span>' +
                    '</div>' +
                    '<button class="MuiButtonBase-root MuiStepButton-root MuiStepButton-horizontal css-g1q3qx" tabindex="0" type="button">' +
                    '<span class="MuiStepLabel-root MuiStepLabel-horizontal MuiStepLabel-alternativeLabel css-1abj2s5">' +
                    '<span class="MuiStepLabel-iconContainer MuiStepLabel-alternativeLabel css-a5nipc">' +
                    '<svg class="payment MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiStepIcon-root css-4ff9q7" focusable="false" aria-hidden="true" viewBox="0 0 24 24">' +
                    '<circle cx="12" cy="12" r="12"></circle>' +
                    '<text class="payment MuiStepIcon-text css-10psl7k" x="12" y="12" text-anchor="middle" dominant-baseline="central">4</text>' +
                    '</svg>' +
                    '</span>' +
                    '<span class="MuiStepLabel-labelContainer MuiStepLabel-alternativeLabel css-h2cmlr">' +
                    '<span class="payment MuiStepLabel-label MuiStepLabel-alternativeLabel css-1f8y8n7">Payment</span>' +
                    '</span>' +
                    '</span>' +
                    '</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

                if (targetTdBCM) {
                    var newDivBCM = document.createElement('div'); // Ensure it's a div, not a td
                    newDivBCM.innerHTML =
                        '<div class="AdsStepper-mobile">' +
                        '<div class="StepLabel-LabelContainer"><span class="MuiTypography-root MuiTypography-body1 css-1dxu1r9"' +
                        'data-ads="Typography" data-testid="typography-test">CTP Certificate</span>' +
                        '<p class="MuiTypography-root MuiTypography-body2 css-xgs64g" data-ads="Typography"' +
                        'data-testid="typography-test">1 of 4</p>' +
                        '</div>' +
                        '<div class="StepPropgress-ProgressContainer">' +
                        '<div class="StepProgress-root retrieve-policyM"></div>' +
                        '<div class="StepProgress-root details-confirmM"></div>' +
                        '<div class="StepProgress-root details-summaryM"></div>' +
                        '<div class="StepProgress-root paymentM"></div>' +
                        '</div>' +
                        '</div>';

                    // Append the new div inside the correct <td>
                    targetTdBCM.appendChild(newDivBCM);
                }

                // Insert the new div element after the target element
                targetElementBC.parentNode.insertBefore(newDivBC, targetElementBC.nextSibling);
            }





            // Define the pages in order
            var pages = ['retrieve-policy', 'details-confirm', 'details-summary', 'payment'];

            // Extract the last part of the path
            var currentPage = virtualPagePath.split('/').pop();

            // Find the index of the current page
            var currentPageIndex = pages.indexOf(currentPage);

            // Define the steps and their shortened labels
            var steps = [
                { full: 'CTP Certificate Number', short: 'CTP Certificate' },
                { full: 'Confirm details', short: 'Details' },
                { full: 'Summary', short: 'Summary' },
                { full: 'Payment', short: 'Payment' }
            ];

            // Only proceed if the current page is valid (exists in the `pages` array)
            if (currentPageIndex !== -1) {
                var currentStep = steps[currentPageIndex]; // Get the current step's full and short name

                // Update the step number in .css-xgs64g ("X of 4")
                var stepIndicator = document.querySelector('.css-xgs64g');
                if (stepIndicator) {
                    stepIndicator.textContent = (currentPageIndex + 1) + ' of ' + pages.length;
                }

                // Update the step name in .css-1dxu1r9 (shortened version)
                var stepNameElement = document.querySelector('.css-1dxu1r9');
                if (stepNameElement) {
                    stepNameElement.textContent = currentStep.short;
                }

                // Loop through the pages and apply styles (you already have this loop)
                for (var si = 0; si < pages.length; si++) {
                    var page = pages[si];
                    var mobilePage = page + 'M'; // Mobile class name

                    // Select all elements for desktop and mobile views
                    var activeElements = document.getElementsByClassName(page);
                    var activeElementsM = document.getElementsByClassName(mobilePage);

                    applyStyles(activeElements, si, currentPageIndex, false);
                    applyStyles(activeElementsM, si, currentPageIndex, true);

                    // Select all SVG elements for desktop and mobile views
                    var activeSvgs = document.querySelectorAll('svg.' + page);
                    var activeSvgsM = document.querySelectorAll('svg.' + mobilePage);

                    applySvgStyles(activeSvgs, si, currentPageIndex);
                    applySvgStyles(activeSvgsM, si, currentPageIndex);
                }
            }












        }


        // Select the footer element by its ID and add payment icons
        var footer = document.getElementById('footer');
        if (!document.querySelector('.cro160-95')) {
            var newDivF = document.createElement('div');
            newDivF.classList.add('cro160-95'); // Assign the new class to the div
            newDivF.innerHTML = '<div class="cro160-76"><div class="jss1664 jss1665 jss1667"><p class="jss1666">Secure Payment</p><ul class="jss1668"><li><svg class="MuiSvgIcon-root-1445" focusable="false" viewBox="0.0 0.0 48.0 48.0" role="img" preserveAspectRatio="xMidYMid meet">   <path d="M0.5 0.5H39.5V23.5H0.5z" stroke="#CCC" fill="#FFF"></path>   <path d="M25.505 7l.319.057c.212.037.425.075.634.123l.287.074c.19.053.384.114.587.172l-.152.714-.299 1.395-.398-.122c-.262-.082-.521-.162-.785-.22l-.204-.04c-.476-.088-.96-.106-1.433.026l-.132.044c-.176.066-.346.165-.485.284l-.073.072c-.222.248-.202.573.056.816l.153.133c.159.127.333.238.507.342l.399.232c.402.227.81.446 1.193.7l.148.102c.527.39.903.906.988 1.586l.022.228c.082 1.203-.408 2.158-1.445 2.846l-.234.144c-.633.36-1.332.529-2.058.596l-.258.02c-.171.011-.342.017-.513.017h-.005l-.373-.009c-.744-.034-1.477-.17-2.198-.407l-.109-.04-.107-.043-.031-.018-.04-.026.153-.722.313-1.463.272.12.266.114.256.098c.771.273 1.565.385 2.385.231l.142-.033c.19-.054.377-.142.537-.25l.088-.067c.352-.303.362-.8-.007-1.118l-.204-.16c-.213-.15-.445-.277-.668-.413l-.352-.206c-.355-.202-.715-.397-1.044-.634l-.15-.114c-.485-.392-.829-.898-.899-1.552l-.016-.213c-.044-.98.355-1.783 1.126-2.417l.2-.153c.675-.485 1.456-.71 2.282-.81l.075-.016.075-.02h1.21zm-5.672.189l-.16.754-.16.747-.882 4.123-.877 4.124-.02.075c-.042.133-.116.177-.286.173l-.712-.007c-.474-.002-.948.002-1.422.002H15.1l.714-3.337 1.424-6.654h2.595zm-6.254-.014l.854.004h1.581l.124.007-.134.321c-.087.212-.173.419-.26.625l-1.86 4.436-1.856 4.438-.03.062c-.054.09-.124.116-.243.115l-1.174-.005-1.174.007-.074-.004c-.11-.016-.152-.077-.184-.2l-1-3.877-.994-3.878-.044-.153c-.132-.393-.367-.668-.769-.845l-.437-.18c-.588-.227-1.192-.4-1.805-.545l-.051-.013L4 7.478l.001-.081c.006-.219.031-.219.288-.219h4.109l.136.006c.578.05.99.418 1.105 1.015l.517 2.73.514 2.732.016.08.039.19.032-.057c.019-.034.034-.06.044-.087l1.276-3.227 1.272-3.229c.046-.116.102-.156.225-.156h.005zm20.324.003l.104.487.103.484.828 3.97.83 3.971.113.507.119.506v.071h-2.409l-.09-.42c-.059-.28-.118-.557-.167-.836l-.015-.067c-.035-.124-.1-.173-.265-.17l-.966.007c-.644.002-1.288 0-1.933-.006l-.066.004c-.099.013-.145.065-.182.176l-.208.595-.22.59-.023.043c-.03.043-.076.084-.11.084l-.872.005c-.582.002-1.168 0-1.765 0l.16-.387c.106-.256.21-.506.315-.755l1.684-4.018L30.552 8l.059-.128c.242-.488.598-.695 1.177-.695h2.115zm-1.85 2.778l-1.33 3.666h2.124l-.256-1.226-.507-2.434-.016-.003z" fill="#1A1F71"></path> <title>Logo of Visa</title></svg></li><li><svg class="MuiSvgIcon-root-1445" focusable="false" viewBox="0.0 0.0 48.0 48.0" role="img" preserveAspectRatio="xMidYMid meet">     <path d="M0.5 0.5H39.5V23.5H0.5z" stroke="#CCC" fill="#FFF"></path>       <path transform="translate(7 4)" d="M8.955 14.071L16.538 14.071 16.538 1.685 8.955 1.685z" fill="#FF5F00"></path>       <path transform="translate(7 4)" d="M9.736 7.88c-.002-2.417 1.108-4.7 3.008-6.193C9.324-1 4.372-.407 1.684 3.013c-2.688 3.42-2.094 8.372 1.326 11.06 2.857 2.245 6.878 2.245 9.734 0-1.901-1.492-3.01-3.776-3.008-6.194" fill="#EB001B"></path>       <path transform="translate(7 4)" d="M25.586 13.455v-1h-.12l-.14.714-.14-.714h-.12v1h.087v-.758l.13.651h.09l.13-.651v.758h.083zm-.77 0v-.83h.167v-.17h-.397v.17h.157v.83h.073zM25.49 7.88c0 4.35-3.527 7.876-7.877 7.876-1.766 0-3.48-.593-4.869-1.684 3.42-2.688 4.015-7.64 1.327-11.061-.388-.493-.833-.938-1.327-1.326 3.42-2.689 8.372-2.096 11.061 1.324 1.091 1.388 1.685 3.102 1.685 4.868v.002z" fill="#F79E1B"></path> <title>Logo of Mastercard</title></svg></li></ul><div class="cro160-38">Copyright 2025 QBE</div></div></div>';
            footer.appendChild(newDivF);
        }



        // Create a new style element to hold styles for each page and also for funnel wide css
        var style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute('id', 'wt-page-level-css');

        // Prepare the CSS string
        var css = '#footer {padding: 24px 60px; display: flex; color: #fff !important; background-color: rgb(0, 32, 91);}';

        if (virtualPagePath !== '/au/green-slip-insurance/nsw/ctp/generic/contact-us' &&
            virtualPagePath !== '/au/green-slip-insurance/nsw/ctp/generic/help') {
            css += '#header2 {margin-bottom: 0px !important; background-color: rgb(0, 154, 228); padding: 32px 48px 28px 48px; color: #fff !important; font-family: "Stag Medium", Arial, sans-serif !important; font-size: 2.2rem !important; font-weight: 500;}' +
                '.form-label-instruct {font-weight: bold; color: #000;}' +
                '#form-indent {background-color: #fff; border: 1px solid rgb(225, 228, 232) !important; padding: 24px 48px !important; width: 600px; margin: auto !important;}';
        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/generic/help') {
            css += 'h3#header3 {margin-bottom: 5px !important; padding: 40px 150px 10px 150px; font-weight: 400; text-align: left;}' +
                'div#popup-page {background-color: #F1F2F4 !important; margin: 0 !important; border: none !important;padding: 0 !important; width: auto !important; display: flex; flex-direction: column; height: 100vh;}' +
                '#form-button-close {display: none;}' +
                '.cro160-44 {padding-bottom: 80px;}' +
                'button.cro160-bb {border-radius: 28px; color: #fff; background-color: #003DA5; font-size: 14px; padding: 9px 17px; cursor: pointer; margin-right: 20px; font-weight: 700;}' +
                'button.cro160-bw {border: 1px solid #003Da5; background-color: #fff; border-radius: 28px; color: #003da5; padding: 9px 17px; font-weight: 700; cursor: pointer;}' +
                'a#help-link {display: inline-flex; align-items: center; gap: 10px;}' +
                'a#help-link[title="click to expand this topic"]::before {content: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 -960 960 960\'%3E%3Cpath d=\'M480-345 240-585l56-56 184 184 184-184 56 56z\'%3E%3C/path%3E%3C/svg%3E"); display: inline-block; width: 1em; height: 1em; vertical-align: middle;}' +
                'a#help-link[title="click to hide this topic"]::before {content: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 -960 960 960\'%3E%3Cpath d=\'M480-345 240-585l56-56 184 184 184-184 56 56z\'%3E%3C/path%3E%3C/svg%3E"); display: inline-block; width: 1em; height: 1em; vertical-align: middle; transform: rotate(180deg);}' +
                '.cro160-313 {margin-bottom: 0px !important;}' +
                '.cro160-17 {color: #191919; padding: 0px 150px 40px 150px; font-size: 18px; text-align: left;}' +
                'a#help-link {color: #191919 !important; text-decoration: none !important; font-size: 16px !important;}' +
                '.helpPageDiv {margin-left: 0px !important; padding-left: 26px;}' +
                '#quoteVehicle div.helpDiv:last-of-type, #renewalDetail div.helpDiv:nth-last-of-type(-n+4) {display: none;}' +
                '.helpDiv {font-size: 14px !important; color: #191919 !important; padding:0 !important; margin-bottom: 40px; margin-top: 30px;}' +
                '.cro160-51 {font-size: 24px; color: #191919; padding-bottom: 15px; font-weight: bold;}' +
                'div#popup-content {margin: 0 !important; width: auto !important;min-height: auto !important;}' +
                '#form-indent {border: none !important; background-color: #fff; margin: auto !important; padding: 0 150px 30px 150px;}' +
                'a {color: #0073e6 !important;}' +
                '@media (max-width: 759px) {#form-indent {margin-left: auto !important; margin-right: auto !important; max-width: 100vw !important; width: auto !important;}' +
                'h3#header3 {padding: 40px 24px 10px 24px;}' +
                '#popup-content div#form-indent {width: 100vw; max-width: 100vw;}' +
                '.cro160-17 {padding: 0px 24px 40px 24px;}' +
                '}';
        } else {
            css += 'h2#header2 {margin-bottom: 10px !important; padding: 30px 100px 0px 100px; color: #191919 !important; font-family: "Stag Medium", Arial, sans-serif !important; font-size: 40px !important; font-weight: 500; text-align: left;}' +
                '.form-label-instruct {font-weight: normal; color: #000;}' +
                '.cro160-19 {padding: 0 100px; text-align: left; margin-bottom: 40px !important;}' +
                'h3#header3 {font-size: 20px !important; margin-bottom: 10px !important; color: #191919 !important;}' +
                '.cro160-49 {background-color: #fff; padding: 20px; margin-bottom: 15px; width: auto; font-size: 16px; color: #191919 !important;}' +
                'div#popup-page {background-color: #F1F2F4 !important; margin: 0 !important; border: none !important;padding: 0 !important; width: auto !important; display: flex; flex-direction: column; height: 100vh;}' +
                '#form-button-close {display: none;}' +
                'a {color: #1D4FBB !important;}' +
                '#form-indent {border: none !important; width: auto; margin: auto 0 !important; padding: 0 150px;}' +
                '@media (max-width: 759px) { h2#header2 {padding: 30px 24px 0px 24px;}' +
                'div#popup-page {height: auto;}' +
                'div#popup-content {min-height: auto;}' +
                '#form-indent {width: auto !important;}' +
                '.cro160-19 {padding: 0 24px;}' +
                '}';
        }

        css += 'div#content { min-height: auto !important; padding: 32px 0 0 0 !important; width: 600px !important; display: flex !important; margin: auto !important; justify-content: center !important;}' +
            'img#company-name {background-image: url(https://www.qbe.com/media/qbe/shared/logos/qbe-logo.svg) !important; height: 32px !important; width: 108.562px !important;}' +
            '#header { box-shadow: none !important; padding: 24px 32px !important; position: relative !important; min-height: 64px !important; background-color: rgb(0, 32, 91) !important; margin: 0 !important;}' +
            '#quick-nav, #font-tools {display: none !important;}' +
            'div#footer { margin-top: 20px; margin-bottom: 0px !important;}' + 'input#form-button-cancel, input#form-button-back { text-decoration: underline; color: #003da5; width: auto !important; background-image: none !important; height: auto !important; font-size: 14px; font-family: Arial;}' +
            'input#form-button-next, input#form-button-submit, input#form-button-send, .DpsPxPayOK, #finishRnwCon { width: auto !important; background-image: none !important; height: auto !important; background-color: #003da5 !important; color: #FFFFFF; font-size: 16px; font-family: Arial; font-stretch: 100%; font-weight: 500; padding: 17px 29px; border: 2px solid #003da5; border-radius: 28px; }' +
            'input.image-replacement { text-indent: 0px !important; }' +
            'div#form-indent { margin-left: 0px !important; margin-right: 0px !important; }' +
            'div#button-bar-left { width: auto !important; }' +
            '.css-vziql4.AdsStepper.AdsStepper--ondark.snipcss-25sQF {display: flex; width: 638.4px; position: absolute; left: 50%; transform: translateX(-50%); top: 17px;}' +
            '.MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel.css-yn1apx {align-items: flex-start; display: flex; flex-direction: row; row-gap: 24px; width: min(664px, 100%);}' +
            '.MuiStep-root.MuiStep-horizontal.MuiStep-alternativeLabel.css-166ciyp { flex-grow: 1; flex-shrink: 1; padding: 0; flex-basis: 0%; display: flex; position: relative;}' +
            'button.MuiButtonBase-root { border: none; align-items: center; display: inline-flex; background-color: transparent; width: 100%; position: relative; flex-direction: column;}' +
            'span.MuiStepLabel-root.MuiStepLabel-horizontal.MuiStepLabel-alternativeLabel.css-1abj2s5 { display: flex; align-items: center; flex-direction: column;}' +
            'svg.MuiSvgIcon-root { border-radius: 1em; height: 24px; border: 1.6px solid #fff; fill: none;}' +
            'svg.MuiSvgIcon-root.passed-in { border-radius: 1em; height: 24px; border: none; fill: none;}' +
            'text.MuiStepIcon-text.css-10psl7k { color: #fff; fill: #fff; font-size: 16px;}' +
            'span.MuiStepLabel-labelContainer.MuiStepLabel-alternativeLabel.css-h2cmlr { text-align: center; color: #fff; display: flex; padding-top: 5px; font-size: 12px !important;}' +
            'span.MuiStepLabel-iconContainer.Mui-active.MuiStepLabel-alternativeLabel.css-a5nipc { display: flex; flex-shrink: 0; padding-right: 0;}' +
            'span.MuiStepLabel-label { line-height: 21px;}' +
            '.MuiStepConnector-root.MuiStepConnector-horizontal.MuiStepConnector-alternativeLabel { position: absolute; left: calc(-50% - -0.8em); top: 13px; right: calc(50% + 16px); box-sizing: border-box; flex-grow: 1; display: flex; flex-shrink: 1; border-top: 1px dashed #fff}' +
            'span.MuiStepConnector-line.MuiStepConnector-lineHorizontal.css-95m0ql { border-top: solid 0.8px #fff;}' +
            '.cro160-95 {display: flex; margin-left: auto; width: auto;}' +
            '.jss1664.jss1665.jss1667 { display: grid; grid-auto-flow: column;}' +
            'p.jss1666 {font-size: 12px; font-family: Arial; width: 140px;}' +
            'ul.jss1668 {margin: 0; padding: 0; justify-self: start; list-style-type: none; display: flex;}' +
            '#cro160-34 li {display: inline;}' +
            'svg.MuiSvgIcon-root-1445 {font-size: 40px; overflow: hidden; width: 1em; height: 1em; display: inline-block;}' +
            '.cro160-76 {flex-grow: 0.6; margin-left: auto;}' +
            '.AdsStepper-mobile {width: 100%}' +
            '.StepLabel-LabelContainer {display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: justify; justify-content: space-between; color: #fff; margin-bottom: 4px;}' +
            '.css-1dxu1r9 { margin: 0px; font-weight: 400; letter-spacing: 0px; line-height: 1.5; font-size: 1rem;}' +
            '.css-xgs64g { font-size: 0.875rem;}' +
            '.StepPropgress-ProgressContainer {display: flex;}' +
            '.StepPropgress-ProgressContainer .StepProgress-root {height: 2px; flex: 1 1 0%; background-color: #fff; margin-right: 2px;}' +
            '@media only screen and (min-width: 759.5px) {' +
            '.AdsStepper-mobile {display: none;}' +
            '}' +
            '@media only screen and (max-width: 759px) {' +
            'div#message-errors {width: 265px;}' +
            '.cro160-95 {margin-left: 0px !important; padding-top: 15px;}' +
            '.cro160-38 {display: block;}' +
            '#footer-nav li.first {display: none;}' +
            'p.jss1666 {font-size: 14px !important; padding-bottom: 10px;}' +
            '#header {padding: 16px !important;}' +
            '#footer {padding: 20px; display: flex !important; flex-direction: column;}' +
            'ul#footer-nav {display: flex; flex-direction: column; text-align: left;}' +
            'ul#footer-nav li {font-size: 14px !important; padding: 15px 0 0 0 !important;}' +
            '.cro160-76 {flex-grow: 1; text-align: left; padding-top: 15px;}' +
            '.jss1664.jss1665.jss1667 { display: flex; flex-direction: column;}' +
            'img#company-name {background-size: 70px; height: 30px !important; width: 70px !important;}' +
            '.app-bar__stepper-section {display: none;}' +
            'div#content, #form-indent {width: 375px;}' +
            'div#form-indent {max-width: 297px;}' +
            'div#page { width: auto !important; } ul#simple-unnumbered-list { width: 90%; } .LPMContainer { inset: 40% 0 !important; }' +
            'div#content {padding: 20px 0 0 0 !important;}' +
            '#header2 {font-size: 20px !important; padding: 28px 24px;}' +
            '#cro160-2, #form-indent, cro160-3 {padding: 24px !important;}' +
            '#header tr {width: 100%; display: table-row;}' +
            '#header tr td[colspan="2"] {width: 345px;}' +
            'div#button-bar {margin-top: 20px !important; width: 335px !important; margin-left: 20px !important; margin-right: 20px !important;}' +
            '}';

        if (
            virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/retrieve-policy'
        ) {
            css += 'a.cro160-52 {text-decoration: none; color: #1D4FBB !important;}' +
                '#label {display: none;}' +
                'label[for="regoNumber"] {font-size: 0; display: flex; position: relative; top:41px; left: 90%; z-index: 999; width: auto; }' +
                '#content > form > div.form-layout > div:nth-child(3) > label, #content > form > div.form-layout > div:nth-child(3) > label {margin-bottom: -5px !important;} ' +
                '.form-input {width: 100%;}' +
                '.placeholder {position: absolute; left: 32px; top: 50%; pointer-events: none; color: #191919; transform: translateY(-50%); transition: all 0.2s ease;}' +
                '#ctpNumber:focus + .placeholder, #ctpNumber.has-value + .placeholder {top: 0; left: 4px; font-size: 12px; transform: none; opacity: 1;}' +
                '#ctpNumber:focus, #regoNumber:focus {outline: none; background-color: #fff; border-bottom: 1px solid rgb(25, 25, 25);}' +
                '#ctpPrefix {position: absolute; left: 0; top: 0; bottom: 2; display: none; padding: 35px 2px 0px 16px; color: #636363; align-items: center;}' +
                '.input-wrapper {position: relative; width: 100%; display: flex;}' +
                '.input-wrapper.focused .prefix {display: block;}' +
                'input#regoNumber {padding-left: 16px;}' +
                '.mini, em {display: none;}' +
                '#content > form > div.form-layout > div:nth-child(1), #content > form > div.form-layout > div:nth-child(2) > p > input.mini {display: none;}' +
                '.imageFrame {border: none  !important;}' +
                '#renewal-image { width: 600px !important; background-size: 90% auto; background-position: center; background-repeat: no-repeat; background-color: white;}' +
                '#form-center {padding-top: 48px;}' +
                '.form-row {padding: 0 48px;}' +
                '#content > form > div:nth-child(4) > br {display: none;}' +
                '.cro160-4 {font-size: 12px; padding: 2px 16px 20px 16px;}' +
                '.cro160-7 {text-align: center; margin-bottom: 0px;}' +
                '#content > form > div.form-layout > div:nth-child(3) > p {float: none !important; }' +
                '#ctpNumber, #regoNumber {padding-top: 35px; height: 58px; background-color: rgb(241, 242, 244); border-bottom: 1px solid rgb(25, 25, 25); border-left: 0; border-right: 0; border-top: 0; width: 100%;}' +
                '#renewal-img-over {display: none;}' +
                '.form-layout {max-width: 600px; background-color: #fff; border: 1px solid rgb(225, 228, 232) !important; padding: 28px 48px !important;}' +
                'div#progress-center {width: 600px !important; float: none !important;}' +
                '@media (max-width: 759px) {#cro160-1, .form-layout {max-width: 345px;}' +
                '.form-row {padding: 0 24px;}' +
                'div#content {width: 375px !important;}' +
                '#form-center {padding-left: 24px; padding-right: 24px;}' +
                'div#progress-center {width: 345px !important; float: none !important; margin-left: auto; margin-right: auto;}' +
                '.form-layout {padding: 28px 0 !important; margin-left: auto; margin-right: auto;}' +
                '#renewal-image {width: 345px !important; height: 164px !important;}' +
                '}';
        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/landing') {
            css += 'div#form-indent {margin-left: auto !important; margin-right: auto !important; max-width: 504px; border-top: solid #009AE4 4px;}' +
                '#cro160-1, .form-layout {max-width: 600px;}' +
                '#cro160-3 ul#simple-unnumbered-list li {padding: 0 1px 5px 0 !important; list-style-type: none !important; margin-left: 0 !important;}' +
                '#cro160-3 ul {list style: none !important; padding-left: 0}' +
                '#cro160-3 ul li::before {content: "- "; margin-right: 10px;}' +
                '.form-label-instruct {margin-top: 20px;}' +
                '#simple-numbered-list {line-height: 24px; margin-bottom: 20px; margin-top: 25px;}' +
                '@media (max-width: 759px) {#cro160-1, .form-layout {max-width: 345px;}' +
                '#simple-numbered-list {padding-left: 24px;}' +
                '#cro160-3 {padding: 5px 24px 20px 24px !important;}' +
                'div#content {width: 375px !important;}' +
                'div#form-indent {width: 297px; max-width: 375px;}' +
                '}';
        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/details-confirm') {
            css += '.placeholder {position: absolute; left: 32px; top: 50%; pointer-events: none; color: #191919; transform: translateY(-50%); transition: all 0.2s ease;}' +
                '#email:focus, #email:focus {outline: none; background-color: #fff; border-bottom: 1px solid rgb(25, 25, 25);}' +
                '.form-row {margin-top: 20px !important; text-align: center; margin: 2.9em 0 !important;}' +
                '.cro160-89 strong {display: inline-block; padding-bottom: 10px;}' +
                '.form-row:last-of-type {display: none !important;}' +
                '#content > form > div:nth-child(4) > br {display: none;}' +
                '.cro160-89 {text-align: left; padding: 20px; border: solid 1px #E1E4E8; background-color: #F7F8F9;}' +
                '#content > form > div.form-layout > div:nth-child(2) > p:nth-child(2), em {display: none;}' +
                '.form-label-mandatory, p.form-label, #content > form > div.form-layout > div:nth-child(3) > p:nth-child(2), #content > form > div.form-layout > div:nth-child(4) > p:nth-child(2) {text-align: center !important;}' +
                '#content > form > div.form-layout > div:nth-child(3) > label, #content > form > div.form-layout > div:nth-child(1), #label, #content > form > div.form-layout > div:nth-child(2) > p > input.mini {display: none;}' +
                '.imageFrame {border: none  !important;}' +
                '#renewal-image { width: 600px !important; background-size: 90% auto; background-position: center; background-repeat: no-repeat; background-color: white;}' +
                '#form-center {font-size: 14px;}' +
                '.form-row {padding: 0 48px;}' +
                '.cro160-4 {font-size: 12px; padding: 5px; text-align: left;}' +
                '#content > form > div.form-layout > div:nth-child(3) > p {float: none !important; }' +
                '#periodInsurance, #email {padding: 24px 4px 0px 16px; height: 58px; background-color: rgb(241, 242, 244); border-bottom: 1px solid rgb(25, 25, 25); border-left: 0; border-right: 0; border-top: 0; width: 100%;}' +
                '#renewal-img-over, #content > form > div.form-layout > br:nth-child(3) {display: none;}' +
                '.form-layout {max-width: 504px; background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 0px 48px 24px 48px !important;}' +
                'div#progress-center {width: 600px !important; float:none !important;}' +
                '@media (max-width: 759px) {#cro160-1, .form-layout {max-width: 345px;}' +
                'p.form-label-mandatory {width: 100% !important;}' +
                '.form-row {padding: 0 24px;}' +
                '#form-center {padding-left: 24px; padding-right: 24px;}' +
                'div#content {width: 375px !important;}' +
                'div#progress-center {width: 345px !important; float: none !important; margin-left: auto; margin-right: auto;}' +
                '.form-layout {padding: 28px 0 !important; margin-left: auto; margin-right: auto;}' +
                'p.form-label {width: 290px !important;}' +
                '}';

        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/details-summary') {
            css += 'input#form-button-cancel {display: none;}' +
                'input.image-replacement {height: auto !important;}' +
                '.cro160-72 {padding-bottom: 25px;}' +
                '.notehead:nth-child(1) {display: none;}' +
                '.cro160-39 {padding-bottom: 10px;}' +
                'DIV.HR-solid {margin-bottom: 30px !important; width: 620px !important; height: 20px !important; border: none !important; background-color: #f1f2f4 !important; color: #f1f2f4 !important; margin-left: -52px !important;}' +
                'input#form-button-edit {background-image: none !important; width: auto !important; border-radius: 28px; border: 1px solid #003DA5; color: #003DA5; padding: 8px 14px; margin-bottom: 60px;}' +
                'input#form-button-email-us {background-image: none !important; width: auto !important; text-decoration: underline; padding: 8px 14px; font-size: 14px; color: #1D4FBB; margin-bottom: 48px;}' +
                'div#renewal-summary-note {width: 100% !important; margin-top: 15px;}' +
                'div.noteBox {border: none !important; padding: 0 !important; background-color: transparent !important;}' +
                '.form-layout {margin-top: 20px; max-width: 504px; background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 24px 48px !important;}' +
                'div#progress-center {width: 600px !important;}' +
                '.cro160-87 {background-color: #E6F5FC; padding: 12px; text-align: left; border: #009AE4 solid 1px; margin: -30px -48px;}' +
                '.cro160-87 h3#header3 {padding-top: 2px; font-size: 14px !important; margin-bottom: 10px !important; font-weight: bold !important; text-align: left !important;}' +
                '#header3 {font-size: 18px !important; color: #191919 !important; font-weight: 400; text-align: center; margin-bottom: 32px;}' +
                'div#form-ren-indent {margin: 0 !important; text-align: right !important; font-size: 14px; color: #191919; font-weight: 600;}' +
                'div#renewal-summary-left {width: 510px !important;}' +
                '#back-shade {background-color: #E6F5FC !important; color: #191919 !important; padding-left: 33px !important;}' +
                'p.form-label-instruct {color: #191919 !important; font-weight: normal !important;}' +
                '#form-ren-indent > p {display: none;}' +
                'p.label-ren-summary {text-align: left !important; font-size: 14px !important; font-weight: 400 !important; color: #191919 !important;}' +
                'div.form-row {border-bottom: 1px solid #E1E4E8; padding: 8px 0;}' +
                '@media (max-width: 759px) {#cro160-1, .form-layout {max-width: 345px;}' +
                'DIV.HR-solid {width: 398px !important;}' +
                '.form-row {padding: 0 24px; display: flex; flex-direction: column; text-align: left;}' +
                '.cro160-87 {margin: -45px 0; width: 319px !important; margin-top: -30px !important;}' +
                '#form-center {padding-left: 24px; padding-right: 24px;}' +
                'div#content {width: 375px !important;}' +
                'div#progress-center {width: 345px !important; float: none !important; margin-left: auto; margin-right: auto;}' +
                '.form-layout {padding: 28px 0 !important; margin-left: auto; margin-right: auto; margin-top: 0 !important;}' +
                'div#renewal-summary-left {width: 290px !important; padding-left: 20px;}' +
                '}';

        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/payment') {
            css += '.form-layout {margin-top: 20px; max-width: 504px; background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 24px 48px !important;}' +
                'p.label-left-medium {width: auto !important; font-size: 14px !important; font-weight: 400 !important; color: #191919 !important;}' +
                '#header3 {font-size: 18px !important; color: #191919 !important; font-weight: 400; text-align: center; margin-bottom: 32px;}' +
                'div.form-row {border-bottom: 1px solid #E1E4E8; padding: 8px 0; display: flex; justify-content: space-between;}' +
                '#creditCard > div {border-bottom: none !important;}' +
                '.shade1 {background: none !important; font-weight: 600 !important;}' +
                '#paymentForm > div.form-layout > div:nth-child(6) {border-bottom: none !important;}' +
                '#creditCard_img {display: none !important;}' +
                'h3#header3:nth-of-type(2) {padding-top: 40px;}' +
                '#creditCard div.form-row {display: block !important;}' +
                '.cro160-87 {background-color: #E6F5FC; padding: 12px; text-align: left; border: #009AE4 solid 1px; margin: 0 -49px;}' +
                '.cro160-87 h3#header4 {padding-top: 2px; font-size: 14px !important; margin-bottom: 10px !important; font-weight: bold !important; text-align: left !important;}' +
                'DIV.HR-solid {border-bottom: 20px solid #f1f2f4 !important; margin-top: 35px !important; margin-bottom: 45px !important; margin-left: -60px !important; width: 125% !important; background-color: transparent !important;}' +
                '.cro160-87 .form-label-instruct {font-weight: normal !important; font-size: 14px !important; color: #191919 !important; padding: 0 31px;}' +
                '.cro160-37 {height: 20px; width: 120%; margin: 0 -48px; background-color: #f1f2f4; }' +
                '#purchase-note > p {border: solid 1px #009AE4; background-color: #E6F5FC; text-align: center; padding: 12px;}' +
                'div#progress-center {width: 600px !important;}' +
                'p.label-left-medium {background-color: transparent;}' +
                '.shadeField1-standard {text-align: right !important; background-color: transparent !important; color: #A50000 !important; font-weight: bold; }' +
                '@media (max-width: 759px) {#cro160-1, .form-layout {max-width: 345px;}' +
                '.form-row {padding: 8px 20px !important; display: flex; flex-direction: column; text-align: left;}' +
                '.cro160-87 {width: 319px !important; margin-left: auto; margin-right: auto;}' +
                '#form-center {padding-left: 24px; padding-right: 24px !important;}' +
                '#paymentForm > div:nth-child(4) > br {display: none;}' +
                '.shadeField1-standard {text-align: left !important;}' +
                'div#progress-center {width: 345px !important; float: none !important; margin-left: auto; margin-right: auto;}' +
                'div#content {width: 375px !important;}' +
                '.form-layout {padding: 28px 0 !important; margin-left: auto; margin-right: auto;}' +
                '#purchase-note > p {text-align: left; width: 288px; margin: auto;}' +
                'div#renewal-summary-left {width: 290px !important; padding-left: 20px;}' +
                'div#creditCard {width: 345px !important; padding-left: 15px;}' +
                '}';

        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/details-email') {
            css += 'h3#header3 {display: none !important;}' +
                'label, .form-label-mandatory, div.form-layout > div:nth-child(6) {display: none;}' +
                '.thin {display: none;}' +
                '#content > form > br:nth-child(20) {display: none;}' +
                '.cro160-77 {text-align: center; margin-bottom: 30px;}' +
                'textarea[name="comments"] {font-family: Arial !important; padding-top: 30px; background-color: rgb(241, 242, 244); border-bottom: 1px solid rgb(25, 25, 25); border-left: 0 !important; border-right: 0 !important; border-top: 0 !important; padding-left: 16px;}' +
                'p.form-label {width: auto !important; font-weight: normal !important; padding-right: 10px !important;}' +
                'a {text-decoration: none; color: #1D4FBB !important;}' +
                '#button-bar-right {width: 100%;}' +
                'input#form-button-send {float: right !important;}' +
                'div.form-row textarea {width: 100%; font-size: 16px;}' +
                '.placeholder {position: absolute; left: 32px; top: 50%; pointer-events: none; color: #191919; transform: translateY(-50%); transition: all 0.2s ease;}' +
                '.textarea-wrapper .placeholder {top: 15% !important;}' +
                '#name:focus, #emailAddress:focus, textarea[name="comments"]:focus {outline: none; background-color: #fff; border-bottom: 1px solid rgb(25, 25, 25);}' +
                '#name, #emailAddress {padding: 24px 4px 0px 16px; height: 33px !important; background-color: rgb(241, 242, 244); border-bottom: 1px solid rgb(25, 25, 25); border-left: 0; border-right: 0; border-top: 0; width: 100%;}' +
                'label, .form-label-mandatory, p.form-label {text-align: center !important;}' +
                '.form-layout {max-width: 504px; background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 24px 48px !important;}' +
                '#form-indent {width: auto !important; border: none !important; text-align: center !important;}' +
                'em { display: none;}' +
                '.form-row {padding: 0 48px;}' +
                'a {color: #1D4FBB !important;}' +
                '@media (max-width: 759px) {#cro160-1, .form-layout {max-width: 345px; margin: auto;}' +
                '#name, #emailAddress, div.form-row textarea {width: 95% !important;}' +
                '.form-indent {margin: auto !important;}' +
                'div#content {width: 375px !important;}' +
                '.form-row {padding: 8px 20px !important; display: flex; flex-direction: column; text-align: left;}' +
                '.form-layout {padding: 28px 0 !important; margin-left: auto; margin-right: auto;}' +
                '}';
        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/details-email-confirm') {
            css += 'h3#header3 {display: none !important;}' +
                'input#form-button-ok {width: auto !important; background-image: none !important; height: auto !important; background-color: #003da5 !important; color: #FFFFFF; font-size: 16px; font-family: Arial; font-stretch: 100%; font-weight: 500; padding: 17px 29px; border: 2px solid #003da5; border-radius: 28px; }' +
                '#form-indent > p:first-of-type {display: none !important;}' +
                'div#button-bar {display: flex; justify-content: center;}' +
                '.cro160-26 {font-weight: bold; font-size: 18px; padding: 0 20px; margin-bottom: 30px; color: #191919;}' +
                '#form-indent > p:nth-of-type(2), #form-indent > p:nth-of-type(3) {font-weight: normal !important;}' +
                'div#form-indent {margin-left: auto !important; margin-right: auto !important; max-width: 504px; border-top: solid #009AE4 4px;}' +
                'a {text-decoration: none; color: #1D4FBB !important;}' +
                '.form-layout {border-top: 4px solid #009AE4; margin-top: 20px; max-width: 504px; background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 24px 48px !important;}' +
                '#form-indent {width: auto !important; padding: 0 !important; border: none !important; text-align: center !important;}' +
                '@media (max-width: 759px) {.form-indent {margin: auto !important;}' +
                '.form-row {padding: 8px 20px !important; display: flex; flex-direction: column; text-align: left;}' +
                'div#content {width: 375px !important;}' +
                'div#form-indent {padding: 24px !important;}' +
                '.form-layout {max-width: 345px !important; padding: 0px !important;}' +
                '}';
        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/email-receipt') {
            css += 'h3#header3, #form-center, #label {display: none !important;}' +
                'p.form-label-mandatory {text-align: center !important; padding-bottom: 24px;}' +
                '#name:focus, #emailAddress:focus, textarea[name="comments"]:focus {outline: none; background-color: #fff; border-bottom: 1px solid rgb(25, 25, 25);}' +
                '#name, #emailAddress {padding: 24px 4px 0px 16px; height: 33px !important; background-color: rgb(241, 242, 244); border-bottom: 1px solid rgb(25, 25, 25); border-left: 0; border-right: 0; border-top: 0; width: 352px;}' +
                '#button-bar-right {width: 100%;}' +
                'input#form-button-email-receipt {float: right !important;}' +
                '.placeholder {position: absolute; left: 32px; top: 50%; pointer-events: none; color: #191919; transform: translateY(-50%); transition: all 0.2s ease;}' +
                '.form-row {display: flex;justify-content: center; text-align: center; }' +
                '.form-label {width: auto !important; font-weight: normal !important;}' +
                '#content > form > div.form-layout > div:nth-child(8) > p {display: grid; font-size: 12px; text-align: left;}' +
                'em {display: none;}' +
                '#form-button-email-receipt { width: auto !important; background-image: none !important; height: auto !important; background-color: #003da5 !important; color: #FFFFFF; font-size: 16px; font-family: Arial; font-stretch: 100%; font-weight: 500; padding: 17px 29px; border: 2px solid #003da5; border-radius: 28px; }' +
                '.form-layout {background-color: #fff; padding: 24px 48px; width: 504px;}' +
                '@media (max-width: 759px) {.form-indent {margin: auto !important;}' +
                '.form-row {padding: 8px 20px !important; display: flex; flex-direction: column; text-align: center;}' +
                'div#content {width: 345px !important;}' +
                'p.form-label {text-align: center !important;}' +
                'p.form-label-mandatory {width: auto !important;}' +
                '#name, #emailAddress {width: 280px;}' +
                'div#form-indent {padding: 24px !important;}' +
                '.form-layout {max-width: 345px !important; padding: 0px !important; margin-left: auto; margin-right: auto;}' +
                '}';
        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/email-receipt-confirmation') {
            css += '#form-button-ok { width: auto !important; background-image: none !important; height: auto !important; background-color: #003da5 !important; color: #FFFFFF; font-size: 16px; font-family: Arial; font-stretch: 100%; font-weight: 500; padding: 17px 29px; border: 2px solid #003da5; border-radius: 28px; margin-left: auto !important; margin-right: auto !important;}' +
                '.form-layout {background-color: #fff; padding: 24px 48px; width: 504px; margin-top: -20px;}' +
                '.form-label-instruct:first-of-type {display: none;}' +
                'div#button-bar-right, div#button-bar input {float: none !important;}' +
                '.form-label-instruct {font-weight: normal !important;}' +
                'a {color: #1D4FBB !important; text-decoration: none;}' +
                '#form-indent {width: 100%; border: none !important; padding: 0px !important;}' +
                '@media (max-width: 759px) {.form-indent {margin: auto !important;}' +
                '.form-row {padding: 8px 20px !important; display: flex; flex-direction: column; text-align: center;}' +
                'div#content {width: 345px !important;}' +
                'div#form-indent {padding: 24px !important;}' +
                '.form-layout {max-width: 345px !important; padding: 0px !important; margin-left: auto; margin-right: auto;}' +
                '}';

        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/demerit-points-status') {
            css += 'div#progress-center {width: 600px !important; float: none !important;}' +
                'div.form-layout {text-align: center !important;}' +
                '#licenceNo:focus, [name="lastNameDisabled"]:focus {outline: none; background-color: #fff; border-bottom: 1px solid rgb(25, 25, 25);}' +
                '#licenceNo, [name="lastNameDisabled"] {padding-top: 6px !important; padding-left: 16px !important; height: 58px; background-color: rgb(241, 242, 244); border-bottom: 1px solid rgb(25, 25, 25); border-left: 0 !important; border-right: 0 !important; border-top: 0 !important; width: 100% !important;}' +
                '.placeholder {position: absolute; left: 32px; top: 50%; pointer-events: none; color: #191919; transform: translateY(-50%); transition: all 0.2s ease;}' +
                '#button-bar-left {display: none;}' +
                '#label-left-normal {padding-bottom: 30px; font-size: 18px; text-align: center !important; width: 100% !important;}' +
                '#button-bar-right {width: 100%;}' +
                '#content > form > div:nth-child(4) > br {display: none;}' +
                'div#driverLicence {width: 100% !important;}' +
                'DIV.HR-solid {border-bottom: 20px solid #f1f2f4 !important; margin-top: 35px !important; margin-bottom: 45px !important; margin-left: -60px !important; width: 125% !important; background-color: transparent !important;}' +
                'em {display: none;}' +
                'p.form-licence-left {font-weight: normal !important;}' +
                'div#content p {margin-top: 40px;}' +
                'label#label-left {display: none;}' +
                '.form-licence-left {float: none !important; width: auto !important; text-align: center !important;}' +
                '#form-button-submit {float: right !important;}' +
                'img#licence_img {margin: 0 auto; background-image: none !important;}' +
                'div#licenceImage {padding-top: 20px;}' +
                'h3#header3 {font-size: 18px !important; color: #191919 !important; margin-bottom: 32px;}' +
                '.form-layout {margin-top: 20px; max-width: 504px; background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 24px 48px !important;}' +
                '@media (max-width: 759px) {div#progress-center {float: none !important; width: 345px !important; margin-left: auto; margin-right: auto;}' +
                'DIV.HR-solid {margin-left: -45px !important;}' +
                '.form-layout {max-width: 297px !important; padding: 24px !important;}' +
                'div#content {width: 375px !important;}' +
                '#permissionQuestionTwo {padding-top: 20px;}' +
                'img#licence_img {width: 100% !important; height: auto !important;}' +
                '}';
        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/confirmation') {
            css += 'div#progress-center {width: 600px !important;}' +
                //'h4 {display: none;}' +
                '#finishRnwCon {float: right; margin-top: 20px;}' +
                '#licenseIdLabel {display: none;}' +
                'label {width: auto !important; margin-left: -10px;}' +
                '#radio-hide {width: 100%; display:flex; justify-content: center; gap: 2px;}' +
                '.placeholder {position: absolute; left: 32px; top: 50%; pointer-events: none; color: #191919; transform: translateY(-50%); transition: all 0.2s ease;}' +
                'p, .form-display-details {font-size: 14px !important; color: #191919;}' +
                '#form-button-email-receipt, #form-button-print-receipt { width: auto !important; background-image: none !important; height: auto !important; background-color: #fff !important; color: #003da5; font-size: 14px; font-family: Arial; font-stretch: 100%; font-weight: 500; padding: 10px 20px; border: 1px solid #003da5; border-radius: 28px; }' +
                '#licenceNo1 {padding: 24px 4px 0px 16px; height: 58px; background-color: rgb(241, 242, 244); border-bottom: 1px solid rgb(25, 25, 25); border-left: 0; border-right: 0; border-top: 0; width: 100%;}' +
                '#licenceNo1:focus {outline: none; background-color: #fff; border-bottom: 1px solid rgb(25, 25, 25);}' +
                'div.form-row {border-bottom: 1px solid #E1E4E8; padding: 8px 0;}' +
                'div#form-indent {text-align: center !important;}' +
                'div#form-left {padding: 40px 0;}' +
                'div.form-row a {width: auto !important;}' +
                '.form-row:first-of-type {margin-top: 40px !important;}' +
                '.form-row p {text-align: right;}' +
                'p.form-display-details {width: auto !important; font-weight: normal !important;}' +
                '#form-indent p:first-of-type {font-weight: bold; font-size: 18px; margin-bottom: 45px; text-align: center; color: #191919;}' +
                'input#form-button-close { text-decoration: underline; color: #003da5; width: auto !important; background-image: none !important; height: auto !important; font-size: 14px; font-family: Arial;}' +
                '#form-indent p:nth-of-type(2) {font-weight: normal;}' +
                '.form-row p:nth-of-type(2) {font-weight: bold !important;}' +
                'h4#header4 {display: none !important;}' +
                '#form-indent {text-align: center !important;width: auto !important; max-width: 504px; background-color: #fff; border: 1px solid rgb(225, 228, 232); !important; padding: 24px 48px !important;}' +
                '.form-layout {margin-top: 20px; max-width: 600px; }' +
                '@media (max-width: 759px) {div#progress-center {float: none !important; width: 345px !important;}' +
                '#header4 {display: none;}' +
                'div#content {width: 375px !important;}' +
                '.form-layout {max-width: 345px !important;}' +
                'div#form-indent {margin: auto !important; padding: 24px !important;}' +
                '#cross-sell-banner {width: 300px !important;}' +
                '#form-indent p:first-of-type {margin-bottom: 20px;}' +
                'input.center {margin-right: 0 !important;}' +
                'div.form-row {word-break: break-word; display: flex; flex-direction: column; align-items: center;}' +
                '}';
        }

        // IE 8 and below compatibility
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }



        // Append the style element to the head
        document.getElementsByTagName('head')[0].appendChild(style);

        // Select the target <h2> element so we can add the supporting content
        var header2 = document.getElementById('header2');
        if (
            virtualPagePath !== '/au/green-slip-insurance/nsw/ctp/generic/contact-us' &&
            virtualPagePath !== '/au/green-slip-insurance/nsw/ctp/generic/help'
        ) {
            // Check if the <h2> element exists
            if (header2) {
                // Create a new wrapper div and set its id
                if (!document.getElementById('cro160-1')) {
                var wrapperDiv = document.createElement('div');
                wrapperDiv.id = 'cro160-1';
                }

                // Wrap the <h2> in the wrapper div
                header2.parentNode.insertBefore(wrapperDiv, header2);
                wrapperDiv.appendChild(header2);

                // Create a new div to add after the <h2> and set its id
                if (!document.getElementById('cro160-2')) {
                    console.log('cro160-2 not found, creating it');
                    var newDiv = document.createElement('div');
                    newDiv.id = 'cro160-2';
                    console.log('cro160-2 created');
                    wrapperDiv.appendChild(newDiv);

                    if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/retrieve-policy') {
                        console.log('header2:', header2);
                        // Change the h2 with id "header2"
                        var header2rp = document.getElementById('header2');
                        if (header2rp) {
                            header2rp.textContent = 'CTP Certificate Number';
                        }
                        newDiv.textContent = 'Your CTP Certificate Number can be found at the top right hand corner of your renewal Green Slip.'; // Add content to the new div
                        // Get the paragraph element by its ID or another selector
                        var paragraph = document.querySelector('#form-center p');

                        // Set the new inner HTML
                        paragraph.innerHTML = 'If you cannot find your CTP Certificate Number, please <a class="cro160-52" href="/CTP_Internet_Quotes/Contact?BNDE=xt6lvGSAnWI%3D&amp;NHM=Y&amp;CSRFTOKEN=B955639560B9EDCE44A9668D18594AED-1385294473" target="_blank" title="Our contact details">contact us</a>.';

                        insertParagraphAfterInput('ctpNumber', 'Enter the 11 digits after the \'36\'');

                        var formRows = document.getElementsByClassName('form-row');
                        if (formRows.length > 1) {
                            var p = document.createElement('p');
                            p.className = 'cro160-7';
                            p.textContent = 'All fields are mandatory';

                            formRows[1].parentNode.insertBefore(p, formRows[1]);
                        }

                        createDivAroundElement('#ctpNumber', 'CTP Certificate Number');
                        createDivAroundElement('#regoNumber', 'Registration Plate Number');
                        // Remove all colons on the page
                        //  removeVisibleColons('label');
                        // removeVisibleColons('p');

                        // Apply the function to both .form-label <p> and <label>
                        // moveAndReplaceImage('.form-label');
                        // moveAndReplaceImage('label');

                        moveAndReplaceImage('label');


                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/landing') {

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




                            // Get the <ol> element with the id "simple-numbered-list"
                            var ol = document.querySelector('ol#simple-numbered-list');

                            // Get all <li> elements within the <ol>
                            var liElements = ol.getElementsByTagName('li');

                            // Remove the full stop from the first and third <li> elements
                            if (liElements.length > 0) {
                                removeFullStop(liElements[0]); // First <li>
                            }
                            if (liElements.length > 2) {
                                removeFullStop(liElements[2]); // Third <li>
                            }






                        })();


                        newDiv.textContent = 'Use your QBE Certificate Number to renew your policy.'; // Add content to the new div

                        document.querySelector('.form-label-instruct').style.textAlign = 'center';

                        var ol = document.getElementById('simple-numbered-list');

                        if (ol && ol.tagName === 'OL') {
                            var ul = document.createElement('ul');
                            ul.innerHTML = ol.innerHTML; // Copy the list items
                            ul.id = ol.id; // Preserve the ID

                            ol.parentNode.replaceChild(ul, ol);
                        }

                        (function () {
                            // Select all elements with class 'form-label-instruct'
                            var instructElements = document.getElementsByClassName('form-label-instruct');

                            // Check if there is at least one occurrence
                            if (instructElements.length > 0) {
                                // Set the inner text of the first occurrence
                                instructElements[0].textContent = 'Please have the following on hand to help you:';
                            }
                        })();

                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/details-confirm') {
                        console.log('details-confirm');
                        newDiv.textContent = 'To ensure we have your correct details, please answer the following questions.'; // Add content to the new div
                        console.log('details-confirm newDiv created');

                        document.querySelector('.form-label-mandatory').innerHTML = 'All fields are mandatory.';
                        var elements = document.querySelectorAll('input[type="radio"], label');
                        for (var i = 0; i < elements.length; i++) {
                            elements[i].style.float = 'none';
                        }



                        var formRowsCD = document.querySelectorAll('.form-row');
                        if (formRowsCD.length > 0) {
                            var lastRow = formRowsCD[formRowsCD.length - 1];
                            lastRow.setAttribute('style', 'display: none !important');
                        }


                        // Select the first element with the id of form-center
                        var firstFormCenter = document.querySelector('#form-center');

                        // Apply the style to hide it if it exists
                        if (firstFormCenter) {
                            firstFormCenter.style.display = 'none';
                        }
                        insertParagraphAfterInput('email', 'Please make sure the email address we have on record for you is correct.');
                        createDivAroundElement('#periodInsurance', 'Period of Insurance');
                        createDivAroundElement('#email', 'Email address');


                        // Remove all colons on the page
                        removeVisibleColons('label');
                        removeVisibleColons('p');

                        // Apply the function to both .form-label <p> and <label>
                        moveAndReplaceImage('.form-label');
                        moveAndReplaceImage('label');
                        moveAndReplaceSpecificImage();




                        // Select the second 'form-center' div
                        var formCenterDiv = document.querySelectorAll('#form-center')[1];

                        // Get the <p> element that contains the content you want to wrap
                        var pContent = formCenterDiv.querySelector('p');

                        // Find the <strong>Disclaimer:</strong> tag
                        var disclaimerStart = pContent.querySelector('strong');

                        // If the <strong>Disclaimer:</strong> exists
                        if (disclaimerStart) {
                            // Create a new div with the class 'cro160-89'
                            var newDiv89 = document.createElement('div');
                            newDiv89.classList.add('cro160-89');

                            // Move the <strong>Disclaimer:</strong> tag and all following siblings into the new div
                            var nextElement = disclaimerStart;
                            while (nextElement) {
                                var nextSibling = nextElement.nextSibling;
                                newDiv89.appendChild(nextElement);
                                nextElement = nextSibling;
                            }

                            // Append the new div containing the wrapped content back into the <p> tag
                            pContent.appendChild(newDiv89);
                        }


















                        // Array of radio button group names
                        var radioGroups = ['inputTaxCredit', 'underageDriver', 'zeroDemerits'];

                        // Loop through each group
                        radioGroups.forEach(function (groupName) {
                            // Select all radio buttons with the current group name
                            var radios = document.querySelectorAll('input[type="radio"][name="' + groupName + '"]');

                            // Check if there are radio buttons for this group
                            if (radios.length > 0) {
                                // Create a wrapper div
                                var wrapper = document.createElement('div');
                                wrapper.className = 'AdsToggle__group';

                                // Get the parent node of the first radio button
                                var parent = radios[0].parentNode;

                                // Insert the wrapper before the first radio button
                                parent.insertBefore(wrapper, radios[0]);

                                // Move each radio button and its corresponding label into the wrapper
                                radios.forEach(function (radio) {
                                    // Move the radio button
                                    wrapper.appendChild(radio);

                                    // Find the label associated with the radio button
                                    var label = document.querySelector('label[for="' + radio.id + '"]');
                                    if (label) {
                                        wrapper.appendChild(label);
                                    } else {
                                        // If no label is found with the "for" attribute, check the next sibling
                                        var nextSibling = radio.nextElementSibling;
                                        if (nextSibling && nextSibling.tagName === 'LABEL') {
                                            wrapper.appendChild(nextSibling);
                                        }
                                    }
                                });
                            }
                        });







                        var updates = {
                            'periodInsurance': 'Choose your period of Insurance ',
                            'email': 'Confirm your email address '
                        };

                        for (var id in updates) {
                            var label = document.querySelector('label[for="' + id + '"]');
                            if (label) {
                                var nodes = label.childNodes;
                                for (var j = 0; j < nodes.length; j++) {
                                    if (nodes[j].nodeType === 3 && nodes[j].nodeValue.trim()) {
                                        nodes[j].nodeValue = updates[id];
                                        break; // Stop after updating the first text node
                                    }
                                }
                            }
                        }

                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/details-summary') {
                        // Change the h2 with id "header2"
                        var header2summ = document.getElementById('header2');
                        if (header2summ) {
                            header2summ.textContent = 'Renewal Details Summary';
                        }
                        newDiv.textContent = 'Please check these details are correct.'; // Add content to the new div

                        setButtonValue('form-button-submit', 'Next');

                        //var labels = document.querySelectorAll('.form-label-instruct');
                        //for (var ili = 0; ili < labels.length && ili < 2; ili++) {
                        //    labels[ili].style.display = 'none';
                        //}





                        // Use a persistent flag on the window object
                        if (!window.hasRunScript) {
                            window.hasRunScript = true; // Set the flag to true to prevent re-running

                            var headers = document.querySelectorAll('h3#header3');
                            var backShade = document.getElementById('back-shade');

                            if (headers.length >= 3 && backShade) {
                                var targetHeader = headers[2]; // 3rd occurrence (zero-based index)

                                // Check if the wrapper div already exists
                                var existingWrapper = targetHeader.parentNode.querySelector('.cro160-87');
                                if (!existingWrapper) {

                                    // Create the wrapper div
                                    var wrapper = document.createElement('div');
                                    wrapper.className = 'cro160-87';

                                    // Get parent node
                                    var parentDivC = targetHeader.parentNode;

                                    // Insert wrapper before targetHeader
                                    parentDivC.insertBefore(wrapper, targetHeader);

                                    // Move targetHeader and backShade inside the wrapper
                                    wrapper.appendChild(targetHeader);
                                    wrapper.appendChild(backShade);

                                    // Remove all <strong> tags inside #back-shade
                                    var strongTags = backShade.getElementsByTagName('strong');
                                    while (strongTags.length > 0) {
                                        var strong = strongTags[0]; // Always remove the first one in the list
                                        var parentNode = strong.parentNode;
                                        while (strong.firstChild) {
                                            parentNode.insertBefore(strong.firstChild, strong);
                                        }
                                        parentNode.removeChild(strong);
                                    }

                                    // Check if the SVG already exists
                                    var existingSVG = wrapper.querySelector('svg');
                                    if (!existingSVG) {

                                        // Create SVG element (changed variable to svgI)
                                        var svgI = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                        svgI.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                                        svgI.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
                                        svgI.setAttribute('width', '20');
                                        svgI.setAttribute('height', '21');

                                        // Add styles to SVG element
                                        svgI.style.float = 'left';
                                        svgI.style.paddingRight = '12px';

                                        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                                        path.setAttribute('fill', '#009AE4');
                                        path.setAttribute('transform', 'translate(1.66667 1.66667)');
                                        path.setAttribute('d', 'M7.5 4.1666665L9.166667 4.1666665L9.166667 5.8333335L7.5 5.8333335L7.5 4.1666665ZM7.5 7.5L9.166667 7.5L9.166667 12.5L7.5 12.5L7.5 7.5ZM8.333333 0C3.7333333 0 0 3.7333333 0 8.333333C0 12.933333 3.7333333 16.666666 8.333333 16.666666C12.933333 16.666666 16.666666 12.933333 16.666666 8.333333C16.666666 3.7333333 12.933333 0 8.333333 0ZM8.333333 15C4.6583333 15 1.6666666 12.008333 1.6666666 8.333333C1.6666666 4.6583333 4.6583333 1.6666666 8.333333 1.6666666C12.008333 1.6666666 15 4.6583333 15 8.333333C15 12.008333 12.008333 15 8.333333 15Z');
                                        path.setAttribute('fill-rule', 'evenodd');

                                        // Append path to SVG
                                        svgI.appendChild(path);

                                        // Insert SVG before the <h3> inside the wrapper (cro160-87)
                                        wrapper.insertBefore(svgI, targetHeader);
                                    }
                                }
                            } else {
                                // Remove second occurrence of div.hr-solid if it exists
                                var secondHrSolid = document.querySelectorAll('div.hr-solid')[1];
                                if (secondHrSolid) {
                                    secondHrSolid.remove(); // Removes the second div with class "hr-solid"
                                }
                            }
                        }









                        // Get all <p> elements with class 'label-ren-summary'
                        var summaryParagraphs = document.querySelectorAll('p.label-ren-summary');

                        // Convert NodeList to Array for better compatibility (if needed)
                        var paragraphsArray = Array.prototype.slice.call(summaryParagraphs);

                        // Loop through each paragraph and replace text
                        for (var iIO = 0; iIO < paragraphsArray.length; iIO++) {
                            var pIO = paragraphsArray[iIO];
                            pIO.textContent = pIO.textContent.replace(/incurredon/g, 'incurred on');
                        }



                        var pElements = document.getElementsByClassName('label-ren-summary');
                        for (var x = 0; x < pElements.length; x++) {
                            pElements[x].textContent = pElements[x].textContent.replace(/:/g, '');
                        }
                        document.getElementById('form-button-edit').value = 'Edit details';
                        document.getElementById('form-button-email-us').value = 'Email us';


                        // Get all instances of #renewal-summary-left
                        var allSummaryLefts = document.querySelectorAll('#renewal-summary-left');

                        if (allSummaryLefts.length >= 2) {
                            // Select the second occurrence
                            var parentDiv = allSummaryLefts[1];  // Second occurrence (index 1)

                            var formRowsS = parentDiv.getElementsByClassName('form-row');

                            if (formRowsS.length >= 5) {
                                var targetDiv = formRowsS[4].getElementsByTagName('div')[0]; // First <div> inside the 5th .form-row

                                if (targetDiv) {
                                    // Remove the inline float style
                                    targetDiv.style.removeProperty('float');

                                    // Apply new styles with !important
                                    targetDiv.style.setProperty('float', 'none', 'important');
                                    targetDiv.style.setProperty('display', 'block', 'important');
                                }
                            }
                        }

                        // Get the "back" button and "cancel" button
                        var backButton = document.getElementById('form-button-back');
                        var cancelButton = document.getElementById('form-button-cancel');

                        // Check if both buttons exist
                        if (backButton && cancelButton) {
                            // Get the parent of the cancel button
                            var parent = cancelButton.parentNode;

                            // Move the "back" button before the "cancel" button
                            parent.insertBefore(backButton, cancelButton);
                        }




                        // Get all elements with class 'notehead'
                        var noteheads = document.querySelectorAll('.notehead');

                        // Check if there are at least two .notehead elements
                        if (noteheads.length > 1) {
                            // Select the second one
                            var secondNotehead = noteheads[1];

                            // Replace its inner HTML with the new content
                            secondNotehead.innerHTML = '<div class="cro160-39">Any details in this section need correction? </div>' +
                                '<div class="cro160-39">Click Email Us if any details in this section need correction.</div>';
                        }





                        // Get all elements with ID 'renewal-summary-note' (even though IDs should be unique)
                        var allNotes = document.querySelectorAll('#renewal-summary-note');

                        if (allNotes.length > 1) {
                            // Select the second one
                            var note = allNotes[1];

                            // Store its content
                            var noteContent = note.innerHTML;

                            // Create the link
                            var linkConf = document.createElement('a');
                            linkConf.href = '#';
                            linkConf.textContent = 'Need to edit?';
                            linkConf.style.cursor = 'pointer';
                            linkConf.style.color = '#1D4FBB';

                            // Wrap the link in a div with class cro160-72
                            var linkWrapper = document.createElement('div');
                            linkWrapper.className = 'cro160-72';
                            linkWrapper.appendChild(linkConf);

                            // Replace the note content with the wrapped link
                            note.innerHTML = '';
                            note.appendChild(linkWrapper);

                            // Create the popup elements
                            var popupBox = document.createElement('div');
                            popupBox.style.position = 'absolute';
                            popupBox.style.backgroundColor = 'rgb(247, 248, 249)';
                            popupBox.style.padding = '40px 24px 24px 24px';
                            popupBox.style.width = '250px';
                            popupBox.style.height = '325px';
                            popupBox.style.overflowY = 'auto';
                            popupBox.style.color = '#191919';
                            popupBox.style.fontSize = '14px';
                            popupBox.style.boxSizing = 'border-box';
                            popupBox.style.zIndex = '9999';
                            popupBox.style.textAlign = 'left';
                            popupBox.style.display = 'none'; // Initially hidden

                            // Create the close "X" icon
                            var closeIcon = document.createElement('span');
                            closeIcon.textContent = '×';
                            closeIcon.style.position = 'absolute';
                            closeIcon.style.top = '10px';
                            closeIcon.style.right = '14px';
                            closeIcon.style.cursor = 'pointer';
                            closeIcon.style.fontSize = '18px';
                            closeIcon.style.fontWeight = 'bold';

                            // Add note content and close icon to popup
                            popupBox.innerHTML = noteContent;
                            popupBox.appendChild(closeIcon);
                            document.body.appendChild(popupBox);

                            // Trigger position function when the link is clicked
                            linkConf.onclick = function (e) {
                                e.preventDefault();
                                positionPopup(popupBox); // Call the function to position the popup
                                popupBox.style.setProperty('display', 'block', 'important');
                            };

                            // Close popup when clicking the close icon
                            closeIcon.onclick = function () {
                                popupBox.style.display = 'none';
                            };

                        }






                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/payment') {
                        newDiv.textContent = 'Review the premium and provide payment details below.'; // Add content to the new div
                        var p2Elements = document.getElementsByClassName('label-left-medium pull-left');
                        for (var f = 0; x < p2Elements.length; x++) {
                            p2Elements[f].textContent = p2Elements[f].textContent.replace(/:/g, '');
                        }
                        var pFormRows = document.getElementsByClassName('form-row');

                        for (var d = 0; d < pFormRows.length; d++) {
                            var pTags = pFormRows[d].getElementsByTagName('p');

                            if (pTags.length > 1) {
                                if (window.matchMedia('(max-width: 759px)').matches) {
                                    pTags[1].style.setProperty('text-align', 'left', 'important');
                                } else {
                                    pTags[1].style.setProperty('text-align', 'right', 'important');
                                }
                                pTags[1].style.setProperty('font-size', '14px', 'important');
                                pTags[1].style.setProperty('color', '#191919', 'important');
                            }
                        }

                        // Change the first h3 with id "header3"
                        var headers3 = document.querySelectorAll('h3#header3');
                        if (headers3.length > 0) {
                            headers3[0].textContent = 'Policy premium';
                        }

                        // Change the h2 with id "header2"
                        var header22 = document.getElementById('header2');
                        if (header22) {
                            header22.textContent = 'Premium and Payment';
                        }

                        var spanElement = document.querySelector('span.shadeField1');

                        if (spanElement) {
                            // Create a new <p> element
                            var pElement = document.createElement('p');

                            // Apply the styles directly to the <p> element
                            if (window.matchMedia('(max-width: 759px)').matches) {
                                pElement.style.setProperty('text-align', 'left', 'important');
                            } else {
                                pElement.style.setProperty('text-align', 'right', 'important');
                            }
                            pElement.style.setProperty('font-size', '14px', 'important');
                            pElement.style.setProperty('font-weight', '600', 'important');
                            pElement.style.setProperty('color', '#003DA5', 'important');

                            // Set the text content of the <p> element (same as the span's text content)
                            pElement.textContent = spanElement.textContent;

                            // Replace the span with the newly created <p> element
                            spanElement.parentNode.replaceChild(pElement, spanElement);
                        }


                        var shadeField = document.querySelector('span.shadeField1-standard');

                        if (shadeField) {
                            // Hide the target span
                            var targetSpan = document.querySelector('div.form-layout > div:nth-child(6) > span:nth-child(3)');
                            if (targetSpan) {
                                targetSpan.style.display = 'none';
                            }

                            // Find the target div (6th child of .form-layout)
                            var targetDivSH = document.querySelector('div.form-layout > div:nth-child(6)');
                            if (targetDivSH) {
                                // Create the empty div (before)
                                var emptyDivBefore = document.createElement('div');
                                emptyDivBefore.className = 'cro160-37';

                                // Create the new content div
                                var newElement = document.createElement('div');
                                newElement.className = 'cro160-87';
                                newElement.innerHTML =
                                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="21" style="float: left; padding-right: 12px;">' +
                                    '<path fill="#009AE4" transform="translate(1.66667 1.66667)" d="M7.5 4.1666665L9.166667 4.1666665L9.166667 5.8333335L7.5 5.8333335L7.5 4.1666665ZM7.5 7.5L9.166667 7.5L9.166667 12.5L7.5 12.5L7.5 7.5ZM8.333333 0C3.7333333 0 0 3.7333333 0 8.333333C0 12.933333 3.7333333 16.666666 8.333333 16.666666C12.933333 16.666666 16.666666 12.933333 16.666666 8.333333C16.666666 3.7333333 12.933333 0 8.333333 0ZM8.333333 15C4.6583333 15 1.6666666 12.008333 1.6666666 8.333333C1.6666666 4.6583333 4.6583333 1.6666666 8.333333 1.6666666C12.008333 1.6666666 15 4.6583333 15 8.333333C15 12.008333 12.008333 15 8.333333 15Z" fill-rule="evenodd"></path>' +
                                    '</svg>' +
                                    '<h3 id="header4">Standard premium applies</h3>' +
                                    '<div>' +
                                    '<p class="form-label-instruct">' +
                                    'Our standard premium has been charged because the demerit point information disclosed by Transport for NSW (TfNSW) does not agree with the information you entered. ' +
                                    '</p>' +
                                    '<p class="form-label-instruct">' +
                                    'If you feel that the demerit point information received by QBE from TfNSW is incorrect, you can check your demerit point status at ' +
                                    '<a href="https://www.service.nsw.gov.au/transaction/check-your-demerit-points" target="_blank" title="RMS myRecords">' +
                                    'www.service.nsw.gov.au/transaction/check-your-demerit-points' +
                                    '</a>&nbsp;.' +
                                    '</p>' +
                                    '</div>';

                                // Create the empty div (after)
                                var emptyDivAfter = document.createElement('div');
                                emptyDivAfter.className = 'cro160-37';

                                // Insert elements into the DOM
                                targetDivSH.parentNode.insertBefore(emptyDivBefore, targetDivSH.nextSibling);
                                targetDivSH.parentNode.insertBefore(newElement, emptyDivBefore.nextSibling);
                                targetDivSH.parentNode.insertBefore(emptyDivAfter, newElement.nextSibling);
                            }
                        }
                        if (!document.querySelector('.cro160-87')) {
                            var headersP = document.querySelectorAll('h3#header3');

                            if (headersP.length >= 2) {
                                var target = headersP[1];

                                // Apply styles directly
                                target.style.borderTop = '20px solid #f1f2f4';
                                target.style.marginTop = '35px';
                                target.style.marginBottom = '45px';
                                target.style.marginLeft = '-67px';
                                target.style.width = '125%';
                                target.style.backgroundColor = 'transparent';

                                // Create and inject a media query style block
                                var styleTag = document.createElement('style');
                                styleTag.type = 'text/css';
                                styleTag.appendChild(document.createTextNode(
                                    '@media (max-width: 759px) {' +
                                    '  h3#header3:nth-of-type(2) {' +
                                    '    margin-left: -20px !important;' +
                                    '    width: 110% !important;' +
                                    '  }' +
                                    '}'
                                ));
                                document.head.appendChild(styleTag);
                            }
                        }




                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/details-email') {
                        // Change the h2 with id "header2"
                        var header2ed = document.getElementById('header2');
                        if (header2ed) {
                            header2ed.textContent = 'Email us to update your details';
                        }
                        newDiv.textContent = 'Use this form if the details of your CTP Green Slip have changed or need to be updated.'; // Add content to the new div


                        createDivAroundElement('#name', 'Your name');
                        createDivAroundElement('#emailAddress', 'Your email address');
                        createDivAroundElement('textarea[name="comments"]', 'Your message');


                        var firstParagraph = document.querySelector('#form-indent > p:nth-child(1)');
                        if (firstParagraph) {
                            firstParagraph.textContent = 'Please provide your name, email address and details of the changes required below. One of our service representatives will update our records and reply to your email.';
                        }

                        var link = document.querySelector('#form-indent > p:nth-child(2) > a');
                        if (link) {
                            var br = document.createElement('br');
                            link.parentNode.insertBefore(br, link);
                        }


                        // Select the first element with the class 'form-row'
                        var firstFormRow = document.querySelector('.form-row');

                        // Check if the element exists to avoid errors
                        if (firstFormRow) {
                            // Apply the styles
                            firstFormRow.style.display = 'flex';
                            firstFormRow.style.justifyContent = 'center';
                            firstFormRow.style.alignItems = 'center';
                        }


                        // Select all elements with the class 'form-row'
                        var formRowsE = document.querySelectorAll('.form-row');

                        // Check if there are at least 5 elements
                        if (formRowsE.length >= 5) {
                            // Target the 5th element (index 4 because arrays are zero-based)
                            var fifthFormRow = formRowsE[4];

                            // Set its display to 'none'
                            fifthFormRow.style.display = 'none';
                        }


                        // Get the target element (div.form-layout > div:nth-child(3))
                        var targetElement = document.querySelector('div.form-layout > div:nth-child(3)');

                        // Create the new div element
                        var newMDiv = document.createElement('div');
                        newMDiv.className = 'cro160-77';  // Add class
                        newMDiv.textContent = 'All fields are mandatory';  // Add text

                        // Insert the new div before the target element
                        targetElement.parentNode.insertBefore(newMDiv, targetElement);




                        var labelsE = document.querySelectorAll('.form-layout > div:nth-child(4) > p.form-label');

                        for (var ide = 0; ide < labelsE.length; ide++) {
                            labelsE[ide].textContent = 'Subject: CTP Renewal ';
                        }

                        // Update the JS link for Contact Us
                        var linkU = document.querySelector('#form-indent > p:nth-child(2) > a');

                        if (linkU && linkU.getAttribute('href').indexOf('javascript:_openContactLink') === 0) {
                            var hrefU = linkU.getAttribute('href');
                            hrefU = hrefU.replace('javascript:_openContactLink(\'', '/CTP_Internet_Quotes/').replace(/'\);$/, '');
                            linkU.setAttribute('href', hrefU);
                            linkU.setAttribute('target', '_blank');
                        }


                        document.addEventListener('DOMContentLoaded', function () {

                            // Find the div with id 'form-indent'
                            var formIndentDiv4 = document.getElementById('form-indent');
                            if (formIndentDiv4) {

                                // Get the first .form-row element inside #form-indent
                                var firstFormRow = formIndentDiv4.getElementsByClassName('form-row');
                                if (firstFormRow) {

                                    // Remove the first .form-row element
                                    firstFormRow.parentNode.removeChild(firstFormRow);
                                }
                            }
                        });

                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/demerit-points-status') {

                        // Change the h2 with id "header2"
                        var header2Dem = document.getElementById('header2');
                        if (header2Dem) {
                            header2Dem.textContent = 'Demerit Points Status';
                        }
                        newDiv.textContent = 'We need to verify your demerit points status to confirm your eligibility for our good driver discount.'; // Add content to the new div

                        var targetParagraph = document.querySelector('#content > form > div.form-layout > p:nth-child(8)');

                        // Check if the element exists
                        if (targetParagraph) {
                            // Update the inner HTML of the <p> element
                            targetParagraph.innerHTML = 'All fields are mandatory';
                        }

                        var div = document.querySelector('div[style*="float:left"]');

                        if (div) {
                            div.style.float = 'none';
                        }

                        createDivAroundElement('#licenceNo', 'Licence number');
                        createDivAroundElement('[name="lastNameDisabled"]', 'Full name');


                        // Find the image element with the specific alt attribute
                        var img = document.querySelector('img[alt="What does this mean?"]');

                        if (img) {
                            // Create a new SVG element
                            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                            svg.setAttribute('viewBox', '0 0 24 24');
                            svg.setAttribute('focusable', 'false');
                            svg.setAttribute('aria-hidden', 'true');
                            svg.setAttribute('data-testid', 'InfoIcon');
                            svg.setAttribute('width', '24px'); // Set width to 24px
                            svg.setAttribute('height', '24px'); // Ensure height matches
                            svg.setAttribute('data-ads', 'Icon');
                            svg.setAttribute('style', 'color: rgb(167, 174, 187); fill: currentColor; position: relative; top: -1px; vertical-align: middle;');

                            // Copy attributes from img to svg
                            for (var iDS = 0; iDS < img.attributes.length; iDS++) {
                                var attr = img.attributes[iDS];
                                if (attr.name !== 'src' && attr.name !== 'alt') {
                                    svg.setAttribute(attr.name, attr.value);
                                }
                            }

                            // Create the <path> element
                            var pathDS = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            pathDS.setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z');

                            // Append the <path> to the <svg>
                            svg.appendChild(pathDS);

                            // Clone event listeners (if any)
                            if (img.onclick) {
                                svg.onclick = img.onclick;
                            }

                            // Replace the img with the svg
                            img.parentNode.replaceChild(svg, img);
                        }

                        document.getElementById('label-left-normal').textContent = 'What are your licence details?';

                        var licenceImage = document.getElementById('licenceImage');
                        var licenceNoLabel = document.getElementById('licenceNoLabel');

                        if (licenceImage && licenceNoLabel) {
                            licenceNoLabel.parentNode.insertBefore(licenceImage, licenceNoLabel);
                        }

                        var imgDL = document.getElementById('licence_img');
                        if (imgDL) {
                            imgDL.src = 'https://www.qbe.com/media/qbe/apac/australia/images/cro-tests/driver-licence-image-2x.png';
                        }



                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/confirmation') {

                        newDiv.textContent = 'Thank you for renewing your CTP Green Slip with QBE.'; // Add content to the new div

                        var formLeft = document.getElementById('form-left');
                        var formRowsC = document.getElementsByClassName('form-row');

                        if (formLeft && formRowsC.length >= 4) {
                            var targetRow = formRowsC[3]; // 4th occurrence (zero-based index)
                            targetRow.parentNode.insertBefore(formLeft, targetRow);
                        }
                        createDivAroundElement('#licenceNo1', 'NSW Drivers Licence Number');

                        var linkConfi = document.querySelector('#form-indent > div:nth-child(9) > p > a');
                        if (linkConfi) {
                            linkConfi.setAttribute('target', '_blank');
                        }

                        // var radioDiv = document.getElementById('radio-hide');

                        //if (radioDiv) {
                        // Replace double non-breaking spaces with nothing
                        // radioDiv.innerHTML = radioDiv.innerHTML.replace(/(\u00A0\s*){2}/g, '');
                        //  }

                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/email-receipt') {
                        // Change the h2 with id "header2"
                        var header2er = document.getElementById('header2');
                        if (header2er) {
                            header2er.textContent = 'Email receipt';
                        }
                        newDiv.textContent = 'We can send your Green Slip receipt to your email address.'; // Add content to the new div
                        document.querySelector('.form-label-mandatory').innerHTML = 'All fields are mandatory.';

                        createDivAroundElement('#emailAddress', 'Your email address');
                        createDivAroundElement('#name', 'Your name');

                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/email-receipt-confirmation') {
                        // Change the h2 with id "header2"
                        var header2erc = document.getElementById('header2');
                        if (header2erc) {
                            header2erc.textContent = 'The receipt has been sent';
                        }
                        newDiv.textContent = 'Your receipt has been sent to your email address.'; // Add content to the new div


                    } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/renewal/details-email-confirm') {
                        // Change the h2 with id "header2"
                        var header2es = document.getElementById('header2');
                        if (header2es) {
                            header2es.textContent = 'Your email has been sent';
                        }
                        newDiv.textContent = 'Your email has been sent to QBE.'; // Add content to the new div






                        (function () {
                            var croDiv = document.querySelector('.cro160-1');
                            var formDiv = document.querySelector('.form-layout');


                            if (croDiv && formDiv) {
                                var next = croDiv.nextSibling;
                                while (next && next !== formDiv) {
                                    var temp = next.nextSibling;
                                    if (next.nodeType === 1 || next.nodeType === 3) { // Remove elements (1) and text nodes (3)
                                        next.parentNode.removeChild(next);
                                    }
                                    next = temp;
                                }
                            }
                        })();




                        // Select all <p> elements with the class "form-label-instruct"
                        var paragraphs = document.getElementsByClassName('form-label-instruct');

                        // Check if there are at least two paragraphs
                        if (paragraphs.length >= 2) {
                            // Get the second paragraph (index 1)
                            var secondParagraph = paragraphs[1];

                            // Get the text content of the second paragraph
                            var textContent = secondParagraph.textContent || secondParagraph.textContent;

                            // Find the index of the first period to identify the end of the first sentence
                            var firstSentenceEndIndex = textContent.indexOf('.') + 1;

                            // Extract the first sentence
                            var firstSentence = textContent.substring(0, firstSentenceEndIndex).trim();

                            // Extract the remaining content after the first sentence
                            var remainingContent = textContent.substring(firstSentenceEndIndex).trim();

                            // Create a new div with the class "cro160-26"
                            var newDiv26 = document.createElement('div');
                            newDiv26.className = 'cro160-26';
                            newDiv26.textContent = firstSentence; // Use textContent for IE8 compatibility

                            // Clear the content of the second paragraph
                            secondParagraph.textContent = ''; // Use textContent for IE8 compatibility

                            // Append the new div and the remaining content to the second paragraph
                            secondParagraph.appendChild(newDiv26);
                            secondParagraph.appendChild(document.createTextNode(' ' + remainingContent));
                        }





                    }
                    // Add the new div after the <h2>
                    wrapperDiv.appendChild(newDiv);
                }
            }

        } else if (virtualPagePath === '/au/green-slip-insurance/nsw/ctp/generic/help') {



            // Remove the first 8 consecutive divs after #popup-page
            var popupPage = document.getElementById('popup-page');
            if (popupPage) {
                var divCount = 0;
                var nextDiv = popupPage.nextSibling;

                while (nextDiv && divCount < 8) {
                    var divToRemove = nextDiv;
                    nextDiv = nextDiv.nextSibling;
                    if (divToRemove.nodeType === 1 && divToRemove.tagName === 'DIV') {
                        divToRemove.parentNode.removeChild(divToRemove);
                        divCount++;
                    }
                }
            }

            // Process help-link elements
            document.querySelectorAll('a[id="help-link"]').forEach(function (link) {
                // Check if the link is already inside a wrapper div
                if (link.parentNode.classList.contains('help-wrapper')) {
                    return; // Skip if already wrapped
                }

                var nextSibling = link.nextSibling;

                // Remove <br> and text before the div
                while (nextSibling && (nextSibling.nodeType !== 1 || nextSibling.tagName !== 'DIV')) {
                    var removeNode = nextSibling;
                    nextSibling = nextSibling.nextSibling;
                    removeNode.parentNode.removeChild(removeNode); // Remove unwanted text and <br>
                }

                if (nextSibling && nextSibling.classList.contains('helpPageDiv')) {
                    var wrapper = document.createElement('div');
                    wrapper.className = 'help-wrapper'; // Add class to prevent duplicate wrapping
                    wrapper.style.border = '1px solid #E1E4E8';
                    wrapper.style.padding = '25px 24px';
                    wrapper.style.margin = '10px 0';

                    link.parentNode.insertBefore(wrapper, link);
                    wrapper.appendChild(link);
                    wrapper.appendChild(nextSibling);

                    // Remove up to two <br> elements after the wrapper
                    var brCount = 0;
                    var nextBr = wrapper.nextSibling;
                    while (nextBr && brCount < 2) {
                        var brToRemove = nextBr;
                        nextBr = nextBr.nextSibling;
                        if (brToRemove.tagName === 'BR') {
                            brToRemove.parentNode.removeChild(brToRemove);
                            brCount++;
                        }
                    }
                }
            });

            updateHelpLinksAndRemoveBold();



            var divsHelp = document.getElementsByClassName('help-wrapper');
            var hideIndices = [0, 10]; // Indices to hide (0-based)

            // Hide specified divs
            for (var iHelp = 0; iHelp < hideIndices.length; iHelp++) {
                divsHelp[hideIndices[iHelp]].style.display = 'none';
            }















            // Find all h3 tags with id 'header3'
            var h3Tags = document.querySelectorAll('h3#header3');

            // Check if there are at least two h3 tags with id 'header3'
            if (h3Tags.length >= 2) {
                // Target the first  occurrences (index 0)
                var firstH3 = h3Tags[0];


                // Style the first h3 tag
                firstH3.style.setProperty('color', '#191919', 'important');
                firstH3.style.setProperty('font-size', '40px', 'important');


                // Check if the div already exists before adding it
                if (!document.querySelector('.cro160-17')) {
                    // Create a new div element with a more unique name
                    var infoDiv = document.createElement('div');
                    infoDiv.className = 'cro160-17';  // Add class to the new div
                    infoDiv.textContent = 'Information about Compulsory Third Party (CTP Insurance) and the different questions we ask.';  // Set the text content

                    // Insert the new div immediately after the first h3 tag
                    firstH3.parentNode.insertBefore(infoDiv, firstH3.nextSibling);
                }
            }




            // Flag to prevent the code from running twice
            var alreadyExecuted = false;

            // Find the div with id 'form-indent'
            var formIndentDiv = document.getElementById('form-indent');

            if (formIndentDiv && !alreadyExecuted) {
                // Set the flag to true to prevent future executions
                alreadyExecuted = true;

                // Step 1: Get the first <br> element
                var firstBr = formIndentDiv.querySelector('br');
                if (firstBr) {
                    // Create a range to select the content between the first <br> and the second <br>
                    var range = document.createRange();
                    range.setStartAfter(firstBr);

                    // Find the second <br> element
                    var secondBr = firstBr.nextSibling;
                    while (secondBr && !(secondBr.nodeType === Node.ELEMENT_NODE && secondBr.tagName === 'BR')) {
                        secondBr = secondBr.nextSibling;
                    }

                    if (secondBr) {
                        range.setEndBefore(secondBr);
                        // Remove the content within the range
                        range.deleteContents();

                        // Remove the second <br> element
                        secondBr.parentNode.removeChild(secondBr);
                    }
                }
            }


            // Find the first div with class 'help-wrapper'
            var firstHelpWrapper = document.querySelector('.help-wrapper');

            // Check if the new div with class 'cro160-51' already exists
            var existingDiv = document.querySelector('.cro160-51');

            if (firstHelpWrapper && !existingDiv) {
                // Create a new div element
                var newDivH4 = document.createElement('div');
                newDivH4.className = 'cro160-51';
                newDivH4.textContent = 'Help with the questions asked';

                // Insert the new div before the first help-wrapper div
                firstHelpWrapper.parentNode.insertBefore(newDivH4, firstHelpWrapper);
            }

            var boldElements = document.querySelectorAll('.helpDiv b');

            Array.prototype.forEach.call(boldElements, function (b, index) {
                // Skip the first occurrence (index 0)
                if (index === 0) return;

                var p = document.createElement('p');
                p.className = 'cro160-313';
                p.innerHTML = b.innerHTML;
                b.parentNode.replaceChild(p, b);
            });

            (function () {
                var paragraphs = document.querySelectorAll('p.cro160-313');
                var indexesToHide = [2, 3, 15, 16, 19]; // Indexes of paragraphs to hide

                for (var i = 0; i < paragraphs.length; i++) {
                    if (indexesToHide.indexOf(i) !== -1) { // ES5-compatible array contains check
                        // Hide the paragraph
                        paragraphs[i].style.display = 'none';

                        // Get next siblings
                        var next = paragraphs[i].nextSibling;
                        var brCount = 0;

                        // Loop through next siblings until we find 2 BR tags or run out of siblings
                        while (next && brCount < 2) {
                            if (next.nodeType === 1 && next.tagName === 'BR') { // Element node and BR tag
                                next.style.display = 'none';
                                brCount++;
                            }
                            next = next.nextSibling;
                        }
                    }
                }
            })();



            insertQuoteButtons();

            // Get all help-wrapper divs
            var helpWrappers = document.querySelectorAll('div.help-wrapper');

            // Check if we have at least 9 help wrappers
            if (helpWrappers.length >= 9) {
                // Get the 5th and 9th elements (0-based index: 4 and 8)
                var fifthHelpWrapper = helpWrappers[4];
                var ninthHelpWrapper = helpWrappers[8];

                // Get the parent node (should be the same for both)
                var parentV = ninthHelpWrapper.parentNode;

                // Insert the 9th after the 5th
                parentV.insertBefore(ninthHelpWrapper, fifthHelpWrapper.nextSibling);
            }


            // Get the first element with class 'helpDiv'
            var firstHelpDiv = document.querySelector('.helpDiv');

            // Check if the element exists
            if (firstHelpDiv) {
                // Set the new HTML content
                firstHelpDiv.innerHTML =
                    '<h3 style="color: #191919 !important; font-size: 24px !important; padding-bottom: 24px;">Purchase your Green Slip faster</h3>' +
                    '<p>To purchase a Green Slip faster, provide vehicle information (plate number, VIN or Chassis number) and vehicle operator identification (NSW Driver or Rider licence, TfNSW Customer Number or NSW Photo Card Number). These will enable us to retrieve your registration details from Transport for NSW (TfNSW), and provide you with a quote with the right premium.</p>' +
                    '<p> If you do not have the requested identification, we will still be able to provide a quote but you <b><u>will not be able to purchase a policy</u></b>.</p>' +
                    '<p>Please visit <a href="https://www.qbe.com/au" target="_blank">qbe.com/au</a> for more details.</p>';
            }



        } else {


            // This is the JS for the contact us page
            var formIndent = document.getElementById('form-indent');
            if (!formIndent) return;

            // Check if we already wrapped sections (prevents duplication)
            if (document.querySelector('.cro160-49')) return;

            var elementsCU = Array.prototype.slice.call(formIndent.children);
            var wrapperDivCU, newSection, z;

            for (z = 0; z < elementsCU.length; z++) {
                if (elementsCU[z].tagName === 'H3') {
                    // Create a new wrapper div
                    wrapperDivCU = document.createElement('div');
                    wrapperDivCU.className = 'cro160-49';

                    // Move the H3 into the wrapper
                    wrapperDivCU.appendChild(elementsCU[z]);

                    // Move following P elements inside the wrapper
                    while (elementsCU[z + 1] && elementsCU[z + 1].tagName !== 'H3') {
                        wrapperDivCU.appendChild(elementsCU[z + 1]);
                        z++; // Move to next element
                    }

                    // Insert the wrapped section into the DOM
                    formIndent.insertBefore(wrapperDivCU, elementsCU[z + 1] || null);
                }
            }

            // Add the "Live Chat" section at the end
            newSection = document.createElement('div');
            newSection.className = 'cro160-49';

            var newH3 = document.createElement('h3');
            newH3.id = 'header3';
            newH3.textContent = 'Live chat (for renewals only)';

            var newP = document.createElement('p');
            newP.className = 'form-label-instruct';
            newP.innerHTML = 'Launch a live chat and select the "Enquiry about my NSW CTP renewal" option.<br>Our service representatives are available 9am to 5pm Monday to Friday.';

            newSection.appendChild(newH3);
            newSection.appendChild(newP);

            formIndent.appendChild(newSection);

            // Change the phone number to be a link
            var instructPara = document.querySelector('p.form-label-instruct');
            if (instructPara) {
                var strongTag = instructPara.querySelector('strong');
                if (strongTag) {
                    // Create the new <a> element
                    var phoneLink = document.createElement('a');
                    phoneLink.href = 'tel:1300096342';
                    phoneLink.textContent = '1300 096 342';

                    // Replace the <strong> tag with the new <a> element
                    strongTag.parentNode.replaceChild(phoneLink, strongTag);
                }
            }

            // Get all divs with class "cro160-49"
            var divs = document.querySelectorAll('div.cro160-49');

            // Loop through each div
            divs.forEach(function (div) {
                // Get all <br> tags inside the current div
                var brs = div.querySelectorAll('br');

                // Loop through each <br> tag and remove it
                brs.forEach(function (br) {
                    br.parentNode.removeChild(br);
                });
            });



            var header2CU = document.getElementById('header2');
            if (header2CU) {
                var newPara = document.createElement('p');
                newPara.className = 'cro160-19';
                newPara.textContent = 'Have questions? Check our help page or use one of the channels below to reach us.';

                // Insert the new paragraph right after <h2 id="header2">
                if (header2.nextSibling) {
                    header2.parentNode.insertBefore(newPara, header2.nextSibling);
                } else {
                    header2.parentNode.appendChild(newPara);
                }
            }



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