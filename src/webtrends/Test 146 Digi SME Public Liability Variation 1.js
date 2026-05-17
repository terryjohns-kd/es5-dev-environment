function changeInnerText(selector, newText) {
    var element = document.querySelector(selector);
    if (element) {
        element.innerText = newText;
    }
}

function changeImageSrc(selector, newSrc) {
    var element = document.querySelector(selector);
    if (element) {
        element.src = newSrc;
    }
}
try {

    var bannerAlignment = document.querySelector('.c-banner__alignment');
    var newHtml = '<div class="c-banner__callout-box">' +
        '<div class="description">Public liability insurance included</div>' +
        '<hr class="key-line">' +
        '<hr class="divider">' +
        '</div>';
    if (bannerAlignment) {
        bannerAlignment.insertAdjacentHTML('afterbegin', newHtml);
    }

    changeInnerText('#main-container > main > section > div.c-panel.container > div.c-panel__wrapper > div.c-panel__carousel.full-width.slick-initialized.slick-slider > div > div > div:nth-child(3) > div > div > div > div.item__text > h3',
        'Public liability insurance');

    changeInnerText('#slick-slide12 > div > div > div > div.item__text > h3',
        'Public liability insurance');

    changeInnerText('#main-container > main > section > div.c-panel.container > div.c-panel__wrapper > div.c-panel__carousel.full-width.slick-initialized.slick-slider > div > div > div:nth-child(3) > div > div > div > div.item__text > div',
        'Public liability insurance is automatically included with our Business Liability cover. Choose between $5m, $10m or $20m limit for your cover.');

    changeInnerText('#main-container > main > section > div:nth-child(6) > div > div > p:nth-child(5)',
        'Public liability insurance, included under our Business Liability cover includes third-party personal injury or property damage caused in connection with your business. Choose between  $5 million, $10 million or $20 million.');

    changeImageSrc('#main-container > main > section > div.c-panel.container > div.c-panel__wrapper > div.c-panel__carousel.slick-initialized.slick-slider.full-width > div > div > div:nth-child(3) > div > div > div > div.item__image.js-image.item__image--small > img',
        '/au/-/media/australia/images/car-insurance/star.png?h=60&iar=0&w=64&hash=7DBC241E81104FE620F62C415FE7A49E');

    changeImageSrc('#main-container > main > section > div.c-panel.container > div.c-panel__wrapper > div.c-panel__carousel.slick-initialized.slick-slider.slick-dotted.full-width > div > div > div:nth-child(3) > div > div > div > div.item__image.js-image > img',
        '/au/-/media/australia/images/car-insurance/star.png?h=60&iar=0&w=64&hash=7DBC241E81104FE620F62C415FE7A49E');

    var parentDiv = document.querySelector('div.c-panel__carousel.slick-initialized.slick-slider.full-width > div > div');
    var firstChild = parentDiv.children[0];
    var thirdChild = parentDiv.children[2];
    firstChild.setAttribute('data-slick-index', '2');
    thirdChild.setAttribute('data-slick-index', '1');
    firstChild.classList.remove('slick-active');
    thirdChild.classList.add('slick-active');
    parentDiv.insertBefore(thirdChild, firstChild);

} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'Webtrends Optimize Test 146',
        eventLabel: error,
        nonInteraction: true,
    });
}

