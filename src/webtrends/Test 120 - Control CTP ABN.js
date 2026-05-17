var firstBannerBadge = document.querySelector('.banner-badge');
var anonIdentifier = document.querySelector('h1').innerText;
var content = firstBannerBadge.textContent.trim();
var valuesToCheck = ['Usage PRIV', 'Usage PNSR', 'Usage PNIC'];
var doesNotEqualAny = true;
for (var i = 0; i < valuesToCheck.length; i++) {
    if (content === valuesToCheck[i]) {
        doesNotEqualAny = false;
        break;
    }
}
try {
    if (doesNotEqualAny && anonIdentifier !== 'Identification') {
        WT.trackGA.dlPush('Test 120a', 'Control');
    }

} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'Webtrends Optimize - Test 120a',
        eventLabel: error.toString(), // Ensure error is converted to a string if necessary
        nonInteraction: true,
    });
}