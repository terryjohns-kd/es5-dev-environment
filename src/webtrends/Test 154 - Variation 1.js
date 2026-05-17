function handleMove(elementId, targetSelector) {
    var ele = document.getElementById(elementId);
    var target = document.querySelector(targetSelector);
    if (ele && target) {
        target.parentNode.insertBefore(ele, target.nextSibling);
    }
}

function insertImageAfterHeader(headerSelector, imgSrc) {
    var header = document.querySelector(headerSelector);
    var imageId = 'feefoReviewsImage';
    if (header && !document.getElementById(imageId)) {
        var img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'Feefo Reviews Score';
        img.id = imageId;
        header.parentNode.insertBefore(img, header.nextSibling);
    }
}

WT.SPA.on('bike/bike', function () {
    try {
        handleMove('dutyDisclosure', '#content > div > div > div.col.col--main > div > div:nth-child(2) > ng-form > qb-form-section > ng-include:nth-child(17)');
        insertImageAfterHeader('h1', 'https://www.qbe.com/au/-/media/79C97DC9570A4126B85B656A8DF913C5.webp');
        WT.trackGA.dlPush('Test 154', 'Variation 1');
    } catch (err) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'Webtrends Optimize Test 154',
            eventLabel: err,
            nonInteraction: true
        });
    }
});
