WT.SPA.on('/au/portal/quote/home.*#/tailorCover', function() {
    // Initializes the dataLayer object if it does not already exist
    window.dataLayer = window.dataLayer || [];
    // This function retrieves a dataLayer value from a defined key, from the last object in the 'dataLayer' array that has this property
    function getDataLayerValue(dataLayer, key) {
        if (!dataLayer) return false;
        for (var i = dataLayer.length - 1; i >= 0; i--) {
            if (dataLayer[i] && dataLayer[i].data && dataLayer[i].data[key]) {
                var value = dataLayer[i].data[key];
                return value; // Return the value once found
            }
        }
    }
    try {
        var expCoverType = getDataLayerValue(window.dataLayer, 'coverType');
        // Check if the cover type is comprehensive and a div with class 'cro1' doesn't exist
        if (expCoverType === 'building_and_contents' && document.querySelectorAll('.cro1').length === 0) {
            // Select the first and second li elements
            var firstLi = document.querySelector('#tailorCover > div > div:nth-child(1) > div > div > ul > li:nth-child(1)');
            var secondLi = document.querySelector('#tailorCover > div > div:nth-child(1) > div > div > ul > li:nth-child(2)');
            // Set their display property to "none"
            if (firstLi) {
                firstLi.style.display = 'none';
            }
            if (secondLi) {
                secondLi.style.display = 'none';
            }
            // Create the new HTML element
            var newElement = document.createElement('div');
            newElement.className = 'cro1';
            newElement.innerHTML = '<div class="cro2"><p class="cro3">The following discounts have been applied:</p><p class="cro4"><ul class="cro5"><li>10% online discount for a new insurance policy</li><li>10% discount for combining building and contents cover</li></ul></p></div>';
            // Get the target DOM element
            var targetElement = document.querySelector('#PanelPremium > div > div:nth-child(2) >div >div > div:nth-child(2)');
            // Insert the new element before the target element
            targetElement.parentNode.insertBefore(newElement, targetElement);
        } else if (document.querySelectorAll('.cro1').length === 0) {
            // Code to execute when expCoverType is for a single product
            // Select the first  li element
            var sfirstLi = document.querySelector('#tailorCover > div > div:nth-child(1) > div > div > ul > li:nth-child(1)');
            // Set their display property to "none"
            if (sfirstLi) {
                sfirstLi.style.display = 'none';
            }
            // Create the new HTML element
            var snewElement = document.createElement('div');
            snewElement.className = 'cro1';
            snewElement.innerHTML = '<div class="cro2"><p class="cro3">The following discounts have been applied:</p><p class="cro5"><ul class="cro5"><li>10% online discount for a new insurance policy</li></ul></p></div>';
            // Get the target DOM element
            var stargetElement = document.querySelector('#PanelPremium > div > div:nth-child(2) >div >div > div:nth-child(2)');
            // Insert the new element before the target element
            stargetElement.parentNode.insertBefore(snewElement, stargetElement);
        }
    } catch (error) {
        // If an error occurs, log it to the 'dataLayer' object and set the 'nonInteraction' property to true
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'webtrends optimize optimal 105',
            eventLabel: error,
            nonInteraction: true
        });
    }
});
WT.SPA.on('/au/portal/quote/home.*#/summary', function() {
    // Initializes the dataLayer object if it does not already exist
    window.dataLayer = window.dataLayer || [];
    // This function retrieves a dataLayer value from a defined key, from the last object in the 'dataLayer' array that has this property
    function getDataLayerValue(dataLayer, key) {
        if (!dataLayer) return false;
        for (var i = dataLayer.length - 1; i >= 0; i--) {
            if (dataLayer[i] && dataLayer[i].data && dataLayer[i].data[key]) {
                var value = dataLayer[i].data[key];
                return value; // Return the value once found
            }
        }
    }
    try {
        var expCoverType = getDataLayerValue(window.dataLayer, 'coverType');
        // Check if the cover type is comprehensive and a div with class 'cro1' doesn't exist
        if (expCoverType === 'building_and_contents' && document.querySelectorAll('.cro11').length === 0) {
            // Create the new HTML element
            var newElement = document.createElement('div');
            newElement.className = 'cro11';
            newElement.innerHTML = '<div class="cro2"><p class="cro3">The following discounts have been applied:</p><p class="cro4"><ul class="cro5"><li>10% online discount for a new insurance policy</li><li>10% discount for combining building and contents cover</li></ul></p></div>';
            // Get the target DOM element
            var targetElement = document.querySelector('#HomeQuoteSummaryPanelList > div > fieldset > div > div:nth-child(6)');
            // Insert the new element before the target element
            targetElement.parentNode.insertBefore(newElement, targetElement);
        } else if (document.querySelectorAll('.cro11').length === 0) {
            // Code to execute when expCoverType is for a single product
            // Create the new HTML element
            var snewElement = document.createElement('div');
            snewElement.className = 'cro11';
            snewElement.innerHTML = '<div class="cro2"><p class="cro3">The following discounts have been applied:</p><p class="cro5"><ul class="cro5"><li>10% online discount for a new insurance policy</li></ul></p></div>';
            // Get the target DOM element
            var stargetElement = document.querySelector('#HomeQuoteSummaryPanelList > div > fieldset > div > div:nth-child(6)');
            // Insert the new element before the target element
            stargetElement.parentNode.insertBefore(snewElement, stargetElement);
        }
    } catch (error) {
        // If an error occurs, log it to the 'dataLayer' object and set the 'nonInteraction' property to true
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'webtrends optimize optimal 105',
            eventLabel: error,
            nonInteraction: true
        });
    }
});