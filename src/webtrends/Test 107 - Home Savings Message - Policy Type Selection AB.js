WT.SPA.on('/au/portal/quote/home.*#/product-selection', function() {
    try {
        /* global dataLayer */
        // Find the last occurrence of "engagement_tracking" event in reverse order
        var lastEngagementTrackingEvent = null;
        for (var i = dataLayer.length - 1; i >= 0; i--) {
            if (dataLayer[i].event === 'engagement_tracking') {
                lastEngagementTrackingEvent = dataLayer[i];
                break; // Exit the loop after finding the last occurrence
            }
        }
        // Initialize value as null
        var value = null;
        if (!lastEngagementTrackingEvent || ['contents_only', 'building_only', 'building_and_contents'].indexOf(lastEngagementTrackingEvent.data.value) === -1) {
            // If "engagement_tracking" has no value or doesn't match specified values, look for "optimize.activate" with "coverType"
            for (var j = dataLayer.length - 1; j >= 0; j--) {
                if (dataLayer[j].event === 'optimize.activate' && dataLayer[j].data.coverType) {
                    lastEngagementTrackingEvent = dataLayer[j];
                    // Set value from the "optimize.activate" event
                    value = lastEngagementTrackingEvent.data.coverType;
                    break; // Exit the loop after finding the last occurrence with "coverType"
                }
            }
        } else {
            // Use the value from the last "engagement_tracking" event
            value = lastEngagementTrackingEvent.data.value;
        }
       
        if (value) {
            // Create and set the div based on the value
            var div = document.createElement('div');
            div.classList.add('cro107-1');
            div.innerHTML = '';
            // Set content based on the value using innerHTML
            switch (value) {
                case 'building_and_contents':
                    div.innerHTML = 'Receive a 20% discount<ul><li>10% discount for a new insurance policy</li><li>10% discount for combining building and contents cover</ul>';
                    break;
                case 'building_only':
                    div.innerHTML = 'Receive a 10% online discount for a new Building only insurance policy';
                    break;
                case 'contents_only':
                    div.innerHTML = 'Receive a 10% online discount for a new Contents only insurance policy';
                    break;
                default:
                    // Handle the default case if value doesn't match any of the specified cases
                    break;
            }
            var existingDiv = document.querySelector('.cro107-1');
            if (existingDiv) {
                existingDiv.parentNode.replaceChild(div, existingDiv);
            } else {
                var productSelection = document.querySelector('#ProductSelection');
                var firstChild = productSelection.querySelector('div:nth-child(1)');
                productSelection.insertBefore(div, firstChild.nextSibling);
            }
            // Check if there is a value for either of the scenarios and apply CSS
            if (value === 'building_and_contents' || value === 'building_only' || value === 'contents_only') {
                var thirdChild = document.querySelector('#ProductSelection > div:nth-child(3)');
                if (thirdChild) {
                    thirdChild.style.display = 'none';
                }
            }
        } else {
            console.log('No \'engagement_tracking\' or \'optimize.activate\' event found in the dataLayer with a valid value.');
        }
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'optimize test 107 - omni',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});