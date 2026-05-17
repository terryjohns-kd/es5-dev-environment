function wrapTextWithDiv(containerSelector, items) {
    var containers = document.querySelectorAll(containerSelector);

    for (var i = 0; i < containers.length; i++) {
        var container = containers[i];

        for (var j = 0; j < items.length; j++) {
            var item = items[j];

            var childNodes = container.childNodes;
            for (var k = 0; k < childNodes.length; k++) {
                var node = childNodes[k];
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === item.text) {
                    var newDiv = document.createElement('div');
                    newDiv.innerHTML = item.text + '<span style="font-size: smaller; display: block;">' + item.extraContent + '</span>';

                    container.replaceChild(newDiv, node);
                    break;
                }
            }
        }
    }
}
try {


    var items = [
        { text: 'Emerge', extraContent: 'Designed with first homeowners in mind' },
        { text: 'Elevate', extraContent: 'Spacious living for forward thinkers' },
        { text: 'Elite', extraContent: 'Get a tailored experience' },
        { text: 'Masterpiece', extraContent: 'A showcase for cutting-edge design' }
    ];

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                wrapTextWithDiv('.nav-list-link-text', items);
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'Convert - Simonds Test 1',
        eventLabel: error,
        nonInteraction: true,
    });
}