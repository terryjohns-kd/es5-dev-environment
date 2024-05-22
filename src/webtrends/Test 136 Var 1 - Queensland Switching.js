// Handler for when a user is qualified
WT.SPA.on('/au/qbe4qldctp/switch/qualified', function () {
    try {
        updateElementText('div.flex-container > div.flex-item-left > p:nth-child(4)', 'You’re almost at gift card happiness! Take 2 minutes to register your details by clicking "Switch Now" and choose QBE for a 12-month renewal period.');
        updateElementText('.qbe-title', 'Congratulations, you qualify for an eGift card.*');
        removeSpecificWord('h3.qbe-sub-heading', 'Prezzee ');
        hideElement('div.flex-container > div.flex-item-left > p:nth-child(2)');
    } catch (error) {
        logError(error);
    } finally {
        WT.trackGA.dlPush('Test 136', 'Variation 1');
    }
});

// Handler for when a user is not qualified - replacing h2 text, updating paragraph text, and changing anchor text
WT.SPA.on('/au/qbe4qldctp/switch/notqualfied', function () {
    try {
        replaceFirstH2Text('Thanks for using the Rewards calculator');
        updateElementText('div.flex-item-left > p', 'Although you haven\'t qualified for a gift card, you can still nominate QBE as your CTP provider by going to Queensland\'s Department of Transport & Main Roads (DTMR).');
        updateAnchorText('a.btn--primary', 'Go to DTMR');
    } catch (error) {
        logError(error);
    } finally {
        WT.trackGA.dlPush('Test 136', 'Variation 1');
    }
});

function updateElementText(selector, newText) {
    var element = document.querySelector(selector);
    if (element) {
        element.textContent = newText;
    }
}

function updateAnchorText(selector, newText) {
    var anchor = document.querySelector(selector);
    if (anchor) {
        anchor.textContent = newText;
    }
}

function removeSpecificWord(selector, word) {
    var element = document.querySelector(selector);
    if (element) {
        element.textContent = element.textContent.replace(word, '');
    }
}

function hideElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
        element.style.display = 'none';
    }
}

function replaceFirstH2Text(newText) {
    var firstH2 = document.querySelector('h2');
    if (firstH2) {
        firstH2.textContent = newText;
    } 
}

function logError(error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'optimize test 136 - variant 1',
        eventLabel: error.toString(),
        nonInteraction: true,
    });
}