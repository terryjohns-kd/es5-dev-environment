WT.SPA.on('/au/portal/quote/vehicle.*(#)?/tailorCover/comprehensive', function () {
    try {

        checkDOMAndUpdate();

        setTimeout(function () {
            checkDOMAndUpdate();
        }, 300);
        WT.trackGA.dlPush('Test 149', 'Variant 1');
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'optimize test 149 - omni - Variant 1',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});

function checkDOMAndUpdate() {
    if (!document.querySelector('.cro149-2')) {
        var tailorCovers = document.querySelectorAll('#tailorCover');
        var secondTailorCover = tailorCovers[3];

        if (!secondTailorCover) return;

        var targetElement = secondTailorCover.querySelector('div > div:nth-child(1) > div > div > div');
        if (!targetElement) return;

        var newDiv = document.createElement('div');
        newDiv.className = 'cro149-2';
        var newH2 = document.createElement('h2');
        newH2.className = 'cro149-4';
        newH2.textContent = 'MOST POPULAR';
        newDiv.appendChild(newH2);
        targetElement.parentNode.insertBefore(newDiv, targetElement);
    }
}
