WT.SPA.on('/au/portal/quote/vehicle.*#/confirm-vehicle', function() {
    // Function to check if dataLayer contains specific coverType
    function checkCoverType() {
        if (window.dataLayer && window.dataLayer.length) {
            for (var i = window.dataLayer.length - 1; i >= 0; i--) {
                var dataLayerItem = window.dataLayer[i];
                if (dataLayerItem.event === 'virtualPageView' && dataLayerItem.data && dataLayerItem.data.coverType === 'third_party') {
                    return true;
                }
            }
        }
        return false;
    }
// Function to get the latest vehicleYear from the last virtualPageView event
function getvehicleYear() {
    if (window.dataLayer && window.dataLayer.length) {
        for (var i = window.dataLayer.length - 1; i >= 0; i--) {
            var dataLayerItem = window.dataLayer[i];
            if (dataLayerItem.event === 'virtualPageView' && dataLayerItem.data && dataLayerItem.data.vehicleYear) {
                return parseInt(dataLayerItem.data.vehicleYear, 10);
            }
        }
    }
    return null;
}
function addCustomPanel(htmlContent) {
    if (document.getElementById('CustomPanel')) {
        return;
    }
    var panelVehicleInfo = document.getElementById('PanelVehicleInfo');
    if (!panelVehicleInfo) {
        console.log('PanelVehicleInfo not found');
        return;
    }
    var newDiv = document.createElement('div');
    newDiv.id = 'CustomPanel';
    newDiv.className = ' ';
    newDiv.innerHTML = htmlContent;
    panelVehicleInfo.parentNode.insertBefore(newDiv, panelVehicleInfo.nextSibling);
}

try {


// Exit early if dataLayer condition for coverType is met to prevent displaying any custom panels
if (checkCoverType()) {
    return; // Stop execution of the rest of the script
}

var vehicleYear = getvehicleYear();
if (vehicleYear !== null) {
    if (vehicleYear > 2022) {
        // HTML content for vehicleAge less than 2 years
        var htmlContentAgeTwo = '<div class="CRO119-1"><div class="CRO119-2"><h2 class="CRO119-3">DID YOU KNOW?</h2></div><p class="CRO119-4">With QBE comprehensive car insurance cover we offer new car replacement if yours is written-off within the first three years, it was insured from new with QBE Comprehensive Car Insurance and has driven less than 60,000km.</p></div>';
        addCustomPanel(htmlContentAgeTwo);
    } else if (vehicleYear < 2023) {
        // HTML content for vehicleAge greater than 2
        var htmlContentAgeAboveTwo = '<div class="CRO119-1"><div class="CRO119-2"><h2 class="CRO119-3">DID YOU KNOW?</h2></div><p class="CRO119-4">With QBE comprehensive car insurance cover we’ll arrange and pay the reasonable daily cost of a hire car if your car is damaged in a not at fault accident.</p></div>';
        addCustomPanel(htmlContentAgeAboveTwo);
    }
}
WT.trackGA.dlPush('Test 119', 'Variation 1');
} catch (error) {
window.dataLayer.push({
    event: 'standard',
    eventCategory: 'error',
    eventAction: 'optimize test 119 - omni - variant 1',
    eventLabel: error,
    nonInteraction: true,
});
}
});