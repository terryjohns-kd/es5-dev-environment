WT.SPA.on('/au/portal/quote/vehicle.*#/payment/now', function () {
    // Initializes the dataLayer object if it does not already exist
    window.dataLayer = window.dataLayer || [];
    // This function retrieves a dataLayer value from a definded key, from the last object in the 'dataLayer' array that has this property
    function getDataLayerValue(dataLayer, key) {
        if (!dataLayer || !Array.isArray(dataLayer)) return null;
        // Start from the last element, assuming the most recent data is what you're interested in
        for (var i = dataLayer.length - 1; i >= 0; i--) {
            if (dataLayer[i] && dataLayer[i].data && Object.prototype.hasOwnProperty.call(dataLayer[i].data, key)) {
                return dataLayer[i].data[key]; // Return the value as soon as it's found
            }
        }
        return null; // Return null if the key wasn't found in any of the objects
    }


    function loadPaypal() {
        // Return early if SDK already loaded.
        if (window.paypal || window.qbeTrack.meta.ppLoaded) return false;
        // Creates a new script element with a source URL pointing to a PayPal SDK
        var exJs = document.createElement('script');
        exJs.setAttribute('type', 'text/javascript');
        exJs.setAttribute('src', 'https://www.paypal.com/sdk/js?client-id=AR-8qZMFeencUbtoske-A419tfsGMLUkN3IQGX-sR_Kf7s_1RY0IwYDWCte66Jz3jA4BP-Oy0S6HYlr9&currency=AUD&components=messages');
        // Gets the head element of the page and appends the newly created script element to it
        document.head.appendChild(exJs);
        window.qbeTrack.meta.ppLoaded = true;
    }
    setTimeout(function () {
        try {
            // Select the target element
            var targetSpan = document.querySelector('#root > div > div > div > div > div:nth-child(4) > div > div > label:nth-child(3) > span > p > b');


            // Calls the 'getPaymentFrequency' function with the 'window.dataLayer' object as the argument and assigns the result to the 'expPaymentFrequency' variable
            var expPaymentFrequency = getDataLayerValue(window.dataLayer, 'frequency');
            // Calls the 'getTotalAnnualPremium' function with the 'window.dataLayer' object as the argument and assigns the result to the 'expTotalAnnualPremium' variable
            var expTotalAnnualPremium = getDataLayerValue(window.dataLayer, 'totalAnnualPremium');
            // Run the code if the payment frequency is yearly
            if (expPaymentFrequency === 'annual_Ext' && expTotalAnnualPremium <= 2000) {

                if (targetSpan) {
                    // Create a new span element
                    var newSpan = document.createElement('span');

                    // Set the text of the new span
                    newSpan.innerText = 'Pay in full or Pay in 4 instalments';
                    newSpan.className = 'CRO80-3';
                    var classCheck2 = document.getElementsByClassName('CRO80-3').length > 0;
                    if (!classCheck2) {
                        // Insert the new span right after the target element
                        targetSpan.parentNode.insertBefore(newSpan, targetSpan.nextSibling);
                    }
                } else {
                    console.log('Element not found');
                }
                loadPaypal();
                //  var coverType = getDataLayerValue(window.dataLayer, 'coverType');
                var targetElement = document.querySelector('#root > div > div > div > div > div:nth-child(4) > div > div > label:nth-child(3)');
                var htmlToAppend = '<div class="CRO80-2"><div class="CRO80-1"><div data-pp-message data-pp-placement="product" data-pp-amount="' + expTotalAnnualPremium + '"></div></div></div>';
                var classCheck = document.getElementsByClassName('CRO80-1').length > 0;
                if (!classCheck && targetElement) {
                    targetElement.insertAdjacentHTML('afterend', htmlToAppend);
                }
            }
            WT.trackGA.dlPush('Test 126', 'Variation 1');
        } catch (error) {
            // Logs any errors that occur to the 'dataLayer' object
            window.dataLayer.push({
                event: 'standard',
                eventCategory: 'error',
                eventAction: 'webtrends optimize experiment 126 - omni',
                eventLabel: error,
                nonInteraction: true,
            });
        }
    }, 500); // 500 ms delay. Adjust this value as needed.
});