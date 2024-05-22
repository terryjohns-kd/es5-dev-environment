function modifyPage() {
    function changeText(selector, newText) {
        var element = document.querySelector(selector);
        if (element) {
            element.innerText = newText;
        } else {
            console.log('Element not found for selector: ' + selector);
        }
    }

    function addContentBeforeTarget(selector, newContent) {
        var targetElement = document.querySelector(selector);
        if (targetElement) {
            targetElement.insertAdjacentHTML('beforebegin', newContent);
        } else {
            console.log('Target element not found for selector: ' + selector);
        }
    }

    function changeLink(selector, newHref) {
        var element = document.querySelector(selector);
        if (element) {
            element.setAttribute('href', newHref);
            element.setAttribute('target', '_blank');
        } else {
            console.log('Element not found for selector: ' + selector);
        }
    }
    changeText('#actionbar > li:nth-child(2) > a > div:nth-child(2) > h4 > span.action-bar__text', 'QLD CTP');
    changeText('#main-container > main > section > div:nth-child(3) > div.c-columnContent__column > div:nth-child(3) > div.c-columnContent__text > div > p.qbe-sub-heading', 'Queensland CTP');
    changeText('#main-container > main > section > div:nth-child(3) > div.c-columnContent__column > div:nth-child(3) > div.c-columnContent__text > div > p:nth-child(2)', 'Switch your CTP to QBE and receive an eGift card of $25 or more.');
    var newContent1 = '<div class="c-columnContent__image image--landing-list"><img alt="Car insurance - Young man reflected in a car side mirror" class="img-responsive" disablewebedit="True" loading="lazy" src="/au/-/media/australia/images/car-insurance/motorsidemirror-1000x550.jpg?w=1333&amp;hash=A7CC91425B8AF2CE26773FEF96978106"></div>';
    addContentBeforeTarget('#main-container > main > section > div:nth-child(3) > div.c-columnContent__column > div:nth-child(1) > div.c-columnContent__text', newContent1);
    var newContent2 = '<div class="c-columnContent__image image--landing-list"><img alt="Home insurance banner - young family leaving their home" class="img-responsive" disablewebedit="True" loading="lazy" src="/au/-/media/australia/images/home-insurance/homeinsurance_1000x547.jpg?w=1000&amp;hash=698393D343685A78FDD026B5A566430D"></div>';
    addContentBeforeTarget('#main-container > main > section > div:nth-child(3) > div.c-columnContent__column > div:nth-child(2) > div.c-columnContent__text', newContent2);
    var newContent3 = '<div class="c-columnContent__image image--landing-list"><img alt="Number plate with QBE4CTP." class="img-responsive" disablewebedit="True" loading="lazy" src="/au/-/media/C3A84A280CD34FE6BA64B7152B60A176.webp"></div>';
    addContentBeforeTarget('#main-container > main > section > div:nth-child(3) > div.c-columnContent__column > div:nth-child(3) > div.c-columnContent__text', newContent3);
    var newContent4 = '<div class="c-columnContent__header "><h2>Find out more about our insurance products</h2></div><div class="c-columnContent__subHeader"></div>';

    addContentBeforeTarget('#main-container > main > section > div.c-columnContent.container.c-columnContent--landing-listing > div', newContent4);
    changeLink('#actionbar > li:nth-child(2) > a', 'https://www.qbe.com/au/qbe4qldctp');
    changeLink('#main-container > main > section > div:nth-child(3) > div.c-columnContent__column > div:nth-child(3) > div.c-columnContent__buttonContent > a', 'https://www.qbe.com/au/qbe4qldctp');
}
try {
    modifyPage();
} catch (error) {
    // Logs any errors that occur to the 'dataLayer' object
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'webtrends optimize test - 104',
        eventLabel: error,
        nonInteraction: true,
    });
}